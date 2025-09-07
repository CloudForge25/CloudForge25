const express = require("express");
const nodeRoutes = express.Router();
require("dotenv").config();
const proxmox = require("../../utils/proxmoxClient");

// Routes
// nodeRoutes.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Welcome to Node Route",
//   });
// });

// Get all nodes
nodeRoutes.get("/", async (req, res) => {
  try {
    const vm = await proxmox.nodes.$get();

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

// Get a specific node
// // all - not really useful
nodeRoutes.get("/:node", async (req, res) => {
  try {
    const vm = await proxmox.nodes[
      req.params.node
    ].capabilities.qemu.machines.$get();

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

// // Storage
nodeRoutes.get("/:node/storage", async (req, res) => {
  try {
    const vm = await proxmox.nodes[req.params.node].storage.$get();

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

// // Time
nodeRoutes.get("/:node/time", async (req, res) => {
  try {
    const vm = await proxmox.nodes[req.params.node].time.$get();

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

// // Version
nodeRoutes.get("/:node/version", async (req, res) => {
  try {
    const vm = await proxmox.nodes[req.params.node].version.$get();

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

module.exports = nodeRoutes;
