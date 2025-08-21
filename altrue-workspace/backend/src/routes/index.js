const express = require('express');
const router = express.Router();

// Import routes
const authRoutes = require('./auth');
const userRoutes = require('./users');
const tenantRoutes = require('./tenants');
const fileRoutes = require('./files');
const healthRoutes = require('./health');

// Use routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/tenants', tenantRoutes);
router.use('/files', fileRoutes);
router.use('/health', healthRoutes);

module.exports = router;