const mongoose = require('mongoose');
const mongooseFieldEncryption = require('mongoose-field-encryption').fieldEncryption;

const tenantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    logo: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    appName: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    legal: {
        type: String,
        required: true,
    },
    notifications: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

tenantSchema.plugin(mongooseFieldEncryption, {
    fields: ['contactInfo', 'legal'],
    secret: process.env.ENCRYPTION_SECRET,
});

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;