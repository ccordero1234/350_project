import { db } from "../../firebaseConfig.js";
import { collection, getDocs } from "firebase/firestore"

export function redirectTo(page, route) {
    // Send a GET request to the router on the server
    fetch(route + "/" + page)
        .then(response => {
            // Check if the response status is OK (200)
            if (response.ok) {
                // Redirect to the page
                window.location.href = route + "/" + page;
            } else {
                // Handle errors if any
                try {
                    window.location.href = page;
                } catch {
                    console.error('Failed to fetch ', response.status);
                }
            }
        })
        .catch(error => {
            console.error('Error fetching ', error);
        });
}
// Function to get the current date range
export function getCurrentDateRange(startOfWeek) {
    const today = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()+1); // Get the start of the current week
    const startDate = startOfWeek.getDate();

    const endOfWeek = new Date(today);
    endOfWeek.setDate(endOfWeek.getDate() + (7 - endOfWeek.getDay())); // Get the end of the current week
    const endMonth = endOfWeek.toLocaleString('default', { month: 'long' });

    const startMonth = startOfWeek.toLocaleString('default', { month: 'long' });

    return `${startMonth} ${startDate}-${endMonth} ${endOfWeek.getDate()}`;
}

// Function to get the current day in the format MM-DD
export function getCurrentDay(now) {
    const month = now.toLocaleString('default', { month: 'long' });
    const day = now.getDate().toString();
    return `${month}-${day}`;
}

// days to number
export function dayToNumber(day) {
    const days = {
        'Monday': 0,
        'Tuesday': 1,
        'Wednesday': 2,
        'Thursday': 3,
        'Friday': 4,
        'Saturday': 5,
        'Sunday': 6
    };
    return days[day] !== undefined ? days[day] : null;
}

export function convertToClockTime(timeStr) {
    var timeParts = timeStr.split(':');
    var hour = parseInt(timeParts[0]);
    var minute = parseInt(timeParts[1]);

    if (hour === 0) {
        return `12:${minute.toString().padStart(2, '0')} AM`;
    } else if (hour < 12) {
        return `${hour}:${minute.toString().padStart(2, '0')} AM`;
    } else if (hour === 12) {
        return `${hour}:${minute.toString().padStart(2, '0')} PM`;
    } else {
        hour -= 12;
        return `${hour}:${minute.toString().padStart(2, '0')} PM`;
    }
}

export async function getName(customerID, user) {
    const ref = collection(db, user);
    const querySnapshot = await getDocs(ref);
    const doc = querySnapshot.docs.find(doc => doc.data().userID === customerID);
    if (doc) {
        return doc.data().name;
    } else {
        return null; // or handle the case when the customerID is not found
    }
}