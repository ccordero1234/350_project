const homeButton = document.getElementById('homeButton');
const signInButton = document.getElementById('sign-in-btn');
import { redirectTo } from './functions.js';

homeButton.addEventListener('click', () =>
    redirectTo("index.html", "templates"));
signInButton.addEventListener('click', () =>
    redirectTo("signIn.html", "templates"));