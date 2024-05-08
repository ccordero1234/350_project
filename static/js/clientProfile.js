import { db } from "../../firebaseConfig.js";
import { collection, getDoc, doc } from "firebase/firestore"
import { convertToClockTime, getName } from "./functions"

const businessDocId = sessionStorage.getItem('selectedBusinessDoc');
const businessDoc = doc(collection(db, 'businesses'), businessDocId)
console.log(businessDoc)
getDoc(businessDoc).then(async (doc) => {
    if (doc.exists) {
        const businessData = doc.data();
        const name = document.getElementById('name');
        const businessName = document.getElementById('businessName');
        const businessImage = document.getElementById('businessImage');
        const businessOpen = document.getElementById('timeOpen');
        const businessAddress = document.getElementById('businessAddress');
        const businessClosed = document.getElementById('timeClosed');
        const businessDescription = document.getElementById('description');
        const daysOpenContainer = document.getElementById('daysOpen')
        name.innerHTML = await getName(businessData.clientId, 'client');
        businessName.innerHTML = businessData.name;
        businessImage.src = businessData.imageURL;
        businessClosed.innerHTML = convertToClockTime(businessData.close);
        businessOpen.innerHTML = convertToClockTime(businessData.open);
        businessAddress.innerHTML = businessData.address;
        businessDescription.innerHTML = businessData.description;
        businessData.daysOpen.forEach( day => {
            const dayElement = document.createElement('p');
            dayElement.innerHTML = day;
            daysOpenContainer.appendChild(dayElement);
        })
    }
})