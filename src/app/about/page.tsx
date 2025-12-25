import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Learn Data Analytics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your journey to mastering data analytics starts here
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Learn Data Analytics was created to make data analytics education accessible,
            interactive, and practical. We believe that learning data analytics should be
            hands-on, engaging, and directly applicable to real-world scenarios.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether you're a complete beginner or looking to enhance your existing skills,
            our platform provides the tools, projects, and lessons you need to become
            proficient in data analytics.
          </p>
        </div>

        {/* What We Offer */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Interactive Lessons
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Learn fundamental concepts through structured lessons that build on each other,
                from basic statistics to advanced analytics techniques.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Real-World Projects
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Apply your knowledge with hands-on projects using realistic datasets from
                sales, marketing, finance, and web analytics.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Practical Tools
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use our built-in tools for data exploration, visualization, statistical
                analysis, and data cleaning without any setup required.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Progressive Learning
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Start with beginner-friendly content and progressively tackle more advanced
                topics as your skills develop.
              </p>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Your Learning Path
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Start with Fundamentals
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Begin with our introductory lessons covering data types, basic statistics,
                  and Excel fundamentals.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Practice with Tools
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Experiment with our interactive tools to explore data, create visualizations,
                  and perform statistical calculations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Build Real Projects
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Apply your skills to real-world projects that simulate actual business
                  scenarios and analytical challenges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Master Advanced Concepts
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Progress to advanced topics like predictive analytics, data modeling,
                  and complex visualizations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Us
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  No Installation Required
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Everything runs in your browser - no software to download or configure
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Self-Paced Learning
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Learn at your own pace, on your own schedule, with no deadlines
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Real Datasets
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Work with realistic data that mirrors what you'll encounter in actual jobs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Practical Focus
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Every lesson and project is designed to teach skills you'll actually use
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-6 opacity-90">
            Begin your data analytics journey today with our interactive platform
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/lessons"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Learning
            </Link>
            <Link
              href="/projects"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
