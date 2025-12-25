import Link from "next/link";

const tools = [
  {
    id: 1,
    name: "Data Table Explorer",
    description: "Upload and explore datasets with sorting and filtering",
    icon: "📊",
  },
  {
    id: 2,
    name: "Chart Builder",
    description: "Create interactive charts and visualizations",
    icon: "📈",
  },
  {
    id: 3,
    name: "Statistics Calculator",
    description: "Calculate mean, median, standard deviation, and more",
    icon: "🧮",
  },
  {
    id: 4,
    name: "Data Cleaner",
    description: "Practice cleaning messy datasets",
    icon: "🧹",
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive Tools
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Practice your data analytics skills with interactive tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{tool.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {tool.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {tool.description}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors">
                Launch Tool
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
