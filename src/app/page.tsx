import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Learn Data Analytics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Master data analytics from scratch with interactive lessons,
            real-world examples, and hands-on projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Fundamentals
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Learn the basics of data analysis, statistics, and data
              visualization
            </p>
            <Link
              href="/lessons"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Start Learning →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Interactive Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Practice with interactive data visualization and analysis tools
            </p>
            <Link
              href="/tools"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Explore Tools →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              Real Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Apply your skills with real-world datasets and projects
            </p>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Projects →
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            What You'll Learn
          </h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Data collection, cleaning, and preparation techniques</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>
                Statistical analysis and hypothesis testing fundamentals
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>
                Data visualization best practices and interactive dashboards
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Exploratory data analysis (EDA) techniques</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>
                Tools and technologies: Excel, SQL, Python, and visualization
                libraries
              </span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
