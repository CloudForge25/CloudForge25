const express = require("express");
const clusterRoutes = express.Router();
const proxmox = require("../../utils/proxmoxClient");

// Routes
// clusterRoutes.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Welcome to Cluster Route",
//   });
// });

// Get all clusters
clusterRoutes.get("/", async (req, res) => {
  try {
    // const vm = await proxmox.cluster.status.$get();
    const vm = await proxmox.cluster.tasks.$get();

    res.json({
      success: true,
      data: vm,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get cluster tasks
clusterRoutes.get("/status", async (req, res) => {
  try {
    const vm = await proxmox.cluster.tasks.$get();

    res.json({
      success: true,
      data: vm,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Protected Routes

module.exports = clusterRoutes;
