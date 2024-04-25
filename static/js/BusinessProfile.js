import { app, db, storage } from "../../firebaseConfig.js";
import { getAuth } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"
import { redirectTo } from "./functions.js";

let auth = getAuth(app);
const businessCollection = collection(db, "businesses");

document.getElementById('businessForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    const fileInput = document.getElementById('image');
    const file = fileInput.files[0]; 

    const storageRef = ref(storage, `images/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    const daysOpen = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        daysOpen.push(checkbox.value);
    });

    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload progress: ${progress}%`);
        },
        (error) => {
            console.error('Error uploading file:', error);
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                    console.log('File available at', downloadURL);

                    const formData = {
                        clientId: auth.currentUser.uid,
                        name: document.getElementById('businessName').value,
                        address: document.getElementById('address').value,
                        description: document.getElementById('description').value,
                        duration: document.getElementById('appointmentDuration').value,
                        open: document.getElementById('timeOpen').value,
                        close: document.getElementById('timeClose').value,
                        daysOpen: daysOpen,
                        imageURL: downloadURL,
                        appointments: {}
                        // Add more fields as needed
                    };

                    // Store form data in Firebase database
                    addDoc(businessCollection, formData)
                        .then(docRef => {
                            console.log('Form data submitted successfully');
                            // Optionally, you can provide feedback to the user here

                            sessionStorage.setItem('selectedDocId', docRef.id);
                            
                            // Loads client dashboard page
                            redirectTo("ClientIndex.html", "templates");
                        })
                        .catch(error => {
                            console.error('Error submitting form data:', error);
                        });
                })
                .catch(error => {
                    console.error('Error getting download URL:', error);
                });
        });
});