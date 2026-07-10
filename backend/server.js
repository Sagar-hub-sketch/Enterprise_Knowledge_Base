const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables from the .env file
dotenv.config();

// Connect to the database
connectDB();

// Initialize the Express application
const app = express();

// Apply middlewares
// Enable CORS for frontend-backend communication
app.use(cors());
// Parse incoming JSON payloads
app.use(express.json());
// Parse incoming URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// Define a basic health-check route
app.get('/', (req, res) => {
    res.send('Knowledge Base API is running successfully!');
});

// Strictly fetch the port number ONLY from the .env file
const PORT = process.env.PORT;

// Connect Auth Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running securely on port ${PORT}`);
});