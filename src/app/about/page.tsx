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

        {/* Creator Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl font-bold border-4 border-white/30">
              IK
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Built by Imran Khan</h2>
              <p className="text-lg opacity-90 mb-4">
                Data analytics educator passionate about making learning accessible and practical
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/IKImranKhanIK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/imran-khan-728077130/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Learn Data Analytics was created to make data analytics education accessible,
            interactive, and practical. I believe that learning data analytics should be
            hands-on, engaging, and directly applicable to real-world scenarios.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether you're a complete beginner or looking to enhance your existing skills,
            this platform provides the tools, projects, and lessons you need to become
            proficient in data analytics. Every lesson and project is designed based on
            real-world experience to ensure you learn skills that actually matter.
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Interactive Coding Lessons</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">9</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Guided Projects</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Interactive Tools</div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Free & Open Source</div>
          </div>
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
