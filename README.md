# Learn Data Analytics

An interactive web application designed to teach data analytics from scratch. Built with Next.js, TypeScript, and Tailwind CSS.

## Overview

Learn Data Analytics is a comprehensive educational platform that helps users master data analytics through:

- **Interactive Lessons**: Structured learning path covering fundamentals to advanced topics
- **Hands-on Tools**: Interactive tools for data exploration, visualization, and analysis
- **Real-World Projects**: Practice with real datasets and practical scenarios
- **Progressive Learning**: Beginner-friendly content that scales to advanced techniques

## Features

- Modern, responsive UI with dark mode support
- Comprehensive navigation with footer
- Structured lesson curriculum covering:
  - Introduction to Data Analytics
  - Data types and collection methods
  - Data cleaning and preparation
  - Descriptive statistics
  - Data visualization techniques
  - Exploratory data analysis
  - Advanced analytics concepts
- Interactive tools for practice:
  - Data table explorer with sorting and filtering
  - Chart builder for visualizations
  - Statistics calculator
  - Data cleaner
- Real-world projects with complete implementations:
  - Sales Data Analysis (Beginner)
  - Customer Segmentation (Intermediate)
  - Website Traffic Analysis (Intermediate)
  - Financial Performance Dashboard (Advanced)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Code Quality**: ESLint + Prettier
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd learn-data-analytics
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Project Structure

```
learn-data-analytics/
├── src/
│   ├── app/
│   │   ├── lessons/         # Lesson pages (7 lessons)
│   │   ├── tools/           # Interactive tool pages
│   │   │   ├── data-explorer/
│   │   │   ├── chart-builder/
│   │   │   ├── statistics/
│   │   │   └── data-cleaner/
│   │   ├── projects/        # Project pages (4 projects)
│   │   │   ├── 1/          # Sales Data Analysis
│   │   │   ├── 2/          # Customer Segmentation
│   │   │   ├── 3/          # Website Traffic Analysis
│   │   │   └── 4/          # Financial Dashboard
│   │   ├── about/          # About page
│   │   ├── privacy/        # Privacy policy
│   │   ├── terms/          # Terms of service
│   │   ├── layout.tsx      # Root layout with navigation and footer
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Navigation.tsx           # Main navigation bar
│       ├── Footer.tsx              # Site footer
│       ├── DataTableExplorer.tsx   # Data explorer component
│       ├── BarChartBuilder.tsx     # Chart builder component
│       ├── StatisticsCalculator.tsx # Stats calculator component
│       └── DataCleaner.tsx         # Data cleaner component
├── public/                  # Static assets
├── .prettierrc              # Prettier configuration
├── .prettierignore          # Prettier ignore rules
├── eslint.config.mjs        # ESLint configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Future Enhancements

- Add user authentication and progress tracking
- Create downloadable datasets for projects
- Build interactive coding exercises with live code editors
- Add quiz assessments for each lesson
- Implement a community forum for discussions
- Add more advanced charting options (scatter plots, heatmaps, etc.)
- Create video tutorials for each lesson
- Add machine learning and predictive analytics modules
- Implement collaborative features for team learning

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
