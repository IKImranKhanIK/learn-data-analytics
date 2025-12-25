"use client";

import { useState } from "react";

interface ChartData {
  label: string;
  value: number;
}

export default function BarChartBuilder() {
  const [dataInput, setDataInput] = useState("Apples, 25\nOranges, 15\nBananas, 30\nGrapes, 20");
  const [chartData, setChartData] = useState<ChartData[]>([
    { label: "Apples", value: 25 },
    { label: "Oranges", value: 15 },
    { label: "Bananas", value: 30 },
    { label: "Grapes", value: 20 },
  ]);
  const [chartTitle, setChartTitle] = useState("Fruit Sales");

  const colors = [
    "#3B82F6", // blue
    "#10B981", // green
    "#F59E0B", // yellow
    "#EF4444", // red
    "#8B5CF6", // purple
    "#EC4899", // pink
    "#06B6D4", // cyan
    "#F97316", // orange
  ];

  const handleGenerateChart = () => {
    const lines = dataInput.split("\n").filter((line) => line.trim() !== "");
    const newData: ChartData[] = [];

    for (const line of lines) {
      const parts = line.split(",").map((s) => s.trim());
      if (parts.length >= 2) {
        const label = parts[0];
        const value = parseFloat(parts[1]);
        if (!isNaN(value)) {
          newData.push({ label, value });
        }
      }
    }

    if (newData.length === 0) {
      alert("Please enter valid data in the format: Label, Value");
      return;
    }

    setChartData(newData);
  };

  const maxValue = Math.max(...chartData.map((d) => d.value), 1);
  const chartHeight = 400;
  const chartWidth = 600;
  const barWidth = Math.min(80, chartWidth / chartData.length - 20);
  const leftPadding = 60;
  const bottomPadding = 80;
  const topPadding = 40;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Chart Settings
          </h2>

          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Chart Title
            </label>
            <input
              id="title"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              value={chartTitle}
              onChange={(e) => setChartTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="data"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Data (Label, Value per line)
            </label>
            <textarea
              id="data"
              rows={8}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white font-mono text-sm"
              placeholder="Apples, 25&#10;Oranges, 15&#10;Bananas, 30"
              value={dataInput}
              onChange={(e) => setDataInput(e.target.value)}
            />
          </div>

          <button
            onClick={handleGenerateChart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
          >
            Generate Chart
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Tips for Data Entry
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
            <li>• Enter one data point per line</li>
            <li>• Format: Label, Value</li>
            <li>• Example: "Apples, 25"</li>
            <li>• Values must be numbers</li>
            <li>• Use commas to separate label and value</li>
          </ul>

          <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Quick Examples
            </h4>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => {
                  setDataInput("Q1, 45\nQ2, 52\nQ3, 48\nQ4, 61");
                  setChartTitle("Quarterly Sales");
                }}
                className="block w-full text-left px-3 py-2 bg-white dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              >
                Quarterly Sales
              </button>
              <button
                onClick={() => {
                  setDataInput("Mon, 120\nTue, 150\nWed, 180\nThu, 140\nFri, 200");
                  setChartTitle("Website Visitors");
                }}
                className="block w-full text-left px-3 py-2 bg-white dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300"
              >
                Website Visitors
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {chartTitle}
        </h2>

        <div className="flex justify-center overflow-x-auto">
          <svg
            width={chartWidth + leftPadding}
            height={chartHeight + bottomPadding}
            className="border border-gray-200 dark:border-gray-700 rounded"
          >
            {/* Y-axis */}
            <line
              x1={leftPadding}
              y1={topPadding}
              x2={leftPadding}
              y2={chartHeight + topPadding}
              stroke="currentColor"
              className="text-gray-400"
              strokeWidth="2"
            />

            {/* X-axis */}
            <line
              x1={leftPadding}
              y1={chartHeight + topPadding}
              x2={chartWidth + leftPadding}
              y2={chartHeight + topPadding}
              stroke="currentColor"
              className="text-gray-400"
              strokeWidth="2"
            />

            {/* Y-axis labels */}
            {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
              const y = chartHeight + topPadding - tick * chartHeight;
              const value = Math.round(maxValue * tick);
              return (
                <g key={tick}>
                  <line
                    x1={leftPadding - 5}
                    y1={y}
                    x2={leftPadding}
                    y2={y}
                    stroke="currentColor"
                    className="text-gray-400"
                    strokeWidth="1"
                  />
                  <text
                    x={leftPadding - 10}
                    y={y + 5}
                    textAnchor="end"
                    className="text-sm fill-gray-600 dark:fill-gray-400"
                  >
                    {value}
                  </text>
                </g>
              );
            })}

            {/* Bars */}
            {chartData.map((item, index) => {
              const barHeight = (item.value / maxValue) * chartHeight;
              const x =
                leftPadding +
                (index * (chartWidth - leftPadding)) / chartData.length +
                ((chartWidth - leftPadding) / chartData.length - barWidth) / 2;
              const y = chartHeight + topPadding - barHeight;

              return (
                <g key={index}>
                  {/* Bar */}
                  <rect
                    x={x}
                    y={y}
                    width={barWidth}
                    height={barHeight}
                    fill={colors[index % colors.length]}
                    className="hover:opacity-80 transition-opacity"
                  />

                  {/* Value label on top of bar */}
                  <text
                    x={x + barWidth / 2}
                    y={y - 5}
                    textAnchor="middle"
                    className="text-sm font-semibold fill-gray-700 dark:fill-gray-300"
                  >
                    {item.value}
                  </text>

                  {/* X-axis label */}
                  <text
                    x={x + barWidth / 2}
                    y={chartHeight + topPadding + 20}
                    textAnchor="middle"
                    className="text-sm fill-gray-600 dark:fill-gray-400"
                  >
                    {item.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Total items: {chartData.length} | Highest value: {maxValue}
        </div>
      </div>
    </div>
  );
}
