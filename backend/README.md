# 🛠️ CloudForge25 Backend

> Backend API and services for the CloudForge25 cloud development platform

## 🚀 Overview

This directory contains the backend services for CloudForge25, including:

- 🌐 **RESTful API** - Core application programming interface
- 🔐 **Authentication Service** - User management and security
- 📁 **File Management** - Cloud file storage and operations
- 🛠️ **Project Management** - Development project handling
- 📊 **Analytics Service** - Usage tracking and insights

## 📚 Tech Stack

- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT + bcrypt
- **File Storage**: AWS S3 / Azure Blob
- **Testing**: Jest + Supertest
- **Documentation**: Swagger/OpenAPI

## 📁 Directory Structure

```
backend/
├── src/
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Express middleware
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── utils/             # Helper functions
│   └── app.js             # Express app setup
├── tests/                # Test files
├── docs/                 # API documentation
├── prisma/               # Database schema
├── package.json
├── .env.example
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- PostgreSQL
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Setup database
npx prisma migrate dev
npx prisma generate

# Start development server
npm run dev
```

## 🗺️ API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Projects
- `GET /api/projects` - List user projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project details
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Files
- `GET /api/files/:projectId` - List project files
- `POST /api/files/:projectId` - Upload file
- `GET /api/files/:projectId/:fileId` - Get file content
- `PUT /api/files/:projectId/:fileId` - Update file
- `DELETE /api/files/:projectId/:fileId` - Delete file

## 📊 Development Status

- [ ] Project setup and structure
- [ ] Database schema design
- [ ] Authentication system
- [ ] Project management API
- [ ] File management system
- [ ] Testing implementation
- [ ] Documentation
- [ ] Deployment configuration

## 🤝 Contributing

See the main [Contributing Guidelines](../README.md#contributing) for details on how to contribute to the backend.

---

🗺️ **Part of the CloudForge25 ecosystem**
