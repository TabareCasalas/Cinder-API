// Imported modules
const express = require('express');
const router = express.Router();

const { userMatches } = require('../controllers/match');

// Routes
router.get('/:userId', userMatches);



// Exported modules
module.exports = router;