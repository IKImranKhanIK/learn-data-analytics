"use client";

import { useState } from "react";

interface Stats {
  mean: number;
  median: number;
  mode: number[];
  stdDev: number;
  min: number;
  max: number;
  count: number;
}

export default function StatisticsCalculator() {
  const [input, setInput] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);

  const calculateMean = (numbers: number[]): number => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
  };

  const calculateMedian = (numbers: number[]): number => {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
  };

  const calculateMode = (numbers: number[]): number[] => {
    const frequency: { [key: number]: number } = {};
    numbers.forEach((num) => {
      frequency[num] = (frequency[num] || 0) + 1;
    });

    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency)
      .filter((key) => frequency[Number(key)] === maxFreq)
      .map(Number);

    return maxFreq === 1 ? [] : modes;
  };

  const calculateStdDev = (numbers: number[], mean: number): number => {
    const squaredDiffs = numbers.map((num) => Math.pow(num - mean, 2));
    const variance =
      squaredDiffs.reduce((acc, val) => acc + val, 0) / numbers.length;
    return Math.sqrt(variance);
  };

  const handleCalculate = () => {
    const numbers = input
      .split(/[\s,]+/)
      .map((s) => s.trim())
      .filter((s) => s !== "")
      .map(Number)
      .filter((n) => !isNaN(n));

    if (numbers.length === 0) {
      alert("Please enter valid numbers separated by spaces or commas");
      return;
    }

    const mean = calculateMean(numbers);
    const median = calculateMedian(numbers);
    const mode = calculateMode(numbers);
    const stdDev = calculateStdDev(numbers, mean);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    setStats({
      mean,
      median,
      mode,
      stdDev,
      min,
      max,
      count: numbers.length,
    });
  };

  const handleClear = () => {
    setInput("");
    setStats(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Enter Your Data
        </h2>

        <div className="mb-6">
          <label
            htmlFor="numbers"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Numbers (separated by spaces or commas)
          </label>
          <textarea
            id="numbers"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Example: 12, 15, 18, 20, 22, 25, 28"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={handleCalculate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Calculate Statistics
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition-colors"
          >
            Clear
          </button>
        </div>

        {stats && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Results
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Mean (Average)
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.mean.toFixed(2)}
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Median
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.median.toFixed(2)}
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Mode
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.mode.length > 0
                    ? stats.mode.join(", ")
                    : "No mode"}
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Standard Deviation
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.stdDev.toFixed(2)}
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Minimum
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.min}
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Maximum
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.max}
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg md:col-span-2">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Count
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.count} numbers
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          What do these statistics mean?
        </h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Mean:</strong> The average of all numbers
          </li>
          <li>
            <strong>Median:</strong> The middle value when numbers are sorted
          </li>
          <li>
            <strong>Mode:</strong> The most frequently occurring number(s)
          </li>
          <li>
            <strong>Standard Deviation:</strong> Measures how spread out the
            numbers are
          </li>
          <li>
            <strong>Min/Max:</strong> The smallest and largest values
          </li>
        </ul>
      </div>
    </div>
  );
}
