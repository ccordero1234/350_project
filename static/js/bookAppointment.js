import { db } from "../../firebaseConfig.js";
import { collection, doc, getDoc } from "firebase/firestore"

const docId = sessionStorage.getItem('selectedDocId');

getDoc(doc(collection(db, 'businesses'), docId))
    .then((doc) => {
        if (doc.exists) {
            const businessData = doc.data();
            // Now you can use businessData to display information about the business on the new page
            const businessName = businessData.name;
            const businessImageUrl = businessData.imageURL;

            const businessNameContainer = document.getElementById('businessName');
            const title = document.getElementById('title');
            const businessImageContainer = document.getElementById('businessImg');

            businessNameContainer.innerHTML = businessName;
            title.innerHTML = businessName;
            businessImageContainer.href = businessImageUrl;

        } else {
            console.log('No such document!');
        }
    })
    .catch((error) => {
        console.error('Error getting document:', error);
    });