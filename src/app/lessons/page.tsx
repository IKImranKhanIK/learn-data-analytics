import Link from "next/link";

const lessons = [
  {
    id: 1,
    title: "Introduction to Data Analytics",
    description:
      "Learn what data analytics is, its importance, and key concepts",
    duration: "15 min",
    level: "Beginner",
    href: "/lessons/1",
  },
  {
    id: 2,
    title: "Understanding Data Types",
    description:
      "Explore different types of data: categorical, numerical, ordinal, and more",
    duration: "20 min",
    level: "Beginner",
    href: "/lessons/2",
  },
  {
    id: 3,
    title: "Data Collection Methods",
    description: "Learn various techniques for collecting and sourcing data",
    duration: "25 min",
    level: "Beginner",
    href: "/lessons/3",
  },
  {
    id: 4,
    title: "Data Cleaning Fundamentals",
    description:
      "Master the essential skills for cleaning and preparing data for analysis",
    duration: "30 min",
    level: "Intermediate",
    href: "/lessons/4",
  },
  {
    id: 5,
    title: "Descriptive Statistics",
    description: "Understand mean, median, mode, variance, and other key metrics",
    duration: "35 min",
    level: "Intermediate",
    href: null,
  },
  {
    id: 6,
    title: "Data Visualization Basics",
    description:
      "Learn to create effective charts and graphs to communicate insights",
    duration: "40 min",
    level: "Intermediate",
    href: null,
  },
];

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lessons
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Start your journey into data analytics with our structured lessons
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {lesson.title}
                </h2>
                <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                  {lesson.level}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {lesson.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {lesson.duration}
                </span>
                {lesson.href ? (
                  <Link
                    href={lesson.href}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    Start Lesson
                  </Link>
                ) : (
                  <button
                    disabled
                    className="bg-gray-400 text-white px-4 py-2 rounded-md cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
