// src/app.js
const express = require("express");
const cors = require("cors");
// const routes = require("./routes"); // Import all routes

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors()); // Enable CORS

// Routes
// app.use("/api", routes); // Mount API routes
app.get('/', (req, res) => {
  res.send('Hello World');
})


module.exports = app; // Export app for testing and use in server.js
