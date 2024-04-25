import { db } from "../../firebaseConfig.js";
import { collection, startAfter, limit, query, getDocs } from "firebase/firestore"

const businessesRef = collection(db, 'businesses');
const businessesContainer = document.getElementById('businesses-container');

/// Function to load more businesses and append them to the HTML page
function loadMoreBusinesses(num, lastVisible) {

    // Construct the query
    const q = query(businessesRef, startAfter(lastVisible), limit(num));

    try {
        const querySnapshot = getDocs(q);

        querySnapshot.docs.forEach((doc) => {
            const businessData = doc.data();
            const businessName = businessData.name;
            const businessDescription = businessData.description;
            const businessImageUrl = businessData.imageURL; // Assuming image URLs are stored in the 'imageUrls' field

            // Create HTML elements for the business
            const businessDiv = document.createElement('div');
            businessDiv.classList.add('business');

            const nameHeading = document.createElement('h2');
            nameHeading.textContent = businessName;

            const descriptionParagraph = document.createElement('p');
            descriptionParagraph.textContent = businessDescription;

            const imageElement = document.createElement('img');
            imageElement.src = businessImageUrl;
            imageElement.alt = businessName + ' Image';

            // Add click event listener to the image
            businessDiv.addEventListener('click', function () {
                const docId = doc.id;
                // Store docId in sessionStorage
                sessionStorage.setItem('selectedDocId', docId);
                // Redirect user to new page
                window.location.href = './bookAppointment.html';
            });

            businessDiv.appendChild(imageElement);

            // Append elements to the container
            businessDiv.appendChild(nameHeading);
            businessDiv.appendChild(descriptionParagraph);
            businessesContainer.appendChild(businessDiv);
        });
    } catch (error) {
        console.error('Error loading more businesses: ', error);
    }
}

// Initial loading of businesses
async function loadInitialBusinesses(num) {

    // Construct the query
    const q = query(businessesRef, limit(num));
    console.log(q)
    try {
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs;
    } catch (error) {
        console.error('Error loading initial businesses: ', error);
    }
}

// Load initial businesses when the page loads
window.onload = async function () {
    try {
        const initialBusinesses = await loadInitialBusinesses(5);

        // Populate HTML with initial data
        initialBusinesses.forEach((doc) => {
            // Populate HTML with initial data
            const businessData = doc.data();
            const businessName = businessData.name;
            const businessDescription = businessData.description;
            const businessImageUrl = businessData.imageURL; // Assuming image URLs are stored in the 'imageUrls' field

            // Create HTML elements for the business
            const businessDiv = document.createElement('div');
            businessDiv.classList.add('business');

            const nameHeading = document.createElement('h2');
            nameHeading.textContent = businessName;

            const descriptionParagraph = document.createElement('p');
            descriptionParagraph.textContent = businessDescription;

            // Create image element for each business image
            const imageElement = document.createElement('img');
            imageElement.src = businessImageUrl;
            imageElement.alt = businessName + ' Image';

            // Add click event listener to the image
            imageElement.addEventListener('click', function () {
                const docId = doc.id;
                // Store docId in sessionStorage
                sessionStorage.setItem('selectedDocId', docId);
                // Redirect user to new page
                window.location.href = './bookAppointment.html';
            });

            businessDiv.appendChild(imageElement);
            

            // Append elements to the container
            businessDiv.appendChild(nameHeading);
            businessDiv.appendChild(descriptionParagraph);
            businessesContainer.appendChild(businessDiv);
        });

        let querySnapshot = initialBusinesses; // To keep track of the last visible document

        // Track scroll position and load more businesses when the user scrolls close to the bottom
        window.addEventListener('scroll', async function () {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                // User has scrolled to the bottom, load more businesses
                const lastVisible = querySnapshot[querySnapshot.length - 1];
                await loadMoreBusinesses(2, lastVisible);
            }
        });
    } catch (error) {
        console.error('Error loading initial businesses: ', error);
    }
};
