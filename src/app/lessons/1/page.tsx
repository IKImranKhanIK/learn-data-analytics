import Link from "next/link";

export default function IntroductionLesson() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-4xl">
        <div className="mb-6 sm:mb-8">
          <Link
            href="/lessons"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block text-sm sm:text-base"
          >
            ← Back to Lessons
          </Link>
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 sm:px-3 py-1 rounded-full">
              Beginner
            </span>
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              15 min read
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Introduction to Data Analytics
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Learn what data analytics is, why it matters, and how it's used in
            the real world
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              What is Data Analytics?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              Data analytics is the process of examining, cleaning, transforming,
              and modeling data to discover useful information, draw conclusions,
              and support decision-making. Think of it as detective work with
              numbers - you're looking for patterns, insights, and answers hidden
              in the data.
            </p>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              In today's world, every click, purchase, sensor reading, and
              transaction generates data. Data analytics helps us make sense of
              this information to solve problems and make better decisions.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why is Data Analytics Important?
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Better Decision Making
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Instead of relying on gut feelings, data analytics provides
                  evidence-based insights to guide business and personal decisions.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Cost Reduction
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Identify inefficiencies, reduce waste, and optimize operations
                  by analyzing operational data.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Understanding Customers
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Learn what customers want, predict their behavior, and
                  personalize their experience.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Competitive Advantage
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Organizations that leverage data analytics can spot trends
                  earlier and respond faster than competitors.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Real-World Examples
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  🏪 Retail
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Analyzing purchase patterns to optimize inventory, predict
                  demand, and recommend products to customers.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  🏥 Healthcare
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Using patient data to improve diagnoses, predict disease
                  outbreaks, and personalize treatment plans.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  📱 Social Media
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Analyzing user behavior to recommend content, detect fake news,
                  and optimize ad targeting.
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  🚗 Transportation
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Optimizing routes, predicting maintenance needs, and managing
                  traffic flow in smart cities.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              The Data Analytics Process
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Define the Question
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    What problem are you trying to solve? What do you want to
                    learn from the data?
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Collect Data
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Gather relevant data from databases, surveys, sensors, or
                    other sources.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Clean the Data
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Remove errors, handle missing values, and ensure data quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Analyze the Data
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Use statistical methods and visualization to explore patterns
                    and relationships.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Interpret Results
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Draw conclusions and create actionable insights from your
                    analysis.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Communicate Findings
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    Present your insights clearly through reports, dashboards, or
                    presentations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              💡 Key Takeaways
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">
                  ✓
                </span>
                <span>
                  Data analytics transforms raw data into actionable insights
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">
                  ✓
                </span>
                <span>
                  It's used across all industries to improve decision-making
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">
                  ✓
                </span>
                <span>
                  The process involves defining questions, collecting data,
                  cleaning, analyzing, and communicating
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">
                  ✓
                </span>
                <span>
                  Anyone can learn data analytics with the right tools and
                  practice
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              What's Next?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
              Now that you understand what data analytics is, it's time to learn
              about the different types of data you'll be working with.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/lessons"
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors text-sm sm:text-base text-center"
              >
                Back to Lessons
              </Link>
              <Link
                href="/lessons/2"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors text-sm sm:text-base text-center"
              >
                Next: Understanding Data Types →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
