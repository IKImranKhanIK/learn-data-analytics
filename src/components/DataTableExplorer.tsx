"use client";

import { useState, useMemo } from "react";

interface SampleData {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  date: string;
}

const sampleData: SampleData[] = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1299, quantity: 15, date: "2024-01-15" },
  { id: 2, name: "Mouse", category: "Electronics", price: 29, quantity: 150, date: "2024-01-20" },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 249, quantity: 45, date: "2024-02-01" },
  { id: 4, name: "Monitor", category: "Electronics", price: 399, quantity: 30, date: "2024-02-10" },
  { id: 5, name: "Keyboard", category: "Electronics", price: 79, quantity: 120, date: "2024-02-15" },
  { id: 6, name: "Desk Lamp", category: "Furniture", price: 45, quantity: 80, date: "2024-03-01" },
  { id: 7, name: "Notebook", category: "Stationery", price: 5, quantity: 500, date: "2024-03-05" },
  { id: 8, name: "Pen Set", category: "Stationery", price: 15, quantity: 300, date: "2024-03-10" },
  { id: 9, name: "Webcam", category: "Electronics", price: 89, quantity: 60, date: "2024-03-15" },
  { id: 10, name: "Standing Desk", category: "Furniture", price: 599, quantity: 20, date: "2024-03-20" },
  { id: 11, name: "Headphones", category: "Electronics", price: 149, quantity: 90, date: "2024-04-01" },
  { id: 12, name: "Bookshelf", category: "Furniture", price: 179, quantity: 35, date: "2024-04-05" },
];

type SortKey = keyof SampleData;
type SortOrder = "asc" | "desc";

export default function DataTableExplorer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortKey, setSortKey] = useState<SortKey>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const categories = ["all", ...Array.from(new Set(sampleData.map((item) => item.category)))];

  const filteredAndSortedData = useMemo(() => {
    let filtered = sampleData;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter((item) => item.category === categoryFilter);
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });

    return sorted;
  }, [searchTerm, categoryFilter, sortKey, sortOrder]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const totalValue = filteredAndSortedData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const avgPrice = filteredAndSortedData.length > 0
    ? filteredAndSortedData.reduce((sum, item) => sum + item.price, 0) /
      filteredAndSortedData.length
    : 0;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Search
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by name or category..."
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Filter by Category
            </label>
            <select
              id="category"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Items
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {filteredAndSortedData.length}
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Average Price
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              ${avgPrice.toFixed(2)}
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Value
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              ${totalValue.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                {[
                  { key: "id", label: "ID" },
                  { key: "name", label: "Product Name" },
                  { key: "category", label: "Category" },
                  { key: "price", label: "Price" },
                  { key: "quantity", label: "Quantity" },
                  { key: "date", label: "Date" },
                ].map(({ key, label }) => (
                  <th
                    key={key}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                    onClick={() => handleSort(key as SortKey)}
                  >
                    <div className="flex items-center gap-2">
                      {label}
                      {sortKey === key && (
                        <span className="text-blue-600">
                          {sortOrder === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredAndSortedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-8 text-center text-gray-500 dark:text-gray-400"
                  >
                    No results found. Try adjusting your filters.
                  </td>
                </tr>
              ) : (
                filteredAndSortedData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {item.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {item.quantity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                      {item.date}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          About This Dataset
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This sample dataset contains product inventory data with {sampleData.length} items across 3
          categories. Practice filtering, sorting, and exploring the data!
        </p>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
          <li>• Click column headers to sort ascending/descending</li>
          <li>• Use the search box to filter by name or category</li>
          <li>• Select a category to view only those items</li>
          <li>• Watch the statistics update automatically</li>
        </ul>
      </div>
    </div>
  );
}
