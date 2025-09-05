const express = require("express");
require("express-async-errors");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors);

// DB connections

// Model initializtion

// Routes

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to CloudForge!",
  });
});

app.listen(process.env.PORT_NUMBER, () => {
  console.log("Server started at " + process.env.PORT_NUMBER);
});
