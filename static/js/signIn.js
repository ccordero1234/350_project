import { app, db } from "../../firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, query, where, getDocs} from "firebase/firestore";
import { redirectTo } from "./functions.js";

let auth = getAuth(app);

// Sign in users
const signInForm = document.getElementById('sign-in-form');
signInForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('sign-in-email').value;
    const password = document.getElementById('sign-in-password').value;
    console.log(email);
    console.log(password);
    // Sign up with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log('Signed in user:', user);
            // Create a Firestore query to filter documents by userId
            const userCollectionQuery = query(collection(db, 'users'), where('userId', '==', user.uid));
            // Execute the query and get the query snapshot
            getDocs(userCollectionQuery)
                .then((querySnapshot) => {
                    // Iterate through the documents in the query snapshot
                    querySnapshot.forEach((doc) => {
                        // Access the data of each user document
                        const userData = doc.data();
                        // Check the userType and redirect accordingly
                        if (userData.userType === "client") {
                            console.log("This user is a client.");
                            // Redirect to client main page
                            redirectTo("ClientIndex.html", "templates");
                        } else if (userData.userType === "customer") {
                            console.log("This user is a customer.");
                            // Redirect to customer main page
                            redirectTo("CustomerMainPage.html", "templates");
                        }
                        // Exit the loop if you've found the user you're looking for
                        return;
                    });
                    // If no document matches the query
                    if (querySnapshot.empty) {
                        console.log("No user found with the specified userId.");
                    }
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Sign in error:', errorCode, errorMessage);
            alert(errorMessage);
        });
});

// Sign up users
const signUpForm = document.getElementById('sign-up-form');
signUpForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    var title = event.submitter.value;
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
    const firstName = document.getElementById('sign-up-first-name').value;
    const lastName = document.getElementById('sign-up-last-name').value;
    console.log(email);
    console.log(password);
    console.log(firstName);
    console.log(lastName);

    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            try {
                let docRef = await addDoc(collection(db, "users"), {
                    userId: user.uid,
                    userType: title
                });
                console.log("Document written with ID: ", docRef.id);
                docRef = await addDoc(collection(db, title), {
                    name: firstName + " " + lastName,
                    email: email,
                    userID: user.uid
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            // Check the title and redirect accordingly
            if (title === "client") {
                console.log("This user is a client.");
                // Redirect to client main page
                redirectTo("ClientIndex.html", "templates");
            } else if (title === "customer") {
                console.log("This user is a customer.");
                // Redirect to customer main page
                redirectTo("CustomerMainPage.html", "templates");
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

});

// Functionality
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
    container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
    container.classList.remove('right-panel-active'));
