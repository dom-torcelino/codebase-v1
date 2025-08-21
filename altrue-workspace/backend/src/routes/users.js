const express = require('express');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const { validateUser } = require('../middlewares/validate');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

// Get all users
router.get('/', authenticate, authorize('admin'), getUsers);

// Get user by ID
router.get('/:id', authenticate, authorize('admin'), getUserById);

// Create a new user
router.post('/', authenticate, authorize('admin'), validateUser, createUser);

// Update user by ID
router.put('/:id', authenticate, authorize('admin'), validateUser, updateUser);

// Delete user by ID
router.delete('/:id', authenticate, authorize('admin'), deleteUser);

module.exports = router;