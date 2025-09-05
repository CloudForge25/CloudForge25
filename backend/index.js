require("express-async-errors");
const express = require("express");
const cors = require("cors");
const errorHandler = require("./handlers/errorHandler");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:process.env.PORT_NUMBER"],
  })
);

// DB connections

// Model initializtion

// Routes

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to CloudForge!",
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
