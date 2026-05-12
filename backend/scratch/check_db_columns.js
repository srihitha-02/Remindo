const path = require('path');
const User = require(path.join(__dirname, '../models/User'));
const sequelize = require(path.join(__dirname, '../config/db'));

async function checkDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');

        // Force a sync to ensure all columns exist
        await sequelize.sync({ alter: true });
        console.log('Database synced and columns updated.');

        // Verify columns
        const attributes = User.rawAttributes;
        console.log('User Columns:', Object.keys(attributes));

    } catch (error) {
        console.error('Database Error:', error);
    } finally {
        await sequelize.close();
    }
}

checkDatabase();
