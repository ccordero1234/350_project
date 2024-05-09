const express = require('express');
const router = express.Router();
const path = require('path');

// Serve static files from the 'CSS' directory
router.use('/', express.static(path.join(__dirname, '..', 'static')));

module.exports = router;