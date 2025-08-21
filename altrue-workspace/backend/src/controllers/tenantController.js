const Tenant = require('../models/Tenant');
const { validateTenant } = require('../utils/validators');

// Create a new tenant
exports.createTenant = async (req, res) => {
    try {
        const { error } = validateTenant(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const tenant = new Tenant(req.body);
        await tenant.save();
        res.status(201).send(tenant);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Get all tenants
exports.getTenants = async (req, res) => {
    try {
        const tenants = await Tenant.find();
        res.status(200).send(tenants);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Get a tenant by ID
exports.getTenantById = async (req, res) => {
    try {
        const tenant = await Tenant.findById(req.params.id);
        if (!tenant) return res.status(404).send('Tenant not found');
        res.status(200).send(tenant);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Update a tenant by ID
exports.updateTenant = async (req, res) => {
    try {
        const { error } = validateTenant(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const tenant = await Tenant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tenant) return res.status(404).send('Tenant not found');
        res.status(200).send(tenant);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Delete a tenant by ID
exports.deleteTenant = async (req, res) => {
    try {
        const tenant = await Tenant.findByIdAndDelete(req.params.id);
        if (!tenant) return res.status(404).send('Tenant not found');
        res.status(204).send();
    } catch (err) {
        res.status(500).send('Server error');
    }
};