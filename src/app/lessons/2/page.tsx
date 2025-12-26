import Link from "next/link";

export default function DataTypesLesson() {
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
            <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
              Beginner
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              20 min read
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Understanding Data Types
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Learn about different types of data and how to work with them
            effectively
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Why Data Types Matter
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Understanding data types is fundamental to data analytics. The type
              of data you're working with determines what kind of analysis you can
              perform, which visualizations are appropriate, and what insights you
              can extract.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Choosing the wrong analysis method for your data type can lead to
              misleading or meaningless results. Let's explore the main categories
              of data.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Main Categories of Data
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  1. Quantitative Data (Numerical)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Data that can be measured and expressed as numbers. You can
                  perform mathematical operations on this data.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Continuous Data
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Can take any value within a range. Measured on a scale.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-800">
                    <strong>Examples:</strong> Height (5.7 ft, 5.75 ft, 5.752
                    ft...), Temperature (72.3°F), Weight (154.6 lbs), Time (2.5
                    hours)
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Discrete Data
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Can only take specific values. Usually whole numbers.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-blue-200 dark:border-blue-800">
                    <strong>Examples:</strong> Number of students (25, 26, 27...),
                    Dice roll (1, 2, 3, 4, 5, 6), Number of cars sold (0, 1, 2,
                    3...)
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  2. Qualitative Data (Categorical)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Data that describes qualities or characteristics. Cannot be
                  measured with numbers.
                </p>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Nominal Data
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Categories with no inherent order or ranking.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-green-200 dark:border-green-800">
                    <strong>Examples:</strong> Colors (red, blue, green), Gender
                    (male, female, non-binary), Country (USA, Canada, Mexico),
                    Eye color (brown, blue, green)
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Ordinal Data
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Categories with a meaningful order, but the intervals between
                    categories aren't necessarily equal.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-green-200 dark:border-green-800">
                    <strong>Examples:</strong> Education level (High School,
                    Bachelor's, Master's, PhD), Satisfaction rating (Very
                    Unsatisfied, Unsatisfied, Neutral, Satisfied, Very Satisfied),
                    T-shirt size (S, M, L, XL)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Reference Guide
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                    <th className="p-3 font-semibold text-gray-900 dark:text-white">
                      Data Type
                    </th>
                    <th className="p-3 font-semibold text-gray-900 dark:text-white">
                      Can You...
                    </th>
                    <th className="p-3 font-semibold text-gray-900 dark:text-white">
                      Example
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3 font-medium">Continuous</td>
                    <td className="p-3">Calculate mean, find decimals</td>
                    <td className="p-3">Height: 5.8 feet</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3 font-medium">Discrete</td>
                    <td className="p-3">Count, use whole numbers only</td>
                    <td className="p-3">Students: 30</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-3 font-medium">Nominal</td>
                    <td className="p-3">Count frequency, no order</td>
                    <td className="p-3">Color: Blue</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Ordinal</td>
                    <td className="p-3">Rank, but not precise math</td>
                    <td className="p-3">Rating: Good</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Choosing the Right Analysis
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  For Quantitative Data
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ Calculate averages (mean, median)</li>
                  <li>✓ Find standard deviation</li>
                  <li>✓ Create line graphs, scatter plots</li>
                  <li>✓ Perform regression analysis</li>
                  <li>✓ Test hypotheses with statistics</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 sm:p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  For Qualitative Data
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ Count frequencies</li>
                  <li>✓ Calculate percentages</li>
                  <li>✓ Create bar charts, pie charts</li>
                  <li>✓ Identify most common category (mode)</li>
                  <li>✓ Compare groups</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ❌ Calculating mean of ordinal data
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Example: Averaging satisfaction ratings (1-5) can be misleading
                  because the difference between "1" and "2" may not equal the
                  difference between "4" and "5". Use median instead.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ❌ Treating discrete data as continuous
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Example: You can't have 2.5 customers. Some statistical methods
                  assume continuous data and will give nonsensical results with
                  discrete data.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  ❌ Assuming numbers always mean quantitative
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Example: ZIP codes are numbers but they're categorical (nominal)
                  data. Calculating the average ZIP code is meaningless!
                </p>
              </div>
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
                  Quantitative data is numerical and can be measured;
                  Qualitative data describes qualities
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Continuous data can take any value; Discrete data only takes
                  specific values
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Nominal data has no order; Ordinal data has a meaningful
                  ranking
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  The type of data determines which analysis methods are
                  appropriate
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Just because something is a number doesn't mean it's
                  quantitative data
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Practice Exercise
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Try identifying the data type for each of these:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>1. Age in years (25, 30, 45)</li>
              <li>2. Customer satisfaction (Poor, Fair, Good, Excellent)</li>
              <li>3. Temperature in Celsius (22.5°C, 23.1°C)</li>
              <li>4. Favorite ice cream flavor (Vanilla, Chocolate, Strawberry)</li>
              <li>5. Number of items in cart (0, 1, 2, 3...)</li>
            </ul>
            <details className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-white">
                Click to see answers
              </summary>
              <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <li>1. Discrete (whole numbers only)</li>
                <li>2. Ordinal (has order, but unequal intervals)</li>
                <li>3. Continuous (can take any decimal value)</li>
                <li>4. Nominal (categories with no order)</li>
                <li>5. Discrete (whole numbers, you can't buy 1.5 items)</li>
              </ul>
            </details>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mt-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              What's Next?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Now that you understand data types, you're ready to learn about
              collecting data from various sources.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/lessons/1"
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors"
              >
                ← Previous: Introduction
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
