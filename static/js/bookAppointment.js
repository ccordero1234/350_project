import { db, app } from "../../firebaseConfig.js";
import { getAuth } from "firebase/auth"
import { collection, doc, getDoc, updateDoc, setDoc } from "firebase/firestore"
import { dayToNumber, redirectTo, getCurrentDateRange} from "./functions.js"

let auth = getAuth(app);
const docId = sessionStorage.getItem('selectedDocId');
const availablityContainer = document.getElementById('availableDays');
const timesContainer = document.getElementById('times');
const businessRef = doc(collection(db, 'businesses'), docId)
let timeSlots = document.querySelectorAll('.time-slot');
let businessData;
let startOfWeek = new Date(new Date());

getDoc(businessRef)
    .then((doc) => {
        if (doc.exists) {
            businessData = doc.data();
            // Now you can use businessData to display information about the business on the new page
            const businessName = businessData.name;
            const businessImageUrl = businessData.imageURL;

            const businessNameContainer = document.getElementById('businessName');
            const title = document.getElementById('title');
            const businessImageContainer = document.getElementById('businessImg');

            businessNameContainer.innerHTML = businessName;
            title.innerHTML = businessName;
            businessImageContainer.href = businessImageUrl;

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

// Update the HTML content with the current date range
document.getElementById('date-range').textContent = getCurrentDateRange(startOfWeek);
const availablityForm = document.getElementById('availablityForm');

availablityForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById("times").style.display = "grid";

    let daySelected = availablityContainer.value;
    const targetDate = new Date(startOfWeek); // Clone the startOfWeek date to avoid modifying it directly
    targetDate.setDate(startOfWeek.getDate() + dayToNumber(daySelected));

    const day = targetDate.getDate();
    const month = targetDate.toLocaleString('default', { month: 'long' });

    getDoc(doc(businessRef, 'appointments', `${month}-${day}`)).then((docSnapshot) => {
        let [hourString, minuteString] = businessData.open.split(":");
        const openTotalMinutes = parseInt(minuteString, 10) + parseInt(hourString, 10) * 60; // Parse minute string to integer
        [hourString, minuteString] = businessData.close.split(":");
        const closeTotalMinutes = parseInt(minuteString, 10) + parseInt(hourString, 10) * 60; // Parse minute string to integer
        const duration = parseInt(businessData.duration);

        if (!docSnapshot.exists()) {
            console.log("The doc does not exist");

            for (let i = openTotalMinutes; i <= closeTotalMinutes - duration; i += parseInt(businessData.duration)) {
                let currentHr = Math.floor(i / 60);
                let currentMin = i % 60;

                // Determine if it's AM or PM
                const period = currentHr < 12 ? "AM" : "PM";

                // Convert to 12-hour format
                const displayHour = currentHr % 12 === 0 ? 12 : currentHr % 12;

                // Add leading zeros for minutes and hours less than 10
                const currentHrStr = currentHr < 10 ? "0" + currentHr : currentHr;
                const currentMinStr = currentMin < 10 ? "0" + currentMin : currentMin;
                const displayHourStr = displayHour < 10 ? "0" + displayHour : displayHour;

                const timeDiv = document.createElement('div');
                timeDiv.classList.add('time-slot')
                timeDiv.setAttribute('value', currentHrStr + ":" + currentMinStr)
                timeDiv.innerHTML = displayHourStr + ":" + currentMinStr + " " + period;
                timesContainer.appendChild(timeDiv);
            }   
        } else {
            console.log("The doc exists");
            const timeslots = docSnapshot.data().timeslots || [];
            for (let i = openTotalMinutes; i <= closeTotalMinutes - duration; i += parseInt(businessData.duration)) {
                let currentHr = Math.floor(i / 60);
                let currentMin = i % 60;

                // Determine if it's AM or PM
                const period = currentHr < 12 ? "AM" : "PM";

                // Convert to 12-hour format
                const displayHour = currentHr % 12 === 0 ? 12 : currentHr % 12;

                // Add leading zeros for minutes and hours less than 10
                const currentHrStr = currentHr < 10 ? "0" + currentHr : currentHr;
                const currentMinStr = currentMin < 10 ? "0" + currentMin : currentMin;
                const displayHourStr = displayHour < 10 ? "0" + displayHour : displayHour;

                const timeSlot = currentHrStr + ":" + currentMinStr;

                // Check if the timeslot exists in the timeslots array
                if (!timeslots.includes(timeSlot)) {
                    const timeDiv = document.createElement('div');
                    timeDiv.classList.add('time-slot');
                    timeDiv.setAttribute('value', timeSlot);
                    timeDiv.innerHTML = displayHourStr + ":" + currentMinStr + " " + period;
                    timesContainer.appendChild(timeDiv);
                }
            }
        }
    })
});

// Add click event listener to select element
availablityContainer.addEventListener('click', function () {
    timeSlots = document.querySelectorAll('.time-slot');
    // Loop through each time slot and remove it
    timeSlots.forEach(function (slot) {
        slot.remove();
    });
});

// add appointment
timesContainer.addEventListener('click', async (event) => {
    const clickedTimeSlot = event.target.getAttribute('value');
    let daySelected = availablityContainer.value;
    const targetDate = new Date(startOfWeek); // Clone the startOfWeek date to avoid modifying it directly
    targetDate.setDate(startOfWeek.getDate() + dayToNumber(daySelected));

    const day = targetDate.getDate();
    const month = targetDate.toLocaleString('default', { month: 'long' });
    if (clickedTimeSlot) {
        const appointmentRef = doc(collection(businessRef, 'appointments'), `${month}-${day}`);

        try {
            const docSnapshot = await getDoc(appointmentRef);
            const data = {
                customerID: auth.currentUser.uid,
                approved: false
            }

            if (docSnapshot.exists()) {
                const timeslots = docSnapshot.data().timeslots || [];
                if (!timeslots.includes(clickedTimeSlot)) {
                    // Add the clicked time slot to the timeslots array
                    timeslots.push(clickedTimeSlot);
                    // Update the document in Firestore
                    await updateDoc(appointmentRef, { timeslots: timeslots, [clickedTimeSlot]: data });
                }
            } else {
                // If the document doesn't exist, create a new one with the clicked time slot
                await setDoc(appointmentRef, { timeslots: [clickedTimeSlot], [clickedTimeSlot]: data });
            }
            console.log('Time slot added successfully');
            redirectTo("CustomerMainPage.html", "templates");
            // Optionally, you can perform any UI updates here
        } catch (error) {
            console.error('Error adding time slot:', error);
        }
    }
});