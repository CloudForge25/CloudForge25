const express = require("express");
const lxcRoutes = express.Router();
const proxmox = require("../../utils/proxmoxClient");

// Routes
lxcRoutes.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Linux Container Route",
  });
});

// Protected Routes

module.exports = lxcRoutes;
