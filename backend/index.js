const express = require("express");
require("express-async-errors");
const cors = require("cors");
const errorHandler = require("./handlers/errorHandler");
require("dotenv").config();
const proxmox = require("./utils/proxmoxClient");

const app = express();
app.use(
  cors({
    origin: [`http://localhost:${process.env.PORT_NUMBER}`],
  })
);

app.use(express.json());

// Routes Initialization

const nodeRoutes = require("./routes/node/node.routes");
const vmRoutes = require("./routes/vm/vm.routes");
const lxcRoutes = require("./routes/lxc/lxc.routes");
const clusterRoutes = require("./routes/cluster/cluster.routes");

// DB connections

// Model initializtion

// VMs

// Routes

app.get("/", async (req, res) => {
  try {
    await proxmox.cluster.status.$get();
    res.status(200).json({
      message: "Welcome to CloudForge!",
      proxmoxConnected: true,
    });
  } catch (error) {
    res.status(200).json({
      message: "Welcome to CloudForge!",
      proxmoxConnected: false,
      error: error.message,
    });
  }
});

app.use("/nodes", nodeRoutes);
app.use("/vms", vmRoutes);
app.use("/lxc", lxcRoutes);
app.use("/cluster", clusterRoutes);

app.use("*", (req, res, next) => {
  res.status(404).json({
    status: "Failed!",
    message: "Page Not Found!",
  });
});

// End of Routes
app.use(errorHandler);

app.listen(process.env.PORT_NUMBER, () => {
  console.log("Server started at " + process.env.PORT_NUMBER);
});
