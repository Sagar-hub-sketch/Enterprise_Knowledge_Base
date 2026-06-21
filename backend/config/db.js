const mongoose = require('mongoose');

// Function to establish a connection with MongoDB
const connectDB = async () => {
    try {
        // Connecting to the database using the connection string from .env file
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        // Exit process with failure code
        process.exit(1);
    }
};

module.exports = connectDB;