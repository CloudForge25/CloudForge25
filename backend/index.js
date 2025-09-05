require("express-async-errors");
const express = require("express");
const cors = require("cors");
const errorHandler = require("./handlers/errorHandler");
require("dotenv").config();
const proxmox = require("proxmox")(
  process.env.PVE_USER,
  process.env.PVE_PASSWORD,
  process.env.PVE_URL
);

const app = express();
app.use(
  cors({
    origin: [`http://localhost:${process.env.PORT_NUMBER}`],
  })
);

// DB connections

// Model initializtion

// VMs

proxmox.getClusterStatus(async (err, response) => {
  if (err) throw err;
  else {
    data = JSON.parse(response);
    console.log(data);
  }
});

proxmox.getNodes(async (err, response) => {
  if (err) throw err;
  else {
    data = JSON.parse(response);
    console.log(data);
  }
});

app.use(express.json());

// Routes

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to CloudForge!",
    info: info,
  });
});
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
