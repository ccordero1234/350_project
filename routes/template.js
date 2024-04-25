const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/signIn.html', (req, res) => {
    // Send the signIn.html file as a response
    res.sendFile(path.join(__dirname, '..', 'templates', 'signIn.html'));
});

router.get('/aboutUs.html', (req, res) => {
    // Send the signIn.html file as a response
    res.sendFile(path.join(__dirname, '..', 'templates', 'aboutUs.html'));
});

router.get('/index.html', (req, res) => {
    // Send the signIn.html file as a response
    res.sendFile(path.join(__dirname, '..', 'templates', 'index.html'));
});

module.exports = router;
