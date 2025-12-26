import Link from "next/link";

export default function DescriptiveStatisticsLesson() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-4xl">
        <div className="mb-6 sm:mb-8">
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
              35 min read
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Descriptive Statistics
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Master the fundamental metrics that summarize and describe your data
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              What Are Descriptive Statistics?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Descriptive statistics are numbers that summarize and describe the
              characteristics of your dataset. Instead of looking at thousands of
              individual data points, you can understand the big picture through a
              few key metrics.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Think of them as the "vital signs" of your data - just like a doctor
              checks your temperature, blood pressure, and heart rate to understand
              your health, data analysts use descriptive statistics to understand
              their data.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Measures of Central Tendency
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              These tell you where the "center" or "typical value" of your data is.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Mean (Average)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The sum of all values divided by the number of values.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="font-mono text-sm mb-2">
                    Formula: Mean = Sum of all values / Number of values
                  </p>
                  <p className="font-mono text-sm text-blue-600 dark:text-blue-400">
                    Example: [10, 20, 30, 40, 50]
                  </p>
                  <p className="font-mono text-sm">
                    Mean = (10+20+30+40+50) / 5 = 150 / 5 = <strong>30</strong>
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded mb-2">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    ✓ Best for:
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Normally distributed data without extreme outliers
                  </p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    ✗ Watch out:
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Sensitive to outliers. One extreme value can skew the mean significantly.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6 bg-green-50 dark:bg-green-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Median (Middle Value)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The middle value when data is sorted. Half the values are above it,
                  half below.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="font-mono text-sm mb-2">
                    Step 1: Sort the data
                  </p>
                  <p className="font-mono text-sm text-green-600 dark:text-green-400 mb-2">
                    Example: [10, 100, 20, 50, 30] → [10, 20, 30, 50, 100]
                  </p>
                  <p className="font-mono text-sm">
                    Step 2: Find middle → Median = <strong>30</strong>
                  </p>
                  <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mt-3">
                    (If even count, average the two middle values)
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded mb-2">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    ✓ Best for:
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Skewed data or data with outliers (like income, house prices)
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    💡 Fun fact:
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Median income is more meaningful than mean income because extreme wealth doesn't skew it!
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 dark:bg-purple-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Mode (Most Frequent)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The value that appears most often in your dataset.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="font-mono text-sm text-purple-600 dark:text-purple-400 mb-2">
                    Example: [5, 2, 8, 2, 9, 2, 4]
                  </p>
                  <p className="font-mono text-sm">
                    Mode = <strong>2</strong> (appears 3 times)
                  </p>
                  <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Can have multiple modes (bimodal, multimodal) or no mode
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    ✓ Best for:
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Categorical data (most popular color, most common size)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Measures of Spread (Variability)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              These tell you how spread out or consistent your data is.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-500 pl-6 bg-orange-50 dark:bg-orange-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Range
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The difference between the maximum and minimum values.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="font-mono text-sm mb-2">
                    Formula: Range = Max - Min
                  </p>
                  <p className="font-mono text-sm text-orange-600 dark:text-orange-400">
                    Example: [10, 25, 30, 45, 60]
                  </p>
                  <p className="font-mono text-sm">
                    Range = 60 - 10 = <strong>50</strong>
                  </p>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Simple but sensitive to outliers. Only uses two data points.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-6 bg-red-50 dark:bg-red-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Variance
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Average of squared differences from the mean. Measures how far each
                  value is from the mean.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="font-mono text-sm mb-3">
                    Steps:
                  </p>
                  <ol className="font-mono text-sm space-y-1 list-decimal list-inside">
                    <li>Find the mean</li>
                    <li>Subtract mean from each value</li>
                    <li>Square each difference</li>
                    <li>Average the squared differences</li>
                  </ol>
                  <p className="font-mono text-sm text-red-600 dark:text-red-400 mt-3">
                    Example: [2, 4, 6] → Mean = 4
                  </p>
                  <p className="font-mono text-sm">
                    Variance = [(2-4)² + (4-4)² + (6-4)²] / 3 = [4+0+4] / 3 = <strong>2.67</strong>
                  </p>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Units are squared, which can be hard to interpret. That's why we use standard deviation!
                </p>
              </div>

              <div className="border-l-4 border-indigo-500 pl-6 bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Standard Deviation (SD)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Square root of variance. Tells you the average distance from the mean.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <p className="font-mono text-sm mb-2">
                    Formula: SD = √Variance
                  </p>
                  <p className="font-mono text-sm">
                    From example above: SD = √2.67 = <strong>1.63</strong>
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    📊 The 68-95-99.7 Rule (Normal Distribution)
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• 68% of data falls within 1 SD of mean</li>
                    <li>• 95% of data falls within 2 SD of mean</li>
                    <li>• 99.7% of data falls within 3 SD of mean</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Other Important Measures
            </h2>

            <div className="space-y-4">
              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Quartiles & Percentiles
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                  Divide data into equal parts.
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• <strong>Q1 (25th percentile):</strong> 25% of data is below this</li>
                  <li>• <strong>Q2 (50th percentile):</strong> Same as median</li>
                  <li>• <strong>Q3 (75th percentile):</strong> 75% of data is below this</li>
                  <li>• <strong>IQR (Interquartile Range):</strong> Q3 - Q1 (middle 50%)</li>
                </ul>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Skewness
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Measures asymmetry of distribution. Positive skew = tail on right
                  (mean &gt; median). Negative skew = tail on left (mean &lt; median).
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Kurtosis
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Measures how "peaked" or "flat" the distribution is. High kurtosis =
                  heavy tails and sharp peak.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Practical Example
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Test scores: [65, 70, 75, 80, 85, 90, 95]
            </p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Central Tendency
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li><strong>Mean:</strong> 80</li>
                  <li><strong>Median:</strong> 80</li>
                  <li><strong>Mode:</strong> None (all unique)</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Spread
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li><strong>Range:</strong> 30 (95-65)</li>
                  <li><strong>Std Dev:</strong> ~10.8</li>
                  <li><strong>Min:</strong> 65</li>
                  <li><strong>Max:</strong> 95</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>Interpretation:</strong> The average score is 80, with most scores
                falling between 69.2 and 90.8 (within 1 SD). The scores are fairly evenly
                distributed with no extreme outliers.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              💡 Key Takeaways
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Mean, median, and mode describe the center of your data
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Use median for skewed data, mean for normal distributions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Standard deviation tells you how spread out the data is
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Always report both central tendency AND spread for complete picture
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Quartiles and IQR are useful for identifying outliers
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Practice Your Skills!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Now that you understand descriptive statistics, try using our Statistics
              Calculator to compute these metrics for real datasets!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/lessons/4"
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors"
              >
                ← Previous: Data Cleaning
              </Link>
              <Link
                href="/tools/statistics"
                className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors"
              >
                Try Statistics Calculator
              </Link>
              <Link
                href="/lessons"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors"
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
