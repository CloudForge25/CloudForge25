require("express-async-errors");
const express = require("express");
const cors = require("cors");
const errorHandler = require("./handlers/errorHandler");
const proxmoxApi = require("proxmox-api").default;
require("dotenv").config();

// Disable SSL verification for self-signed certificates (if needed)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const proxmox = proxmoxApi({
  host: process.env.PVE_HOST,
  tokenID: process.env.PVE_TOKEN_ID,
  tokenSecret: process.env.PVE_TOKEN_SECRET,
  port: 8006,
});

const app = express();
app.use(
  cors({
    origin: [`http://localhost:${process.env.PORT_NUMBER}`],
  })
);

app.use(express.json());

// Routes Initialization

const vmRoutes = require("./routes/vm/vm.routes");
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

app.use("/vms", vmRoutes);
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
