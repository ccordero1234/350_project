const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/', express.static(path.join(__dirname, '..')));

router.get('/', (req, res) => {
    const indexPath = path.join(__dirname, '..', 'templates', 'index.html');
    res.sendFile(indexPath);
});

module.exports = router;
