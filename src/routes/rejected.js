// Imported modules
const express = require('express');
const router = express.Router();

const { index, newRejected } = require('../controllers/rejected');

// Routes
router.get('/rejected/:userId', index);
router.post('/rejected/:userId', newRejected);

// Exported modules
module.exports = router;