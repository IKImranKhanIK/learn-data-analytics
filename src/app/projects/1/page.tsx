"use client";

import Link from "next/link";
import { useState } from "react";

export default function SalesAnalysisProject() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
              Beginner
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Project 1
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sales Data Analysis
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Analyze retail sales data to identify trends and top-performing products
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    s <= step
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                  }`}
                >
                  {s}
                </div>
                {s < 5 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      s < step ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-5 gap-2 text-xs text-center text-gray-600 dark:text-gray-400">
            <div>Understand</div>
            <div>Explore</div>
            <div>Analyze</div>
            <div>Visualize</div>
            <div>Conclude</div>
          </div>
        </div>

        {/* Step Content */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Understand the Business Problem
              </h2>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📋 Scenario
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You're a data analyst at RetailCo, an electronics and furniture
                retailer. The sales director wants to understand:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Which product categories are selling best?</li>
                <li>• Are there any seasonal trends?</li>
                <li>• Which products should we stock more of?</li>
                <li>• What's our average revenue per transaction?</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📊 Dataset Overview
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Records:</p>
                  <p className="font-bold text-gray-900 dark:text-white">12 transactions</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Time Period:</p>
                  <p className="font-bold text-gray-900 dark:text-white">Jan - Apr 2024</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Categories:</p>
                  <p className="font-bold text-gray-900 dark:text-white">Electronics, Furniture, Stationery</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Fields:</p>
                  <p className="font-bold text-gray-900 dark:text-white">Product, Category, Price, Quantity, Date</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Explore the Data
              </h2>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Sample Data (First 5 Rows)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Product</th>
                      <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Category</th>
                      <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Price</th>
                      <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Qty</th>
                      <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Laptop</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Electronics</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">$1,299</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">15</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">2024-01-15</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Mouse</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Electronics</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">$29</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">150</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">2024-01-20</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Desk Chair</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Furniture</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">$249</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">45</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">2024-02-01</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Monitor</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Electronics</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">$399</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">30</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">2024-02-10</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Keyboard</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">Electronics</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">$79</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">120</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">2024-02-15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                💡 Initial Observations
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>✓ Data looks clean - no obvious missing values</li>
                <li>✓ Electronics category appears frequently</li>
                <li>✓ Prices range from $5 to $1,299</li>
                <li>✓ Dates span Q1 2024</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Analyze Key Metrics
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Total Revenue
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  $51,350
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Price × Quantity for all products
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Avg Price
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  $244
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Mean price across all products
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Total Units
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  1,045
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Sum of all quantities sold
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Sales by Category
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Electronics</span>
                    <span className="font-bold text-gray-900 dark:text-white">$36,365 (71%)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "71%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Furniture</span>
                    <span className="font-bold text-gray-900 dark:text-white">$12,185 (24%)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "24%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Stationery</span>
                    <span className="font-bold text-gray-900 dark:text-white">$2,800 (5%)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: "5%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Visualize Insights
              </h2>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Top 5 Products by Revenue
              </h3>
              <div className="space-y-3">
                {[
                  { product: "Laptop", revenue: 19485, color: "bg-blue-600", width: "100%" },
                  { product: "Monitor", revenue: 11970, color: "bg-blue-500", width: "61%" },
                  { product: "Desk Chair", revenue: 11205, color: "bg-green-600", width: "58%" },
                  { product: "Keyboard", revenue: 9480, color: "bg-blue-400", width: "49%" },
                  { product: "Headphones", revenue: 13410, color: "bg-blue-500", width: "69%" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{item.product}</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        ${item.revenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-8">
                      <div
                        className={`${item.color} h-8 rounded-full flex items-center justify-end pr-2 text-white text-xs font-semibold`}
                        style={{ width: item.width }}
                      >
                        {item.width}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                5
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Draw Conclusions
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  ✓ Key Findings
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Electronics dominate:</strong> 71% of revenue comes from electronics category</li>
                  <li>• <strong>Top performer:</strong> Laptops generate the most revenue ($19,485)</li>
                  <li>• <strong>High volume items:</strong> Mice and pens sell in large quantities (150+ units)</li>
                  <li>• <strong>Steady growth:</strong> Sales increased from Q1 to Q2</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  💡 Recommendations
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>1. <strong>Stock more electronics</strong> - especially laptops and monitors</li>
                  <li>2. <strong>Bundle deals</strong> - combine popular items (laptop + mouse)</li>
                  <li>3. <strong>Promote furniture</strong> - has potential but underperforming</li>
                  <li>4. <strong>Seasonal campaigns</strong> - capitalize on quarterly trends</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  🎯 Next Steps
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Collect more data (at least 6-12 months) for better trend analysis</li>
                  <li>• Add customer demographics to understand buyer personas</li>
                  <li>• Track inventory levels to optimize stock management</li>
                  <li>• Implement A/B testing for promotional campaigns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎓 What You Learned
            </h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>✓ How to frame a business problem for data analysis</li>
              <li>✓ Exploring and understanding sample data</li>
              <li>✓ Calculating key metrics (revenue, averages, totals)</li>
              <li>✓ Creating simple visualizations to communicate insights</li>
              <li>✓ Drawing actionable conclusions from data</li>
            </ul>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/tools/data-explorer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Practice with Data Explorer
              </Link>
              <Link
                href="/tools/chart-builder"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Build Your Own Charts
              </Link>
              <Link
                href="/projects"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
