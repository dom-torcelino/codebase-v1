const express = require('express');
const { register, login, refreshToken, logout } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middlewares/validate');

const router = express.Router();

// Register route
router.post('/register', validateRegister, register);

// Login route
router.post('/login', validateLogin, login);

// Refresh token route
router.post('/refresh', refreshToken);

// Logout route
router.post('/logout', logout);

module.exports = router;