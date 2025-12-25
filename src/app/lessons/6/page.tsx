import Link from "next/link";

export default function DataVisualizationLesson() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/lessons"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Lessons
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
              Intermediate
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              40 min read
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Data Visualization Basics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learn to create effective charts and graphs that communicate insights clearly
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-lg shadow-md mb-8 border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              "A Picture is Worth a Thousand Numbers"
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Humans process visual information 60,000x faster than text. Good
              visualizations turn complex data into instant insights that anyone can
              understand.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Visualize Data?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">👁️</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      See Patterns Instantly
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Spot trends, outliers, and relationships at a glance
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Communicate Clearly
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Make complex findings accessible to non-technical audiences
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Explore Data
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Discover unexpected insights through visual exploration
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">✅</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Support Decisions
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Make data-driven arguments more persuasive
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Common Chart Types & When to Use Them
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  📊 Bar Charts
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Compare values across categories. Bars can be vertical or horizontal.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-3">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                    Best for:
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Comparing discrete categories (sales by product)</li>
                    <li>• Showing ranking (top 10 countries by population)</li>
                    <li>• Categorical data with 3-12 categories</li>
                  </ul>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded text-sm">
                  <strong>Example:</strong> Revenue by department, Student count by major
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6 bg-green-50 dark:bg-green-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  📈 Line Charts
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Show trends over time. Connecting points emphasizes continuity.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-3">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                    Best for:
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Time series data (stock prices, temperature)</li>
                    <li>• Showing trends and patterns over time</li>
                    <li>• Comparing multiple trends on same chart</li>
                  </ul>
                </div>
                <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded text-sm">
                  <strong>Example:</strong> Website traffic over months, Sales trends by quarter
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 dark:bg-purple-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🥧 Pie Charts
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Show parts of a whole. Each slice represents a percentage.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-3">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                    Best for:
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Showing proportions that sum to 100%</li>
                    <li>• 3-6 categories maximum</li>
                    <li>• When one category is dominant</li>
                  </ul>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/40 p-3 rounded text-sm">
                  <strong>⚠️ Warning:</strong> Often misused! Consider bar charts for
                  easier comparison. Hard to compare similar-sized slices.
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 bg-orange-50 dark:bg-orange-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🔹 Scatter Plots
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Show relationship between two numerical variables. Each point is one
                  observation.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-3">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                    Best for:
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Finding correlations (height vs weight)</li>
                    <li>• Identifying clusters or outliers</li>
                    <li>• Showing distribution of data points</li>
                  </ul>
                </div>
                <div className="bg-orange-100 dark:bg-orange-900/40 p-3 rounded text-sm">
                  <strong>Example:</strong> Age vs Income, Study hours vs Test scores
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6 bg-red-50 dark:bg-red-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  📦 Box Plots
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Show distribution using quartiles. Box = middle 50%, whiskers = range.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-3">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                    Best for:
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Comparing distributions across groups</li>
                    <li>• Identifying outliers</li>
                    <li>• Showing median, quartiles, and range together</li>
                  </ul>
                </div>
                <div className="bg-red-100 dark:bg-red-900/40 p-3 rounded text-sm">
                  <strong>Example:</strong> Salary distribution by department, Test scores by class
                </div>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6 bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  📊 Histograms
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Show frequency distribution of continuous data. Bars represent ranges.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-3">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                    Best for:
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Understanding data distribution</li>
                    <li>• Checking if data is normal</li>
                    <li>• Finding mode and identifying skewness</li>
                  </ul>
                </div>
                <div className="bg-cyan-100 dark:bg-cyan-900/40 p-3 rounded text-sm">
                  <strong>Example:</strong> Age distribution, Price ranges, Response times
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Design Principles for Effective Visualizations
            </h2>

            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  1. Keep It Simple
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Remove chart junk. Every element should serve a purpose. Avoid 3D
                  effects, excessive colors, and decorative elements that distract.
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  2. Choose Appropriate Scale
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Start Y-axis at zero for bar charts (unless you have a good reason not
                  to). Don't manipulate scales to exaggerate differences.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  3. Use Color Purposefully
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Limit to 5-7 colors. Use color to highlight important data. Ensure
                  accessibility (colorblind-friendly palettes). Be consistent across
                  charts.
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  4. Label Clearly
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always include: title, axis labels with units, legend (if needed),
                  data source. Make text large enough to read.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  5. Order Logically
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Sort bars by value (highest to lowest) unless there's a natural order
                  (months, age groups). Make comparisons easy.
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  6. Tell a Story
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Every chart should answer a question. Add annotations to highlight key
                  insights. Guide the viewer to your conclusion.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Common Mistakes to Avoid
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-2xl">❌</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Misleading Scales
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Truncating Y-axis on bar charts makes small differences look huge.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-2xl">❌</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Too Many Categories
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    More than 10 bars or pie slices becomes cluttered and hard to read.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-2xl">❌</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Dual Y-Axes
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Can be manipulated to show false correlations. Use with extreme
                    caution.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-2xl">❌</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Chartjunk
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Unnecessary graphics, gradients, shadows, or 3D effects distract from
                    the data.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <span className="text-2xl">❌</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Wrong Chart Type
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Using pie charts for too many categories or line charts for
                    non-continuous data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Reference: Choosing the Right Chart
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                      Your Goal
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">
                      Best Chart Type
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Compare categories
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Bar Chart
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Show trend over time
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Line Chart
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Show parts of whole
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Pie Chart or Stacked Bar
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Show relationship
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Scatter Plot
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Show distribution
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Histogram or Box Plot
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Geographic data
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-3">
                      Map
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              💡 Key Takeaways
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Choose chart type based on your data and message, not personal
                  preference
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Simplicity wins - remove anything that doesn't add value
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Always label clearly and provide context
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Use color and design to guide attention to key insights
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Every visualization should tell a story or answer a question
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎉 Congratulations!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              You've completed all the foundational lessons! You now understand data
              analytics from collection to visualization. Time to practice with real
              projects!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/lessons/5"
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-colors"
              >
                ← Previous: Statistics
              </Link>
              <Link
                href="/tools/chart-builder"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Build Charts Now!
              </Link>
              <Link
                href="/projects"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Start a Project
              </Link>
              <Link
                href="/lessons"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Back to Lessons
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
