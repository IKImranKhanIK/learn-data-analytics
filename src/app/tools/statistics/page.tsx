import Link from "next/link";
import StatisticsCalculator from "@/components/StatisticsCalculator";

export default function StatisticsCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/tools"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Tools
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Statistics Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate mean, median, mode, standard deviation, and more from your
            dataset
          </p>
        </div>

        <StatisticsCalculator />
      </div>
    </div>
  );
}
