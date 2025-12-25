import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  skills: string[];
  buildWhat: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Build Your First Sales Dashboard",
    description: "Start from zero and build a complete sales analytics dashboard with totals, averages, and insights",
    difficulty: "Beginner",
    duration: "45-60 minutes",
    skills: ["Variables", "Lists", "Basic Math", "Formatting"],
    buildWhat: "A working sales dashboard that calculates totals, averages, and shows top performers",
  },
  {
    id: 2,
    title: "Customer Data Analyzer",
    description: "Build a system to analyze customer purchase patterns and segment customers by behavior",
    difficulty: "Beginner",
    duration: "60-90 minutes",
    skills: ["Lists", "Loops", "Conditionals", "Data Filtering"],
    buildWhat: "A customer segmentation tool that categorizes customers as High/Medium/Low value",
  },
  {
    id: 3,
    title: "Database Query Builder",
    description: "Learn SQL by building queries from scratch to analyze employee and sales data",
    difficulty: "Beginner",
    duration: "45-60 minutes",
    skills: ["SQL SELECT", "WHERE", "Basic Queries"],
    buildWhat: "Working SQL queries that answer business questions from a database",
  },
  {
    id: 4,
    title: "E-commerce Analytics System",
    description: "Build a complete analytics system for an online store with sales trends and product insights",
    difficulty: "Intermediate",
    duration: "90-120 minutes",
    skills: ["Functions", "Data Structures", "Advanced Loops", "Statistics"],
    buildWhat: "Full analytics system with daily/monthly trends, product rankings, and revenue forecasting",
  },
  {
    id: 5,
    title: "Customer Segmentation Engine",
    description: "Create an automated system that segments customers based on RFM (Recency, Frequency, Monetary) analysis",
    difficulty: "Intermediate",
    duration: "90-120 minutes",
    skills: ["Advanced Functions", "Dictionaries", "Multi-criteria Analysis"],
    buildWhat: "RFM segmentation system that automatically categorizes customers into strategic groups",
  },
  {
    id: 6,
    title: "Time Series Forecasting Dashboard",
    description: "Build an advanced forecasting system that analyzes trends over time and predicts future values",
    difficulty: "Advanced",
    duration: "90-120 minutes",
    skills: ["Time Series Analysis", "Moving Averages", "Trend Detection", "Linear Forecasting"],
    buildWhat: "Complete forecasting system with trend analysis, moving averages, and multi-period predictions",
  },
  {
    id: 7,
    title: "A/B Testing Statistical Analysis",
    description: "Master hypothesis testing and statistical significance to make data-driven decisions with confidence",
    difficulty: "Advanced",
    duration: "90-120 minutes",
    skills: ["Statistical Significance", "Hypothesis Testing", "Conversion Rate Analysis", "Business Impact"],
    buildWhat: "Statistical analysis system with significance testing, confidence levels, and revenue impact projections",
  },
  {
    id: 8,
    title: "Predictive Analytics with Linear Regression",
    description: "Build a machine learning-style prediction system using correlation analysis and linear regression",
    difficulty: "Advanced",
    duration: "90-120 minutes",
    skills: ["Correlation Analysis", "Linear Regression", "Prediction Models", "Accuracy Measurement"],
    buildWhat: "Predictive model that forecasts outcomes based on historical data with accuracy validation",
  },
  {
    id: 9,
    title: "Multi-Dataset Integration Dashboard",
    description: "Master advanced data integration by combining customer, product, and sales datasets into unified analytics",
    difficulty: "Advanced",
    duration: "120-150 minutes",
    skills: ["Data Joining", "Complex Aggregations", "Customer Segmentation", "Cross-Dataset Analytics"],
    buildWhat: "Enterprise analytics dashboard integrating multiple data sources with comprehensive business insights",
  },
];

export default function GuidedProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Guided Projects - Build Real Things
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Learn by building complete analytics projects from scratch with step-by-step guidance
          </p>

          {/* How It Works */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-l-4 border-green-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              📚 How These Projects Work
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">📖</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  1. We Explain
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  First, we explain the concept you need and WHY you need it for this part of the project.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">👀</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  2. We Show You
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Then we demonstrate exactly how to use it with a clear example.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-2">✍️</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  3. You Build It
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Now you write the code yourself with guidance. We check your work and explain.
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>By the end of each project:</strong> You'll have built something REAL that works,
                and you'll understand exactly how and why it works. No copy-pasting - you'll build it yourself!
              </p>
            </div>
          </div>
        </div>

        {/* Beginner Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-lg">
              Beginner
            </span>
            Start Here - Build Your First Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.difficulty === "Beginner")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>

        {/* Intermediate Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-lg">
              Intermediate
            </span>
            Level Up Your Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.difficulty === "Intermediate")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>

        {/* Advanced Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-4 py-2 rounded-full text-lg">
              Advanced
            </span>
            Master Real-World Scenarios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.difficulty === "Advanced")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/guided-projects/${project.id}`}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all p-6 border-2 border-transparent hover:border-blue-500"
    >
      <div className="flex items-start justify-between mb-3">
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${
            project.difficulty === "Beginner"
              ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
              : project.difficulty === "Intermediate"
              ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
              : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
          }`}
        >
          {project.difficulty}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          ⏱️ {project.duration}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {project.title}
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {project.description}
      </p>

      <div className="mb-4">
        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
          What You'll Build:
        </div>
        <div className="text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
          {project.buildWhat}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Skills You'll Learn:
        </div>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="text-blue-600 dark:text-blue-400 font-semibold text-sm flex items-center gap-2">
        Start Building →
      </div>
    </Link>
  );
}
