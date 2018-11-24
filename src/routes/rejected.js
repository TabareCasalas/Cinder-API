// Imported modules
const express = require('express');
const router = express.Router();

const { userRejected, newRejected } = require('../controllers/rejected');

// Routes
router.get('/:userId', userRejected);
router.post('/:userId', newRejected);


// Exported modules
module.exports = router;