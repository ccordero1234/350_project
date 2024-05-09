import { db, app } from "../../firebaseConfig.js";
import { getAuth } from "firebase/auth"
import { collection, getDoc, getDocs } from "firebase/firestore"
import { getCurrentDateRange, getCurrentDay, dayToNumber, convertToClockTime, getName } from "./functions"

let auth = getAuth(app); 
const today = new Date();
const startOfWeek = new Date(today);
const businessDoc = await findBusinessDoc()
sessionStorage.setItem('selectedBusinessDoc', businessDoc.id);
const appointmentRef = collection(businessDoc, "appointments");
const availablityContainer = document.getElementById('availableDays');
// Update the HTML content with the current date range
document.getElementById('date-range').textContent = getCurrentDateRange(startOfWeek);

async function findBusinessDoc() {
    const businessRef = collection(db, "businesses");
    const querySnapshot = await getDocs(businessRef);
    console.log(auth.currentUser.uid)
    const appointmentDoc = querySnapshot.docs.find((doc) => {
        return auth.currentUser.uid === doc.data().clientId;
    });

    if (appointmentDoc) {
        return appointmentDoc.ref;
    } else {
        return null;
    }
}

async function loadAppointments(day, reference) {
    if (!reference) {
        console.error("Reference is null");
        return;
    }

    const querySnapshot = await getDocs(reference);
    querySnapshot.docs.forEach(async (doc) => {
        if (day === doc.id) {
            const timeSlotsContainer = document.getElementsByClassName("schedule-container")[0];
            const appointmentData = doc.data();
            for (const field in appointmentData) {
                if (field !== 'timeslots') {
                    const id = appointmentData[field].customerID;
                    const timeSlotDiv = document.createElement('div');
                    timeSlotDiv.classList.add('time-slot');
                    const timeSpan = document.createElement('span');
                    timeSpan.classList.add('time');
                    timeSpan.innerHTML = convertToClockTime(field);
                    const nameSpan = document.createElement('span');
                    nameSpan.classList.add('name');
                    nameSpan.innerHTML = await getName(id, 'customer');
                    timeSlotDiv.appendChild(timeSpan);
                    timeSlotDiv.appendChild(nameSpan);
                    timeSlotsContainer.appendChild(timeSlotDiv);
                }
            }
        }
    })
}

const currentDay = getCurrentDay(today);
await loadAppointments(currentDay, appointmentRef);


getDoc(businessDoc)
    .then((doc) => {
        if (doc.exists) {
            const businessData = doc.data();
            // Now you can use businessData to display information about the business on the new page
            const businessName = businessData.name;
            const businessImageUrl = businessData.imageURL;

            const businessContainer = document.getElementById('businessContainer');
            const name = document.createElement('h2');
            const businessImageContainer = document.createElement('img');
            
            name.innerHTML = businessName;
            businessImageContainer.src = businessImageUrl;

            businessContainer.appendChild(name);
            businessContainer.appendChild(businessImageContainer);

            businessData.daysOpen.forEach(day => {
                // Create HTML elements for the days available
                const availablityOption = document.createElement('option');
                availablityOption.setAttribute('value', day);
                availablityOption.innerHTML = day;

                availablityContainer.appendChild(availablityOption)
            });

        } else {
            console.log('No such document!');
        }
    })
    .catch((error) => {
        console.error('Error getting document:', error);
    });

availablityContainer.addEventListener('change', async function () {
    // This function will be called whenever the value of the select element changes
    const daySelected = availablityContainer.value;
    const schedule = document.getElementById("today-schedule");
    schedule.innerHTML = daySelected + "'s Schedule"

    // load appointments for that day 
    const targetDate = new Date(startOfWeek); // Clone the startOfWeek date to avoid modifying it directly
    targetDate.setDate(startOfWeek.getDate() + dayToNumber(daySelected));

    const day = getCurrentDay(targetDate)

    await loadAppointments(day, appointmentRef);
});

// Add click event listener to select element
availablityContainer.addEventListener('click', function () {
    const timeSlots = document.querySelectorAll('.time-slot');
    // Loop through each time slot and remove it
    timeSlots.forEach(function (slot) {
        slot.remove();
    });
});