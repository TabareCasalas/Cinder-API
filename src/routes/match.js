// Imported modules
const express = require('express');
const router = express.Router();

const { index } = require('../controllers/match');

// Routes
router.get('/match/:userId', index);

// Exported modules
module.exports = router;