import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Sales Data Analysis",
    description:
      "Analyze retail sales data to identify trends and top-performing products",
    difficulty: "Beginner",
    dataset: "Retail Sales (2024)",
    href: "/projects/1",
  },
  {
    id: 2,
    title: "Customer Segmentation",
    description:
      "Group customers based on purchasing behavior and demographics",
    difficulty: "Intermediate",
    dataset: "Customer Database",
    href: "/projects/2",
  },
  {
    id: 3,
    title: "Website Traffic Analysis",
    description:
      "Explore web analytics data to understand user behavior and conversion rates",
    difficulty: "Intermediate",
    dataset: "Web Analytics",
    href: null,
  },
  {
    id: 4,
    title: "Financial Performance Dashboard",
    description:
      "Build a comprehensive dashboard to track key financial metrics",
    difficulty: "Advanced",
    dataset: "Financial Statements",
    href: null,
  },
];

export default function ProjectsPage() {
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
            Real-World Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Apply your skills with hands-on projects using real datasets
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    project.difficulty === "Beginner"
                      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                      : project.difficulty === "Intermediate"
                        ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                        : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                  }`}
                >
                  {project.difficulty}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Dataset: {project.dataset}
                </span>
                {project.href ? (
                  <Link
                    href={project.href}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Start Project
                  </Link>
                ) : (
                  <button
                    disabled
                    className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
