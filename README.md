# CloudForge25

A cloud development platform for modern developers.

## Overview

CloudForge25 is a cloud-based development environment that eliminates setup headaches and "works on my machine" problems.

## Features

- Cloud IDE with real-time collaboration
- Easy deployment pipeline
- Built-in analytics
- Security scanning
- Team collaboration tools

## Current Status

The frontend is mostly complete:

- Dashboard with charts and metrics
- VM management interface
- Application deployment UI
- Billing overview
- Light/dark theme support
- Responsive design

Backend integration is next on the roadmap.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js 19.1.0
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 3.4.17
- **Routing**: React Router DOM 7.7.0
- **UI Components**: Radix UI (Dialog, Select, Tabs)
- **Icons**: Lucide React 0.525.0
- **Charts**: Recharts 3.1.0
- **State Management**: React Context API

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js / Fastify
- **Database**: PostgreSQL / MongoDB
- **Authentication**: JWT / OAuth2
- **API**: RESTful / GraphQL

### DevOps & Infrastructure
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **CI/CD**: GitHub Actions
- **Cloud Provider**: AWS / Azure / GCP
- **Monitoring**: Prometheus / Grafana

## 📁 Project Structure

```
CloudForge25/
├── frontend/                 # React frontend application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
├── backend/                  # Node.js backend API (Coming Soon)
│   ├── src/
│   ├── config/
│   ├── package.json
│   └── README.md
├── docs/                     # Project documentation (Coming Soon)
│   ├── api/
│   ├── deployment/
│   └── contributing.md
├── docker/                   # Docker configurations (Coming Soon)
├── .github/                  # GitHub workflows and templates (Coming Soon)
├── LICENSE
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git
- Docker (optional, for containerized development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CloudForge25/CloudForge25.git
   cd CloudForge25
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   ```
   http://localhost:5173
   ```
   
   *Note: Vite runs on port 5173 by default*

5. **Try it out** (Just frontend for now)
   
   Since we don't have a backend hooked up yet, just enter any email and password to get past the login screen. Then you can click around and see all the pages we've built. Don't forget to try the dark mode toggle - it's pretty satisfying!

## 🎯 Development Roadmap

### Phase 1: Foundation (Current)
- [x] Project initialization
- [x] Repository setup
- [x] Frontend framework setup (React + Vite)
- [x] Basic UI components and layout
- [x] Authentication system (UI)
- [x] Dashboard with data visualization
- [x] Multi-page application structure
- [x] Responsive design with Tailwind CSS
- [x] Theme system implementation
- [ ] Backend API integration
- [ ] Project documentation completion

### Phase 2: Core Features
- [ ] User authentication system
- [ ] Basic IDE interface
- [ ] File management system
- [ ] Real-time collaboration

### Phase 3: Advanced Features
- [ ] Deployment pipeline
- [ ] Analytics dashboard
- [ ] Security scanning
- [ ] Mobile application

### Phase 4: Production
- [ ] Performance optimization
- [ ] Scalability improvements
- [ ] Beta testing
- [ ] Public launch

## 👥 Team

Our passionate team of developers working together to bring CloudForge25 to life:

- **[Add Team Member Names]** - *Roles to be defined*
- **[MrRyt247]** - *Free Roam*

## 🤝 Want to Help?

We'd love your help! Here's how you can jump in:

### Ways to Contribute

1. **🐛 Found a Bug?** - Open an issue and tell us what broke
2. **💡 Got an Idea?** - Share it! We're always looking for cool features
3. **📝 Docs Need Work?** - Make them better (they probably do)
4. **💻 Want to Code?** - Pick an issue and send us a PR
5. **🎨 Design Skills?** - Help us make it look good

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📊 Project Status

🚧 **Status**: In Active Development

- **Frontend**: The React app is looking good! Dashboard works, all the main pages are there, charts are rendering, themes work, and it's responsive. Basically ready for the backend to plug into.
- **Backend**: This is our next big focus. Need to build out the API endpoints and get everything connected.
- **Documentation**: You're reading it! But we could always use more.
- **Testing**: Yeah... we should probably write some tests soon.
- **Deployment**: Once we get the backend sorted, we'll figure out hosting.

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors who help make this project better
- Inspired by modern cloud development platforms
- Built with ❤️ by the CloudForge25 team

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/CloudForge25/CloudForge25/issues)
- **Discussions**: [GitHub Discussions](https://github.com/CloudForge25/CloudForge25/discussions)
- **Email**: [cloudforge25@gmail.com](cloudforge25@gmail.com)

---

<div align="center">
  <sub>Built with 🛠️ by the CloudForge25 team</sub>
</div>
