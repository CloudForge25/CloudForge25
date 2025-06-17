# 🎨 CloudForge25 Frontend

> Modern React-based frontend for the CloudForge25 cloud development platform

## 🚀 Overview

The CloudForge25 frontend provides a modern, responsive web interface for our cloud development platform, featuring:

- 💻 **Cloud IDE** - Browser-based development environment
- 📁 **Project Management** - Intuitive project organization
- 🤝 **Real-time Collaboration** - Multi-user development support
- 📊 **Analytics Dashboard** - Development insights and metrics
- 📱 **Responsive Design** - Works on all devices

## 📚 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand
- **Routing**: React Router v6
- **API Client**: TanStack Query + Axios
- **IDE**: Monaco Editor (VS Code editor)
- **Real-time**: Socket.io-client
- **Testing**: Vitest + React Testing Library

## 📁 Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/              # Base UI components
│   │   ├── layout/          # Layout components
│   │   ├── ide/             # IDE-specific components
│   │   └── common/          # Common components
│   ├── pages/              # Page components
│   │   ├── dashboard/       # Dashboard pages
│   │   ├── ide/             # IDE interface
│   │   ├── projects/        # Project management
│   │   └── auth/            # Authentication
│   ├── hooks/              # Custom React hooks
│   ├── store/              # Zustand stores
│   ├── lib/                # Utility libraries
│   ├── types/              # TypeScript definitions
│   ├── styles/             # Global styles
│   └── main.tsx            # Application entry point
├── tests/                # Test files
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# http://localhost:5173
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🎨 Features

### 💻 Cloud IDE
- **Monaco Editor** - VS Code-like editing experience
- **Syntax Highlighting** - Support for 50+ languages
- **IntelliSense** - Auto-completion and error detection
- **Multi-tab Support** - Work with multiple files
- **Theme Support** - Light and dark themes

### 📁 Project Management
- **Project Browser** - Navigate and organize projects
- **File Explorer** - Hierarchical file management
- **Search & Filter** - Quick file and content search
- **Version Control** - Git integration

### 🤝 Collaboration
- **Real-time Editing** - Live collaborative coding
- **User Presence** - See who's online
- **Comment System** - Code discussion and review
- **Share Projects** - Invite team members

### 📊 Analytics Dashboard
- **Project Statistics** - Code metrics and insights
- **Usage Analytics** - Development activity tracking
- **Performance Metrics** - Application performance data
- **Team Analytics** - Collaboration insights

## 🔧 Development

### Code Style
- **ESLint** - Code linting with custom rules
- **Prettier** - Code formatting
- **TypeScript** - Type safety
- **Conventional Commits** - Structured commit messages

### Component Development
- **Storybook** - Component development and testing
- **Design System** - Consistent UI components
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 compliance

### Testing
- **Unit Tests** - Component and utility testing
- **Integration Tests** - Feature testing
- **E2E Tests** - End-to-end user flows
- **Visual Regression** - UI consistency testing

## 🛠️ Environment Variables

```bash
# API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000

# Authentication
VITE_AUTH_PROVIDER=jwt

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_COLLABORATION=true
```

## 📊 Development Status

- [ ] Project setup and structure
- [ ] Component library and design system
- [ ] Authentication pages
- [ ] Dashboard interface
- [ ] IDE implementation
- [ ] Project management
- [ ] Real-time collaboration
- [ ] Analytics dashboard
- [ ] Testing implementation
- [ ] Responsive design
- [ ] Performance optimization

## 🚀 Deployment

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

### Deploy
- **Vercel** - Automatic deployments from main branch
- **Netlify** - Alternative deployment option
- **Docker** - Containerized deployment

## 🤝 Contributing

See the main [Contributing Guidelines](../README.md#contributing) for details on how to contribute to the frontend.

### Frontend-Specific Guidelines
1. Follow the established component structure
2. Write TypeScript with proper typing
3. Include tests for new components
4. Follow the design system
5. Ensure responsive design

---

🎨 **Part of the CloudForge25 ecosystem**
