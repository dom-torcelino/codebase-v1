const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tenant',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '30d' // Automatically delete the API key after 30 days
    }
});

const ApiKey = mongoose.model('ApiKey', apiKeySchema);

module.exports = ApiKey;