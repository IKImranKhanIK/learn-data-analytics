import Link from "next/link";

export default function DataCleaningLesson() {
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
              30 min read
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Data Cleaning Fundamentals
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Master essential skills for cleaning and preparing data for analysis
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-lg shadow-md mb-8 border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              The 80/20 Rule of Data Analytics
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Data scientists spend approximately <strong>80% of their time</strong>{" "}
              cleaning and preparing data, and only 20% actually analyzing it. Data
              cleaning isn't glamorous, but it's absolutely critical for accurate
              results.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Clean Data?
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                "Garbage in, garbage out" - if your data is messy, your analysis
                will be unreliable. Clean data ensures:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Accurate insights</strong> - Correct conclusions from your analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Reliable predictions</strong> - Models that actually work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Consistent results</strong> - Reproducible findings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Better decisions</strong> - Trust in your data-driven choices</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Common Data Quality Issues
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6 bg-red-50 dark:bg-red-900/20 p-4 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  1. Missing Values
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Empty cells, null values, or placeholders like "N/A", "Unknown"
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm mb-3">
                  Name | Age | City<br />
                  John | 25  | NYC<br />
                  Jane | <span className="text-red-600">null</span> | Boston<br />
                  Bob  | 30  | <span className="text-red-600">""</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Solutions:</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Delete rows with missing values (if few)</li>
                  <li>• Fill with mean/median/mode (for numerical data)</li>
                  <li>• Fill with most frequent value (for categorical)</li>
                  <li>• Use forward/backward fill for time series</li>
                  <li>• Flag as "missing" category</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-6 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  2. Duplicate Records
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Same entry appears multiple times, inflating counts
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm mb-3">
                  ID | Name | Email<br />
                  1  | John | john@email.com<br />
                  2  | Jane | jane@email.com<br />
                  3  | <span className="text-orange-600">John | john@email.com</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Solutions:</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Remove exact duplicates</li>
                  <li>• Check for fuzzy duplicates (slight variations)</li>
                  <li>• Keep first/last occurrence</li>
                  <li>• Aggregate if needed (sum, count)</li>
                </ul>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  3. Inconsistent Formatting
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Same data represented differently
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm mb-3">
                  Date formats: <span className="text-yellow-600">2024-01-15 | 01/15/2024 | Jan 15, 2024</span><br />
                  Phone: <span className="text-yellow-600">(555) 123-4567 | 555-123-4567 | 5551234567</span><br />
                  Case: <span className="text-yellow-600">USA | usa | U.S.A.</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Solutions:</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Standardize formats (dates, phone numbers)</li>
                  <li>• Convert to consistent case (upper/lower)</li>
                  <li>• Remove extra spaces and special characters</li>
                  <li>• Use consistent units (kg vs lbs)</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  4. Outliers
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Values that are suspiciously high or low
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm mb-3">
                  Ages: 25, 30, 27, <span className="text-purple-600">150</span>, 32, 28<br />
                  Prices: $19.99, $24.99, <span className="text-purple-600">$999999</span>, $29.99
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Solutions:</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Investigate - is it an error or real?</li>
                  <li>• Remove if clearly wrong</li>
                  <li>• Cap at reasonable limits</li>
                  <li>• Transform data (log scale)</li>
                  <li>• Keep but flag for special treatment</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  5. Incorrect Data Types
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Numbers stored as text, dates as strings, etc.
                </p>
                <div className="bg-white dark:bg-gray-800 p-3 rounded font-mono text-sm mb-3">
                  Price: <span className="text-blue-600">"$29.99"</span> (string) → should be 29.99 (number)<br />
                  Date: <span className="text-blue-600">"2024-01-15"</span> (string) → should be datetime<br />
                  ZIP: <span className="text-blue-600">12345</span> (number) → should be "12345" (string)
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Solutions:</p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Convert to appropriate data type</li>
                  <li>• Parse dates correctly</li>
                  <li>• Remove currency symbols before converting</li>
                  <li>• Preserve leading zeros (ZIP codes)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Data Cleaning Workflow
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Inspect the Data
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Look at first/last rows, check data types, understand structure,
                    get summary statistics
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Identify Issues
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Check for nulls, duplicates, outliers, format inconsistencies,
                    wrong data types
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Clean and Transform
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Handle missing values, remove duplicates, standardize formats,
                    fix types, deal with outliers
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Validate Results
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Check row counts, verify transformations, ensure logic, spot
                    check random samples
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Document Changes
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Keep record of what was changed and why - crucial for
                    reproducibility
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Best Practices
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      Always keep original data
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      Work on copies, never modify the source
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      Document everything
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      Write down what you changed and why
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      Use scripts, not manual edits
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      Automate for reproducibility
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      Validate at each step
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      Check results after every transformation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      Understand context first
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      Know what the data represents before cleaning
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      Collaborate with domain experts
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      They know what's normal vs suspicious
                    </p>
                  </div>
                </div>
              </div>
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
                  Data cleaning takes most of your time but is essential for
                  accurate analysis
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Common issues: missing values, duplicates, formatting, outliers,
                  wrong types
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Follow a systematic workflow: inspect, identify, clean, validate,
                  document
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Always preserve original data and document your changes
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What's Next?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Now that your data is clean, you're ready to analyze it! Learn about
              descriptive statistics to summarize and understand your data.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/lessons/3"
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-colors"
              >
                ← Previous: Data Collection
              </Link>
              <Link
                href="/tools/data-explorer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Try Data Table Explorer
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
