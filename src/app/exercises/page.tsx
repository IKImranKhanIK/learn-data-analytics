import Link from "next/link";

interface Exercise {
  id: number;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  language: string;
  topics: string[];
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Calculate Average Sales",
    description: "Write a Python function to calculate the average of a list of sales numbers",
    difficulty: "Beginner",
    language: "Python",
    topics: ["Lists", "Functions", "Basic Math"],
  },
  {
    id: 2,
    title: "Filter Products by Price",
    description: "Filter a list of products to show only items above a certain price",
    difficulty: "Beginner",
    language: "Python",
    topics: ["Lists", "Filtering", "Dictionaries"],
  },
  {
    id: 3,
    title: "Data Cleaning Challenge",
    description: "Remove null values and calculate statistics from messy data",
    difficulty: "Intermediate",
    language: "Python",
    topics: ["Data Cleaning", "Statistics", "List Comprehension"],
  },
  {
    id: 4,
    title: "Group Sales by Category",
    description: "Aggregate sales data by product category and calculate totals",
    difficulty: "Intermediate",
    language: "Python",
    topics: ["Grouping", "Aggregation", "Dictionaries"],
  },
  {
    id: 5,
    title: "SQL: Basic Queries",
    description: "Write SELECT queries to retrieve employee data",
    difficulty: "Beginner",
    language: "SQL",
    topics: ["SELECT", "WHERE", "Basic SQL"],
  },
  {
    id: 6,
    title: "SQL: Join Tables",
    description: "Join employee and department tables to analyze organizational data",
    difficulty: "Intermediate",
    language: "SQL",
    topics: ["JOIN", "Multiple Tables", "Aggregation"],
  },
  {
    id: 7,
    title: "SQL: Window Functions",
    description: "Use window functions to calculate running totals and rankings",
    difficulty: "Advanced",
    language: "SQL",
    topics: ["Window Functions", "RANK", "Advanced SQL"],
  },
  {
    id: 8,
    title: "Array Analytics",
    description: "Use JavaScript array methods to analyze sales data",
    difficulty: "Beginner",
    language: "JavaScript",
    topics: ["Arrays", "map/filter/reduce", "ES6"],
  },
  {
    id: 9,
    title: "Time Series Analysis",
    description: "Calculate monthly trends and growth rates from time series data",
    difficulty: "Advanced",
    language: "Python",
    topics: ["Time Series", "Trends", "Advanced Analytics"],
  },
  {
    id: 10,
    title: "Customer Segmentation Logic",
    description: "Categorize customers based on purchase history and demographics",
    difficulty: "Advanced",
    language: "Python",
    topics: ["Segmentation", "Logic", "Data Analysis"],
  },
];

export default function ExercisesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="mb-8 sm:mb-12">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Coding Exercises
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Practice coding challenges for data analytics
          </p>

          {/* Beginner Banner */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-lg mb-4">
            <div className="flex items-start gap-4">
              <div className="text-3xl">👋</div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  New to Coding? Start with our Guided Lessons!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  These exercises assume you already know basic Python or SQL. If you're just starting out,
                  we have a better place for you:
                </p>
                <Link
                  href="/learn-coding"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold transition-colors"
                >
                  Go to Learn Coding (For Beginners) →
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300">
              💻 Use the{" "}
              <Link
                href="/tools/code-playground"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Code Playground
              </Link>
              {" "}to work on these exercises with instant code execution
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium">
            All ({exercises.length})
          </button>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
            Python ({exercises.filter(e => e.language === "Python").length})
          </button>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
            SQL ({exercises.filter(e => e.language === "SQL").length})
          </button>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-md font-medium hover:bg-gray-300 dark:hover:bg-gray-600">
            JavaScript ({exercises.filter(e => e.language === "JavaScript").length})
          </button>
        </div>

        {/* Exercises Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex justify-between items-start mb-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    exercise.difficulty === "Beginner"
                      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                      : exercise.difficulty === "Intermediate"
                      ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                      : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"
                  }`}
                >
                  {exercise.difficulty}
                </span>
                <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full font-semibold">
                  {exercise.language}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {exercise.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {exercise.description}
              </p>

              <div className="mb-4">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Topics:
                </div>
                <div className="flex flex-wrap gap-2">
                  {exercise.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/tools/code-playground"
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium"
              >
                Start Exercise
              </Link>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            💡 How to Practice Effectively
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">1️⃣</span>
                Start with Fundamentals
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Begin with beginner exercises to build confidence. Master the basics
                before moving to intermediate and advanced challenges.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">2️⃣</span>
                Try Before Looking
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Attempt each exercise on your own first. Struggle is part of learning.
                Only check the solution after giving it a genuine try.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">3️⃣</span>
                Experiment and Modify
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Don't just copy solutions. Experiment with different approaches,
                modify the code, and understand why it works.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">4️⃣</span>
                Practice Daily
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Consistency is key. Try to solve at least one exercise per day.
                Regular practice builds muscle memory and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
