import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Learn Data Analytics
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Master data analytics from scratch with interactive lessons,
            real-world examples, and hands-on projects
          </p>
        </div>

        {/* Why Data Analytics Section */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 border-2 border-blue-100 dark:border-blue-900">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Why Become a Data Analyst?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                Data analysts are the bridge between raw data and business decisions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* What Data Analysts Do */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">👨‍💼</span>
                  What Data Analysts Do
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                    <span><strong>Collect & Clean Data:</strong> Gather data from databases, APIs, and spreadsheets, then prepare it for analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                    <span><strong>Analyze Trends:</strong> Identify patterns, anomalies, and insights using statistical methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                    <span><strong>Create Visualizations:</strong> Build dashboards and charts that tell compelling data stories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                    <span><strong>Drive Decisions:</strong> Present findings to stakeholders and recommend actionable strategies</span>
                  </li>
                </ul>
              </div>

              {/* Why They're Needed */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Why Every Business Needs Them
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                    <span><strong>Data-Driven Decisions:</strong> Companies with data analysts make smarter, faster business decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                    <span><strong>Cost Savings:</strong> Identify inefficiencies and optimize operations worth millions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                    <span><strong>Competitive Edge:</strong> Understand customers better than competitors through data insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                    <span><strong>Growth & Revenue:</strong> Uncover new opportunities and revenue streams hidden in data</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Career Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">2.7M+</div>
                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Job Openings Globally</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">$75K+</div>
                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Average Starting Salary</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">23%</div>
                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Projected Growth (2023-2033)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">#3</div>
                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Best Job in America 2024</div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 italic">
                "Data Analyst" ranked as one of the most in-demand tech jobs with excellent work-life balance and remote opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Featured: Guided Projects - BEST WAY TO LEARN */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 sm:p-8 rounded-lg shadow-lg text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 w-full">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🚀</div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Build Real Projects From Scratch!
                </h2>
                <p className="text-base sm:text-lg opacity-90 mb-4">
                  The BEST way to learn: Build complete analytics dashboards with step-by-step guidance.
                  We EXPLAIN each concept → SHOW you how → Then YOU build it!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/guided-projects"
                    className="bg-white text-purple-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors text-center"
                  >
                    Start Building Projects
                  </Link>
                  <Link
                    href="/learn-coding"
                    className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors text-center"
                  >
                    Quick Lessons
                  </Link>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 w-full md:w-auto">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              📚 Interactive Lessons
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              Learn the basics of data analysis, statistics, and data
              visualization through structured lessons
            </p>
            <Link
              href="/lessons"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
            >
              Start Learning →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              🛠️ Powerful Tools
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              Practice with interactive data visualization, analysis tools,
              and a full code playground
            </p>
            <Link
              href="/tools"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
            >
              Explore Tools →
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              🎯 Real Projects
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
              Apply your skills with real-world datasets and comprehensive
              analytics projects
            </p>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm sm:text-base"
            >
              View Projects →
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            What You'll Learn
          </h2>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
              <span>Data collection, cleaning, and preparation techniques</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
              <span>
                Statistical analysis and hypothesis testing fundamentals
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
              <span>
                Data visualization best practices and interactive dashboards
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
              <span>Exploratory data analysis (EDA) techniques</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2 flex-shrink-0">✓</span>
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
