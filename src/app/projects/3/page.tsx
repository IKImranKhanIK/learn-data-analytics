"use client";

import Link from "next/link";
import { useState } from "react";

export default function WebTrafficProject() {
  const [timeRange, setTimeRange] = useState("month");

  const trafficData = {
    overview: {
      totalVisitors: 45280,
      pageViews: 128450,
      avgSessionDuration: "3m 24s",
      bounceRate: 42.3,
    },
    topPages: [
      { page: "/home", views: 28450, avgTime: "2m 15s", exitRate: 35 },
      { page: "/products", views: 18920, avgTime: "4m 30s", exitRate: 28 },
      { page: "/blog", views: 15680, avgTime: "5m 45s", exitRate: 22 },
      { page: "/about", views: 12340, avgTime: "1m 50s", exitRate: 65 },
      { page: "/contact", views: 8960, avgTime: "2m 05s", exitRate: 48 },
    ],
    trafficSources: [
      { source: "Organic Search", visitors: 18560, percentage: 41 },
      { source: "Direct", visitors: 13580, percentage: 30 },
      { source: "Social Media", visitors: 7940, percentage: 17.5 },
      { source: "Referral", visitors: 3620, percentage: 8 },
      { source: "Email", visitors: 1580, percentage: 3.5 },
    ],
    deviceBreakdown: [
      { device: "Mobile", percentage: 58, sessions: 26262 },
      { device: "Desktop", percentage: 35, sessions: 15848 },
      { device: "Tablet", percentage: 7, sessions: 3170 },
    ],
    conversionFunnel: [
      { step: "Landing Page", visitors: 45280, percentage: 100 },
      { step: "Product View", visitors: 18920, percentage: 41.8 },
      { step: "Add to Cart", visitors: 5680, percentage: 12.5 },
      { step: "Checkout", visitors: 2840, percentage: 6.3 },
      { step: "Purchase", visitors: 1362, percentage: 3.0 },
    ],
  };

  const conversionRate = ((trafficData.conversionFunnel[4].visitors / trafficData.conversionFunnel[0].visitors) * 100).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="mb-8">
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
              Project 3
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Website Traffic Analysis
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Analyze web analytics to understand user behavior and optimize conversion rates
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Total Visitors
            </div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {trafficData.overview.totalVisitors.toLocaleString()}
            </div>
            <div className="text-xs text-green-600 dark:text-green-400">
              ↑ 12.5% vs last month
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Page Views
            </div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
              {trafficData.overview.pageViews.toLocaleString()}
            </div>
            <div className="text-xs text-green-600 dark:text-green-400">
              ↑ 8.3% vs last month
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Avg Session Duration
            </div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
              {trafficData.overview.avgSessionDuration}
            </div>
            <div className="text-xs text-green-600 dark:text-green-400">
              ↑ 15s vs last month
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Bounce Rate
            </div>
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
              {trafficData.overview.bounceRate}%
            </div>
            <div className="text-xs text-green-600 dark:text-green-400">
              ↓ 3.2% vs last month
            </div>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Traffic Sources
          </h2>
          <div className="space-y-4">
            {trafficData.trafficSources.map((source) => (
              <div key={source.source}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {source.source}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {source.visitors.toLocaleString()} ({source.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Top Performing Pages
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Page
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Views
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Avg Time
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Exit Rate
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {trafficData.topPages.map((page, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">
                      {page.page}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-700 dark:text-gray-300">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right text-gray-700 dark:text-gray-300">
                      {page.avgTime}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          page.exitRate > 50
                            ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                            : page.exitRate > 35
                            ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200"
                            : "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                        }`}
                      >
                        {page.exitRate}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Device Breakdown
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {trafficData.deviceBreakdown.map((device) => (
              <div
                key={device.device}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg"
              >
                <div className="text-4xl mb-3">
                  {device.device === "Mobile" ? "📱" : device.device === "Desktop" ? "💻" : "📲"}
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {device.percentage}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {device.device}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  {device.sessions.toLocaleString()} sessions
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Conversion Funnel
          </h2>
          <div className="space-y-4">
            {trafficData.conversionFunnel.map((step, index) => {
              const width = step.percentage;
              const dropOff = index > 0
                ? trafficData.conversionFunnel[index - 1].visitors - step.visitors
                : 0;

              return (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {step.step}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-900 dark:text-white font-bold">
                        {step.visitors.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {step.percentage.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-8 overflow-hidden">
                      <div
                        className={`h-8 rounded-full flex items-center justify-end pr-4 text-white text-sm font-semibold transition-all ${
                          index === 0
                            ? "bg-blue-600"
                            : index === 1
                            ? "bg-blue-500"
                            : index === 2
                            ? "bg-green-500"
                            : index === 3
                            ? "bg-yellow-500"
                            : "bg-purple-600"
                        }`}
                        style={{ width: `${width}%` }}
                      >
                        {width > 15 && `${width.toFixed(1)}%`}
                      </div>
                    </div>
                  </div>
                  {dropOff > 0 && (
                    <div className="text-xs text-red-600 dark:text-red-400 mt-1">
                      ↓ Drop-off: {dropOff.toLocaleString()} users ({((dropOff / trafficData.conversionFunnel[index - 1].visitors) * 100).toFixed(1)}%)
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900 dark:text-white">
                Overall Conversion Rate
              </span>
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                {conversionRate}%
              </span>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            📊 Key Insights
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ✓ Strong Organic Performance
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Organic search drives 41% of traffic - SEO strategy is working well.
                Continue investing in content marketing.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ⚠️ High Exit Rate on About Page
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                65% exit rate suggests the about page isn't converting visitors. Add
                CTAs and link to products.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                📱 Mobile-First Audience
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                58% of traffic is mobile. Ensure checkout process is optimized for
                mobile devices.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4 bg-red-50 dark:bg-red-900/20 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                🚨 Cart Abandonment Issue
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                70% drop-off from Add to Cart to Checkout. Investigate checkout friction
                points and consider abandoned cart emails.
              </p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            💡 Action Items
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Immediate Actions
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• A/B test simplified checkout process</li>
                <li>• Add exit-intent popup on About page</li>
                <li>• Implement abandoned cart email sequence</li>
                <li>• Optimize mobile checkout experience</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">📈</span>
                Growth Opportunities
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Increase social media investment (only 17.5%)</li>
                <li>• Create content targeting blog readers</li>
                <li>• Set up retargeting campaigns for cart abandoners</li>
                <li>• Improve product page engagement</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              href="/tools/data-explorer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Analyze More Data
            </Link>
            <Link
              href="/tools/chart-builder"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Create Custom Charts
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
