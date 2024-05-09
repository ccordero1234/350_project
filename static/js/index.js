const signUpButton = document.getElementById('sign-up-btn');
const signInButton = document.getElementById('sign-in-btn');
const aboutUsButton = document.getElementById('aboutUs');
import { redirectTo } from './functions.js';

signUpButton.addEventListener('click', () =>
    redirectTo("signIn.html", "templates"));
signInButton.addEventListener('click', () =>
    redirectTo("signIn.html", "templates"));
aboutUsButton.addEventListener('click', () =>
    redirectTo("aboutUs.html", "templates"));