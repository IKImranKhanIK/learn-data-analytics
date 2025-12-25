"use client";

import Link from "next/link";
import { useState } from "react";

interface CodeLesson {
  id: number;
  title: string;
  description: string;
  language: "python" | "sql";
  difficulty: "Beginner" | "Intermediate";
  completed?: boolean;
}

const codeLessons: CodeLesson[] = [
  {
    id: 1,
    title: "Your First Python Program",
    description: "Learn how to print messages and see your first code in action",
    language: "python",
    difficulty: "Beginner",
  },
  {
    id: 2,
    title: "Variables and Numbers",
    description: "Store data in variables and perform basic calculations",
    language: "python",
    difficulty: "Beginner",
  },
  {
    id: 3,
    title: "Working with Lists",
    description: "Learn to store and work with multiple values",
    language: "python",
    difficulty: "Beginner",
  },
  {
    id: 4,
    title: "Basic Calculations",
    description: "Calculate averages, totals, and other basic statistics",
    language: "python",
    difficulty: "Beginner",
  },
  {
    id: 5,
    title: "Introduction to SQL",
    description: "Write your first database query to view data",
    language: "sql",
    difficulty: "Beginner",
  },
  {
    id: 6,
    title: "Filtering Data with SQL",
    description: "Use WHERE to find specific records in your data",
    language: "sql",
    difficulty: "Beginner",
  },
  {
    id: 7,
    title: "Python Functions",
    description: "Create reusable code with functions",
    language: "python",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "SQL Aggregations",
    description: "Calculate totals, averages, and counts with SQL",
    language: "sql",
    difficulty: "Intermediate",
  },
];

export default function LearnCodingPage() {
  const [filter, setFilter] = useState<"all" | "python" | "sql">("all");

  const filteredLessons = codeLessons.filter((lesson) => {
    if (filter === "all") return true;
    return lesson.language === filter;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Learn to Code for Data Analytics
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Step-by-step coding lessons designed for complete beginners
          </p>

          {/* Info Banner */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="text-3xl">👋</div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Never Coded Before? Perfect!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  These lessons are designed for absolute beginners. Each lesson:
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>✓ Explains concepts in plain English</li>
                  <li>✓ Shows you exactly what to type</li>
                  <li>✓ Lets you practice immediately</li>
                  <li>✓ Gives instant feedback</li>
                  <li>✓ No prior experience needed!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              filter === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            All Lessons ({codeLessons.length})
          </button>
          <button
            onClick={() => setFilter("python")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              filter === "python"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Python ({codeLessons.filter((l) => l.language === "python").length})
          </button>
          <button
            onClick={() => setFilter("sql")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              filter === "sql"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            SQL ({codeLessons.filter((l) => l.language === "sql").length})
          </button>
        </div>

        {/* Lessons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredLessons.map((lesson, index) => (
            <Link
              key={lesson.id}
              href={`/learn-coding/${lesson.id}`}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all p-6 border-2 border-transparent hover:border-blue-500"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">
                  {lesson.language === "python" ? "🐍" : "🗄️"}
                </div>
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full font-semibold">
                  Lesson {index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {lesson.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {lesson.description}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    lesson.difficulty === "Beginner"
                      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                      : "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                  }`}
                >
                  {lesson.difficulty}
                </span>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Start →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Learn to Code Section */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Why Learn Coding for Data Analytics?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Automate Your Work
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Instead of manually analyzing data in Excel, write code once and reuse it
                for any dataset. Save hours of repetitive work.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Handle Big Data
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Excel struggles with large datasets. Python and SQL can handle millions
                of rows effortlessly.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">💼</span>
                Career Opportunities
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Most data analyst jobs require Python and SQL. These skills will make
                you much more employable.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Advanced Analysis
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Unlock powerful analytics techniques like machine learning, predictive
                modeling, and statistical analysis.
              </p>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🐍</span>
                Python for Data Analytics
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Basic syntax: variables, data types, operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Working with lists and dictionaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Loops and conditional statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Functions and code organization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Data manipulation and filtering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Basic statistics and calculations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🗄️</span>
                SQL for Databases
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>SELECT statements to retrieve data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>WHERE clauses for filtering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>Aggregations: SUM, AVG, COUNT</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>GROUP BY for data summarization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>JOINs to combine multiple tables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span>ORDER BY for sorting results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
