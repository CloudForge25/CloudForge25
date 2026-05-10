# CloudForge25 Backend

> Express.js API for managing Proxmox VE infrastructure

## Overview

REST API backend that interfaces with a Proxmox VE hypervisor to manage virtual machines, Linux containers, nodes, and cluster resources.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Proxmox Integration**: proxmox-api
- **Auth**: Proxmox API Token

## Directory Structure

```
backend/
├── handlers/
│   └── errorHandler.js     # Global error middleware
├── routes/
│   ├── cluster/
│   │   └── cluster.routes.js
│   ├── lxc/
│   │   └── lxc.routes.js
│   ├── node/
│   │   └── node.routes.js
│   └── vm/
│       └── vm.routes.js
├── utils/
│   └── proxmoxClient.js    # Proxmox API client setup
├── index.js
└── .env
```

## Getting Started

### Prerequisites
- Node.js
- A running Proxmox VE instance
- Proxmox API token

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file:

```env
PORT_NUMBER=5050

PVE_HOST=<proxmox-host-ip>
PVE_TOKEN_ID=<user@realm!tokenname>
PVE_TOKEN_SECRET=<token-secret>
```

### Run

```bash
npm start
```

## API Endpoints

### Health Check
| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/` | Server status and Proxmox connectivity check |

### Nodes — `/nodes`
| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/nodes` | List all nodes |
| `GET` | `/nodes/:node` | Get node QEMU machine capabilities |
| `GET` | `/nodes/:node/storage` | List node storage pools |
| `GET` | `/nodes/:node/iso` | List ISO images (local storage) |
| `GET` | `/nodes/:node/disks` | List disk volumes (local-lvm) |
| `GET` | `/nodes/:node/time` | Get node time |
| `GET` | `/nodes/:node/version` | Get node version |

### Virtual Machines — `/vms`
| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/vms/:node` | Get node PCI hardware info |
| `GET` | `/vms/:node/:vmid` | Get VM status |
| `POST` | `/vms/:node` | Create a new VM |
| `POST` | `/vms/:node/:vmid/start` | Start a VM |
| `POST` | `/vms/:node/:vmid/stop` | Force stop a VM |
| `POST` | `/vms/:node/:vmid/shutdown` | Graceful shutdown |
| `POST` | `/vms/:node/:vmid/reboot` | Reboot a VM |
| `DELETE` | `/vms/:node/:vmid` | Delete a VM (purges disks) |

#### Create VM — Request Body

```json
{
  "name": "my-vm",
  "storage": "local-lvm",
  "cpu": "host",
  "memory": 2048,
  "cores": 2,
  "ostype": "l26",
  "vram": 128,
  "vtype": "cirrus"
}
```

### Linux Containers — `/lxc`
| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/lxc` | LXC route (stub) |

### Cluster — `/cluster`
| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/cluster` | List cluster tasks |
| `GET` | `/cluster/status` | Get cluster task status |