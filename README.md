# Learn Data Analytics 📊

An interactive, comprehensive web platform designed to teach data analytics from scratch. Built with Next.js, TypeScript, and Tailwind CSS - **created with Claude AI assistance**.

## 🚀 Live Demo

**[https://learn-data-analytics.vercel.app](https://learn-data-analytics.vercel.app)**

Experience the full platform with interactive lessons, guided projects, hands-on coding exercises, and powerful analytics tools!

## 📖 Overview

Learn Data Analytics is a **100% free and open-source** educational platform that provides a complete learning path for aspiring data analysts. Whether you're a complete beginner or looking to enhance your skills, this platform offers structured, hands-on learning with real-world applications.

### Why This Platform?

- **Learn by Doing**: Build real analytics dashboards and projects
- **No Installation Required**: Everything runs in your browser
- **Self-Paced**: Learn at your own speed, on your own schedule
- **Real Datasets**: Work with realistic data that mirrors actual business scenarios
- **Practical Focus**: Every lesson teaches skills you'll actually use in the field

## ✨ Key Features

### 🎓 Interactive Coding Lessons (10 Lessons)
Structured curriculum covering Python and SQL fundamentals:
- **Python Basics**: Variables, lists, data types
- **Control Flow**: Conditionals and loops
- **Functions**: Writing reusable code
- **SQL Fundamentals**: Database querying, filtering, sorting, and aggregations

### 🚀 Guided Projects (9 Projects)
Build complete analytics systems from scratch with **EXPLAIN → SHOW → PRACTICE → CHECK** methodology:

**Beginner Projects:**
1. Build Your First Sales Dashboard
2. Customer Data Analyzer
3. Database Query Builder

**Intermediate Projects:**
4. E-commerce Analytics System
5. Customer Segmentation Engine (RFM Analysis)
6. Time Series Forecasting Dashboard

**Advanced Projects:**
7. A/B Testing Analytics Platform
8. Predictive Analytics Engine (Churn & LTV)
9. Multi-Dataset Integration Project

### 🛠️ Interactive Tools (5 Tools)
Practice with built-in analytics tools:
- **Data Explorer**: Upload and explore CSV files with sorting/filtering
- **Chart Builder**: Create interactive visualizations
- **Statistics Calculator**: Compute mean, median, mode, and variance
- **Data Cleaner**: Handle missing values and duplicates
- **Code Playground**: Live Python/SQL coding environment

### 📚 Real-World Projects (4 Projects)
Apply your skills to complete business scenarios:
- Sales Data Analysis (Beginner)
- Customer Segmentation (Intermediate)
- Website Traffic Analysis (Intermediate)
- Financial Performance Dashboard (Advanced)

## 🎯 Learning Path

```
1. Start with Interactive Lessons (10 lessons)
   ↓
2. Practice with Interactive Tools (5 tools)
   ↓
3. Build Guided Projects (9 projects)
   ↓
4. Complete Real-World Projects (4 projects)
   ↓
5. Master Data Analytics! 🎓
```

## 💻 Tech Stack

### Frontend Framework
- **Next.js 16** with App Router
- **React 19** with Server Components
- **TypeScript** for type safety

### Styling & UI
- **Tailwind CSS v4** for responsive design
- **Custom Components** for interactive learning
- **Dark Mode** support throughout

### Code Editor
- **Monaco Editor** (VS Code's editor) for in-browser coding
- **Python & SQL** syntax highlighting
- **Live code execution** simulation

### Development Tools
- **ESLint** for code quality
- **Prettier** for code formatting
- **Turbopack** for fast builds

### Deployment
- **Vercel** for hosting and continuous deployment
- **Git/GitHub** for version control

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/IKImranKhanIK/learn-data-analytics.git
cd learn-data-analytics
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

## 📁 Project Structure

```
learn-data-analytics/
├── src/
│   ├── app/
│   │   ├── learn-coding/[id]/     # 10 Interactive coding lessons
│   │   ├── guided-projects/[id]/  # 9 Guided projects with step-by-step
│   │   ├── lessons/               # 6 Foundational lessons
│   │   ├── tools/                 # 5 Interactive analytics tools
│   │   │   ├── data-explorer/
│   │   │   ├── chart-builder/
│   │   │   ├── statistics/
│   │   │   ├── data-cleaner/
│   │   │   └── code-playground/
│   │   ├── projects/              # 4 Real-world projects
│   │   ├── about/                 # About page
│   │   ├── privacy/               # Privacy policy
│   │   ├── terms/                 # Terms of service
│   │   ├── layout.tsx             # Root layout with SEO
│   │   ├── page.tsx               # Homepage
│   │   └── globals.css            # Global styles
│   └── components/
│       ├── Navigation.tsx         # Responsive nav with mobile menu
│       ├── Footer.tsx             # Site footer
│       └── [tools]/               # Interactive tool components
├── public/                        # Static assets
├── .prettierrc                    # Prettier config
├── eslint.config.mjs              # ESLint config
├── tailwind.config.ts             # Tailwind config
├── tsconfig.json                  # TypeScript config
└── next.config.ts                 # Next.js config
```

## 🎨 Design Features

### Responsive Design
- **Mobile-first** approach with hamburger menu
- Breakpoints: Mobile (< 640px), Tablet (640-1024px), Desktop (> 1024px)
- Adaptive text sizes and layouts across all screen sizes

### User Experience
- **Sticky navigation** for easy access
- **Dark mode** support throughout
- **Loading states** for smooth transitions
- **Progress tracking** in lessons and projects
- **Hint system** for guided learning
- **Interactive code editors** with syntax highlighting

### Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color schemes

## 🌟 What Makes This Different

1. **No Fluff**: Every lesson teaches practical, job-relevant skills
2. **Build Real Things**: Complete projects you can add to your portfolio
3. **Explain → Show → Practice**: Proven learning methodology
4. **Immediate Feedback**: See your code run instantly
5. **Professional Quality**: Learn tools and techniques used by Fortune 500 companies

## 📊 Platform Statistics

- **10** Interactive Coding Lessons
- **9** Guided Projects
- **5** Interactive Tools
- **4** Real-World Projects
- **100%** Free & Open Source
- **0** Ads or Paywalls

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Areas for Contribution
- Adding new lessons or projects
- Improving existing content
- Bug fixes and performance improvements
- Documentation enhancements
- UI/UX improvements

## 🗺️ Roadmap

### Phase 1 (Completed) ✅
- [x] Core platform with Next.js 16
- [x] 10 Interactive coding lessons
- [x] 9 Guided projects
- [x] 5 Interactive tools
- [x] Mobile responsive design
- [x] Dark mode support

### Phase 2 (Planned)
- [ ] User authentication and progress tracking
- [ ] Quiz assessments for each lesson
- [ ] Downloadable datasets
- [ ] Certificate generation
- [ ] Community forum

### Phase 3 (Future)
- [ ] Video tutorials for each lesson
- [ ] Advanced ML and AI modules
- [ ] Collaborative learning features
- [ ] Mobile app (React Native)
- [ ] API for third-party integrations

## 👤 About the Creator

**Imran Khan** - Data analytics student passionate about making learning accessible and practical.

- 🌐 [Live Platform](https://learn-data-analytics.vercel.app)
- 💼 [LinkedIn](https://www.linkedin.com/in/imran-khan-728077130/)
- 💻 [GitHub](https://github.com/IKImranKhanIK)

### Built with Claude AI

This entire platform was built with assistance from **Claude AI** by Anthropic, demonstrating the power of AI-assisted development for creating educational resources.

## 📄 License

This project is open source and available under the **MIT License**.

```
MIT License

Copyright (c) 2024 Imran Khan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for seamless deployment
- **Tailwind CSS** for the utility-first CSS framework
- **Monaco Editor** for the VS Code-quality editor
- **Anthropic (Claude AI)** for development assistance
- **Open Source Community** for inspiration and tools

## 📞 Support

If you find this project helpful, please consider:
- ⭐ **Starring** the repository
- 🐛 **Reporting bugs** via GitHub Issues
- 💡 **Suggesting features** via GitHub Discussions
- 📣 **Sharing** with others who might benefit

---

**Made with ❤️ by Imran Khan | Built with Claude AI | Deployed on Vercel**

*Empowering the next generation of data analysts, one lesson at a time.*
