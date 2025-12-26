import Link from "next/link";
import DataTableExplorer from "@/components/DataTableExplorer";

export default function DataExplorerPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="mb-8 sm:mb-12">
          <Link
            href="/tools"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Tools
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Data Table Explorer
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Explore, filter, and sort sample datasets to practice data analysis
          </p>
        </div>

        <DataTableExplorer />
      </div>
    </div>
  );
}
