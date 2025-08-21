const mongoose = require('mongoose');

const auditSchema = new mongoose.Schema({
    action: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    details: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
});

const Audit = mongoose.model('Audit', auditSchema);

module.exports = Audit;