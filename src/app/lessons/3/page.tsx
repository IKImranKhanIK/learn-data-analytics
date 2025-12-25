import Link from "next/link";

export default function DataCollectionLesson() {
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
            <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
              Beginner
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              25 min read
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Data Collection Methods
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Learn various techniques for collecting and sourcing data effectively
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Data Collection Matters
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Your analysis is only as good as your data. Poor data collection leads
              to unreliable insights and bad decisions. Understanding how to collect
              high-quality data is crucial for successful analytics.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              The key is choosing the right collection method for your specific
              needs, ensuring data quality, and being aware of potential biases.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Primary vs Secondary Data
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Primary Data
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Data you collect yourself, directly from the source, for your
                  specific purpose.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Advantages:
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>✓ Tailored to your needs</li>
                    <li>✓ Current and relevant</li>
                    <li>✓ You control quality</li>
                    <li>✓ Exclusive to you</li>
                  </ul>
                  <p className="font-semibold text-gray-900 dark:text-white mt-3">
                    Disadvantages:
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>✗ Time-consuming</li>
                    <li>✗ Expensive</li>
                    <li>✗ Requires expertise</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Secondary Data
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Data that already exists, collected by someone else for a different
                  purpose.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Advantages:
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>✓ Quick to obtain</li>
                    <li>✓ Cost-effective</li>
                    <li>✓ Large datasets available</li>
                    <li>✓ Historical trends</li>
                  </ul>
                  <p className="font-semibold text-gray-900 dark:text-white mt-3">
                    Disadvantages:
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>✗ May not fit your needs exactly</li>
                    <li>✗ Possibly outdated</li>
                    <li>✗ Unknown quality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Primary Data Collection Methods
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  1. Surveys & Questionnaires
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Collect data from a large number of people through structured
                  questions.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    Best for:
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>• Customer feedback and satisfaction</li>
                    <li>• Market research</li>
                    <li>• Opinion polling</li>
                    <li>• Large-scale data collection</li>
                  </ul>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2 mt-3">
                    Tools:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Google Forms, SurveyMonkey, Typeform, Qualtrics
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  2. Interviews
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  One-on-one conversations to gather detailed, qualitative insights.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    Best for:
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>• In-depth understanding</li>
                    <li>• Complex topics</li>
                    <li>• User research</li>
                    <li>• Expert opinions</li>
                  </ul>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2 mt-3">
                    Types:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Structured, Semi-structured, Unstructured
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  3. Observations
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Watch and record behavior or events as they occur naturally.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    Best for:
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>• User behavior studies</li>
                    <li>• Retail analytics</li>
                    <li>• Workflow analysis</li>
                    <li>• Natural settings</li>
                  </ul>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2 mt-3">
                    Examples:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Heat maps, eye tracking, video recording, field notes
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  4. Experiments
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Controlled tests to measure the effect of changes or interventions.
                </p>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    Best for:
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>• A/B testing</li>
                    <li>• Product development</li>
                    <li>• Causal relationships</li>
                    <li>• Scientific research</li>
                  </ul>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2 mt-3">
                    Key concept:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Control group vs. Test group to isolate variables
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  5. Sensors & IoT Devices
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Automated data collection through connected devices and sensors.
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    Best for:
                  </p>
                  <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
                    <li>• Environmental monitoring</li>
                    <li>• Health tracking</li>
                    <li>• Manufacturing</li>
                    <li>• Continuous data streams</li>
                  </ul>
                  <p className="font-semibold text-gray-900 dark:text-white mb-2 mt-3">
                    Examples:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Fitness trackers, smart home devices, industrial sensors
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Secondary Data Sources
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  📚 Public Databases
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                  <li>• Government data (census, economic)</li>
                  <li>• World Bank data</li>
                  <li>• Kaggle datasets</li>
                  <li>• data.gov</li>
                  <li>• Academic repositories</li>
                </ul>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  🏢 Internal Sources
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                  <li>• Company databases</li>
                  <li>• CRM systems</li>
                  <li>• Sales records</li>
                  <li>• Website analytics</li>
                  <li>• Previous reports</li>
                </ul>
              </div>

              <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  📰 Publications
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                  <li>• Research papers</li>
                  <li>• Industry reports</li>
                  <li>• News articles</li>
                  <li>• White papers</li>
                  <li>• Market research</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  🌐 Web Scraping
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2">
                  <li>• Product prices</li>
                  <li>• Social media data</li>
                  <li>• Reviews and ratings</li>
                  <li>• Public websites</li>
                  <li>• APIs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Data Quality Checklist
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Accuracy
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Is the data correct and free from errors?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Completeness
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Do you have all the data you need? Are there gaps?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Consistency
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Is the data formatted uniformly across all sources?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Relevance
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Does the data answer your specific questions?
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Timeliness
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Is the data current enough for your purposes?
                  </p>
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
                  Choose primary data for specific needs, secondary for cost and speed
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Different methods suit different questions (surveys for opinions,
                  experiments for causation)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Always evaluate data quality: accuracy, completeness, relevance
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span>
                  Combining multiple sources can provide richer insights
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What's Next?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              You've collected your data - now you need to clean it! Learn how to
              handle missing values, outliers, and prepare data for analysis.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/lessons/2"
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-md transition-colors"
              >
                ← Previous: Data Types
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
