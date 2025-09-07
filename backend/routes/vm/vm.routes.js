const express = require("express");
const vmRoutes = express.Router();
const proxmox = require("../../utils/proxmoxClient");

// Routes
vmRoutes.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to VM Route",
  });
});

// Protected Routes

// Get all VMs
vmRoutes.get("/:node", async (req, res) => {
  try {
    // const vm = await proxmox.nodes[req.params.node].qemu.$get();
    const vm = await proxmox.nodes[req.params.node].hardware.pci.$get();

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

// Get specific VM details
vmRoutes.get("/:node/:vmid", async (req, res) => {
  try {
    const vm = await proxmox.nodes[req.params.node].qemu[
      req.params.vmid
    ].status.current.$get();
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

// Create VM
vmRoutes.post("/:node", async (req, res) => {
  try {
    const id = await proxmox.cluster.nextid.$get();
    const {
      agent = "1,fstrim_cloned_disks=1",
      vmid = id,
      name,
      storage,
      memory = 2048,
      cores = 2,
      ostype, // l24, l26, w2k, w2k8, wxp, wvista, win7, ..., win11, solaris, other
      net0 = "virtio,bridge=vmbr0",
      ide0 = `local-lvm:${storage}`,
      ide2 = "local:cloudinit",
      // serial0 = "socket",
      vga = "type=cirrus,memory=128", // enum":["cirrus","qxl","qxl2","qxl3","qxl4","none","serial0","serial1","serial2","serial3","std","virtio","virtio-gl","vmware"],
      audio0 = "device=intel-hda,driver=none",
      scsihw = "virtio-scsi-single",
    } = req.body;

    if (!vmid || !name) {
      return res.status(400).json({
        success: false,
        error: "vmid and name are required",
      });
    }

    const result = await proxmox.nodes[req.params.node].qemu.$post({
      vmid,
      name,
      memory,
      cores,
      ostype,
      net0,
      ide0,
      ide2,
      // serial0,
      vga,
      audio0,
      scsihw,
      agent,
    });

    res.json({
      success: true,
      message: "VM creation initiated",
      data: result.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Start VM
vmRoutes.post("/:node/:vmid/start", async (req, res) => {
  try {
    const vm = await proxmox.nodes[req.params.node].qemu[
      req.params.vmid
    ].status.current.$get();

    if (vm.status === "stopped") {
      const result = await proxmox.nodes[req.params.node].qemu[
        req.params.vmid
      ].status.start.$post();
      console.log(result);
      res.json({
        success: true,
        message: "VM start initiated",
        data: result.data,
      });
    } else {
      res.status(400).json({
        success: false,
        error: "VM is already running",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Stop VM
vmRoutes.post("/:node/:vmid/stop", async (req, res) => {
  try {
    const vm = await proxmox.nodes[req.params.node].qemu[
      req.params.vmid
    ].status.current.$get();

    if (vm.status === "running") {
      const result = await proxmox.nodes[req.params.node].qemu[
        req.params.vmid
      ].status.stop.$post();
      res.json({
        success: true,
        message: "VM stop initiated",
        data: result.data,
      });
    } else {
      res.status(400).json({
        success: false,
        error: "VM is not running",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Shutdown VM
vmRoutes.post("/:node/:vmid/shutdown", async (req, res) => {
  try {
    const vm = await proxmox.nodes[req.params.node].qemu[
      req.params.vmid
    ].status.current.$get();

    if (vm.status === "running") {
      const result = await proxmox.nodes[req.params.node].qemu[
        req.params.vmid
      ].status.shutdown.$post();
      res.json({
        success: true,
        message: "VM shutdown initiated",
        data: result.data,
      });
    } else {
      res.status(400).json({
        success: false,
        error: "VM is not running",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Reboot VM
vmRoutes.post("/:node/:vmid/reboot", async (req, res) => {
  try {
    const vm = await proxmox.nodes[req.params.node].qemu[
      req.params.vmid
    ].status.current.$get();

    if (vm.status === "running") {
      const result = await proxmox.nodes[req.params.node].qemu[
        req.params.vmid
      ].status.reboot.$post();
      res.json({
        success: true,
        message: "VM reboot initiated",
        data: result.data,
      });
    } else {
      res.status(400).json({
        success: false,
        error: "VM is not running",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = vmRoutes;
