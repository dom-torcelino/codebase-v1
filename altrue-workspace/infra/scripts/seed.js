const mongoose = require('mongoose');
const User = require('../../backend/src/models/User');
const Tenant = require('../../backend/src/models/Tenant');
const Audit = require('../../backend/src/models/Audit');

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Clear existing data
        await User.deleteMany({});
        await Tenant.deleteMany({});
        await Audit.deleteMany({});

        // Seed Users
        const users = [
            { username: 'admin', password: 'password123', role: 'admin' },
            { username: 'user1', password: 'password123', role: 'user' },
        ];
        await User.insertMany(users);

        // Seed Tenants
        const tenants = [
            { name: 'Tenant One', contactEmail: 'contact@tenantone.com' },
            { name: 'Tenant Two', contactEmail: 'contact@tenanttwo.com' },
        ];
        await Tenant.insertMany(tenants);

        // Seed Audits
        const audits = [
            { action: 'CREATE', model: 'User', documentId: '1', timestamp: new Date() },
            { action: 'CREATE', model: 'Tenant', documentId: '1', timestamp: new Date() },
        ];
        await Audit.insertMany(audits);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();