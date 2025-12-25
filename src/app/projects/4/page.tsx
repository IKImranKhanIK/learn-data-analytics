"use client";

import Link from "next/link";
import { useState } from "react";

export default function FinancialDashboardProject() {
  const [selectedQuarter, setSelectedQuarter] = useState("Q4");

  const financialData = {
    kpis: {
      revenue: 2850000,
      expenses: 1920000,
      netProfit: 930000,
      profitMargin: 32.6,
      revenueGrowth: 15.3,
      customerCount: 1245,
    },
    quarterlyRevenue: [
      { quarter: "Q1", revenue: 2200000, expenses: 1650000, profit: 550000 },
      { quarter: "Q2", revenue: 2450000, expenses: 1780000, profit: 670000 },
      { quarter: "Q3", revenue: 2650000, expenses: 1850000, profit: 800000 },
      { quarter: "Q4", revenue: 2850000, expenses: 1920000, profit: 930000 },
    ],
    expenseBreakdown: [
      { category: "Salaries", amount: 980000, percentage: 51 },
      { category: "Marketing", amount: 384000, percentage: 20 },
      { category: "Operations", amount: 288000, percentage: 15 },
      { category: "Technology", amount: 192000, percentage: 10 },
      { category: "Other", amount: 76000, percentage: 4 },
    ],
    revenueByProduct: [
      { product: "Enterprise Plan", revenue: 1425000, customers: 125, avgValue: 11400 },
      { product: "Professional Plan", revenue: 855000, customers: 380, avgValue: 2250 },
      { product: "Starter Plan", revenue: 427500, customers: 570, avgValue: 750 },
      { product: "Add-ons", revenue: 142500, customers: 170, avgValue: 838 },
    ],
    cashFlow: {
      operating: 1150000,
      investing: -320000,
      financing: -180000,
      netCashFlow: 650000,
    },
  };

  const currentQData = financialData.quarterlyRevenue.find(q => q.quarter === selectedQuarter)!;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full">
              Advanced
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Project 4
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Financial Performance Dashboard
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive financial analysis tracking revenue, expenses, and key performance indicators
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white">
            <div className="text-sm opacity-90 mb-2">Revenue</div>
            <div className="text-2xl font-bold mb-1">
              ${(financialData.kpis.revenue / 1000000).toFixed(2)}M
            </div>
            <div className="text-xs opacity-75">↑ {financialData.kpis.revenueGrowth}% QoQ</div>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-lg shadow-lg text-white">
            <div className="text-sm opacity-90 mb-2">Net Profit</div>
            <div className="text-2xl font-bold mb-1">
              ${(financialData.kpis.netProfit / 1000).toFixed(0)}K
            </div>
            <div className="text-xs opacity-75">Margin: {financialData.kpis.profitMargin}%</div>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-lg shadow-lg text-white">
            <div className="text-sm opacity-90 mb-2">Expenses</div>
            <div className="text-2xl font-bold mb-1">
              ${(financialData.kpis.expenses / 1000000).toFixed(2)}M
            </div>
            <div className="text-xs opacity-75">67.4% of revenue</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-lg shadow-lg text-white">
            <div className="text-sm opacity-90 mb-2">Profit Margin</div>
            <div className="text-2xl font-bold mb-1">{financialData.kpis.profitMargin}%</div>
            <div className="text-xs opacity-75">Industry avg: 28%</div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-lg shadow-lg text-white">
            <div className="text-sm opacity-90 mb-2">Customers</div>
            <div className="text-2xl font-bold mb-1">{financialData.kpis.customerCount}</div>
            <div className="text-xs opacity-75">↑ 142 this quarter</div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-6 rounded-lg shadow-lg text-white">
            <div className="text-sm opacity-90 mb-2">ARPC</div>
            <div className="text-2xl font-bold mb-1">
              ${(financialData.kpis.revenue / financialData.kpis.customerCount).toFixed(0)}
            </div>
            <div className="text-xs opacity-75">Avg per customer</div>
          </div>
        </div>

        {/* Quarterly Performance */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Quarterly Performance
            </h2>
            <div className="flex gap-2">
              {financialData.quarterlyRevenue.map((q) => (
                <button
                  key={q.quarter}
                  onClick={() => setSelectedQuarter(q.quarter)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    selectedQuarter === q.quarter
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {q.quarter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Revenue</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                ${(currentQData.revenue / 1000000).toFixed(2)}M
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Expenses</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                ${(currentQData.expenses / 1000000).toFixed(2)}M
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Profit</div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                ${(currentQData.profit / 1000).toFixed(0)}K
              </div>
            </div>
          </div>

          {/* Quarterly Trend */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-white">Year-over-Year Trend</h3>
            {financialData.quarterlyRevenue.map((quarter) => {
              const maxRevenue = Math.max(...financialData.quarterlyRevenue.map(q => q.revenue));
              const revenuePercent = (quarter.revenue / maxRevenue) * 100;
              const profitPercent = (quarter.profit / maxRevenue) * 100;

              return (
                <div key={quarter.quarter} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {quarter.quarter} 2024
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      ${(quarter.revenue / 1000000).toFixed(2)}M
                    </span>
                  </div>
                  <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden">
                    <div
                      className="absolute bg-blue-600 h-6 rounded-full"
                      style={{ width: `${revenuePercent}%` }}
                    ></div>
                    <div
                      className="absolute bg-green-600 h-6 rounded-full"
                      style={{ width: `${profitPercent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
            <div className="flex gap-4 text-xs mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">Profit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Expense Breakdown & Revenue by Product */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Expense Breakdown */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Expense Breakdown
            </h2>
            <div className="space-y-4">
              {financialData.expenseBreakdown.map((expense) => (
                <div key={expense.category}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {expense.category}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      ${(expense.amount / 1000).toFixed(0)}K ({expense.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${
                        expense.category === "Salaries"
                          ? "bg-purple-600"
                          : expense.category === "Marketing"
                          ? "bg-blue-600"
                          : expense.category === "Operations"
                          ? "bg-green-600"
                          : expense.category === "Technology"
                          ? "bg-orange-600"
                          : "bg-gray-600"
                      }`}
                      style={{ width: `${expense.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
                <span>Total Expenses</span>
                <span>${(financialData.kpis.expenses / 1000000).toFixed(2)}M</span>
              </div>
            </div>
          </div>

          {/* Revenue by Product */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Revenue by Product
            </h2>
            <div className="space-y-4">
              {financialData.revenueByProduct.map((product, index) => (
                <div
                  key={product.product}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {product.product}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {product.customers} customers • ${product.avgValue} avg
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900 dark:text-white">
                        ${(product.revenue / 1000).toFixed(0)}K
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {((product.revenue / financialData.kpis.revenue) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        index === 0
                          ? "bg-blue-600"
                          : index === 1
                          ? "bg-green-600"
                          : index === 2
                          ? "bg-purple-600"
                          : "bg-orange-600"
                      }`}
                      style={{
                        width: `${(product.revenue / financialData.kpis.revenue) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cash Flow Analysis */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Cash Flow Analysis
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Operating Activities
              </div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                +${(financialData.cashFlow.operating / 1000).toFixed(0)}K
              </div>
            </div>
            <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Investing Activities
              </div>
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                ${(financialData.cashFlow.investing / 1000).toFixed(0)}K
              </div>
            </div>
            <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Financing Activities
              </div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                ${(financialData.cashFlow.financing / 1000).toFixed(0)}K
              </div>
            </div>
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-500">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Net Cash Flow
              </div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                +${(financialData.cashFlow.netCashFlow / 1000).toFixed(0)}K
              </div>
            </div>
          </div>
        </div>

        {/* Financial Health Indicators */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📊 Financial Health Indicators
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✓ Strong Profit Margin
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                32.6% profit margin exceeds industry average of 28%, indicating efficient operations and pricing power.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✓ Consistent Growth
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                15.3% quarter-over-quarter revenue growth demonstrates strong market demand and scalability.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✓ Positive Cash Flow
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Strong operating cash flow of $1.15M provides runway for growth investments and expansion.
              </p>
            </div>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🎯 Strategic Recommendations
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">📈</span>
                Growth Initiatives
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">1.</span>
                  <span>Invest in upselling Starter → Professional (high conversion potential)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">2.</span>
                  <span>Expand Enterprise sales team (highest ARPC at $11,400)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">3.</span>
                  <span>Increase marketing budget from 20% to 25% given strong ROI</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">💰</span>
                Cost Optimization
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>Automate operations to reduce 15% cost (currently $288K)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>Optimize technology stack to decrease expenses by 5%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Negotiate vendor contracts in Q1 for 8-10% savings</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              💡 Projected Impact (Next Quarter)
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-gray-600 dark:text-gray-400 mb-1">Revenue Target</div>
                <div className="text-xl font-bold text-green-600 dark:text-green-400">
                  $3.28M
                </div>
                <div className="text-xs text-gray-500">+15% growth</div>
              </div>
              <div>
                <div className="text-gray-600 dark:text-gray-400 mb-1">Cost Savings</div>
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  $96K
                </div>
                <div className="text-xs text-gray-500">5% reduction</div>
              </div>
              <div>
                <div className="text-gray-600 dark:text-gray-400 mb-1">Net Profit</div>
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                  $1.18M
                </div>
                <div className="text-xs text-gray-500">27% increase</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/tools/statistics"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Calculate Metrics
            </Link>
            <Link
              href="/tools/chart-builder"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Visualize Data
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
  );
}
