"use client";

import { useState } from "react";

interface CleaningStep {
  id: number;
  issue: string;
  description: string;
  action: string;
  fixed: boolean;
}

const messyData = `Name,Age,City,Salary
John Doe,25,NYC,50000
jane smith,30,,65000
Bob Johnson,null,Boston,75000
Alice Brown,28,NYC,60000
john doe,25,NYC,50000
Charlie Davis,35,Chicago,null
Eve Wilson,,Seattle,70000
Frank Miller,45,Los Angeles,85000
Grace Lee,32,San Francisco,90000
 Henry Clark ,29,  NYC  ,55000`;

export default function DataCleaner() {
  const [currentData, setCurrentData] = useState(messyData);
  const [steps, setSteps] = useState<CleaningStep[]>([
    {
      id: 1,
      issue: "Duplicate Records",
      description: "Row 5 is a duplicate of row 1 (John Doe)",
      action: "Remove duplicate entries",
      fixed: false,
    },
    {
      id: 2,
      issue: "Missing Values",
      description: "Age missing for Eve Wilson, City missing for jane smith, Salary missing for Charlie Davis",
      action: "Handle null values appropriately",
      fixed: false,
    },
    {
      id: 3,
      issue: "Inconsistent Formatting",
      description: "Name casing inconsistent (jane smith vs John Doe)",
      action: "Standardize text to Title Case",
      fixed: false,
    },
    {
      id: 4,
      issue: "Extra Whitespace",
      description: "Leading/trailing spaces in names and cities",
      action: "Trim whitespace from all fields",
      fixed: false,
    },
  ]);
  const [currentStep, setCurrentStep] = useState(0);

  const cleanDuplicates = () => {
    const lines = currentData.split("\n");
    const header = lines[0];
    const dataLines = lines.slice(1);

    // Remove duplicate (line 5, index 4)
    const cleaned = [header, ...dataLines.filter((_, i) => i !== 4)].join("\n");
    setCurrentData(cleaned);
    markStepFixed(1);
  };

  const handleMissingValues = () => {
    let cleaned = currentData;
    // Replace "null" with "N/A" and empty cities
    cleaned = cleaned.replace(/,null,/g, ",N/A,");
    cleaned = cleaned.replace(/,,/g, ",Unknown,");
    cleaned = cleaned.replace(/,null$/gm, ",N/A");
    cleaned = cleaned.replace(/,,$/gm, ",Unknown");

    setCurrentData(cleaned);
    markStepFixed(2);
  };

  const standardizeFormatting = () => {
    const lines = currentData.split("\n");
    const cleaned = lines.map((line, i) => {
      if (i === 0) return line; // Skip header
      const parts = line.split(",");
      if (parts[0]) {
        // Title case the name
        parts[0] = parts[0]
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }
      return parts.join(",");
    }).join("\n");

    setCurrentData(cleaned);
    markStepFixed(3);
  };

  const trimWhitespace = () => {
    const lines = currentData.split("\n");
    const cleaned = lines.map((line) => {
      return line
        .split(",")
        .map((field) => field.trim())
        .join(",");
    }).join("\n");

    setCurrentData(cleaned);
    markStepFixed(4);
  };

  const markStepFixed = (stepId: number) => {
    setSteps(steps.map((step) =>
      step.id === stepId ? { ...step, fixed: true } : step
    ));
  };

  const resetData = () => {
    setCurrentData(messyData);
    setSteps(steps.map((step) => ({ ...step, fixed: false })));
    setCurrentStep(0);
  };

  const cleanAll = () => {
    cleanDuplicates();
    setTimeout(() => handleMissingValues(), 100);
    setTimeout(() => standardizeFormatting(), 200);
    setTimeout(() => trimWhitespace(), 300);
  };

  const renderTable = (data: string) => {
    const lines = data.split("\n");
    const headers = lines[0].split(",");
    const rows = lines.slice(1);

    return (
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const cells = row.split(",");
              const isDuplicate = i === 4 && !steps[0].fixed;
              const hasMissing = (cells.includes("null") || cells.includes("")) && !steps[1].fixed;
              const hasFormatting = /^[a-z]/.test(cells[0]) && !steps[2].fixed;
              const hasWhitespace = cells.some(c => c !== c.trim()) && !steps[3].fixed;

              return (
                <tr
                  key={i}
                  className={`${
                    isDuplicate ? "bg-red-100 dark:bg-red-900/30" :
                    hasMissing ? "bg-yellow-100 dark:bg-yellow-900/30" :
                    hasFormatting ? "bg-orange-100 dark:bg-orange-900/30" :
                    hasWhitespace ? "bg-blue-100 dark:bg-blue-900/30" :
                    "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {cells.map((cell, j) => (
                    <td
                      key={j}
                      className={`border border-gray-300 dark:border-gray-600 px-3 py-2 ${
                        cell === "null" || cell === "" ? "text-red-600 font-semibold" : ""
                      }`}
                    >
                      {cell === "null" || cell === "" ? (
                        <span className="italic">{cell || "(empty)"}</span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const fixedCount = steps.filter((s) => s.fixed).length;
  const progressPercent = (fixedCount / steps.length) * 100;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg shadow-md mb-8 border-l-4 border-orange-500">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Interactive Data Cleaning Exercise
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          This dataset has 4 common data quality issues. Clean them step-by-step or
          all at once and see the results!
        </p>
      </div>

      {/* Progress */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Cleaning Progress
          </h3>
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {fixedCount}/{steps.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={cleanAll}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors font-medium"
          >
            Clean All Issues
          </button>
          <button
            onClick={resetData}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors"
          >
            Reset to Messy Data
          </button>
        </div>
      </div>

      {/* Issues List */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`p-6 rounded-lg shadow-md border-2 transition-all ${
              step.fixed
                ? "bg-green-50 dark:bg-green-900/20 border-green-500"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    step.fixed
                      ? "bg-green-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {step.fixed ? "✓" : step.id}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {step.issue}
                </h3>
              </div>
              {step.fixed && (
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                  Fixed
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {step.description}
            </p>
            <button
              onClick={() => {
                if (step.id === 1) cleanDuplicates();
                if (step.id === 2) handleMissingValues();
                if (step.id === 3) standardizeFormatting();
                if (step.id === 4) trimWhitespace();
              }}
              disabled={step.fixed}
              className={`w-full py-2 rounded-md font-medium transition-colors ${
                step.fixed
                  ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {step.fixed ? "Already Fixed" : step.action}
            </button>
          </div>
        ))}
      </div>

      {/* Data Table */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Current Dataset
          </h3>
          <div className="flex gap-2 text-xs">
            <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 rounded">
              Duplicate
            </span>
            <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded">
              Missing
            </span>
            <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 rounded">
              Formatting
            </span>
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded">
              Whitespace
            </span>
          </div>
        </div>
        {renderTable(currentData)}
      </div>

      {/* Legend */}
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
          💡 Learning Points
        </h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li>
            <strong>Duplicates:</strong> Can inflate counts and skew analysis. Always check for and remove exact or near-duplicate records.
          </li>
          <li>
            <strong>Missing Values:</strong> Decide to delete rows, fill with mean/median, or mark as "Unknown" based on context.
          </li>
          <li>
            <strong>Formatting:</strong> Inconsistent casing makes grouping and searching difficult. Standardize early.
          </li>
          <li>
            <strong>Whitespace:</strong> Leading/trailing spaces cause matching failures. Always trim text fields.
          </li>
        </ul>
      </div>

      {fixedCount === steps.length && (
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-lg shadow-lg border-2 border-green-500">
          <div className="text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Congratulations!
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              You've successfully cleaned all data quality issues! Your dataset is now ready for analysis.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetData}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                Try Again
              </button>
              <Link
                href="/lessons/4"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors font-medium inline-block"
              >
                Review Data Cleaning Lesson
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Link({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
