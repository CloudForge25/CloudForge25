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

module.exports = proxmox;
