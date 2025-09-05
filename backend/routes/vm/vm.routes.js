const express = require("express");

const vmRoutes = express.Router();

// Routes
vmRoutes.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to VM Route",
  });  
});

// Protected Routes

module.exports = vmRoutes;
