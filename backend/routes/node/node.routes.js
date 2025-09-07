const express = require("express");

const nodeRoutes = express.Router();

// Routes
nodeRoutes.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Node Route",
  });
});

// Protected Routes

module.exports = nodeRoutes;
