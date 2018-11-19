// Imported modules
const express = require('express');
const router = express.Router();

const { index, newFacortite} = require('../controllers/favorite');

// Routes
router.get('/favorite/:userId', index);
router.post('/favorite/:userId', newFacortite);

// Exported modules
module.exports = router;