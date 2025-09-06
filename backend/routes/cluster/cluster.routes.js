const express = require("express");

const clusterRoutes = express.Router();

// Routes
clusterRoutes.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Cluster Route",
  });
});

// Protected Routes

module.exports = clusterRoutes;
