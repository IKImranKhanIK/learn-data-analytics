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

        {/* Featured: Guided Projects - BEST WAY TO LEARN */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-lg shadow-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <div className="text-5xl mb-4">🚀</div>
                <h2 className="text-3xl font-bold mb-3">
                  Build Real Projects From Scratch!
                </h2>
                <p className="text-lg opacity-90 mb-4">
                  The BEST way to learn: Build complete analytics dashboards with step-by-step guidance.
                  We EXPLAIN each concept → SHOW you how → Then YOU build it!
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href="/guided-projects"
                    className="bg-white text-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block"
                  >
                    Start Building Projects
                  </Link>
                  <Link
                    href="/learn-coding"
                    className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors inline-block"
                  >
                    Quick Lessons
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-sm font-semibold mb-3">9 Complete Projects:</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                    <span>3 Beginner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-yellow-500 w-2 h-2 rounded-full"></span>
                    <span>3 Intermediate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-red-500 w-2 h-2 rounded-full"></span>
                    <span>3 Advanced</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/20">
                    <div className="font-semibold">Learn by building:</div>
                    <div>Sales Dashboards</div>
                    <div>Analytics Systems</div>
                    <div>Forecasting Tools</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              📚 Interactive Lessons
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Learn the basics of data analysis, statistics, and data
              visualization through structured lessons
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
              🛠️ Powerful Tools
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Practice with interactive data visualization, analysis tools,
              and a full code playground
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
              🎯 Real Projects
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Apply your skills with real-world datasets and comprehensive
              analytics projects
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
