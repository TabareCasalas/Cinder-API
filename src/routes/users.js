// Imported modules
const express = require('express');
const router = express.Router();

const { userIndex, newUser, getUser, updateUser, deleteUser } = require('../controllers/users');

// Routes
router.get('/', userIndex);
router.post('/', newUser);
router.get('/:userId', getUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

// Exported modules
module.exports = router;

