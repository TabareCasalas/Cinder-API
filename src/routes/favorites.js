// Imported modules
const express = require('express');
const router = express.Router();

const { userFavorites, newFavorite } = require('../controllers/favorites');

// Routes
router.get('/:userId', userFavorites);
router.post('/:userId', newFavorite);


// Exported modules
module.exports = router;