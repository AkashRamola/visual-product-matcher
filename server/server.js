const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import connectDB

dotenv.config();

const app = express();

// Connect to the database
connectDB(); // Call connectDB here

// Middleware, routes, etc.

const path = require('path');

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));

// Fallback to index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

