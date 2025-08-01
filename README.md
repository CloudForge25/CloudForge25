# 🌥️ CloudForge25

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Contributors](https://img.shields.io/github/contributors/CloudForge25/CloudForge25.svg)](https://github.com/CloudForge25/CloudForge25/graphs/contributors)
[![Issues](https://img.shields.io/github/issues/CloudForge25/CloudForge25.svg)](https://github.com/CloudForge25/CloudForge25/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/CloudForge25/CloudForge25.svg)](https://github.com/CloudForge25/CloudForge25/pulls)

> We're building a cloud development platform that doesn't suck.

## 🚀 What We're Building

Tired of setting up dev environments? Sick of "works on my machine" issues? We get it. CloudForge25 is our attempt at solving these problems by putting everything in the cloud where it belongs.

## ✨ What's Coming

- 🔧 **Cloud IDE** - Code together in real-time, no setup required
- 🚀 **Easy Deployment** - Hit deploy and watch your app go live
- 📊 **Simple Analytics** - See how your app is doing without the headache
- 🔒 **Security Built-in** - We'll scan your code so you don't have to worry
- 🤝 **Team Features** - Share code, review together, build better
- 📱 **Mobile App** - Manage your projects from anywhere (eventually)

## 🎨 What's Already Built

We've got a pretty solid React frontend up and running! Here's what you can actually play with right now:

**The Dashboard** - It's got charts, metrics, and all that good stuff you'd expect from a cloud platform. We're using Recharts for the visualizations, and honestly, they look pretty clean.

**VM Management** - You can browse through virtual machines, see their status, and manage them (well, the UI for it anyway - backend coming soon!).

**Apps Section** - Deploy and manage applications through a nice interface. Again, it's mostly UI right now, but it gives you a good feel for where we're heading.

**Billing & Settings** - Because nobody likes surprises on their cloud bill. The billing overview shows cost breakdowns and usage metrics.

**Theme Support** - Light and dark modes because your eyes matter. We built it with Tailwind CSS, so it's all responsive and looks good on mobile too.

The whole thing is built with modern React (v19), Vite for super fast builds, and we're using Radix UI components for accessibility. It's fast, looks professional, and actually works!

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
