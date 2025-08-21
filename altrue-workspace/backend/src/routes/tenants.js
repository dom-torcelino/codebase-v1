const express = require('express');
const router = express.Router();
const tenantController = require('../controllers/tenantController');
const { validateTenant } = require('../middlewares/validate');
const { authMiddleware, roleMiddleware } = require('../middlewares/authMiddleware');

// Create a new tenant
router.post('/', authMiddleware, roleMiddleware(['superadmin']), validateTenant, tenantController.createTenant);

// Get all tenants
router.get('/', authMiddleware, roleMiddleware(['superadmin', 'tenantAdmin']), tenantController.getAllTenants);

// Get a specific tenant by ID
router.get('/:id', authMiddleware, roleMiddleware(['superadmin', 'tenantAdmin']), tenantController.getTenantById);

// Update a tenant by ID
router.put('/:id', authMiddleware, roleMiddleware(['superadmin', 'tenantAdmin']), validateTenant, tenantController.updateTenant);

// Delete a tenant by ID
router.delete('/:id', authMiddleware, roleMiddleware(['superadmin']), tenantController.deleteTenant);

module.exports = router;