"use client";

import Link from "next/link";
import { useState } from "react";

export default function CustomerSegmentationProject() {
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);

  const segments = [
    {
      id: "high-value",
      name: "High-Value Loyalists",
      count: 245,
      avgSpend: 2850,
      frequency: 8.5,
      color: "bg-purple-500",
      characteristics: [
        "Purchase 8+ times per year",
        "Average order value $2,850",
        "High engagement with premium products",
        "Low churn risk (95% retention)",
      ],
      recommendations: [
        "VIP loyalty program with exclusive perks",
        "Early access to new product launches",
        "Personalized product recommendations",
        "Dedicated account manager",
      ],
    },
    {
      id: "frequent-buyers",
      name: "Frequent Buyers",
      count: 512,
      avgSpend: 850,
      frequency: 5.2,
      color: "bg-blue-500",
      characteristics: [
        "Purchase 4-6 times per year",
        "Average order value $850",
        "Mix of regular and premium items",
        "Moderate retention (75%)",
      ],
      recommendations: [
        "Bundle deals and volume discounts",
        "Subscription model offerings",
        "Cross-sell complementary products",
        "Seasonal promotions",
      ],
    },
    {
      id: "occasional",
      name: "Occasional Shoppers",
      count: 1024,
      avgSpend: 320,
      frequency: 2.1,
      color: "bg-green-500",
      characteristics: [
        "Purchase 1-3 times per year",
        "Average order value $320",
        "Price-sensitive buyers",
        "Lower engagement (45% retention)",
      ],
      recommendations: [
        "Re-engagement email campaigns",
        "Limited-time discount offers",
        "Free shipping thresholds",
        "Product education content",
      ],
    },
    {
      id: "at-risk",
      name: "At-Risk Customers",
      count: 187,
      avgSpend: 1200,
      frequency: 0.8,
      color: "bg-orange-500",
      characteristics: [
        "No purchase in 6+ months",
        "Previously high spenders",
        "Decreasing engagement",
        "High churn risk",
      ],
      recommendations: [
        "Win-back campaigns with special offers",
        "Survey to understand dissatisfaction",
        "Personalized \"we miss you\" messaging",
        "Incentive to make next purchase",
      ],
    },
    {
      id: "churned",
      name: "Churned Customers",
      count: 89,
      avgSpend: 450,
      frequency: 0,
      color: "bg-red-500",
      characteristics: [
        "No purchase in 12+ months",
        "Low previous engagement",
        "Unresponsive to campaigns",
        "Lost to competitors",
      ],
      recommendations: [
        "Remove from active marketing to reduce costs",
        "Final reactivation attempt with strong incentive",
        "Analyze reasons for churn",
        "Focus resources on retainable segments",
      ],
    },
  ];

  const totalCustomers = segments.reduce((sum, seg) => sum + seg.count, 0);
  const totalRevenue = segments.reduce((sum, seg) => sum + seg.count * seg.avgSpend, 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-6xl">
        <div className="mb-6 sm:mb-8">
          <Link
            href="/projects"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full">
              Intermediate
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Project 2
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Customer Segmentation Analysis
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Group customers by behavior and demographics to create targeted marketing
            strategies
          </p>
        </div>

        {/* Overview */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-8 border-l-4 border-purple-500">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
            📋 Business Context
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You're analyzing customer data for an e-commerce company. The marketing team
            wants to understand customer segments to create personalized campaigns and
            improve retention.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-600 dark:text-gray-400 mb-1">
                Total Customers
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {totalCustomers.toLocaleString()}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-600 dark:text-gray-400 mb-1">
                Total Revenue
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                ${(totalRevenue / 1000000).toFixed(1)}M
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-gray-600 dark:text-gray-400 mb-1">
                Segments
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                5 Groups
              </div>
            </div>
          </div>
        </div>

        {/* Segmentation Overview */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Customer Segments
          </h2>

          <div className="mb-6 sm:mb-8">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Distribution by Segment
            </h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-8 flex overflow-hidden">
              {segments.map((segment) => {
                const percentage = (segment.count / totalCustomers) * 100;
                return (
                  <div
                    key={segment.id}
                    className={`${segment.color} flex items-center justify-center text-white text-xs font-semibold hover:opacity-80 transition-opacity cursor-pointer`}
                    style={{ width: `${percentage}%` }}
                    onClick={() => setSelectedSegment(segment.id)}
                    title={`${segment.name}: ${percentage.toFixed(1)}%`}
                  >
                    {percentage > 8 && `${percentage.toFixed(0)}%`}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3 mt-4 text-xs">
              {segments.map((segment) => (
                <div key={segment.id} className="flex items-center gap-2">
                  <div className={`w-3 h-3 ${segment.color} rounded`}></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {segment.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {segments.slice(0, 3).map((segment) => (
              <div
                key={segment.id}
                className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer"
                onClick={() => setSelectedSegment(segment.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 ${segment.color} rounded-full`}></div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {segment.name}
                  </h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Customers:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {segment.count}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Avg Spend:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      ${segment.avgSpend}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Frequency:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {segment.frequency}x/yr
                    </span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Segment View */}
        {selectedSegment && (
          <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg mb-8 border-2 border-blue-500">
            {(() => {
              const segment = segments.find((s) => s.id === selectedSegment)!;
              return (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 ${segment.color} rounded-full`}></div>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {segment.name}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedSegment(null)}
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      ✕ Close
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                        📊 Key Characteristics
                      </h3>
                      <ul className="space-y-2">
                        {segment.characteristics.map((char, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{char}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Segment Metrics
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">
                              Total Customers:
                            </span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {segment.count}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">
                              % of Customer Base:
                            </span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {((segment.count / totalCustomers) * 100).toFixed(1)}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">
                              Revenue Generated:
                            </span>
                            <span className="font-semibold text-gray-900 dark:text-white">
                              ${((segment.count * segment.avgSpend) / 1000).toFixed(0)}K
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                        💡 Marketing Recommendations
                      </h3>
                      <ul className="space-y-3">
                        {segment.recommendations.map((rec, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                          >
                            <span className="text-green-600 font-bold">{i + 1}</span>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        )}

        {/* Key Insights */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            🎯 Strategic Insights
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 dark:bg-purple-900/20 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                High-Value Focus
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                High-Value Loyalists represent only 12% of customers but generate 35% of
                revenue. Prioritize retention of this segment with VIP programs.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                At-Risk Alert
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                187 previously high-value customers are at risk of churning. Immediate
                win-back campaigns could recover $224K in potential lost revenue.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Growth Opportunity
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Occasional Shoppers (50% of base) could be converted to Frequent Buyers
                through targeted engagement, potentially doubling their lifetime value.
              </p>
            </div>
          </div>
        </div>

        {/* Action Plan */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            📋 Recommended Action Plan
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Immediate: Launch At-Risk Win-Back Campaign
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Email 187 at-risk customers with 20% discount + free shipping offer
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  This Month: Implement VIP Loyalty Program
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Exclusive perks for High-Value Loyalists to increase retention
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Ongoing: Occasional Shopper Engagement
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Monthly email series with product education and limited-time offers
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/tools/data-explorer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors"
            >
              Explore Customer Data
            </Link>
            <Link
              href="/tools/chart-builder"
              className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors"
            >
              Visualize Segments
            </Link>
            <Link
              href="/projects"
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md transition-colors"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
