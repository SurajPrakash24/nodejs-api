const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DATABASE;

async function connectToMongoDB() {
    try {
        const db = await mongoose.connect(DB);
        const conn = db.connection;
        console.log(`Connected to Database: ${conn.host}`);
    }
    catch (error) {
        console.error('Error connecting to Database:', error);
    }
}

module.exports = connectToMongoDB;