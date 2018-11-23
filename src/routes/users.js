// Imported modules
const express = require('express');
const router = express.Router();

const { index, newUser, getUser, updateUser, deleteUser } = require('../controllers/users');

// Routes
router.get('/users', index);
router.post('/users', newUser);
router.get('/:users/:userId', getUser);
router.put('/:users/:userId', updateUser);
router.delete('/:users/:userId', deleteUser);

// Exported modules
module.exports = router;

