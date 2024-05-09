import { db, app } from "../../firebaseConfig.js";
import { getAuth } from "firebase/auth"
import { collection, doc, getDoc} from "firebase/firestore"
import { getUserRef } from "./functions.js"
const today = new Date();
const userUID = sessionStorage.getItem('userId');

async function loadAppointments(date) {
    const endDate = new Date();
    endDate.setDate(date.getDate() + 6); // Adding 6 days to get a week's duration

    for (let currentDate = new Date(date); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const day = currentDate.getDate();
        const docDate = `${month}-${day}`;
        const customerID = await getUserRef(userUID, 'customer');
        const customerRef = doc(collection(db, 'customer'), customerID)
        const customerAppointment = doc(collection(customerRef, 'appointments'), docDate);

        getDoc(customerAppointment).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const data = docSnapshot.data(); // Access data directly from the document snapshot
                Object.entries(data).forEach(([fieldId, fieldValue]) => {
                    console.log(fieldId, '=>', fieldValue);
                    const businessRef = doc(collection(db, 'businesses'), fieldValue);
                    console.log(businessRef);
                    getDoc(businessRef).then((businessDoc) => {
                        if (businessDoc.exists()) {
                            const businessData = businessDoc.data();
                            // Now you can use businessData
                            // You can perform operations on each field here
                            const appointmentItem = document.createElement('div');
                            appointmentItem.classList.add('appointment-item');

                            const titleElement = document.createElement('h3');
                            titleElement.classList.add('appointment-title');
                            titleElement.textContent = businessData.name;

                            const detailsElement = document.createElement('p');
                            detailsElement.classList.add('appointment-details');
                            detailsElement.textContent = businessData.description;
                            const dateElement = document.createElement('p');
                            dateElement.classList.add('appointment-date');
                            dateElement.innerHTML = docDate;

                            const timeElement = document.createElement('p');
                            timeElement.classList.add('appointment-time');
                            timeElement.innerHTML = fieldId;

                            appointmentItem.appendChild(titleElement);
                            appointmentItem.appendChild(detailsElement);
                            appointmentItem.appendChild(dateElement);
                            appointmentItem.appendChild(timeElement);

                            const appointmentList = document.querySelector('.appointment-list');
                            appointmentList.appendChild(appointmentItem);
                        } else {
                            console.log('Business document does not exist!');
                        }
                    }).catch((error) => {
                        console.error('Error getting business document:', error);
                    });
                });
            } else {
                console.log('No such document!');
            }
        }).catch((error) => {
            console.error('Error getting document:', error);
        });
        console.log(docDate);
    }
}

window.onload = async function () {
    await loadAppointments(today);
}