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
- Structured lesson curriculum covering:
  - Data types and collection methods
  - Data cleaning and preparation
  - Descriptive statistics
  - Data visualization
  - Exploratory data analysis
- Interactive tools for practice:
  - Data table explorer
  - Chart builder
  - Statistics calculator
  - Data cleaner
- Real-world project scenarios with varying difficulty levels

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
│   └── app/
│       ├── lessons/         # Lessons page
│       ├── tools/           # Interactive tools page
│       ├── projects/        # Projects page
│       ├── layout.tsx       # Root layout
│       ├── page.tsx         # Home page
│       └── globals.css      # Global styles
├── public/                  # Static assets
├── .prettierrc              # Prettier configuration
├── .prettierignore          # Prettier ignore rules
├── eslint.config.mjs        # ESLint configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Future Enhancements

- Add interactive lesson content with code examples
- Implement data visualization tools with charting libraries
- Add user authentication and progress tracking
- Create downloadable datasets for projects
- Build interactive coding exercises
- Add quiz assessments for each lesson
- Implement a community forum for discussions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
