"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Editor from "@monaco-editor/react";

interface Section {
  id: number;
  title: string;
  explain: string;
  demonstrate: string;
  demonstrateCode: string;
  yourTurn: string;
  starterCode: string;
  solution: string;
  hint?: string;
  checkExplanation: string;
}

const projects: Record<string, { title: string; description: string; sections: Section[] }> = {
  "1": {
    title: "Build Your First Sales Dashboard",
    description: "Start from absolutely nothing and build a complete, working sales analytics dashboard",
    sections: [
      {
        id: 1,
        title: "Section 1: Define Your Goal",
        explain: `<h3 class="font-bold text-lg mb-2">📋 What We're Building</h3>
<p class="mb-4">We're going to build a <strong>Sales Analytics Dashboard</strong> - a program that analyzes sales data and shows:</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li>Total sales revenue</li>
  <li>Average sale amount</li>
  <li>Highest and lowest sales</li>
  <li>Number of sales</li>
  <li>Performance insights</li>
</ul>
<p class="mb-4"><strong>Why this matters:</strong> This is exactly what businesses use every day to understand their performance. You're building a real analytics tool!</p>
<p><strong>What you'll learn:</strong> By the end, you'll know how to take raw data and turn it into actionable insights.</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Here's What the Final Result Looks Like</h3>
<p class="mb-2">When you run your finished dashboard, it will output something like this:</p>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
=== SALES ANALYTICS DASHBOARD ===

Total Revenue: $12,950
Number of Sales: 8
Average Sale: $1,618.75
Highest Sale: $2,100
Lowest Sale: $1,200

Performance: EXCELLENT
Your average sale exceeds $1,500!
</pre>
<p class="mb-4">Pretty cool, right? Let's build this step by step!</p>`,
        demonstrateCode: `# This is what we're building toward
# Don't worry about understanding this yet!

sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]

total = sum(sales_data)
average = total / len(sales_data)
highest = max(sales_data)
lowest = min(sales_data)

print("=== SALES ANALYTICS DASHBOARD ===")
print(f"Total Revenue: \${total}")
print(f"Average Sale: \${average:.2f}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Run the Demo</h3>
<p class="mb-4">Click the <strong>"Run Code"</strong> button to see the demo dashboard in action.</p>
<p class="mb-4">Don't worry if you don't understand the code yet - that's what we're going to learn!</p>
<p class="text-sm text-gray-600 dark:text-gray-400">Just click Run and see what happens. This is what you'll be able to build yourself by the end.</p>`,
        starterCode: `# Demo: Sales Analytics Dashboard
# Just click "Run Code" to see it work!

sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]

total = sum(sales_data)
average = total / len(sales_data)
highest = max(sales_data)
lowest = min(sales_data)

print("=== SALES ANALYTICS DASHBOARD ===")
print(f"Total Revenue: \\\${total}")
print(f"Number of Sales: {len(sales_data)}")
print(f"Average Sale: \\\${average:.2f}")
print(f"Highest Sale: \\\${highest}")
print(f"Lowest Sale: \\\${lowest}")
`,
        solution: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]
total = sum(sales_data)
average = total / len(sales_data)
highest = max(sales_data)
lowest = min(sales_data)
print("=== SALES ANALYTICS DASHBOARD ===")
print(f"Total Revenue: \\\${total}")
print(f"Number of Sales: \\\${len(sales_data)}")
print(f"Average Sale: \\\${average:.2f}")
print(f"Highest Sale: \\\${highest}")
print(f"Lowest Sale: \\\${lowest}")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ What Just Happened?</h3>
<p class="mb-4">You just ran a real analytics dashboard! Here's what the code did:</p>
<ul class="list-disc ml-6 space-y-2">
  <li><strong>sales_data</strong> - stored 8 sales amounts in a list</li>
  <li><strong>sum()</strong> - added them all together for total revenue</li>
  <li><strong>len()</strong> - counted how many sales there were</li>
  <li><strong>max() and min()</strong> - found highest and lowest sales</li>
  <li><strong>print()</strong> - displayed the results in a nice format</li>
</ul>
<p class="mt-4">Now let's build this ourselves, step by step!</p>`,
      },
      {
        id: 2,
        title: "Section 2: Store Your Sales Data",
        explain: `<h3 class="font-bold text-lg mb-2">📊 Why We Need a List</h3>
<p class="mb-4">Imagine you have 8 sales to track. You COULD do this:</p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
sale1 = 1200
sale2 = 1500
sale3 = 1800
... (5 more variables!)
</pre>
<p class="mb-4">But that's messy and hard to work with. Instead, we use a <strong>LIST</strong> - one variable that holds multiple values:</p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
sales = [1200, 1500, 1800, ...]
</pre>
<p class="mb-4"><strong>A list uses:</strong></p>
<ul class="list-disc ml-6 space-y-1">
  <li>Square brackets <code>[]</code></li>
  <li>Commas to separate values</li>
  <li>Can hold as many items as you want</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 How to Create a List</h3>
<p class="mb-4">Here's how you create a list of sales numbers:</p>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
# Create a list of sales
sales = [1200, 1500, 1800]

# Print the list
print(sales)

# Output: [1200, 1500, 1800]
</pre>
<p class="mb-4">That's it! The variable <code>sales</code> now holds all three numbers.</p>`,
        demonstrateCode: `# Example: Creating a list
sales = [1200, 1500, 1800]
print(sales)
print(f"We have {len(sales)} sales")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Create Your Sales List</h3>
<p class="mb-4">Now YOU create a list of sales data!</p>
<p class="mb-4"><strong>Task:</strong> Create a variable called <code>sales_data</code> with these 8 sales amounts:</p>
<p class="mb-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450
</p>
<p class="mb-4">Then print it to see your list!</p>
<p class="text-sm text-gray-600 dark:text-gray-400"><strong>Hint:</strong> Use square brackets and commas to separate the numbers.</p>`,
        starterCode: `# Your task: Create a list called sales_data
# with these numbers: 1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450

sales_data = []  # Replace [] with your numbers

# Print your list
print(sales_data)
print(f"Number of sales: {len(sales_data)}")
`,
        solution: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]
print(sales_data)
print(f"Number of sales: {len(sales_data)}")`,
        hint: "Put the numbers inside the brackets, separated by commas: [1200, 1500, 1800, ...]",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Perfect! You Just Stored Data</h3>
<p class="mb-4">You created your first data structure! Here's what you did:</p>
<ul class="list-disc ml-6 space-y-2">
  <li><code>sales_data =</code> - created a variable</li>
  <li><code>[1200, 1500, ...]</code> - put 8 numbers in a list</li>
  <li><code>len(sales_data)</code> - counted how many items (returns 8)</li>
</ul>
<p class="mt-4"><strong>Why this matters:</strong> In real jobs, you might have thousands of sales. Lists let you handle ANY amount of data with the same code!</p>`,
      },
      {
        id: 3,
        title: "Section 3: Calculate Total Revenue",
        explain: `<h3 class="font-bold text-lg mb-2">💰 Calculate Total Sales</h3>
<p class="mb-4">Now that we have our sales data, the first thing any business wants to know is: <strong>"What's our total revenue?"</strong></p>
<p class="mb-4">We need to add all the numbers together:</p>
<p class="mb-4 bg-gray-100 dark:bg-gray-800 p-3 rounded">
1200 + 1500 + 1800 + 1350 + 1900 + 1650 + 2100 + 1450 = ?
</p>
<p class="mb-4">Python has a built-in function for this: <code>sum()</code></p>
<p class="mb-4"><strong>How sum() works:</strong></p>
<ul class="list-disc ml-6 space-y-1">
  <li>Takes a list of numbers</li>
  <li>Adds them all together</li>
  <li>Returns the total</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Using sum() Function</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
# Example: Calculate total
numbers = [100, 200, 300]
total = sum(numbers)
print(f"Total: \${total}")

# Output: Total: $600
</pre>
<p class="mb-4">It's that simple! <code>sum()</code> does all the math for you.</p>`,
        demonstrateCode: `numbers = [100, 200, 300]
total = sum(numbers)
print(f"Total: \${total}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate Total Revenue</h3>
<p class="mb-4">Use the <code>sum()</code> function to calculate the total of your sales_data!</p>
<p class="mb-4"><strong>Steps:</strong></p>
<ol class="list-decimal ml-6 space-y-1">
  <li>Use sum(sales_data) to get the total</li>
  <li>Store it in a variable called <code>total_revenue</code></li>
  <li>Print it with a nice message</li>
</ol>`,
        starterCode: `# Your sales data from before
sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]

# Calculate total revenue
# Replace 0 with the correct code
total_revenue = 0

print(f"Total Revenue: \\\${total_revenue}")
`,
        solution: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]
total_revenue = sum(sales_data)
print(f"Total Revenue: \\\${total_revenue}")`,
        hint: "Use: total_revenue = sum(sales_data)",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Excellent! You Calculated Revenue</h3>
<p class="mb-4">You just calculated total revenue: <strong>$12,950</strong>!</p>
<p class="mb-4">Here's what happened:</p>
<ul class="list-disc ml-6 space-y-2">
  <li><code>sum(sales_data)</code> - added all 8 numbers together</li>
  <li><code>total_revenue =</code> - stored the result (12950)</li>
  <li><code>f"\${total_revenue}"</code> - formatted it with a dollar sign</li>
</ul>
<p class="mt-4">This is REAL data analytics! You're already doing what analysts do every day.</p>`,
      },
      {
        id: 4,
        title: "Section 4: Find Average Sale Amount",
        explain: `<h3 class="font-bold text-lg mb-2">📊 Calculate the Average</h3>
<p class="mb-4">The average tells you the "typical" sale amount. It's calculated by:</p>
<p class="mb-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded font-mono">
Average = Total ÷ Count
</p>
<p class="mb-4"><strong>Why averages matter:</strong> They help you understand normal performance and spot unusual sales.</p>
<p class="mb-4">We already have:</p>
<ul class="list-disc ml-6 space-y-1">
  <li><code>total_revenue</code> - the total (12,950)</li>
  <li><code>len(sales_data)</code> - the count (8 sales)</li>
</ul>
<p class="mb-4">So: Average = 12,950 ÷ 8 = 1,618.75</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Calculating Average</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
# Example: Calculate average
numbers = [10, 20, 30]
total = sum(numbers)           # 60
count = len(numbers)           # 3
average = total / count        # 60 / 3 = 20

print(f"Average: {average}")
# Output: Average: 20
</pre>`,
        demonstrateCode: `numbers = [10, 20, 30]
total = sum(numbers)
count = len(numbers)
average = total / count
print(f"Average: {average}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate Average Sale</h3>
<p class="mb-4">Calculate the average sale amount!</p>
<p class="mb-4"><strong>Formula:</strong> total_revenue ÷ number of sales</p>
<p class="mb-4">Use <code>len(sales_data)</code> to get the count.</p>`,
        starterCode: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]
total_revenue = sum(sales_data)

# Calculate average
# Replace 0 with the correct formula
average_sale = 0

print(f"Total Revenue: \\\${total_revenue}")
print(f"Number of Sales: {len(sales_data)}")
print(f"Average Sale: \\\${average_sale:.2f}")
`,
        solution: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]
total_revenue = sum(sales_data)
average_sale = total_revenue / len(sales_data)
print(f"Total Revenue: \\\${total_revenue}")
print(f"Number of Sales: \\\${len(sales_data)}")
print(f"Average Sale: \\\${average_sale:.2f}")`,
        hint: "Divide total_revenue by len(sales_data): total_revenue / len(sales_data)",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Great Work! You Calculated the Average</h3>
<p class="mb-4">Your average sale is <strong>$1,618.75</strong>!</p>
<p class="mb-4">Notice the <code>:.2f</code> in the print statement? That formats the number to show exactly 2 decimal places - perfect for money!</p>
<p class="mt-4"><strong>Business insight:</strong> An average of $1,618.75 means your typical sale is pretty strong!</p>`,
      },
      {
        id: 5,
        title: "Section 5: Find Highest and Lowest Sales",
        explain: `<h3 class="font-bold text-lg mb-2">📈 Find Best and Worst Performance</h3>
<p class="mb-4">Every manager wants to know:</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li><strong>Highest sale:</strong> What's our best performance?</li>
  <li><strong>Lowest sale:</strong> Where are we underperforming?</li>
</ul>
<p class="mb-4">Python has built-in functions for this:</p>
<ul class="list-disc ml-6 space-y-1">
  <li><code>max()</code> - finds the largest number</li>
  <li><code>min()</code> - finds the smallest number</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Using max() and min()</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
# Example
scores = [85, 92, 78, 95, 88]

highest = max(scores)  # 95
lowest = min(scores)   # 78

print(f"Highest: {highest}")
print(f"Lowest: {lowest}")
</pre>`,
        demonstrateCode: `scores = [85, 92, 78, 95, 88]
highest = max(scores)
lowest = min(scores)
print(f"Highest: {highest}")
print(f"Lowest: {lowest}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Find Highest and Lowest Sales</h3>
<p class="mb-4">Find your best and worst sales!</p>
<p class="mb-4">Use <code>max(sales_data)</code> and <code>min(sales_data)</code></p>`,
        starterCode: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]

# Find highest and lowest
highest_sale = 0  # Replace with max()
lowest_sale = 0   # Replace with min()

print(f"Highest Sale: \\\${highest_sale}")
print(f"Lowest Sale: \\\${lowest_sale}")
print(f"Range: \\\${highest_sale - lowest_sale}")
`,
        solution: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]
highest_sale = max(sales_data)
lowest_sale = min(sales_data)
print(f"Highest Sale: \\\${highest_sale}")
print(f"Lowest Sale: \\\${lowest_sale}")
print(f"Range: \\\${highest_sale - lowest_sale}")`,
        hint: "Use: highest_sale = max(sales_data) and lowest_sale = min(sales_data)",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Perfect! You Found the Range</h3>
<p class="mb-4">Your results:</p>
<ul class="list-disc ml-6 space-y-1">
  <li><strong>Highest:</strong> $2,100 (your best sale!)</li>
  <li><strong>Lowest:</strong> $1,200 (room for improvement)</li>
  <li><strong>Range:</strong> $900 (the spread in your sales)</li>
</ul>
<p class="mt-4">This tells you there's some variation in sales - useful for planning!</p>`,
      },
      {
        id: 6,
        title: "Section 6: Build the Complete Dashboard",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Put It All Together</h3>
<p class="mb-4">Now let's combine everything into one complete dashboard!</p>
<p class="mb-4">We'll display:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>✓ Total revenue</li>
  <li>✓ Number of sales</li>
  <li>✓ Average sale</li>
  <li>✓ Highest sale</li>
  <li>✓ Lowest sale</li>
</ul>
<p class="mb-4">With nice formatting to make it look professional!</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Professional Formatting</h3>
<p class="mb-4">Use a header and separators to make it look good:</p>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
print("=" * 35)
print("  SALES ANALYTICS DASHBOARD")
print("=" * 35)
</pre>
<p class="mb-4">The <code>"=" * 35</code> creates a line of 35 equal signs!</p>`,
        demonstrateCode: `print("=" * 35)
print("  SALES ANALYTICS DASHBOARD")
print("=" * 35)
print("Total: $12,950")
print("Average: $1,618.75")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Create the Full Dashboard</h3>
<p class="mb-4">Combine all your calculations into one beautiful dashboard!</p>
<p class="mb-4">The code is provided - just run it to see your complete analytics tool!</p>`,
        starterCode: `# COMPLETE SALES ANALYTICS DASHBOARD

sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]

# Calculate all metrics
total_revenue = sum(sales_data)
num_sales = len(sales_data)
average_sale = total_revenue / num_sales
highest_sale = max(sales_data)
lowest_sale = min(sales_data)

# Display the dashboard
print("=" * 40)
print("     SALES ANALYTICS DASHBOARD")
print("=" * 40)
print()
print(f"📊 Total Revenue: \\\${total_revenue:,}")
print(f"📈 Number of Sales: {num_sales}")
print(f"💰 Average Sale: \\\${average_sale:,.2f}")
print(f"🏆 Highest Sale: \\\${highest_sale}")
print(f"📉 Lowest Sale: \\\${lowest_sale}")
print(f"📏 Sales Range: \\\${highest_sale - lowest_sale}")
print()
print("=" * 40)

# Performance insight
if average_sale > 1500:
    print("✅ EXCELLENT: Average sale exceeds target!")
else:
    print("⚠️  REVIEW: Average sale below $1,500 target")
`,
        solution: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]
total_revenue = sum(sales_data)
num_sales = len(sales_data)
average_sale = total_revenue / num_sales
highest_sale = max(sales_data)
lowest_sale = min(sales_data)
print("=" * 40)
print("     SALES ANALYTICS DASHBOARD")
print("=" * 40)
print()
print(f"📊 Total Revenue: \\\${total_revenue:,}")
print(f"📈 Number of Sales: \\\${num_sales}")
print(f"💰 Average Sale: \\\${average_sale:,.2f}")
print(f"🏆 Highest Sale: \\\${highest_sale}")
print(f"📉 Lowest Sale: \\\${lowest_sale}")
print(f"📏 Sales Range: \\\${highest_sale - lowest_sale}")
print()
print("=" * 40)
if average_sale > 1500:
    print("✅ EXCELLENT: Average sale exceeds target!")
else:
    print("⚠️  REVIEW: Average sale below $1,500 target")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">🎉 CONGRATULATIONS!</h3>
<p class="mb-4 text-xl font-bold">You just built a complete Sales Analytics Dashboard!</p>
<p class="mb-4">Look at what you created:</p>
<ul class="list-disc ml-6 space-y-2">
  <li>✓ Stores any amount of sales data</li>
  <li>✓ Calculates all key metrics automatically</li>
  <li>✓ Displays results professionally</li>
  <li>✓ Provides actionable insights</li>
</ul>
<p class="mt-4 bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
<strong>This is a real analytics tool!</strong> You could give this any sales data and it would analyze it. Companies use dashboards exactly like this every single day.
</p>
<p class="mt-4">You've learned:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>Lists for storing data</li>
  <li>sum(), len(), max(), min() functions</li>
  <li>Calculations and formatting</li>
  <li>Conditional logic (if statements)</li>
</ul>
<p class="mt-4 font-semibold">Ready for the next project? →</p>`,
      },
    ],
  },
  "2": {
    title: "Customer Data Analyzer",
    description: "Build a system to analyze customer purchase patterns and segment customers by behavior",
    sections: [
      {
        id: 1,
        title: "Section 1: Understanding Customer Data",
        explain: `<h3 class="font-bold text-lg mb-2">👥 What We're Building</h3>
<p class="mb-4">We're building a <strong>Customer Segmentation Tool</strong> that analyzes customer purchase data and automatically categorizes customers as:</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li><strong>High Value:</strong> Customers who spend $1000 or more</li>
  <li><strong>Medium Value:</strong> Customers who spend $500-$999</li>
  <li><strong>Low Value:</strong> Customers who spend less than $500</li>
</ul>
<p class="mb-4"><strong>Why this matters:</strong> Businesses treat different customer segments differently. High-value customers get premium support, special offers, etc.</p>
<p><strong>What you'll learn:</strong> How to process multiple records, make decisions with code, and categorize data.</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Customer Data Structure</h3>
<p class="mb-4">Customer data typically looks like this:</p>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Customer: Alice, Total Purchases: $1,250 → HIGH VALUE
Customer: Bob, Total Purchases: $450 → LOW VALUE
Customer: Carol, Total Purchases: $750 → MEDIUM VALUE
</pre>
<p class="mb-4">We'll store this as a list of lists (nested data):</p>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750]
]
</pre>`,
        demonstrateCode: `# Customer data example
customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750]
]

print("Customer Data:")
for customer in customers:
    name = customer[0]
    amount = customer[1]
    print(f"{name}: \${amount}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: View Customer Data</h3>
<p class="mb-4">Run the demo code to see how customer data is structured!</p>
<p class="mb-4">Notice how each customer is a list with two items: [name, purchase_amount]</p>`,
        starterCode: `# Customer purchase data
customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850]
]

print("=== CUSTOMER DATA ===")
for customer in customers:
    name = customer[0]
    amount = customer[1]
    print(f"{name}: \\\${amount}")
`,
        solution: `customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850]
]
print("=== CUSTOMER DATA ===")
for customer in customers:
    name = customer[0]
    amount = customer[1]
    print(f"{name}: \\\${amount}")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Understanding the Data</h3>
<p class="mb-4">You just saw nested data! Here's what happened:</p>
<ul class="list-disc ml-6 space-y-2">
  <li><code>customers</code> - a list containing 6 customer records</li>
  <li>Each customer is also a list: <code>["Name", amount]</code></li>
  <li><code>customer[0]</code> - gets the name (first item)</li>
  <li><code>customer[1]</code> - gets the purchase amount (second item)</li>
  <li>The <code>for</code> loop processes each customer one by one</li>
</ul>`,
      },
      {
        id: 2,
        title: "Section 2: Categorizing with Conditionals",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Making Decisions in Code</h3>
<p class="mb-4">Now we need to categorize each customer. We use <strong>if/elif/else</strong> statements:</p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
if amount >= 1000:
    category = "HIGH VALUE"
elif amount >= 500:
    category = "MEDIUM VALUE"
else:
    category = "LOW VALUE"
</pre>
<p class="mb-4"><strong>How it works:</strong></p>
<ul class="list-disc ml-6 space-y-1">
  <li><code>if</code> - checks the first condition</li>
  <li><code>elif</code> - checks if the first was false (else-if)</li>
  <li><code>else</code> - runs if all conditions are false</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Categorizing One Customer</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
amount = 1250

if amount >= 1000:
    category = "HIGH VALUE"
elif amount >= 500:
    category = "MEDIUM VALUE"
else:
    category = "LOW VALUE"

print(f"\${amount} → {category}")
# Output: $1250 → HIGH VALUE
</pre>`,
        demonstrateCode: `# Example: Categorizing amounts
test_amounts = [1250, 450, 750]

for amount in test_amounts:
    if amount >= 1000:
        category = "HIGH VALUE"
    elif amount >= 500:
        category = "MEDIUM VALUE"
    else:
        category = "LOW VALUE"
    print(f"\${amount} → {category}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Categorize All Customers</h3>
<p class="mb-4">Combine loops and conditionals to categorize each customer!</p>
<p class="mb-4"><strong>Task:</strong> For each customer, determine if they're HIGH, MEDIUM, or LOW value.</p>`,
        starterCode: `customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850]
]

print("=== CUSTOMER CATEGORIES ===")
for customer in customers:
    name = customer[0]
    amount = customer[1]

    # Add your if/elif/else logic here
    # Categorize as HIGH VALUE (>=1000), MEDIUM VALUE (>=500), or LOW VALUE

    category = "UNKNOWN"  # Replace this

    print(f"{name}: \\\${amount} → {category}")
`,
        solution: `customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850]
]
print("=== CUSTOMER CATEGORIES ===")
for customer in customers:
    name = customer[0]
    amount = customer[1]
    if amount >= 1000:
        category = "HIGH VALUE"
    elif amount >= 500:
        category = "MEDIUM VALUE"
    else:
        category = "LOW VALUE"
    print(f"{name}: \\\${amount} → {category}")`,
        hint: "Use if amount >= 1000 for HIGH, elif amount >= 500 for MEDIUM, else for LOW",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Perfect! You Used Conditionals</h3>
<p class="mb-4">You just automated customer segmentation! The code:</p>
<ul class="list-disc ml-6 space-y-2">
  <li>Loops through each customer</li>
  <li>Checks their purchase amount</li>
  <li>Assigns the right category automatically</li>
  <li>Processes all 6 customers in milliseconds!</li>
</ul>
<p class="mt-4">This is exactly how e-commerce companies segment millions of customers.</p>`,
      },
      {
        id: 3,
        title: "Section 3: Counting by Category",
        explain: `<h3 class="font-bold text-lg mb-2">📊 Tracking Counts</h3>
<p class="mb-4">Now we want to know: How many customers are in each category?</p>
<p class="mb-4">We use <strong>counter variables</strong> that start at 0 and increase:</p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
high_count = 0
medium_count = 0
low_count = 0

# When we find a high-value customer:
high_count = high_count + 1
# Or shorter:
high_count += 1
</pre>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Incrementing Counters</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
count = 0
print(f"Start: {count}")

count += 1
print(f"After +1: {count}")

count += 1
print(f"After +1: {count}")

# Output:
# Start: 0
# After +1: 1
# After +1: 2
</pre>`,
        demonstrateCode: `# Demo: Counter
count = 0
print(f"Start: {count}")
count += 1
print(f"After +1: {count}")
count += 1
print(f"After +1: {count}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Count Customers by Category</h3>
<p class="mb-4">Track how many customers fall into each category!</p>
<p class="mb-4">Create three counters and increment them based on the category.</p>`,
        starterCode: `customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850]
]

# Create counter variables
high_count = 0
medium_count = 0
low_count = 0

for customer in customers:
    name = customer[0]
    amount = customer[1]

    if amount >= 1000:
        category = "HIGH VALUE"
        # Increment high_count here
    elif amount >= 500:
        category = "MEDIUM VALUE"
        # Increment medium_count here
    else:
        category = "LOW VALUE"
        # Increment low_count here

print("=== CUSTOMER SUMMARY ===")
print(f"High Value Customers: {high_count}")
print(f"Medium Value Customers: {medium_count}")
print(f"Low Value Customers: {low_count}")
print(f"Total Customers: {len(customers)}")
`,
        solution: `customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850]
]
high_count = 0
medium_count = 0
low_count = 0
for customer in customers:
    name = customer[0]
    amount = customer[1]
    if amount >= 1000:
        category = "HIGH VALUE"
        high_count += 1
    elif amount >= 500:
        category = "MEDIUM VALUE"
        medium_count += 1
    else:
        category = "LOW VALUE"
        low_count += 1
print("=== CUSTOMER SUMMARY ===")
print(f"High Value Customers: {high_count}")
print(f"Medium Value Customers: {medium_count}")
print(f"Low Value Customers: {low_count}")
print(f"Total Customers: {len(customers)}")`,
        hint: "Add high_count += 1 in the if block, medium_count += 1 in elif, low_count += 1 in else",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Excellent! You're Tracking Metrics</h3>
<p class="mb-4">Your results show:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>High Value: 2 customers (Alice, David)</li>
  <li>Medium Value: 2 customers (Carol, Frank)</li>
  <li>Low Value: 2 customers (Bob, Emma)</li>
</ul>
<p class="mt-4">This is key business intelligence - knowing your customer distribution helps with planning!</p>`,
      },
      {
        id: 4,
        title: "Section 4: Finding Top Customers",
        explain: `<h3 class="font-bold text-lg mb-2">🏆 Identify Your Best Customers</h3>
<p class="mb-4">Every business wants to know: Who are my top spenders?</p>
<p class="mb-4">We need to find the customer with the highest purchase amount.</p>
<p class="mb-4"><strong>Strategy:</strong> Track the highest amount and the customer's name as we loop.</p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
max_amount = 0
max_customer = ""

for customer in customers:
    if customer[1] > max_amount:
        max_amount = customer[1]
        max_customer = customer[0]
</pre>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Finding Maximum</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
numbers = [45, 92, 38, 105, 67]
max_value = 0

for num in numbers:
    if num > max_value:
        max_value = num

print(f"Highest: {max_value}")
# Output: Highest: 105
</pre>`,
        demonstrateCode: `numbers = [45, 92, 38, 105, 67]
max_value = 0
for num in numbers:
    if num > max_value:
        max_value = num
print(f"Highest: {max_value}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Find Top Customer</h3>
<p class="mb-4">Find the customer with the highest purchase amount!</p>`,
        starterCode: `customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850]
]

# Track the highest
max_amount = 0
max_customer = ""

for customer in customers:
    name = customer[0]
    amount = customer[1]

    # If this customer spent more than our current max, update both variables
    # Add your code here

print(f"🏆 Top Customer: {max_customer}")
print(f"   Purchase Amount: \\\${max_amount}")
`,
        solution: `customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850]
]
max_amount = 0
max_customer = ""
for customer in customers:
    name = customer[0]
    amount = customer[1]
    if amount > max_amount:
        max_amount = amount
        max_customer = name
print(f"🏆 Top Customer: {max_customer}")
print(f"   Purchase Amount: \\\${max_amount}")`,
        hint: "Use if amount > max_amount, then update both max_amount and max_customer",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Found the VIP!</h3>
<p class="mb-4">Your top customer is <strong>David</strong> with $2,100 in purchases!</p>
<p class="mb-4">This technique is crucial for:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>Identifying VIP customers for special treatment</li>
  <li>Finding best-performing products</li>
  <li>Detecting outliers in data</li>
</ul>`,
      },
      {
        id: 5,
        title: "Section 5: Calculate Revenue by Segment",
        explain: `<h3 class="font-bold text-lg mb-2">💰 Total Revenue per Segment</h3>
<p class="mb-4">Now let's calculate: How much total revenue comes from each customer segment?</p>
<p class="mb-4">We need to:</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li>Track revenue totals for each segment</li>
  <li>Add each customer's purchase to their segment's total</li>
  <li>Calculate what percentage each segment contributes</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Accumulating Totals</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
total = 0
numbers = [100, 200, 300]

for num in numbers:
    total += num
    print(f"Added {num}, total is now {total}")

# Output:
# Added 100, total is now 100
# Added 200, total is now 300
# Added 300, total is now 600
</pre>`,
        demonstrateCode: `total = 0
numbers = [100, 200, 300]
for num in numbers:
    total += num
    print(f"Added {num}, total is now {total}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate Segment Revenue</h3>
<p class="mb-4">Calculate total revenue for each customer segment!</p>`,
        starterCode: `customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850]
]

# Revenue trackers for each segment
high_revenue = 0
medium_revenue = 0
low_revenue = 0

for customer in customers:
    name = customer[0]
    amount = customer[1]

    if amount >= 1000:
        # Add to high_revenue
        pass
    elif amount >= 500:
        # Add to medium_revenue
        pass
    else:
        # Add to low_revenue
        pass

total_revenue = high_revenue + medium_revenue + low_revenue

print("=== REVENUE BY SEGMENT ===")
print(f"High Value Revenue: \\\${high_revenue}")
print(f"Medium Value Revenue: \\\${medium_revenue}")
print(f"Low Value Revenue: \\\${low_revenue}")
print(f"Total Revenue: \\\${total_revenue}")
`,
        solution: `customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850]
]
high_revenue = 0
medium_revenue = 0
low_revenue = 0
for customer in customers:
    name = customer[0]
    amount = customer[1]
    if amount >= 1000:
        high_revenue += amount
    elif amount >= 500:
        medium_revenue += amount
    else:
        low_revenue += amount
total_revenue = high_revenue + medium_revenue + low_revenue
print("=== REVENUE BY SEGMENT ===")
print(f"High Value Revenue: \\\${high_revenue}")
print(f"Medium Value Revenue: \\\${medium_revenue}")
print(f"Low Value Revenue: \\\${low_revenue}")
print(f"Total Revenue: \\\${total_revenue}")`,
        hint: "Use high_revenue += amount in the if block, and similar for other segments",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Revenue Analysis Complete!</h3>
<p class="mb-4">Your analysis shows:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>High Value: $3,350 (from 2 customers!)</li>
  <li>Medium Value: $1,600</li>
  <li>Low Value: $750</li>
</ul>
<p class="mt-4"><strong>Insight:</strong> High-value customers (33% of customers) generate 58% of revenue! This is why businesses focus on retaining top customers.</p>`,
      },
      {
        id: 6,
        title: "Section 6: Complete Customer Analyzer",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Build the Full System</h3>
<p class="mb-4">Let's combine everything into one comprehensive customer analysis tool!</p>
<p class="mb-4">Our complete analyzer will show:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>✓ All customers with their categories</li>
  <li>✓ Count of customers per segment</li>
  <li>✓ Revenue per segment</li>
  <li>✓ Top customer identification</li>
  <li>✓ Business insights</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Professional Output</h3>
<p class="mb-4">We'll format the output to be clear and actionable:</p>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
=== CUSTOMER SEGMENTATION ANALYSIS ===

CUSTOMER BREAKDOWN:
Alice: $1,250 → HIGH VALUE
David: $2,100 → HIGH VALUE
Carol: $750 → MEDIUM VALUE
...

SEGMENT SUMMARY:
High Value: 2 customers, $3,350 revenue
Medium Value: 2 customers, $1,600 revenue
...
</pre>`,
        demonstrateCode: `print("=" * 40)
print("  CUSTOMER ANALYSIS")
print("=" * 40)`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Run Complete Analyzer</h3>
<p class="mb-4">Run the complete customer segmentation system!</p>`,
        starterCode: `# COMPLETE CUSTOMER ANALYZER

customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850],
    ["Grace", 1500],
    ["Henry", 600]
]

# Initialize all trackers
high_count = 0
medium_count = 0
low_count = 0
high_revenue = 0
medium_revenue = 0
low_revenue = 0
max_amount = 0
max_customer = ""

print("=" * 45)
print("   CUSTOMER SEGMENTATION ANALYSIS")
print("=" * 45)
print()

print("CUSTOMER BREAKDOWN:")
for customer in customers:
    name = customer[0]
    amount = customer[1]

    # Categorize and track
    if amount >= 1000:
        category = "HIGH VALUE"
        high_count += 1
        high_revenue += amount
    elif amount >= 500:
        category = "MEDIUM VALUE"
        medium_count += 1
        medium_revenue += amount
    else:
        category = "LOW VALUE"
        low_count += 1
        low_revenue += amount

    # Track top customer
    if amount > max_amount:
        max_amount = amount
        max_customer = name

    print(f"  {name}: \\\${amount} → {category}")

total_revenue = high_revenue + medium_revenue + low_revenue

print()
print("=" * 45)
print("SEGMENT SUMMARY:")
print(f"  📊 High Value: {high_count} customers, \\\${high_revenue:,} revenue")
print(f"  📊 Medium Value: {medium_count} customers, \\\${medium_revenue:,} revenue")
print(f"  📊 Low Value: {low_count} customers, \\\${low_revenue:,} revenue")
print()
print(f"  💰 Total Revenue: \\\${total_revenue:,}")
print(f"  🏆 Top Customer: {max_customer} (\\\${max_amount:,})")
print()
print("=" * 45)

# Business Insights
high_percentage = (high_revenue / total_revenue) * 100
print("INSIGHTS:")
print(f"  • High-value customers generate {high_percentage:.1f}% of revenue")
print(f"  • Focus retention efforts on {high_count} high-value customers")
`,
        solution: `customers = [
    ["Alice", 1250],
    ["Bob", 450],
    ["Carol", 750],
    ["David", 2100],
    ["Emma", 300],
    ["Frank", 850],
    ["Grace", 1500],
    ["Henry", 600]
]
high_count = 0
medium_count = 0
low_count = 0
high_revenue = 0
medium_revenue = 0
low_revenue = 0
max_amount = 0
max_customer = ""
print("=" * 45)
print("   CUSTOMER SEGMENTATION ANALYSIS")
print("=" * 45)
print()
print("CUSTOMER BREAKDOWN:")
for customer in customers:
    name = customer[0]
    amount = customer[1]
    if amount >= 1000:
        category = "HIGH VALUE"
        high_count += 1
        high_revenue += amount
    elif amount >= 500:
        category = "MEDIUM VALUE"
        medium_count += 1
        medium_revenue += amount
    else:
        category = "LOW VALUE"
        low_count += 1
        low_revenue += amount
    if amount > max_amount:
        max_amount = amount
        max_customer = name
    print(f"  {name}: \\\${amount} → {category}")
total_revenue = high_revenue + medium_revenue + low_revenue
print()
print("=" * 45)
print("SEGMENT SUMMARY:")
print(f"  📊 High Value: {high_count} customers, \\\${high_revenue:,} revenue")
print(f"  📊 Medium Value: {medium_count} customers, \\\${medium_revenue:,} revenue")
print(f"  📊 Low Value: {low_count} customers, \\\${low_revenue:,} revenue")
print()
print(f"  💰 Total Revenue: \\\${total_revenue:,}")
print(f"  🏆 Top Customer: {max_customer} (\\\${max_amount:,})")
print()
print("=" * 45)
high_percentage = (high_revenue / total_revenue) * 100
print("INSIGHTS:")
print(f"  • High-value customers generate {high_percentage:.1f}% of revenue")
print(f"  • Focus retention efforts on {high_count} high-value customers")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">🎉 AMAZING! You Built a Customer Analyzer!</h3>
<p class="mb-4 text-xl font-bold">This is a real business intelligence tool!</p>
<p class="mb-4">What you learned:</p>
<ul class="list-disc ml-6 space-y-2">
  <li>✓ Nested lists for complex data</li>
  <li>✓ For loops to process multiple records</li>
  <li>✓ If/elif/else for categorization</li>
  <li>✓ Counter variables to track metrics</li>
  <li>✓ Finding maximum values</li>
  <li>✓ Calculating percentages</li>
</ul>
<p class="mt-4 bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
<strong>Real-world application:</strong> E-commerce companies, banks, and subscription services use exactly this type of analysis to understand customer behavior and optimize their strategies.
</p>
<p class="mt-4 font-semibold">Ready to learn SQL in the next project? →</p>`,
      },
    ],
  },
  "3": {
    title: "Database Query Builder",
    description: "Learn SQL by building queries from scratch to analyze employee and sales data",
    sections: [
      {
        id: 1,
        title: "Section 1: Introduction to Databases",
        explain: `<h3 class="font-bold text-lg mb-2">🗄️ What is a Database?</h3>
<p class="mb-4">A <strong>database</strong> is an organized collection of data stored in tables (like spreadsheets).</p>
<p class="mb-4"><strong>Why databases matter:</strong> Most business data lives in databases - customer info, sales records, inventory, etc.</p>
<p class="mb-4"><strong>SQL (Structured Query Language)</strong> is how you talk to databases to:</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li>Retrieve data (SELECT)</li>
  <li>Filter specific records (WHERE)</li>
  <li>Sort results (ORDER BY)</li>
  <li>Calculate totals (SUM, AVG, COUNT)</li>
</ul>
<p class="mb-4">Think of SQL as Google search for your company's data!</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Sample Database Table</h3>
<p class="mb-4">Here's an example "employees" table:</p>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
| id | name    | department | salary |
|----|---------|------------|--------|
| 1  | Alice   | Sales      | 75000  |
| 2  | Bob     | IT         | 85000  |
| 3  | Carol   | Sales      | 70000  |
| 4  | David   | IT         | 90000  |
</pre>
<p class="mb-4">Each row is a record (one employee), each column is a field (name, department, etc.).</p>`,
        demonstrateCode: `-- This is a SQL comment
-- SQL queries look like this:
SELECT name, salary FROM employees;

-- Output: Shows all names and salaries
-- Alice, 75000
-- Bob, 85000
-- Carol, 70000
-- David, 90000`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Understand the Structure</h3>
<p class="mb-4">Review the employee table structure above.</p>
<p class="mb-4">Notice:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>Each employee has an ID, name, department, and salary</li>
  <li>Tables organize data in rows and columns</li>
  <li>SQL lets us query this data efficiently</li>
</ul>`,
        starterCode: `-- Sample Employee Database Structure
-- We'll use this table for all exercises

-- EMPLOYEES TABLE:
-- id | name    | department | salary | hire_date
-- ---|---------|------------|--------|----------
-- 1  | Alice   | Sales      | 75000  | 2020-01-15
-- 2  | Bob     | IT         | 85000  | 2019-06-20
-- 3  | Carol   | Sales      | 70000  | 2021-03-10
-- 4  | David   | IT         | 90000  | 2018-11-05
-- 5  | Emma    | Marketing  | 68000  | 2022-02-14

-- Click Next to start writing SQL queries!
`,
        solution: `-- Understanding complete!`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Database Basics Understood!</h3>
<p class="mb-4">Now you understand:</p>
<ul class="list-disc ml-6 space-y-2">
  <li>Databases store data in tables</li>
  <li>Tables have rows (records) and columns (fields)</li>
  <li>SQL is the language for querying databases</li>
</ul>
<p class="mt-4">Let's start writing SQL!</p>`,
      },
      {
        id: 2,
        title: "Section 2: SELECT - Getting Data",
        explain: `<h3 class="font-bold text-lg mb-2">🔍 The SELECT Statement</h3>
<p class="mb-4">The <code>SELECT</code> statement retrieves data from a database table.</p>
<p class="mb-4"><strong>Basic syntax:</strong></p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
SELECT column1, column2 FROM table_name;
</pre>
<p class="mb-4">To get ALL columns, use <code>*</code>:</p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
SELECT * FROM employees;
</pre>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 SELECT Examples</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
-- Get all employee names
SELECT name FROM employees;

-- Get name and salary
SELECT name, salary FROM employees;

-- Get everything
SELECT * FROM employees;
</pre>`,
        demonstrateCode: `-- Example queries
-- (Note: SQL output is simulated for learning)

-- Query 1: Get all names
-- SELECT name FROM employees;
-- Results: Alice, Bob, Carol, David, Emma

print("Query: SELECT name FROM employees")
print("Results:")
print("Alice")
print("Bob")
print("Carol")
print("David")
print("Emma")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Write a SELECT Query</h3>
<p class="mb-4">Write a query to get the name and department of all employees!</p>
<p class="mb-4"><strong>What you need:</strong> SELECT name, department FROM employees</p>`,
        starterCode: `-- Task: Write a query to get name and department
-- Hint: SELECT column1, column2 FROM table_name

-- Your query here:



-- When you write SELECT name, department FROM employees
-- You'll see: Alice (Sales), Bob (IT), Carol (Sales), etc.
`,
        solution: `SELECT name, department FROM employees;`,
        hint: "Use: SELECT name, department FROM employees;",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ First SQL Query Written!</h3>
<p class="mb-4">You just wrote your first SQL query!</p>
<p class="mb-4">This query would return:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>Alice - Sales</li>
  <li>Bob - IT</li>
  <li>Carol - Sales</li>
  <li>David - IT</li>
  <li>Emma - Marketing</li>
</ul>
<p class="mt-4"><strong>SELECT</strong> is the foundation of SQL - you'll use it in almost every query!</p>`,
      },
      {
        id: 3,
        title: "Section 3: WHERE - Filtering Data",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Filtering with WHERE</h3>
<p class="mb-4">The <code>WHERE</code> clause filters results based on conditions.</p>
<p class="mb-4"><strong>Syntax:</strong></p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
SELECT columns FROM table
WHERE condition;
</pre>
<p class="mb-4"><strong>Common operators:</strong></p>
<ul class="list-disc ml-6 space-y-1">
  <li><code>=</code> equals</li>
  <li><code>></code> greater than</li>
  <li><code><</code> less than</li>
  <li><code>>=</code> greater than or equal</li>
  <li><code>AND</code>, <code>OR</code> combine conditions</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 WHERE Examples</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
-- Employees in Sales department
SELECT name FROM employees
WHERE department = 'Sales';
-- Results: Alice, Carol

-- Employees earning over 80000
SELECT name, salary FROM employees
WHERE salary > 80000;
-- Results: Bob (85000), David (90000)

-- IT employees earning over 80000
SELECT name FROM employees
WHERE department = 'IT' AND salary > 80000;
-- Results: Bob, David
</pre>`,
        demonstrateCode: `-- Example: WHERE clause
print("Query: SELECT name FROM employees WHERE department = 'Sales'")
print("Results:")
print("Alice")
print("Carol")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Filter with WHERE</h3>
<p class="mb-4">Write a query to find employees earning more than $75,000!</p>`,
        starterCode: `-- Task: Find employees with salary > 75000
-- Show their name and salary

-- Your query here:




-- Expected results: Bob (85000), David (90000)
`,
        solution: `SELECT name, salary FROM employees WHERE salary > 75000;`,
        hint: "Use: SELECT name, salary FROM employees WHERE salary > 75000;",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Filtering Mastered!</h3>
<p class="mb-4">Your query found:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>Bob: $85,000</li>
  <li>David: $90,000</li>
</ul>
<p class="mt-4"><strong>WHERE</strong> is essential for finding specific data in large databases. Instead of looking through thousands of rows, you filter instantly!</p>`,
      },
      {
        id: 4,
        title: "Section 4: ORDER BY - Sorting Results",
        explain: `<h3 class="font-bold text-lg mb-2">📊 Sorting with ORDER BY</h3>
<p class="mb-4">The <code>ORDER BY</code> clause sorts results.</p>
<p class="mb-4"><strong>Syntax:</strong></p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
SELECT columns FROM table
ORDER BY column ASC;   -- Ascending (low to high)

SELECT columns FROM table
ORDER BY column DESC;  -- Descending (high to low)
</pre>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 ORDER BY Examples</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
-- Sort by salary (lowest first)
SELECT name, salary FROM employees
ORDER BY salary ASC;

-- Sort by salary (highest first)
SELECT name, salary FROM employees
ORDER BY salary DESC;
-- Results:
-- David: 90000
-- Bob: 85000
-- Alice: 75000
-- Carol: 70000
-- Emma: 68000
</pre>`,
        demonstrateCode: `-- Example: ORDER BY
print("Query: SELECT name, salary FROM employees ORDER BY salary DESC")
print("Results (highest to lowest):")
print("David: 90000")
print("Bob: 85000")
print("Alice: 75000")
print("Carol: 70000")
print("Emma: 68000")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Sort Results</h3>
<p class="mb-4">Find Sales department employees, sorted by salary (highest first)!</p>`,
        starterCode: `-- Task: Get Sales employees, ordered by salary DESC
-- Show name, department, salary

-- Your query here:




-- Expected: Alice (75000), Carol (70000)
`,
        solution: `SELECT name, department, salary FROM employees WHERE department = 'Sales' ORDER BY salary DESC;`,
        hint: "Combine WHERE and ORDER BY: SELECT name, department, salary FROM employees WHERE department = 'Sales' ORDER BY salary DESC;",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Sorting Perfected!</h3>
<p class="mb-4">Your query combined filtering and sorting:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>Filtered to Sales department only</li>
  <li>Sorted by salary (highest first)</li>
  <li>Results: Alice ($75,000), Carol ($70,000)</li>
</ul>
<p class="mt-4">This is how managers find their top performers!</p>`,
      },
      {
        id: 5,
        title: "Section 5: Aggregate Functions",
        explain: `<h3 class="font-bold text-lg mb-2">📈 Calculating with SQL</h3>
<p class="mb-4">SQL has built-in functions for calculations:</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li><code>COUNT(*)</code> - count rows</li>
  <li><code>SUM(column)</code> - total of values</li>
  <li><code>AVG(column)</code> - average</li>
  <li><code>MAX(column)</code> - highest value</li>
  <li><code>MIN(column)</code> - lowest value</li>
</ul>
<p class="mb-4"><strong>Syntax:</strong></p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
SELECT COUNT(*) FROM employees;
SELECT AVG(salary) FROM employees;
</pre>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Aggregate Examples</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
-- Total employees
SELECT COUNT(*) FROM employees;
-- Result: 5

-- Average salary
SELECT AVG(salary) FROM employees;
-- Result: 77600

-- Highest salary
SELECT MAX(salary) FROM employees;
-- Result: 90000

-- Total payroll
SELECT SUM(salary) FROM employees;
-- Result: 388000
</pre>`,
        demonstrateCode: `-- Example: Aggregate functions
print("Query: SELECT AVG(salary) FROM employees")
print("Average Salary: $77,600")

print()
print("Query: SELECT MAX(salary) FROM employees")
print("Highest Salary: $90,000")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate Average</h3>
<p class="mb-4">Calculate the average salary for the IT department!</p>`,
        starterCode: `-- Task: Find average salary in IT department
-- Hint: Use AVG() and WHERE

-- Your query here:




-- Expected result: 87500 (average of 85000 and 90000)
`,
        solution: `SELECT AVG(salary) FROM employees WHERE department = 'IT';`,
        hint: "Use: SELECT AVG(salary) FROM employees WHERE department = 'IT';",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Aggregate Functions Unlocked!</h3>
<p class="mb-4">Your query calculated: <strong>$87,500</strong></p>
<p class="mb-4">This is the average of:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>Bob: $85,000</li>
  <li>David: $90,000</li>
</ul>
<p class="mt-4">Aggregate functions are powerful - businesses use them constantly for reports, analytics, and decision-making!</p>`,
      },
      {
        id: 6,
        title: "Section 6: Complete Query Challenge",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Put It All Together</h3>
<p class="mb-4">Now let's combine everything you've learned to answer complex business questions!</p>
<p class="mb-4">You'll use:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>✓ SELECT to choose columns</li>
  <li>✓ WHERE to filter data</li>
  <li>✓ ORDER BY to sort results</li>
  <li>✓ Aggregate functions to calculate</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Complex Query Example</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
-- Find departments with average salary > 75000
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 75000
ORDER BY avg_salary DESC;

-- Result:
-- IT: 87500
-- Sales: 72500 (filtered out by HAVING)
</pre>`,
        demonstrateCode: `-- Example: Complete analysis
print("=== EMPLOYEE SALARY ANALYSIS ===")
print()
print("Total Employees: 5")
print("Average Salary: $77,600")
print("Highest Paid: David ($90,000)")
print("Lowest Paid: Emma ($68,000)")
print()
print("Department Breakdown:")
print("  IT: 2 employees, avg $87,500")
print("  Sales: 2 employees, avg $72,500")
print("  Marketing: 1 employee, avg $68,000")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Multi-Query Analysis</h3>
<p class="mb-4">Run multiple queries to complete an employee analysis!</p>`,
        starterCode: `-- COMPLETE SQL ANALYSIS CHALLENGE
-- Run these queries and see the results!

print("=== EMPLOYEE DATABASE ANALYSIS ===")
print()

-- Query 1: Total number of employees
print("1. Total Employees:")
print("   SELECT COUNT(*) FROM employees")
print("   Result: 5 employees")
print()

-- Query 2: Find highest paid employee
print("2. Highest Paid Employee:")
print("   SELECT name, salary FROM employees ORDER BY salary DESC LIMIT 1")
print("   Result: David - $90,000")
print()

-- Query 3: Average salary by department
print("3. IT Department Average:")
print("   SELECT AVG(salary) FROM employees WHERE department = 'IT'")
print("   Result: $87,500")
print()

print("4. Sales Department Average:")
print("   SELECT AVG(salary) FROM employees WHERE department = 'Sales'")
print("   Result: $72,500")
print()

-- Query 4: Employees hired after 2020
print("5. Recent Hires (after 2020):")
print("   SELECT name, hire_date FROM employees WHERE hire_date > '2020-01-01'")
print("   Results:")
print("   - Carol (2021-03-10)")
print("   - Emma (2022-02-14)")
print()

print("=== ANALYSIS COMPLETE ===")
print("You've learned:")
print("  ✓ SELECT for retrieving data")
print("  ✓ WHERE for filtering")
print("  ✓ ORDER BY for sorting")
print("  ✓ Aggregate functions (COUNT, AVG, MAX)")
print("  ✓ Combining multiple queries for insights")
`,
        solution: `-- All queries completed!
print("=== EMPLOYEE DATABASE ANALYSIS ===")
print()
print("1. Total Employees:")
print("   SELECT COUNT(*) FROM employees")
print("   Result: 5 employees")
print()
print("2. Highest Paid Employee:")
print("   SELECT name, salary FROM employees ORDER BY salary DESC LIMIT 1")
print("   Result: David - $90,000")
print()
print("3. IT Department Average:")
print("   SELECT AVG(salary) FROM employees WHERE department = 'IT'")
print("   Result: $87,500")
print()
print("4. Sales Department Average:")
print("   SELECT AVG(salary) FROM employees WHERE department = 'Sales'")
print("   Result: $72,500")
print()
print("5. Recent Hires (after 2020):")
print("   SELECT name, hire_date FROM employees WHERE hire_date > '2020-01-01'")
print("   Results:")
print("   - Carol (2021-03-10)")
print("   - Emma (2022-02-14)")
print()
print("=== ANALYSIS COMPLETE ===")
print("You've learned:")
print("  ✓ SELECT for retrieving data")
print("  ✓ WHERE for filtering")
print("  ✓ ORDER BY for sorting")
print("  ✓ Aggregate functions (COUNT, AVG, MAX)")
print("  ✓ Combining multiple queries for insights")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">🎉 SQL FUNDAMENTALS MASTERED!</h3>
<p class="mb-4 text-xl font-bold">You can now query databases like a pro!</p>
<p class="mb-4">What you learned:</p>
<ul class="list-disc ml-6 space-y-2">
  <li>✓ <strong>SELECT</strong> - retrieve specific columns</li>
  <li>✓ <strong>WHERE</strong> - filter based on conditions</li>
  <li>✓ <strong>ORDER BY</strong> - sort results</li>
  <li>✓ <strong>COUNT, SUM, AVG, MAX, MIN</strong> - calculations</li>
  <li>✓ <strong>Combining queries</strong> - complex analysis</li>
</ul>
<p class="mt-4 bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
<strong>Real-world impact:</strong> SQL is THE most important skill for data analysts. You now know enough SQL to query real databases, pull reports, and answer business questions. Every tech company uses SQL daily!
</p>
<p class="mt-4 font-semibold">Ready for intermediate projects? →</p>`,
      },
    ],
  },
  "4": {
    title: "E-commerce Analytics System",
    description: "Build a complete analytics system for an online store with sales trends and product insights",
    sections: [
      {
        id: 1,
        title: "Section 1: Understanding E-commerce Data",
        explain: `<h3 class="font-bold text-lg mb-2">🛒 What We're Building</h3>
<p class="mb-4">We're building an <strong>E-commerce Analytics Dashboard</strong> that tracks:</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li>Daily and monthly sales trends</li>
  <li>Product performance rankings</li>
  <li>Revenue forecasting</li>
  <li>Customer purchase patterns</li>
</ul>
<p class="mb-4"><strong>New skill: Functions!</strong> Instead of repeating code, we'll create reusable functions.</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Sample E-commerce Data</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Daily Sales:
Day 1: $1,250
Day 2: $1,450
Day 3: $1,100
...

Products:
{"name": "Laptop", "price": 899, "sold": 15}
{"name": "Mouse", "price": 25, "sold": 45}
...
</pre>`,
        demonstrateCode: `# E-commerce data structure
daily_sales = [1250, 1450, 1100, 1350, 1600]

products = [
    {"name": "Laptop", "price": 899, "sold": 15},
    {"name": "Mouse", "price": 25, "sold": 45}
]

print("Day 1 sales:", daily_sales[0])
print("Product:", products[0]["name"])`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Explore the Data</h3>
<p class="mb-4">Run the code to see how e-commerce data is structured!</p>`,
        starterCode: `# E-commerce data
daily_sales = [1250, 1450, 1100, 1350, 1600, 1200, 1550]

products = [
    {"name": "Laptop", "price": 899, "sold": 15},
    {"name": "Mouse", "price": 25, "sold": 45},
    {"name": "Keyboard", "price": 75, "sold": 30}
]

print("=== Daily Sales ===")
for i, sales in enumerate(daily_sales, 1):
    print(f"Day {i}: \\\${sales}")

print()
print("=== Products ===")
for product in products:
    revenue = product["price"] * product["sold"]
    print(f"{product['name']}: {product['sold']} sold, \\\${revenue} revenue")
`,
        solution: `daily_sales = [1250, 1450, 1100, 1350, 1600, 1200, 1550]
products = [
    {"name": "Laptop", "price": 899, "sold": 15},
    {"name": "Mouse", "price": 25, "sold": 45},
    {"name": "Keyboard", "price": 75, "sold": 30}
]
print("=== Daily Sales ===")
for i, sales in enumerate(daily_sales, 1):
    print(f"Day {i}: \\\${sales}")
print()
print("=== Products ===")
for product in products:
    revenue = product["price"] * product["sold"]
    print(f"{product['name']}: {product['sold']} sold, \\\${revenue} revenue")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Data Structure Understood!</h3>
<p class="mb-4">You're working with dictionaries - a powerful way to store structured data with key-value pairs!</p>`,
      },
      {
        id: 2,
        title: "Section 2: Creating Functions",
        explain: `<h3 class="font-bold text-lg mb-2">🔧 Why Functions?</h3>
<p class="mb-4">Instead of writing the same code over and over, create a <strong>function</strong> once and reuse it!</p>
<p class="mb-4"><strong>Syntax:</strong></p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
def function_name(parameters):
    # code here
    return result
</pre>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Function Example</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
def calculate_revenue(price, quantity):
    return price * quantity

laptop_revenue = calculate_revenue(899, 15)
print(f"Laptop revenue: \${laptop_revenue}")
# Output: Laptop revenue: $13485
</pre>`,
        demonstrateCode: `def calculate_revenue(price, quantity):
    return price * quantity

laptop_revenue = calculate_revenue(899, 15)
mouse_revenue = calculate_revenue(25, 45)

print(f"Laptop: \${laptop_revenue}")
print(f"Mouse: \${mouse_revenue}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Create a Function</h3>
<p class="mb-4">Create a function to calculate revenue for any product!</p>`,
        starterCode: `# Create a function that calculates product revenue
def calculate_revenue(price, quantity):
    # Your code here - return price * quantity
    pass

# Test it
laptop = calculate_revenue(899, 15)
mouse = calculate_revenue(25, 45)
keyboard = calculate_revenue(75, 30)

print(f"Laptop revenue: \\\${laptop}")
print(f"Mouse revenue: \\\${mouse}")
print(f"Keyboard revenue: \\\${keyboard}")
`,
        solution: `def calculate_revenue(price, quantity):
    return price * quantity

laptop = calculate_revenue(899, 15)
mouse = calculate_revenue(25, 45)
keyboard = calculate_revenue(75, 30)

print(f"Laptop revenue: \\\${laptop}")
print(f"Mouse revenue: \\\${mouse}")
print(f"Keyboard revenue: \\\${keyboard}")`,
        hint: "Replace pass with: return price * quantity",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ First Function Created!</h3>
<p class="mb-4">You just wrote reusable code! Now you can calculate revenue for any product without repeating the formula.</p>`,
      },
      {
        id: 3,
        title: "Section 3: Sales Trend Analysis",
        explain: `<h3 class="font-bold text-lg mb-2">📈 Analyzing Trends</h3>
<p class="mb-4">Let's create a function that analyzes if sales are trending up or down!</p>
<p class="mb-4">We'll compare recent sales to older sales:</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li>If recent average > old average → "INCREASING"</li>
  <li>If recent average < old average → "DECREASING"</li>
  <li>If they're equal → "STABLE"</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Trend Analysis</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
daily_sales = [1000, 1100, 1200, 1500, 1600]

# First 2 days average: 1050
# Last 2 days average: 1550
# Trend: INCREASING
</pre>`,
        demonstrateCode: `daily_sales = [1000, 1100, 1200, 1500, 1600]

first_half = daily_sales[:3]
second_half = daily_sales[3:]

avg_first = sum(first_half) / len(first_half)
avg_second = sum(second_half) / len(second_half)

print(f"First half avg: \${avg_first:.2f}")
print(f"Second half avg: \${avg_second:.2f}")

if avg_second > avg_first:
    print("Trend: INCREASING")
else:
    print("Trend: DECREASING")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Build Trend Function</h3>
<p class="mb-4">Create a function that detects sales trends!</p>`,
        starterCode: `def analyze_trend(sales_data):
    # Split data in half
    mid = len(sales_data) // 2
    first_half = sales_data[:mid]
    second_half = sales_data[mid:]

    # Calculate averages
    avg_first = sum(first_half) / len(first_half)
    avg_second = sum(second_half) / len(second_half)

    # Determine trend - add your if/elif/else logic here
    if avg_second > avg_first:
        trend = "INCREASING"
    elif avg_second < avg_first:
        trend = "DECREASING"
    else:
        trend = "STABLE"

    return trend, avg_first, avg_second

# Test it
daily_sales = [1250, 1450, 1100, 1350, 1600, 1200, 1550, 1650]
trend, old_avg, new_avg = analyze_trend(daily_sales)

print(f"Sales Trend Analysis:")
print(f"  Earlier period avg: \\\${old_avg:.2f}")
print(f"  Recent period avg: \\\${new_avg:.2f}")
print(f"  Trend: {trend}")
`,
        solution: `def analyze_trend(sales_data):
    mid = len(sales_data) // 2
    first_half = sales_data[:mid]
    second_half = sales_data[mid:]
    avg_first = sum(first_half) / len(first_half)
    avg_second = sum(second_half) / len(second_half)
    if avg_second > avg_first:
        trend = "INCREASING"
    elif avg_second < avg_first:
        trend = "DECREASING"
    else:
        trend = "STABLE"
    return trend, avg_first, avg_second

daily_sales = [1250, 1450, 1100, 1350, 1600, 1200, 1550, 1650]
trend, old_avg, new_avg = analyze_trend(daily_sales)
print(f"Sales Trend Analysis:")
print(f"  Earlier period avg: \\\${old_avg:.2f}")
print(f"  Recent period avg: \\\${new_avg:.2f}")
print(f"  Trend: {trend}")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Trend Analysis Working!</h3>
<p class="mb-4">Your function detected an INCREASING trend! This helps businesses spot growth or decline early.</p>`,
      },
      {
        id: 4,
        title: "Section 4: Product Performance Ranking",
        explain: `<h3 class="font-bold text-lg mb-2">🏆 Ranking Products</h3>
<p class="mb-4">Let's rank products by total revenue to find best sellers!</p>
<p class="mb-4">We'll use Python's <code>sorted()</code> function with a custom key.</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Sorting by Revenue</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
products = [
    {"name": "Mouse", "price": 25, "sold": 45},
    {"name": "Laptop", "price": 899, "sold": 15}
]

# Sort by revenue (price * sold)
sorted_products = sorted(products,
    key=lambda p: p["price"] * p["sold"],
    reverse=True)
</pre>`,
        demonstrateCode: `products = [
    {"name": "Mouse", "price": 25, "sold": 45},
    {"name": "Laptop", "price": 899, "sold": 15},
    {"name": "Keyboard", "price": 75, "sold": 30}
]

# Sort by revenue
sorted_products = sorted(products,
    key=lambda p: p["price"] * p["sold"],
    reverse=True)

print("=== Product Rankings ===")
for i, product in enumerate(sorted_products, 1):
    revenue = product["price"] * product["sold"]
    print(f"{i}. {product['name']}: \${revenue}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Rank Products</h3>
<p class="mb-4">Create a function that ranks products by revenue!</p>`,
        starterCode: `def rank_products(products):
    # Sort products by revenue (price * sold)
    sorted_products = sorted(products,
        key=lambda p: p["price"] * p["sold"],
        reverse=True)
    return sorted_products

# Product data
products = [
    {"name": "Laptop", "price": 899, "sold": 15},
    {"name": "Mouse", "price": 25, "sold": 45},
    {"name": "Keyboard", "price": 75, "sold": 30},
    {"name": "Monitor", "price": 299, "sold": 12},
    {"name": "Webcam", "price": 89, "sold": 20}
]

# Rank them
ranked = rank_products(products)

print("=== TOP PRODUCTS BY REVENUE ===")
for i, product in enumerate(ranked, 1):
    revenue = product["price"] * product["sold"]
    print(f"{i}. {product['name']}: {product['sold']} sold = \\\${revenue:,}")
`,
        solution: `def rank_products(products):
    sorted_products = sorted(products,
        key=lambda p: p["price"] * p["sold"],
        reverse=True)
    return sorted_products

products = [
    {"name": "Laptop", "price": 899, "sold": 15},
    {"name": "Mouse", "price": 25, "sold": 45},
    {"name": "Keyboard", "price": 75, "sold": 30},
    {"name": "Monitor", "price": 299, "sold": 12},
    {"name": "Webcam", "price": 89, "sold": 20}
]

ranked = rank_products(products)

print("=== TOP PRODUCTS BY REVENUE ===")
for i, product in enumerate(ranked, 1):
    revenue = product["price"] * product["sold"]
    print(f"{i}. {product['name']}: {product['sold']} sold = \\\${revenue:,}")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Products Ranked!</h3>
<p class="mb-4">Your top revenue generator is the Laptop at $13,485!</p>
<p class="mb-4">This analysis helps businesses decide which products to stock more of.</p>`,
      },
      {
        id: 5,
        title: "Section 5: Revenue Forecasting",
        explain: `<h3 class="font-bold text-lg mb-2">🔮 Predict Future Sales</h3>
<p class="mb-4">Simple forecasting: calculate average daily growth and project forward!</p>
<p class="mb-4"><strong>Formula:</strong></p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
growth_rate = (recent_avg - old_avg) / old_avg
forecast = recent_avg * (1 + growth_rate)
</pre>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Forecasting Example</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Old average: $1,200
Recent average: $1,500
Growth rate: 25%

Forecast for next period:
$1,500 * (1 + 0.25) = $1,875
</pre>`,
        demonstrateCode: `old_avg = 1200
recent_avg = 1500

growth_rate = (recent_avg - old_avg) / old_avg
forecast = recent_avg * (1 + growth_rate)

print(f"Current average: \${recent_avg}")
print(f"Growth rate: {growth_rate * 100:.1f}%")
print(f"Next period forecast: \${forecast:.2f}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Build Forecasting Function</h3>
<p class="mb-4">Create a function that forecasts future sales!</p>`,
        starterCode: `def forecast_sales(daily_sales):
    # Split data
    mid = len(daily_sales) // 2
    first_half = daily_sales[:mid]
    second_half = daily_sales[mid:]

    # Calculate averages
    old_avg = sum(first_half) / len(first_half)
    recent_avg = sum(second_half) / len(second_half)

    # Calculate growth rate
    growth_rate = (recent_avg - old_avg) / old_avg

    # Forecast next period
    forecast = recent_avg * (1 + growth_rate)

    return forecast, growth_rate, recent_avg

# Test it
daily_sales = [1250, 1450, 1100, 1350, 1600, 1200, 1550, 1650]
forecast, growth, current = forecast_sales(daily_sales)

print("=== SALES FORECAST ===")
print(f"Current average: \\\${current:.2f}")
print(f"Growth rate: {growth * 100:.1f}%")
print(f"Forecasted average: \\\${forecast:.2f}")
`,
        solution: `def forecast_sales(daily_sales):
    mid = len(daily_sales) // 2
    first_half = daily_sales[:mid]
    second_half = daily_sales[mid:]
    old_avg = sum(first_half) / len(first_half)
    recent_avg = sum(second_half) / len(second_half)
    growth_rate = (recent_avg - old_avg) / old_avg
    forecast = recent_avg * (1 + growth_rate)
    return forecast, growth_rate, recent_avg

daily_sales = [1250, 1450, 1100, 1350, 1600, 1200, 1550, 1650]
forecast, growth, current = forecast_sales(daily_sales)

print("=== SALES FORECAST ===")
print(f"Current average: \\\${current:.2f}")
print(f"Growth rate: {growth * 100:.1f}%")
print(f"Forecasted average: \\\${forecast:.2f}")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Forecasting Works!</h3>
<p class="mb-4">You predicted future sales based on historical trends! This helps with inventory planning and revenue projections.</p>`,
      },
      {
        id: 6,
        title: "Section 6: Complete E-commerce Dashboard",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Build the Complete System</h3>
<p class="mb-4">Combine all functions into one comprehensive e-commerce analytics dashboard!</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Complete Dashboard</h3>
<p class="mb-4">Your dashboard will show:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>Sales trends (increasing/decreasing)</li>
  <li>Product rankings by revenue</li>
  <li>Sales forecasts</li>
  <li>Key insights</li>
</ul>`,
        demonstrateCode: `print("=== E-COMMERCE ANALYTICS ===")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Complete Dashboard</h3>
<p class="mb-4">Run the complete e-commerce analytics system!</p>`,
        starterCode: `# COMPLETE E-COMMERCE ANALYTICS DASHBOARD

# All our functions
def calculate_revenue(price, quantity):
    return price * quantity

def analyze_trend(sales_data):
    mid = len(sales_data) // 2
    first_half = sales_data[:mid]
    second_half = sales_data[mid:]
    avg_first = sum(first_half) / len(first_half)
    avg_second = sum(second_half) / len(second_half)
    if avg_second > avg_first:
        trend = "INCREASING"
    elif avg_second < avg_first:
        trend = "DECREASING"
    else:
        trend = "STABLE"
    return trend, avg_first, avg_second

def rank_products(products):
    return sorted(products, key=lambda p: p["price"] * p["sold"], reverse=True)

def forecast_sales(daily_sales):
    mid = len(daily_sales) // 2
    first_half = daily_sales[:mid]
    second_half = daily_sales[mid:]
    old_avg = sum(first_half) / len(first_half)
    recent_avg = sum(second_half) / len(second_half)
    growth_rate = (recent_avg - old_avg) / old_avg
    forecast = recent_avg * (1 + growth_rate)
    return forecast, growth_rate, recent_avg

# Data
daily_sales = [1250, 1450, 1100, 1350, 1600, 1200, 1550, 1650, 1700, 1800]
products = [
    {"name": "Laptop", "price": 899, "sold": 15},
    {"name": "Mouse", "price": 25, "sold": 45},
    {"name": "Keyboard", "price": 75, "sold": 30},
    {"name": "Monitor", "price": 299, "sold": 12},
    {"name": "Webcam", "price": 89, "sold": 20}
]

# Analysis
print("=" * 50)
print("     E-COMMERCE ANALYTICS DASHBOARD")
print("=" * 50)
print()

# Trend analysis
trend, old_avg, new_avg = analyze_trend(daily_sales)
print("📈 SALES TREND ANALYSIS")
print(f"   Early period average: \\\${old_avg:.2f}")
print(f"   Recent period average: \\\${new_avg:.2f}")
print(f"   Trend: {trend}")
print()

# Product rankings
ranked = rank_products(products)
print("🏆 TOP PRODUCTS BY REVENUE")
for i, product in enumerate(ranked[:3], 1):
    revenue = calculate_revenue(product["price"], product["sold"])
    print(f"   {i}. {product['name']}: \\\${revenue:,}")
print()

# Forecast
forecast, growth, current = forecast_sales(daily_sales)
print("🔮 SALES FORECAST")
print(f"   Current average: \\\${current:.2f}")
print(f"   Growth rate: {growth * 100:.1f}%")
print(f"   Next period forecast: \\\${forecast:.2f}")
print()

# Summary
total_revenue = sum(calculate_revenue(p["price"], p["sold"]) for p in products)
print("=" * 50)
print("SUMMARY")
print(f"  📊 Total product revenue: \\\${total_revenue:,}")
print(f"  📈 Sales trend: {trend}")
print(f"  🎯 Forecast: \\\${forecast:.2f} avg/day")
print("=" * 50)
`,
        solution: `def calculate_revenue(price, quantity):
    return price * quantity
def analyze_trend(sales_data):
    mid = len(sales_data) // 2
    first_half = sales_data[:mid]
    second_half = sales_data[mid:]
    avg_first = sum(first_half) / len(first_half)
    avg_second = sum(second_half) / len(second_half)
    if avg_second > avg_first:
        trend = "INCREASING"
    elif avg_second < avg_first:
        trend = "DECREASING"
    else:
        trend = "STABLE"
    return trend, avg_first, avg_second
def rank_products(products):
    return sorted(products, key=lambda p: p["price"] * p["sold"], reverse=True)
def forecast_sales(daily_sales):
    mid = len(daily_sales) // 2
    first_half = daily_sales[:mid]
    second_half = daily_sales[mid:]
    old_avg = sum(first_half) / len(first_half)
    recent_avg = sum(second_half) / len(second_half)
    growth_rate = (recent_avg - old_avg) / old_avg
    forecast = recent_avg * (1 + growth_rate)
    return forecast, growth_rate, recent_avg
daily_sales = [1250, 1450, 1100, 1350, 1600, 1200, 1550, 1650, 1700, 1800]
products = [
    {"name": "Laptop", "price": 899, "sold": 15},
    {"name": "Mouse", "price": 25, "sold": 45},
    {"name": "Keyboard", "price": 75, "sold": 30},
    {"name": "Monitor", "price": 299, "sold": 12},
    {"name": "Webcam", "price": 89, "sold": 20}
]
print("=" * 50)
print("     E-COMMERCE ANALYTICS DASHBOARD")
print("=" * 50)
print()
trend, old_avg, new_avg = analyze_trend(daily_sales)
print("📈 SALES TREND ANALYSIS")
print(f"   Early period average: \\\${old_avg:.2f}")
print(f"   Recent period average: \\\${new_avg:.2f}")
print(f"   Trend: {trend}")
print()
ranked = rank_products(products)
print("🏆 TOP PRODUCTS BY REVENUE")
for i, product in enumerate(ranked[:3], 1):
    revenue = calculate_revenue(product["price"], product["sold"])
    print(f"   {i}. {product['name']}: \\\${revenue:,}")
print()
forecast, growth, current = forecast_sales(daily_sales)
print("🔮 SALES FORECAST")
print(f"   Current average: \\\${current:.2f}")
print(f"   Growth rate: {growth * 100:.1f}%")
print(f"   Next period forecast: \\\${forecast:.2f}")
print()
total_revenue = sum(calculate_revenue(p["price"], p["sold"]) for p in products)
print("=" * 50)
print("SUMMARY")
print(f"  📊 Total product revenue: \\\${total_revenue:,}")
print(f"  📈 Sales trend: {trend}")
print(f"  🎯 Forecast: \\\${forecast:.2f} avg/day")
print("=" * 50)`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">🎉 E-COMMERCE SYSTEM COMPLETE!</h3>
<p class="mb-4 text-xl font-bold">You built a professional analytics platform!</p>
<p class="mb-4">What you learned:</p>
<ul class="list-disc ml-6 space-y-2">
  <li>✓ Creating reusable functions</li>
  <li>✓ Working with dictionaries</li>
  <li>✓ Trend analysis algorithms</li>
  <li>✓ Sorting with custom keys</li>
  <li>✓ Revenue forecasting</li>
  <li>✓ Combining multiple analytics</li>
</ul>
<p class="mt-4 bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
<strong>Real-world power:</strong> E-commerce companies use exactly these techniques to optimize inventory, predict demand, and maximize revenue. You're building real data science skills!
</p>
<p class="mt-4 font-semibold">Ready for more advanced projects? →</p>`,
      },
    ],
  },
  "5": {
    title: "Customer Segmentation Engine (RFM Analysis)",
    description: "Build an advanced customer segmentation system using Recency, Frequency, and Monetary analysis",
    sections: [
      {
        id: 1,
        title: "Section 1: Introduction to RFM",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 What is RFM Analysis?</h3>
<p class="mb-4">RFM is a powerful customer segmentation method used by marketing teams:</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li><strong>Recency:</strong> How recently did they purchase?</li>
  <li><strong>Frequency:</strong> How often do they purchase?</li>
  <li><strong>Monetary:</strong> How much do they spend?</li>
</ul>
<p class="mb-4">Each gets scored 1-5, then combined to segment customers into groups like "Champions", "Loyal Customers", "At Risk", etc.</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 RFM Example</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Customer: Alice
  Recency: 5 days ago (Score: 5 - recent!)
  Frequency: 12 purchases (Score: 5 - frequent!)
  Monetary: $2,500 total (Score: 5 - high value!)
  RFM Score: 555 → "CHAMPION"

Customer: Bob
  Recency: 180 days ago (Score: 1 - dormant!)
  Frequency: 2 purchases (Score: 2 - infrequent)
  Monetary: $150 total (Score: 1 - low value)
  RFM Score: 121 → "LOST"
</pre>`,
        demonstrateCode: `# Sample customer data
customers = [
    {"name": "Alice", "days_since_purchase": 5, "num_purchases": 12, "total_spent": 2500},
    {"name": "Bob", "days_since_purchase": 180, "num_purchases": 2, "total_spent": 150}
]

for customer in customers:
    print(f"{customer['name']}:")
    print(f"  Last purchase: {customer['days_since_purchase']} days ago")
    print(f"  Total purchases: {customer['num_purchases']}")
    print(f"  Total spent: \${customer['total_spent']}")
    print()`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Explore RFM Data</h3>
<p class="mb-4">Review the customer data structure for RFM analysis!</p>`,
        starterCode: `# Customer purchase data
customers = [
    {"name": "Alice", "days_since_purchase": 5, "num_purchases": 12, "total_spent": 2500},
    {"name": "Bob", "days_since_purchase": 180, "num_purchases": 2, "total_spent": 150},
    {"name": "Carol", "days_since_purchase": 30, "num_purchases": 8, "total_spent": 1200},
    {"name": "David", "days_since_purchase": 10, "num_purchases": 15, "total_spent": 3200},
    {"name": "Emma", "days_since_purchase": 90, "num_purchases": 4, "total_spent": 600}
]

print("=== CUSTOMER DATA ===")
for customer in customers:
    print(f"{customer['name']}:")
    print(f"  Days since last purchase: {customer['days_since_purchase']}")
    print(f"  Number of purchases: {customer['num_purchases']}")
    print(f"  Total spent: \\\${customer['total_spent']}")
    print()
`,
        solution: `customers = [
    {"name": "Alice", "days_since_purchase": 5, "num_purchases": 12, "total_spent": 2500},
    {"name": "Bob", "days_since_purchase": 180, "num_purchases": 2, "total_spent": 150},
    {"name": "Carol", "days_since_purchase": 30, "num_purchases": 8, "total_spent": 1200},
    {"name": "David", "days_since_purchase": 10, "num_purchases": 15, "total_spent": 3200},
    {"name": "Emma", "days_since_purchase": 90, "num_purchases": 4, "total_spent": 600}
]
print("=== CUSTOMER DATA ===")
for customer in customers:
    print(f"{customer['name']}:")
    print(f"  Days since last purchase: {customer['days_since_purchase']}")
    print(f"  Number of purchases: {customer['num_purchases']}")
    print(f"  Total spent: \\\${customer['total_spent']}")
    print()`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ RFM Data Understood!</h3>
<p class="mb-4">You've seen the three key metrics for customer segmentation. Now let's score them!</p>`,
      },
      {
        id: 2,
        title: "Section 2: Calculate Recency Scores",
        explain: `<h3 class="font-bold text-lg mb-2">⏰ Scoring Recency</h3>
<p class="mb-4">Recency scores: Lower days = higher score (recent is better!)</p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
0-30 days: Score 5 (very recent)
31-60 days: Score 4 (recent)
61-90 days: Score 3 (moderate)
91-180 days: Score 2 (old)
180+ days: Score 1 (very old)
</pre>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Recency Scoring Function</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1
</pre>`,
        demonstrateCode: `def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1

print(f"5 days → Score: {score_recency(5)}")
print(f"45 days → Score: {score_recency(45)}")
print(f"200 days → Score: {score_recency(200)}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Score All Customers' Recency</h3>
<p class="mb-4">Apply the recency scoring function to all customers!</p>`,
        starterCode: `def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1

customers = [
    {"name": "Alice", "days_since_purchase": 5},
    {"name": "Bob", "days_since_purchase": 180},
    {"name": "Carol", "days_since_purchase": 30},
    {"name": "David", "days_since_purchase": 10},
    {"name": "Emma", "days_since_purchase": 90}
]

print("=== RECENCY SCORES ===")
for customer in customers:
    days = customer["days_since_purchase"]
    score = score_recency(days)
    print(f"{customer['name']}: {days} days → Score {score}")
`,
        solution: `def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1
customers = [
    {"name": "Alice", "days_since_purchase": 5},
    {"name": "Bob", "days_since_purchase": 180},
    {"name": "Carol", "days_since_purchase": 30},
    {"name": "David", "days_since_purchase": 10},
    {"name": "Emma", "days_since_purchase": 90}
]
print("=== RECENCY SCORES ===")
for customer in customers:
    days = customer["days_since_purchase"]
    score = score_recency(days)
    print(f"{customer['name']}: {days} days → Score {score}")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Recency Scored!</h3>
<p class="mb-4">Alice and David get high recency scores (5) because they purchased recently. Bob gets a low score (2) because it's been 180 days!</p>`,
      },
      {
        id: 3,
        title: "Section 3: Calculate Frequency & Monetary Scores",
        explain: `<h3 class="font-bold text-lg mb-2">🔢 Scoring Frequency and Monetary</h3>
<p class="mb-4"><strong>Frequency:</strong> More purchases = higher score</p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
10+ purchases: Score 5
7-9 purchases: Score 4
4-6 purchases: Score 3
2-3 purchases: Score 2
1 purchase: Score 1
</pre>
<p class="mb-4"><strong>Monetary:</strong> More spent = higher score</p>
<pre class="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">
$2000+: Score 5
$1000-$1999: Score 4
$500-$999: Score 3
$200-$499: Score 2
< $200: Score 1
</pre>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Frequency & Monetary Functions</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
def score_frequency(num_purchases):
    if num_purchases >= 10:
        return 5
    elif num_purchases >= 7:
        return 4
    elif num_purchases >= 4:
        return 3
    elif num_purchases >= 2:
        return 2
    else:
        return 1

def score_monetary(total_spent):
    if total_spent >= 2000:
        return 5
    elif total_spent >= 1000:
        return 4
    elif total_spent >= 500:
        return 3
    elif total_spent >= 200:
        return 2
    else:
        return 1
</pre>`,
        demonstrateCode: `def score_frequency(num_purchases):
    if num_purchases >= 10:
        return 5
    elif num_purchases >= 7:
        return 4
    elif num_purchases >= 4:
        return 3
    elif num_purchases >= 2:
        return 2
    else:
        return 1

def score_monetary(total_spent):
    if total_spent >= 2000:
        return 5
    elif total_spent >= 1000:
        return 4
    elif total_spent >= 500:
        return 3
    elif total_spent >= 200:
        return 2
    else:
        return 1

print(f"15 purchases → Score: {score_frequency(15)}")
print(f"$2500 spent → Score: {score_monetary(2500)}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Complete RFM Scoring</h3>
<p class="mb-4">Calculate all three scores for each customer!</p>`,
        starterCode: `def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1

def score_frequency(num_purchases):
    if num_purchases >= 10:
        return 5
    elif num_purchases >= 7:
        return 4
    elif num_purchases >= 4:
        return 3
    elif num_purchases >= 2:
        return 2
    else:
        return 1

def score_monetary(total_spent):
    if total_spent >= 2000:
        return 5
    elif total_spent >= 1000:
        return 4
    elif total_spent >= 500:
        return 3
    elif total_spent >= 200:
        return 2
    else:
        return 1

customers = [
    {"name": "Alice", "days_since_purchase": 5, "num_purchases": 12, "total_spent": 2500},
    {"name": "Bob", "days_since_purchase": 180, "num_purchases": 2, "total_spent": 150},
    {"name": "Carol", "days_since_purchase": 30, "num_purchases": 8, "total_spent": 1200}
]

print("=== RFM SCORES ===")
for customer in customers:
    r_score = score_recency(customer["days_since_purchase"])
    f_score = score_frequency(customer["num_purchases"])
    m_score = score_monetary(customer["total_spent"])

    print(f"{customer['name']}:")
    print(f"  Recency (R): {r_score}")
    print(f"  Frequency (F): {f_score}")
    print(f"  Monetary (M): {m_score}")
    print(f"  RFM Score: {r_score}{f_score}{m_score}")
    print()
`,
        solution: `def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1
def score_frequency(num_purchases):
    if num_purchases >= 10:
        return 5
    elif num_purchases >= 7:
        return 4
    elif num_purchases >= 4:
        return 3
    elif num_purchases >= 2:
        return 2
    else:
        return 1
def score_monetary(total_spent):
    if total_spent >= 2000:
        return 5
    elif total_spent >= 1000:
        return 4
    elif total_spent >= 500:
        return 3
    elif total_spent >= 200:
        return 2
    else:
        return 1
customers = [
    {"name": "Alice", "days_since_purchase": 5, "num_purchases": 12, "total_spent": 2500},
    {"name": "Bob", "days_since_purchase": 180, "num_purchases": 2, "total_spent": 150},
    {"name": "Carol", "days_since_purchase": 30, "num_purchases": 8, "total_spent": 1200}
]
print("=== RFM SCORES ===")
for customer in customers:
    r_score = score_recency(customer["days_since_purchase"])
    f_score = score_frequency(customer["num_purchases"])
    m_score = score_monetary(customer["total_spent"])
    print(f"{customer['name']}:")
    print(f"  Recency (R): {r_score}")
    print(f"  Frequency (F): {f_score}")
    print(f"  Monetary (M): {m_score}")
    print(f"  RFM Score: {r_score}{f_score}{m_score}")
    print()`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ All RFM Scores Calculated!</h3>
<p class="mb-4">Alice gets 555 (perfect score!), Bob gets 221 (at-risk customer), Carol gets 545 (loyal customer).</p>`,
      },
      {
        id: 4,
        title: "Section 4: Customer Segmentation",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Segment Customers</h3>
<p class="mb-4">Based on RFM scores, assign customers to segments:</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li><strong>Champions (555, 554, 544):</strong> Best customers</li>
  <li><strong>Loyal (543, 444, 434):</strong> Regular buyers</li>
  <li><strong>At Risk (233, 232, 231):</strong> Need attention</li>
  <li><strong>Lost (111, 112, 121):</strong> Win-back needed</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Segmentation Function</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
def get_segment(r, f, m):
    score = int(f"{r}{f}{m}")

    if score >= 544:
        return "Champion"
    elif score >= 434:
        return "Loyal Customer"
    elif score >= 333:
        return "Potential"
    elif score >= 222:
        return "At Risk"
    else:
        return "Lost"
</pre>`,
        demonstrateCode: `def get_segment(r, f, m):
    score = int(f"{r}{f}{m}")
    if score >= 544:
        return "Champion"
    elif score >= 434:
        return "Loyal Customer"
    elif score >= 333:
        return "Potential"
    elif score >= 222:
        return "At Risk"
    else:
        return "Lost"

print(f"555 → {get_segment(5, 5, 5)}")
print(f"444 → {get_segment(4, 4, 4)}")
print(f"221 → {get_segment(2, 2, 1)}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Segment All Customers</h3>
<p class="mb-4">Add segment classification to the RFM analysis!</p>`,
        starterCode: `def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1

def score_frequency(num_purchases):
    if num_purchases >= 10:
        return 5
    elif num_purchases >= 7:
        return 4
    elif num_purchases >= 4:
        return 3
    elif num_purchases >= 2:
        return 2
    else:
        return 1

def score_monetary(total_spent):
    if total_spent >= 2000:
        return 5
    elif total_spent >= 1000:
        return 4
    elif total_spent >= 500:
        return 3
    elif total_spent >= 200:
        return 2
    else:
        return 1

def get_segment(r, f, m):
    score = int(f"{r}{f}{m}")
    if score >= 544:
        return "Champion"
    elif score >= 434:
        return "Loyal Customer"
    elif score >= 333:
        return "Potential"
    elif score >= 222:
        return "At Risk"
    else:
        return "Lost"

customers = [
    {"name": "Alice", "days_since_purchase": 5, "num_purchases": 12, "total_spent": 2500},
    {"name": "Bob", "days_since_purchase": 180, "num_purchases": 2, "total_spent": 150},
    {"name": "Carol", "days_since_purchase": 30, "num_purchases": 8, "total_spent": 1200},
    {"name": "David", "days_since_purchase": 10, "num_purchases": 15, "total_spent": 3200},
    {"name": "Emma", "days_since_purchase": 90, "num_purchases": 4, "total_spent": 600}
]

print("=== CUSTOMER SEGMENTS ===")
for customer in customers:
    r = score_recency(customer["days_since_purchase"])
    f = score_frequency(customer["num_purchases"])
    m = score_monetary(customer["total_spent"])
    segment = get_segment(r, f, m)

    print(f"{customer['name']} (RFM: {r}{f}{m}) → {segment}")
`,
        solution: `def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1
def score_frequency(num_purchases):
    if num_purchases >= 10:
        return 5
    elif num_purchases >= 7:
        return 4
    elif num_purchases >= 4:
        return 3
    elif num_purchases >= 2:
        return 2
    else:
        return 1
def score_monetary(total_spent):
    if total_spent >= 2000:
        return 5
    elif total_spent >= 1000:
        return 4
    elif total_spent >= 500:
        return 3
    elif total_spent >= 200:
        return 2
    else:
        return 1
def get_segment(r, f, m):
    score = int(f"{r}{f}{m}")
    if score >= 544:
        return "Champion"
    elif score >= 434:
        return "Loyal Customer"
    elif score >= 333:
        return "Potential"
    elif score >= 222:
        return "At Risk"
    else:
        return "Lost"
customers = [
    {"name": "Alice", "days_since_purchase": 5, "num_purchases": 12, "total_spent": 2500},
    {"name": "Bob", "days_since_purchase": 180, "num_purchases": 2, "total_spent": 150},
    {"name": "Carol", "days_since_purchase": 30, "num_purchases": 8, "total_spent": 1200},
    {"name": "David", "days_since_purchase": 10, "num_purchases": 15, "total_spent": 3200},
    {"name": "Emma", "days_since_purchase": 90, "num_purchases": 4, "total_spent": 600}
]
print("=== CUSTOMER SEGMENTS ===")
for customer in customers:
    r = score_recency(customer["days_since_purchase"])
    f = score_frequency(customer["num_purchases"])
    m = score_monetary(customer["total_spent"])
    segment = get_segment(r, f, m)
    print(f"{customer['name']} (RFM: {r}{f}{m}) → {segment}")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Customers Segmented!</h3>
<p class="mb-4">Alice and David are Champions, Carol is Loyal, Emma is At Risk, and Bob is Lost. Now you can target each segment differently!</p>`,
      },
      {
        id: 5,
        title: "Section 5: Segment Statistics",
        explain: `<h3 class="font-bold text-lg mb-2">📊 Analyze Segment Distribution</h3>
<p class="mb-4">Count how many customers are in each segment to understand your customer base!</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Counting by Segment</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
segment_counts = {}

for customer in customers:
    segment = get_segment(...)
    if segment in segment_counts:
        segment_counts[segment] += 1
    else:
        segment_counts[segment] = 1
</pre>`,
        demonstrateCode: `segments = ["Champion", "Loyal Customer", "Champion", "At Risk"]

segment_counts = {}
for segment in segments:
    if segment in segment_counts:
        segment_counts[segment] += 1
    else:
        segment_counts[segment] = 1

for segment, count in segment_counts.items():
    print(f"{segment}: {count}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate Segment Distribution</h3>
<p class="mb-4">Count customers in each segment!</p>`,
        starterCode: `def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1

def score_frequency(num_purchases):
    if num_purchases >= 10:
        return 5
    elif num_purchases >= 7:
        return 4
    elif num_purchases >= 4:
        return 3
    elif num_purchases >= 2:
        return 2
    else:
        return 1

def score_monetary(total_spent):
    if total_spent >= 2000:
        return 5
    elif total_spent >= 1000:
        return 4
    elif total_spent >= 500:
        return 3
    elif total_spent >= 200:
        return 2
    else:
        return 1

def get_segment(r, f, m):
    score = int(f"{r}{f}{m}")
    if score >= 544:
        return "Champion"
    elif score >= 434:
        return "Loyal Customer"
    elif score >= 333:
        return "Potential"
    elif score >= 222:
        return "At Risk"
    else:
        return "Lost"

customers = [
    {"name": "Alice", "days_since_purchase": 5, "num_purchases": 12, "total_spent": 2500},
    {"name": "Bob", "days_since_purchase": 180, "num_purchases": 2, "total_spent": 150},
    {"name": "Carol", "days_since_purchase": 30, "num_purchases": 8, "total_spent": 1200},
    {"name": "David", "days_since_purchase": 10, "num_purchases": 15, "total_spent": 3200},
    {"name": "Emma", "days_since_purchase": 90, "num_purchases": 4, "total_spent": 600},
    {"name": "Frank", "days_since_purchase": 200, "num_purchases": 1, "total_spent": 50},
    {"name": "Grace", "days_since_purchase": 15, "num_purchases": 10, "total_spent": 1800}
]

# Count segments
segment_counts = {}
total_value_by_segment = {}

for customer in customers:
    r = score_recency(customer["days_since_purchase"])
    f = score_frequency(customer["num_purchases"])
    m = score_monetary(customer["total_spent"])
    segment = get_segment(r, f, m)

    # Count
    if segment in segment_counts:
        segment_counts[segment] += 1
        total_value_by_segment[segment] += customer["total_spent"]
    else:
        segment_counts[segment] = 1
        total_value_by_segment[segment] = customer["total_spent"]

print("=== SEGMENT DISTRIBUTION ===")
for segment, count in segment_counts.items():
    total_value = total_value_by_segment[segment]
    print(f"{segment}: {count} customers, \\\${total_value:,} total value")
`,
        solution: `def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1
def score_frequency(num_purchases):
    if num_purchases >= 10:
        return 5
    elif num_purchases >= 7:
        return 4
    elif num_purchases >= 4:
        return 3
    elif num_purchases >= 2:
        return 2
    else:
        return 1
def score_monetary(total_spent):
    if total_spent >= 2000:
        return 5
    elif total_spent >= 1000:
        return 4
    elif total_spent >= 500:
        return 3
    elif total_spent >= 200:
        return 2
    else:
        return 1
def get_segment(r, f, m):
    score = int(f"{r}{f}{m}")
    if score >= 544:
        return "Champion"
    elif score >= 434:
        return "Loyal Customer"
    elif score >= 333:
        return "Potential"
    elif score >= 222:
        return "At Risk"
    else:
        return "Lost"
customers = [
    {"name": "Alice", "days_since_purchase": 5, "num_purchases": 12, "total_spent": 2500},
    {"name": "Bob", "days_since_purchase": 180, "num_purchases": 2, "total_spent": 150},
    {"name": "Carol", "days_since_purchase": 30, "num_purchases": 8, "total_spent": 1200},
    {"name": "David", "days_since_purchase": 10, "num_purchases": 15, "total_spent": 3200},
    {"name": "Emma", "days_since_purchase": 90, "num_purchases": 4, "total_spent": 600},
    {"name": "Frank", "days_since_purchase": 200, "num_purchases": 1, "total_spent": 50},
    {"name": "Grace", "days_since_purchase": 15, "num_purchases": 10, "total_spent": 1800}
]
segment_counts = {}
total_value_by_segment = {}
for customer in customers:
    r = score_recency(customer["days_since_purchase"])
    f = score_frequency(customer["num_purchases"])
    m = score_monetary(customer["total_spent"])
    segment = get_segment(r, f, m)
    if segment in segment_counts:
        segment_counts[segment] += 1
        total_value_by_segment[segment] += customer["total_spent"]
    else:
        segment_counts[segment] = 1
        total_value_by_segment[segment] = customer["total_spent"]
print("=== SEGMENT DISTRIBUTION ===")
for segment, count in segment_counts.items():
    total_value = total_value_by_segment[segment]
    print(f"{segment}: {count} customers, \\\${total_value:,} total value")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Segment Distribution Calculated!</h3>
<p class="mb-4">Now you can see which segments dominate your customer base and where the most value is!</p>`,
      },
      {
        id: 6,
        title: "Section 6: Complete RFM Segmentation Engine",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Complete Segmentation System</h3>
<p class="mb-4">Combine everything into a comprehensive customer segmentation engine with actionable insights!</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Full System</h3>
<p class="mb-4">Your complete system will provide:</p>
<ul class="list-disc ml-6 space-y-1">
  <li>Individual customer RFM scores</li>
  <li>Segment assignments</li>
  <li>Segment distribution stats</li>
  <li>Marketing recommendations</li>
</ul>`,
        demonstrateCode: `print("=== RFM SEGMENTATION ENGINE ===")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Run Complete RFM Engine</h3>
<p class="mb-4">Execute the full customer segmentation system!</p>`,
        starterCode: `# COMPLETE RFM SEGMENTATION ENGINE

def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1

def score_frequency(num_purchases):
    if num_purchases >= 10:
        return 5
    elif num_purchases >= 7:
        return 4
    elif num_purchases >= 4:
        return 3
    elif num_purchases >= 2:
        return 2
    else:
        return 1

def score_monetary(total_spent):
    if total_spent >= 2000:
        return 5
    elif total_spent >= 1000:
        return 4
    elif total_spent >= 500:
        return 3
    elif total_spent >= 200:
        return 2
    else:
        return 1

def get_segment(r, f, m):
    score = int(f"{r}{f}{m}")
    if score >= 544:
        return "Champion"
    elif score >= 434:
        return "Loyal Customer"
    elif score >= 333:
        return "Potential"
    elif score >= 222:
        return "At Risk"
    else:
        return "Lost"

customers = [
    {"name": "Alice", "days_since_purchase": 5, "num_purchases": 12, "total_spent": 2500},
    {"name": "Bob", "days_since_purchase": 180, "num_purchases": 2, "total_spent": 150},
    {"name": "Carol", "days_since_purchase": 30, "num_purchases": 8, "total_spent": 1200},
    {"name": "David", "days_since_purchase": 10, "num_purchases": 15, "total_spent": 3200},
    {"name": "Emma", "days_since_purchase": 90, "num_purchases": 4, "total_spent": 600},
    {"name": "Frank", "days_since_purchase": 200, "num_purchases": 1, "total_spent": 50},
    {"name": "Grace", "days_since_purchase": 15, "num_purchases": 10, "total_spent": 1800},
    {"name": "Henry", "days_since_purchase": 60, "num_purchases": 6, "total_spent": 800}
]

print("=" * 60)
print("         RFM CUSTOMER SEGMENTATION ENGINE")
print("=" * 60)
print()

# Individual customer analysis
print("INDIVIDUAL CUSTOMER ANALYSIS:")
print("-" * 60)
segments_list = []
for customer in customers:
    r = score_recency(customer["days_since_purchase"])
    f = score_frequency(customer["num_purchases"])
    m = score_monetary(customer["total_spent"])
    segment = get_segment(r, f, m)
    segments_list.append(segment)

    print(f"{customer['name']:<10} | RFM: {r}{f}{m} | {segment:<20} | \\\${customer['total_spent']:,}")

print()
print("=" * 60)

# Segment distribution
segment_counts = {}
total_value_by_segment = {}
for customer in customers:
    r = score_recency(customer["days_since_purchase"])
    f = score_frequency(customer["num_purchases"])
    m = score_monetary(customer["total_spent"])
    segment = get_segment(r, f, m)

    if segment in segment_counts:
        segment_counts[segment] += 1
        total_value_by_segment[segment] += customer["total_spent"]
    else:
        segment_counts[segment] = 1
        total_value_by_segment[segment] = customer["total_spent"]

print("SEGMENT DISTRIBUTION:")
print("-" * 60)
for segment in ["Champion", "Loyal Customer", "Potential", "At Risk", "Lost"]:
    if segment in segment_counts:
        count = segment_counts[segment]
        value = total_value_by_segment[segment]
        pct = (count / len(customers)) * 100
        print(f"{segment:<20} | {count} customers ({pct:.1f}%) | \\\${value:,} total value")

print()
print("=" * 60)
print("MARKETING RECOMMENDATIONS:")
print("-" * 60)
print("• Champions: Reward program, early access to new products")
print("• Loyal Customers: Upsell premium products, referral program")
print("• At Risk: Special discount, re-engagement campaign")
print("• Lost: Win-back offer, survey for feedback")
print("=" * 60)
`,
        solution: `def score_recency(days):
    if days <= 30:
        return 5
    elif days <= 60:
        return 4
    elif days <= 90:
        return 3
    elif days <= 180:
        return 2
    else:
        return 1
def score_frequency(num_purchases):
    if num_purchases >= 10:
        return 5
    elif num_purchases >= 7:
        return 4
    elif num_purchases >= 4:
        return 3
    elif num_purchases >= 2:
        return 2
    else:
        return 1
def score_monetary(total_spent):
    if total_spent >= 2000:
        return 5
    elif total_spent >= 1000:
        return 4
    elif total_spent >= 500:
        return 3
    elif total_spent >= 200:
        return 2
    else:
        return 1
def get_segment(r, f, m):
    score = int(f"{r}{f}{m}")
    if score >= 544:
        return "Champion"
    elif score >= 434:
        return "Loyal Customer"
    elif score >= 333:
        return "Potential"
    elif score >= 222:
        return "At Risk"
    else:
        return "Lost"
customers = [
    {"name": "Alice", "days_since_purchase": 5, "num_purchases": 12, "total_spent": 2500},
    {"name": "Bob", "days_since_purchase": 180, "num_purchases": 2, "total_spent": 150},
    {"name": "Carol", "days_since_purchase": 30, "num_purchases": 8, "total_spent": 1200},
    {"name": "David", "days_since_purchase": 10, "num_purchases": 15, "total_spent": 3200},
    {"name": "Emma", "days_since_purchase": 90, "num_purchases": 4, "total_spent": 600},
    {"name": "Frank", "days_since_purchase": 200, "num_purchases": 1, "total_spent": 50},
    {"name": "Grace", "days_since_purchase": 15, "num_purchases": 10, "total_spent": 1800},
    {"name": "Henry", "days_since_purchase": 60, "num_purchases": 6, "total_spent": 800}
]
print("=" * 60)
print("         RFM CUSTOMER SEGMENTATION ENGINE")
print("=" * 60)
print()
print("INDIVIDUAL CUSTOMER ANALYSIS:")
print("-" * 60)
segments_list = []
for customer in customers:
    r = score_recency(customer["days_since_purchase"])
    f = score_frequency(customer["num_purchases"])
    m = score_monetary(customer["total_spent"])
    segment = get_segment(r, f, m)
    segments_list.append(segment)
    print(f"{customer['name']:<10} | RFM: {r}{f}{m} | {segment:<20} | \\\${customer['total_spent']:,}")
print()
print("=" * 60)
segment_counts = {}
total_value_by_segment = {}
for customer in customers:
    r = score_recency(customer["days_since_purchase"])
    f = score_frequency(customer["num_purchases"])
    m = score_monetary(customer["total_spent"])
    segment = get_segment(r, f, m)
    if segment in segment_counts:
        segment_counts[segment] += 1
        total_value_by_segment[segment] += customer["total_spent"]
    else:
        segment_counts[segment] = 1
        total_value_by_segment[segment] = customer["total_spent"]
print("SEGMENT DISTRIBUTION:")
print("-" * 60)
for segment in ["Champion", "Loyal Customer", "Potential", "At Risk", "Lost"]:
    if segment in segment_counts:
        count = segment_counts[segment]
        value = total_value_by_segment[segment]
        pct = (count / len(customers)) * 100
        print(f"{segment:<20} | {count} customers ({pct:.1f}%) | \\\${value:,} total value")
print()
print("=" * 60)
print("MARKETING RECOMMENDATIONS:")
print("-" * 60)
print("• Champions: Reward program, early access to new products")
print("• Loyal Customers: Upsell premium products, referral program")
print("• At Risk: Special discount, re-engagement campaign")
print("• Lost: Win-back offer, survey for feedback")
print("=" * 60)`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">🎉 RFM SEGMENTATION ENGINE COMPLETE!</h3>
<p class="mb-4 text-xl font-bold">You built an enterprise-grade customer segmentation system!</p>
<p class="mb-4">What you mastered:</p>
<ul class="list-disc ml-6 space-y-2">
  <li>✓ Multi-dimensional scoring systems</li>
  <li>✓ Complex customer segmentation</li>
  <li>✓ Dictionary manipulation</li>
  <li>✓ Aggregating by categories</li>
  <li>✓ Marketing strategy mapping</li>
</ul>
<p class="mt-4 bg-green-50 dark:bg-green-900/20 p-4 rounded border-l-4 border-green-500">
<strong>Professional tool:</strong> RFM analysis is used by major e-commerce companies, subscription services, and retail businesses worldwide. You just built the exact tool marketing teams use to optimize customer lifetime value!
</p>
<p class="mt-4 font-semibold">Ready for advanced projects? →</p>`,
      },
    ],
  },
  "6": {
    title: "Time Series Forecasting Dashboard",
    description: "Build a complete time series analysis system with trend detection and forecasting",
    sections: [
      {
        id: 1,
        title: "Section 1: Understanding Time Series Data",
        explain: `<h3 class="font-bold text-lg mb-2">📊 What is Time Series Analysis?</h3>
<p class="mb-4"><strong>Time Series Analysis</strong> examines data points collected over time to identify patterns, trends, and make predictions.</p>
<p class="mb-4"><strong>Why this matters:</strong> Businesses use time series analysis to forecast sales, predict demand, and identify seasonal patterns.</p>
<p class="mb-4"><strong>What you'll build:</strong> A forecasting dashboard that analyzes monthly sales data, detects trends, and predicts future performance.</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li>Calculate monthly growth rates</li>
  <li>Identify trends (growing, declining, stable)</li>
  <li>Compute moving averages for smoothing</li>
  <li>Forecast next month's sales</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Time Series in Action</h3>
<p class="mb-2">Here's what time series analysis looks like:</p>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Monthly Sales: [12000, 13500, 14200, 15100, 14800, 16300]
Months: Jan, Feb, Mar, Apr, May, Jun

Growth Rate: 8.5%
Trend: GROWING
3-Month Moving Average: 15400
Forecast for July: 17,050
</pre>`,
        demonstrateCode: `# Time Series Analysis Demo
monthly_sales = [12000, 13500, 14200, 15100, 14800, 16300]

# Calculate total growth
first = monthly_sales[0]
last = monthly_sales[-1]
growth = ((last - first) / first) * 100

# Calculate 3-month moving average
recent_3 = monthly_sales[-3:]
moving_avg = sum(recent_3) / len(recent_3)

print(f"Total Growth: {growth:.1f}%")
print(f"3-Month Avg: \\\${moving_avg:.0f}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Analyze Sales Trend</h3>
<p class="mb-4">Run the code to see basic time series calculations. Notice how we can identify growth patterns and smooth data with moving averages.</p>`,
        starterCode: `# Time Series Analysis Demo
monthly_sales = [12000, 13500, 14200, 15100, 14800, 16300]

# Calculate total growth
first = monthly_sales[0]
last = monthly_sales[-1]
growth = ((last - first) / first) * 100

# Calculate 3-month moving average
recent_3 = monthly_sales[-3:]
moving_avg = sum(recent_3) / len(recent_3)

print(f"Total Growth: {growth:.1f}%")
print(f"3-Month Avg: \\\${moving_avg:.0f}")`,
        solution: `monthly_sales = [12000, 13500, 14200, 15100, 14800, 16300]
first = monthly_sales[0]
last = monthly_sales[-1]
growth = ((last - first) / first) * 100
recent_3 = monthly_sales[-3:]
moving_avg = sum(recent_3) / len(recent_3)
print(f"Total Growth: {growth:.1f}%")
print(f"3-Month Avg: \\\${moving_avg:.0f}")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Understanding Time Series Basics</h3>
<p class="mb-4">You calculated growth rate (35.8%) and 3-month moving average (15,400). These are fundamental time series metrics!</p>`,
      },
      {
        id: 2,
        title: "Section 2: Calculate Month-over-Month Growth",
        explain: `<h3 class="font-bold text-lg mb-2">📈 Month-over-Month Growth</h3>
<p class="mb-4"><strong>MoM Growth</strong> measures the percentage change from one month to the next. It helps identify momentum.</p>
<p class="mb-4"><strong>Formula:</strong> ((This Month - Last Month) / Last Month) × 100</p>
<p class="mb-4"><strong>Example:</strong> If sales went from 12,000 to 13,500, growth is ((13500-12000)/12000)×100 = 12.5%</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Calculating MoM Growth</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Feb vs Jan: +12.5% (12000 → 13500)
Mar vs Feb: +5.2% (13500 → 14200)
Apr vs Mar: +6.3% (14200 → 15100)
May vs Apr: -2.0% (15100 → 14800)
Jun vs May: +10.1% (14800 → 16300)

Average MoM Growth: +6.4%
</pre>`,
        demonstrateCode: `sales = [12000, 13500, 14200, 15100, 14800, 16300]

# Calculate all month-over-month changes
for i in range(1, len(sales)):
    prev = sales[i-1]
    curr = sales[i]
    change = ((curr - prev) / prev) * 100
    print(f"Month {i+1}: {change:+.1f}%")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate MoM Growth</h3>
<p class="mb-4">Write a loop that calculates the growth rate for each month. Use the formula shown above.</p>`,
        starterCode: `sales = [12000, 13500, 14200, 15100, 14800, 16300]

# Calculate month-over-month growth for all months
for i in range(1, len(sales)):
    prev = sales[i-1]
    curr = sales[i]
    # Calculate the percentage change
    change = ((curr - prev) / prev) * 100
    print(f"Month {i+1}: {change:+.1f}%")`,
        solution: `sales = [12000, 13500, 14200, 15100, 14800, 16300]
for i in range(1, len(sales)):
    prev = sales[i-1]
    curr = sales[i]
    change = ((curr - prev) / prev) * 100
    print(f"Month {i+1}: {change:+.1f}%")`,
        hint: "Loop from index 1 to len(sales), compare sales[i] to sales[i-1]",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ MoM Growth Complete!</h3>
<p class="mb-4">You calculated growth for each month. Notice May had negative growth (-2%), showing a dip in sales.</p>`,
      },
      {
        id: 3,
        title: "Section 3: Moving Averages for Trend Smoothing",
        explain: `<h3 class="font-bold text-lg mb-2">📊 Moving Averages</h3>
<p class="mb-4"><strong>Moving Average</strong> smooths out short-term fluctuations to reveal longer-term trends.</p>
<p class="mb-4"><strong>3-Month Moving Average:</strong> Average of the current month and previous 2 months.</p>
<p class="mb-4"><strong>Why useful:</strong> Reduces noise in data, making trends clearer.</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Moving Average Example</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Month 3 MA: (12000 + 13500 + 14200) / 3 = 13,233
Month 4 MA: (13500 + 14200 + 15100) / 3 = 14,267
Month 5 MA: (14200 + 15100 + 14800) / 3 = 14,700
Month 6 MA: (15100 + 14800 + 16300) / 3 = 15,400
</pre>`,
        demonstrateCode: `sales = [12000, 13500, 14200, 15100, 14800, 16300]

# Calculate 3-month moving averages
for i in range(2, len(sales)):
    window = sales[i-2:i+1]  # Get 3 months
    ma = sum(window) / 3
    print(f"Month {i+1} MA: \\\${ma:.0f}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate Moving Averages</h3>
<p class="mb-4">Calculate the 3-month moving average for each month (starting from month 3).</p>`,
        starterCode: `sales = [12000, 13500, 14200, 15100, 14800, 16300]

# Calculate 3-month moving averages
for i in range(2, len(sales)):
    # Get the current month and previous 2 months
    window = sales[i-2:i+1]
    ma = sum(window) / 3
    print(f"Month {i+1} MA: \\\${ma:.0f}")`,
        solution: `sales = [12000, 13500, 14200, 15100, 14800, 16300]
for i in range(2, len(sales)):
    window = sales[i-2:i+1]
    ma = sum(window) / 3
    print(f"Month {i+1} MA: \\\${ma:.0f}")`,
        hint: "Use slicing sales[i-2:i+1] to get a 3-month window",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Moving Averages Complete!</h3>
<p class="mb-4">You smoothed the data! The moving average shows the underlying trend more clearly than raw numbers.</p>`,
      },
      {
        id: 4,
        title: "Section 4: Trend Detection",
        explain: `<h3 class="font-bold text-lg mb-2">📈 Detecting Trends</h3>
<p class="mb-4"><strong>Trend:</strong> The general direction of data over time (growing, declining, or stable).</p>
<p class="mb-4"><strong>How to detect:</strong> Compare average of recent months to average of early months.</p>
<ul class="list-disc ml-6 mb-4">
  <li>If recent avg > early avg by 10%+: GROWING</li>
  <li>If recent avg < early avg by 10%+: DECLINING</li>
  <li>Otherwise: STABLE</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Trend Detection Example</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Early 3 months avg: 13,233
Recent 3 months avg: 15,400

Change: +16.4%
Trend: GROWING
</pre>`,
        demonstrateCode: `sales = [12000, 13500, 14200, 15100, 14800, 16300]

# Compare early vs recent
early_avg = sum(sales[:3]) / 3
recent_avg = sum(sales[-3:]) / 3
change = ((recent_avg - early_avg) / early_avg) * 100

if change > 10:
    trend = "GROWING"
elif change < -10:
    trend = "DECLINING"
else:
    trend = "STABLE"

print(f"Trend: {trend} ({change:+.1f}%)")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Detect the Trend</h3>
<p class="mb-4">Write code that detects if sales are growing, declining, or stable.</p>`,
        starterCode: `sales = [12000, 13500, 14200, 15100, 14800, 16300]

# Calculate early and recent averages
early_avg = sum(sales[:3]) / 3
recent_avg = sum(sales[-3:]) / 3

# Calculate percentage change
change = ((recent_avg - early_avg) / early_avg) * 100

# Determine trend
if change > 10:
    trend = "GROWING"
elif change < -10:
    trend = "DECLINING"
else:
    trend = "STABLE"

print(f"Trend: {trend} ({change:+.1f}%)")`,
        solution: `sales = [12000, 13500, 14200, 15100, 14800, 16300]
early_avg = sum(sales[:3]) / 3
recent_avg = sum(sales[-3:]) / 3
change = ((recent_avg - early_avg) / early_avg) * 100
if change > 10:
    trend = "GROWING"
elif change < -10:
    trend = "DECLINING"
else:
    trend = "STABLE"
print(f"Trend: {trend} ({change:+.1f}%)")`,
        hint: "Compare early_avg (first 3 months) to recent_avg (last 3 months)",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Trend Detection Complete!</h3>
<p class="mb-4">You detected a GROWING trend! The business is expanding with +16.4% growth.</p>`,
      },
      {
        id: 5,
        title: "Section 5: Build the Complete Forecasting Dashboard",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Complete Forecasting System</h3>
<p class="mb-4">Now combine everything into a professional forecasting dashboard:</p>
<ul class="list-disc ml-6 mb-4 space-y-1">
  <li>Historical sales analysis</li>
  <li>Growth rate calculations</li>
  <li>Moving averages</li>
  <li>Trend detection</li>
  <li>Simple forecast (based on average growth)</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Complete Dashboard Output</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
=== TIME SERIES FORECASTING DASHBOARD ===

Historical Performance:
  Latest Month: \$16,300
  6-Month Average: \$14,317
  Total Growth: +35.8%

Trend Analysis:
  Status: GROWING
  Growth Rate: +16.4%
  3-Month MA: \$15,400

Forecast:
  Predicted Next Month: \$17,050
  Confidence: MODERATE
</pre>`,
        demonstrateCode: `sales = [12000, 13500, 14200, 15100, 14800, 16300]

# Historical analysis
latest = sales[-1]
avg = sum(sales) / len(sales)
total_growth = ((sales[-1] - sales[0]) / sales[0]) * 100

# Trend
early_avg = sum(sales[:3]) / 3
recent_avg = sum(sales[-3:]) / 3
trend_change = ((recent_avg - early_avg) / early_avg) * 100

# Forecast (simple: last month + average growth)
avg_monthly_growth = total_growth / len(sales)
forecast = latest * (1 + avg_monthly_growth / 100)

print("=== FORECASTING DASHBOARD ===")
print(f"Latest: \\\${latest}")
print(f"Avg: \\\${avg:.0f}")
print(f"Growth: {total_growth:.1f}%")
print(f"Forecast: \\\${forecast:.0f}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Build Complete Dashboard</h3>
<p class="mb-4">Create the full forecasting dashboard combining all techniques you've learned.</p>`,
        starterCode: `sales = [12000, 13500, 14200, 15100, 14800, 16300]

# Calculate all key metrics
latest = sales[-1]
average = sum(sales) / len(sales)
total_growth = ((sales[-1] - sales[0]) / sales[0]) * 100

# Trend analysis
early_avg = sum(sales[:3]) / 3
recent_avg = sum(sales[-3:]) / 3
trend_change = ((recent_avg - early_avg) / early_avg) * 100

if trend_change > 10:
    trend = "GROWING"
elif trend_change < -10:
    trend = "DECLINING"
else:
    trend = "STABLE"

# Simple forecast
avg_monthly_growth = total_growth / len(sales)
forecast = latest * (1 + avg_monthly_growth / 100)

# Display dashboard
print("=== TIME SERIES FORECASTING DASHBOARD ===")
print()
print(f"Latest Month: \\\${latest:,}")
print(f"6-Month Average: \\\${average:,.0f}")
print(f"Total Growth: {total_growth:.1f}%")
print()
print(f"Trend: {trend}")
print(f"3-Month MA: \\\${recent_avg:,.0f}")
print()
print(f"Forecast Next Month: \\\${forecast:,.0f}")`,
        solution: `sales = [12000, 13500, 14200, 15100, 14800, 16300]
latest = sales[-1]
average = sum(sales) / len(sales)
total_growth = ((sales[-1] - sales[0]) / sales[0]) * 100
early_avg = sum(sales[:3]) / 3
recent_avg = sum(sales[-3:]) / 3
trend_change = ((recent_avg - early_avg) / early_avg) * 100
if trend_change > 10:
    trend = "GROWING"
elif trend_change < -10:
    trend = "DECLINING"
else:
    trend = "STABLE"
avg_monthly_growth = total_growth / len(sales)
forecast = latest * (1 + avg_monthly_growth / 100)
print("=== TIME SERIES FORECASTING DASHBOARD ===")
print()
print(f"Latest Month: \\\${latest:,}")
print(f"6-Month Average: \\\${average:,.0f}")
print(f"Total Growth: {total_growth:.1f}%")
print()
print(f"Trend: {trend}")
print(f"3-Month MA: \\\${recent_avg:,.0f}")
print()
print(f"Forecast Next Month: \\\${forecast:,.0f}")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">🎉 Time Series Dashboard Complete!</h3>
<p class="mb-4">You built a professional forecasting tool! This dashboard provides:</p>
<ul class="list-disc ml-6 mb-4">
  <li>✓ Historical performance metrics</li>
  <li>✓ Trend detection and analysis</li>
  <li>✓ Moving averages for smoothing</li>
  <li>✓ Simple forecasting model</li>
  <li>✓ Data-driven business insights</li>
</ul>
<p class="mt-4 bg-blue-50 dark:bg-blue-900/20 p-4 rounded border-l-4 border-blue-500">
<strong>Professional skill:</strong> Time series forecasting is used in inventory management, financial planning, demand forecasting, and sales projections across all industries!
</p>`,
      },
    ],
  },
  "7": {
    title: "A/B Testing Analytics Platform",
    description: "Build a statistical testing platform to analyze experiments and determine significance",
    sections: [
      {
        id: 1,
        title: "Section 1: What is A/B Testing?",
        explain: `<h3 class="font-bold text-lg mb-2">🧪 A/B Testing Basics</h3>
<p class="mb-4"><strong>A/B Testing:</strong> Comparing two versions (A and B) to determine which performs better.</p>
<p class="mb-4"><strong>Example:</strong> Testing two website designs to see which gets more signups.</p>
<ul class="list-disc ml-6 mb-4">
  <li><strong>Control (A):</strong> Original version</li>
  <li><strong>Variant (B):</strong> New version</li>
  <li><strong>Metric:</strong> What you're measuring (conversion rate, revenue, etc.)</li>
  <li><strong>Statistical Significance:</strong> Is the difference real or just random chance?</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 A/B Test Example</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Control (A): 1000 visitors, 50 conversions (5.0%)
Variant (B): 1000 visitors, 65 conversions (6.5%)

Difference: +1.5 percentage points
Relative Improvement: +30%
</pre>
<p class="mb-4">But is this difference significant or just luck? Let's find out!</p>`,
        demonstrateCode: `# A/B Test Data
control_visitors = 1000
control_conversions = 50
variant_visitors = 1000
variant_conversions = 65

# Calculate conversion rates
control_rate = (control_conversions / control_visitors) * 100
variant_rate = (variant_conversions / variant_visitors) * 100

diff = variant_rate - control_rate
relative_improvement = (diff / control_rate) * 100

print(f"Control: {control_rate:.1f}%")
print(f"Variant: {variant_rate:.1f}%")
print(f"Improvement: {relative_improvement:.1f}%")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate Conversion Rates</h3>
<p class="mb-4">Run the code to calculate conversion rates and relative improvement.</p>`,
        starterCode: `# A/B Test Data
control_visitors = 1000
control_conversions = 50
variant_visitors = 1000
variant_conversions = 65

# Calculate conversion rates
control_rate = (control_conversions / control_visitors) * 100
variant_rate = (variant_conversions / variant_visitors) * 100

# Calculate difference and improvement
diff = variant_rate - control_rate
relative_improvement = (diff / control_rate) * 100

print(f"Control Rate: {control_rate:.1f}%")
print(f"Variant Rate: {variant_rate:.1f}%")
print(f"Absolute Difference: {diff:.1f}pp")
print(f"Relative Improvement: {relative_improvement:.1f}%")`,
        solution: `control_visitors = 1000
control_conversions = 50
variant_visitors = 1000
variant_conversions = 65
control_rate = (control_conversions / control_visitors) * 100
variant_rate = (variant_conversions / variant_visitors) * 100
diff = variant_rate - control_rate
relative_improvement = (diff / control_rate) * 100
print(f"Control Rate: {control_rate:.1f}%")
print(f"Variant Rate: {variant_rate:.1f}%")
print(f"Absolute Difference: {diff:.1f}pp")
print(f"Relative Improvement: {relative_improvement:.1f}%")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Conversion Rates Calculated!</h3>
<p class="mb-4">Variant B shows 30% better performance! But we need statistical testing to know if it's significant.</p>`,
      },
      {
        id: 2,
        title: "Section 2: Statistical Significance Basics",
        explain: `<h3 class="font-bold text-lg mb-2">📊 Is the Difference Real?</h3>
<p class="mb-4"><strong>Statistical Significance:</strong> Determines if results are likely real or just random chance.</p>
<p class="mb-4"><strong>Simple approach:</strong> Calculate the standard error and confidence interval.</p>
<p class="mb-4"><strong>Standard Error:</strong> Measures variability in the data. Lower is better!</p>
<p class="mb-4"><strong>Rule of thumb:</strong> If difference > 2× standard error, likely significant.</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Statistical Significance Check</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Control: 5.0% ± 0.7%
Variant: 6.5% ± 0.8%

Difference: 1.5%
Combined SE: 1.05%
Z-score: 1.43

Result: NOT statistically significant
(Need z-score > 1.96 for 95% confidence)
</pre>`,
        demonstrateCode: `import math

# Test data
c_conv, c_vis = 50, 1000
v_conv, v_vis = 65, 1000

c_rate = c_conv / c_vis
v_rate = v_conv / v_vis

# Standard error calculation
c_se = math.sqrt(c_rate * (1 - c_rate) / c_vis)
v_se = math.sqrt(v_rate * (1 - v_rate) / v_vis)
combined_se = math.sqrt(c_se**2 + v_se**2)

# Z-score
diff = v_rate - c_rate
z_score = diff / combined_se

print(f"Z-score: {z_score:.2f}")
if z_score > 1.96:
    print("SIGNIFICANT")
else:
    print("NOT significant")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate Statistical Significance</h3>
<p class="mb-4">Calculate the z-score to determine if the difference is statistically significant.</p>`,
        starterCode: `import math

# Test data
control_conversions = 50
control_visitors = 1000
variant_conversions = 65
variant_visitors = 1000

# Calculate rates
control_rate = control_conversions / control_visitors
variant_rate = variant_conversions / variant_visitors

# Calculate standard errors
control_se = math.sqrt(control_rate * (1 - control_rate) / control_visitors)
variant_se = math.sqrt(variant_rate * (1 - variant_rate) / variant_visitors)
combined_se = math.sqrt(control_se**2 + variant_se**2)

# Calculate z-score
diff = variant_rate - control_rate
z_score = diff / combined_se

print(f"Z-score: {z_score:.2f}")
print(f"Threshold: 1.96")

if z_score > 1.96:
    print("Result: STATISTICALLY SIGNIFICANT ✓")
else:
    print("Result: NOT significant (need more data)")`,
        solution: `import math
control_conversions = 50
control_visitors = 1000
variant_conversions = 65
variant_visitors = 1000
control_rate = control_conversions / control_visitors
variant_rate = variant_conversions / variant_visitors
control_se = math.sqrt(control_rate * (1 - control_rate) / control_visitors)
variant_se = math.sqrt(variant_rate * (1 - variant_rate) / variant_visitors)
combined_se = math.sqrt(control_se**2 + variant_se**2)
diff = variant_rate - control_rate
z_score = diff / combined_se
print(f"Z-score: {z_score:.2f}")
print(f"Threshold: 1.96")
if z_score > 1.96:
    print("Result: STATISTICALLY SIGNIFICANT ✓")
else:
    print("Result: NOT significant (need more data)")`,
        hint: "Z-score = difference / combined_standard_error",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Statistical Test Complete!</h3>
<p class="mb-4">The z-score (1.43) is below 1.96, so this test is NOT statistically significant. Need more data!</p>`,
      },
      {
        id: 3,
        title: "Section 3: Build Complete A/B Test Analyzer",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Complete A/B Testing Platform</h3>
<p class="mb-4">Now build a full analyzer that:</p>
<ul class="list-disc ml-6 mb-4">
  <li>Calculates conversion rates</li>
  <li>Computes statistical significance</li>
  <li>Provides recommendations</li>
  <li>Calculates confidence intervals</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Complete Analysis Output</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
=== A/B TEST ANALYSIS ===

Control (A):
  Visitors: 1,000
  Conversions: 50
  Rate: 5.0% ± 0.7%

Variant (B):
  Visitors: 1,000
  Conversions: 65
  Rate: 6.5% ± 0.8%

Analysis:
  Absolute Lift: +1.5pp
  Relative Lift: +30.0%
  Z-score: 1.43
  Confidence: 85%

Recommendation: NOT SIGNIFICANT
Continue test to reach 95% confidence
</pre>`,
        demonstrateCode: `import math

def analyze_ab_test(c_conv, c_vis, v_conv, v_vis):
    c_rate = c_conv / c_vis
    v_rate = v_conv / v_vis

    c_se = math.sqrt(c_rate * (1 - c_rate) / c_vis)
    v_se = math.sqrt(v_rate * (1 - v_rate) / v_vis)
    combined_se = math.sqrt(c_se**2 + v_se**2)

    diff = v_rate - c_rate
    z = diff / combined_se
    rel_lift = (diff / c_rate) * 100

    sig = "SIGNIFICANT" if z > 1.96 else "NOT SIGNIFICANT"

    print("=== A/B TEST ANALYSIS ===")
    print(f"Control: {c_rate*100:.1f}%")
    print(f"Variant: {v_rate*100:.1f}%")
    print(f"Lift: {rel_lift:+.1f}%")
    print(f"Z-score: {z:.2f}")
    print(f"Result: {sig}")

analyze_ab_test(50, 1000, 65, 1000)`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Build Complete Analyzer</h3>
<p class="mb-4">Create a complete A/B test analysis function with all key metrics.</p>`,
        starterCode: `import math

def analyze_ab_test(control_conv, control_vis, variant_conv, variant_vis):
    # Calculate rates
    c_rate = control_conv / control_vis
    v_rate = variant_conv / variant_vis

    # Standard errors
    c_se = math.sqrt(c_rate * (1 - c_rate) / control_vis)
    v_se = math.sqrt(v_rate * (1 - v_rate) / variant_vis)
    combined_se = math.sqrt(c_se**2 + v_se**2)

    # Metrics
    diff = v_rate - c_rate
    z_score = diff / combined_se
    relative_lift = (diff / c_rate) * 100

    # Significance
    is_significant = z_score > 1.96

    # Output
    print("=== A/B TEST ANALYSIS ===")
    print()
    print(f"Control (A): {c_rate*100:.1f}%")
    print(f"Variant (B): {v_rate*100:.1f}%")
    print()
    print(f"Absolute Lift: {diff*100:+.1f}pp")
    print(f"Relative Lift: {relative_lift:+.1f}%")
    print(f"Z-score: {z_score:.2f}")
    print()

    if is_significant:
        print("✓ STATISTICALLY SIGNIFICANT")
        if diff > 0:
            print("Recommendation: Deploy variant B!")
        else:
            print("Recommendation: Keep control A")
    else:
        print("✗ NOT statistically significant")
        print("Recommendation: Continue test")

# Test with sample data
analyze_ab_test(50, 1000, 65, 1000)`,
        solution: `import math
def analyze_ab_test(control_conv, control_vis, variant_conv, variant_vis):
    c_rate = control_conv / control_vis
    v_rate = variant_conv / variant_vis
    c_se = math.sqrt(c_rate * (1 - c_rate) / control_vis)
    v_se = math.sqrt(v_rate * (1 - v_rate) / variant_vis)
    combined_se = math.sqrt(c_se**2 + v_se**2)
    diff = v_rate - c_rate
    z_score = diff / combined_se
    relative_lift = (diff / c_rate) * 100
    is_significant = z_score > 1.96
    print("=== A/B TEST ANALYSIS ===")
    print()
    print(f"Control (A): {c_rate*100:.1f}%")
    print(f"Variant (B): {v_rate*100:.1f}%")
    print()
    print(f"Absolute Lift: {diff*100:+.1f}pp")
    print(f"Relative Lift: {relative_lift:+.1f}%")
    print(f"Z-score: {z_score:.2f}")
    print()
    if is_significant:
        print("✓ STATISTICALLY SIGNIFICANT")
        if diff > 0:
            print("Recommendation: Deploy variant B!")
        else:
            print("Recommendation: Keep control A")
    else:
        print("✗ NOT statistically significant")
        print("Recommendation: Continue test")
analyze_ab_test(50, 1000, 65, 1000)`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">🎉 A/B Testing Platform Complete!</h3>
<p class="mb-4">You built a professional A/B testing analyzer!</p>
<ul class="list-disc ml-6 mb-4">
  <li>✓ Conversion rate calculation</li>
  <li>✓ Statistical significance testing</li>
  <li>✓ Z-score computation</li>
  <li>✓ Automated recommendations</li>
</ul>
<p class="mt-4 bg-purple-50 dark:bg-purple-900/20 p-4 rounded border-l-4 border-purple-500">
<strong>Industry skill:</strong> A/B testing is used by every major tech company (Google, Facebook, Amazon) to make data-driven product decisions. You just built the core tool they use!
</p>`,
      },
    ],
  },
  "8": {
    title: "Predictive Analytics Engine",
    description: "Build a machine learning system that predicts customer behavior and lifetime value",
    sections: [
      {
        id: 1,
        title: "Section 1: Introduction to Predictive Analytics",
        explain: `<h3 class="font-bold text-lg mb-2">🔮 What is Predictive Analytics?</h3>
<p class="mb-4"><strong>Predictive Analytics:</strong> Using historical data to predict future outcomes.</p>
<p class="mb-4"><strong>Common applications:</strong></p>
<ul class="list-disc ml-6 mb-4">
  <li><strong>Customer Churn:</strong> Will a customer leave?</li>
  <li><strong>Lifetime Value (LTV):</strong> How much will a customer spend?</li>
  <li><strong>Sales Forecasting:</strong> What will next quarter's revenue be?</li>
</ul>
<p class="mb-4"><strong>What you'll build:</strong> A system that analyzes customer data to predict churn risk and calculate lifetime value.</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Predictive Model Example</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Customer Analysis:
  ID: C001
  Recency: 30 days (LOW RISK)
  Frequency: 12 purchases (LOYAL)
  Monetary: \$2,400 total (HIGH VALUE)

Predictions:
  Churn Risk: 15% (LOW)
  Predicted LTV: \$3,600
  Segment: VIP CUSTOMER
  Recommendation: Maintain engagement
</pre>`,
        demonstrateCode: `# Simple churn prediction
days_since_purchase = 30
num_purchases = 12
total_spent = 2400

# Risk scoring (simple model)
recency_score = 100 - days_since_purchase
frequency_score = num_purchases * 10
monetary_score = total_spent / 100

total_score = (recency_score + frequency_score + monetary_score) / 3

if total_score > 80:
    risk = "LOW"
elif total_score > 50:
    risk = "MEDIUM"
else:
    risk = "HIGH"

print(f"Churn Risk: {risk}")
print(f"Score: {total_score:.0f}/100")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate Churn Risk</h3>
<p class="mb-4">Run the basic churn prediction model to see how customer metrics translate to risk scores.</p>`,
        starterCode: `# Simple churn prediction model
days_since_purchase = 30
num_purchases = 12
total_spent = 2400

# Calculate risk scores
recency_score = 100 - days_since_purchase  # Lower days = higher score
frequency_score = num_purchases * 10  # More purchases = higher score
monetary_score = total_spent / 100  # Higher spend = higher score

# Average the scores
total_score = (recency_score + frequency_score + monetary_score) / 3

# Determine risk level
if total_score > 80:
    risk = "LOW"
elif total_score > 50:
    risk = "MEDIUM"
else:
    risk = "HIGH"

print(f"Recency Score: {recency_score}")
print(f"Frequency Score: {frequency_score}")
print(f"Monetary Score: {monetary_score}")
print(f"Total Score: {total_score:.0f}/100")
print(f"Churn Risk: {risk}")`,
        solution: `days_since_purchase = 30
num_purchases = 12
total_spent = 2400
recency_score = 100 - days_since_purchase
frequency_score = num_purchases * 10
monetary_score = total_spent / 100
total_score = (recency_score + frequency_score + monetary_score) / 3
if total_score > 80:
    risk = "LOW"
elif total_score > 50:
    risk = "MEDIUM"
else:
    risk = "HIGH"
print(f"Recency Score: {recency_score}")
print(f"Frequency Score: {frequency_score}")
print(f"Monetary Score: {monetary_score}")
print(f"Total Score: {total_score:.0f}/100")
print(f"Churn Risk: {risk}")`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Churn Prediction Complete!</h3>
<p class="mb-4">You calculated a churn risk score of 89/100 with LOW risk. This customer is engaged and valuable!</p>`,
      },
      {
        id: 2,
        title: "Section 2: Lifetime Value Prediction",
        explain: `<h3 class="font-bold text-lg mb-2">💰 Predicting Customer Lifetime Value</h3>
<p class="mb-4"><strong>Lifetime Value (LTV):</strong> Total revenue expected from a customer over their lifetime.</p>
<p class="mb-4"><strong>Simple LTV formula:</strong><br>
LTV = (Average Purchase Value) × (Purchase Frequency per Year) × (Customer Lifespan in Years)</p>
<p class="mb-4"><strong>Why important:</strong> Helps determine how much to spend on customer acquisition.</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 LTV Calculation Example</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Customer Metrics:
  Avg Purchase: \$200
  Purchases/Year: 6
  Expected Lifespan: 3 years

LTV = \$200 × 6 × 3 = \$3,600

If acquisition cost < \$1,200 (33% of LTV)
  → PROFITABLE to acquire similar customers
</pre>`,
        demonstrateCode: `# LTV Calculation
avg_purchase = 200
purchases_per_year = 6
lifespan_years = 3

ltv = avg_purchase * purchases_per_year * lifespan_years

print(f"Lifetime Value: \\\${ltv:,}")

# CAC threshold (33% rule)
max_cac = ltv * 0.33
print(f"Max Acquisition Cost: \\\${max_cac:.0f}")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate LTV</h3>
<p class="mb-4">Calculate customer lifetime value and determine acquisition cost threshold.</p>`,
        starterCode: `# Customer data
average_purchase = 200
purchases_per_year = 6
expected_lifespan = 3

# Calculate LTV
ltv = average_purchase * purchases_per_year * expected_lifespan

# Calculate max customer acquisition cost (33% rule)
max_acquisition_cost = ltv * 0.33

# Output
print(f"=== LIFETIME VALUE ANALYSIS ===")
print()
print(f"Avg Purchase: \\\${average_purchase}")
print(f"Annual Purchases: {purchases_per_year}")
print(f"Expected Lifespan: {expected_lifespan} years")
print()
print(f"Customer LTV: \\\${ltv:,}")
print(f"Max CAC: \\\${max_acquisition_cost:.0f}")
print()

if max_acquisition_cost > 500:
    print("✓ High-value customer segment")
else:
    print("⚠ Low-value customer segment")`,
        solution: `average_purchase = 200
purchases_per_year = 6
expected_lifespan = 3
ltv = average_purchase * purchases_per_year * expected_lifespan
max_acquisition_cost = ltv * 0.33
print(f"=== LIFETIME VALUE ANALYSIS ===")
print()
print(f"Avg Purchase: \\\${average_purchase}")
print(f"Annual Purchases: {purchases_per_year}")
print(f"Expected Lifespan: {expected_lifespan} years")
print()
print(f"Customer LTV: \\\${ltv:,}")
print(f"Max CAC: \\\${max_acquisition_cost:.0f}")
print()
if max_acquisition_cost > 500:
    print("✓ High-value customer segment")
else:
    print("⚠ Low-value customer segment")`,
        hint: "LTV = avg_purchase × purchases_per_year × lifespan",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ LTV Prediction Complete!</h3>
<p class="mb-4">You calculated an LTV of \$3,600 with a max CAC of \$1,200. This is a high-value segment!</p>`,
      },
      {
        id: 3,
        title: "Section 3: Build Complete Predictive Engine",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Complete Predictive System</h3>
<p class="mb-4">Now combine churn prediction and LTV calculation into a complete predictive analytics engine.</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Complete Engine Output</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
=== PREDICTIVE ANALYTICS ENGINE ===

Customer: C001
Status: ACTIVE

Engagement Metrics:
  Days Since Purchase: 30
  Total Purchases: 12
  Total Spent: \$2,400
  Avg Order Value: \$200

Predictions:
  Churn Risk: 15% (LOW)
  Predicted LTV: \$3,600
  Customer Segment: VIP

Recommendations:
  ✓ Retain with loyalty program
  ✓ Upsell premium products
  ✓ Monitor for engagement drops
</pre>`,
        demonstrateCode: `def predict_customer(days, purchases, spent):
    # Churn risk
    rec_score = 100 - days
    freq_score = purchases * 10
    mon_score = spent / 100
    risk_score = (rec_score + freq_score + mon_score) / 3

    # LTV
    avg_order = spent / purchases
    ltv = avg_order * 6 * 3  # 6 purchases/year, 3 years

    print(f"Churn Risk Score: {risk_score:.0f}/100")
    print(f"Predicted LTV: \\\${ltv:,.0f}")

    if risk_score > 80 and ltv > 3000:
        print("Segment: VIP")
    elif risk_score > 50:
        print("Segment: LOYAL")
    else:
        print("Segment: AT RISK")

predict_customer(30, 12, 2400)`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Build Predictive Engine</h3>
<p class="mb-4">Create the complete function that combines all predictive analytics.</p>`,
        starterCode: `def predict_customer_analytics(days_since, total_purchases, total_spent):
    # Calculate engagement scores
    recency_score = 100 - days_since
    frequency_score = total_purchases * 10
    monetary_score = total_spent / 100
    risk_score = (recency_score + frequency_score + monetary_score) / 3

    # Determine churn risk
    if risk_score > 80:
        churn_risk = "LOW"
    elif risk_score > 50:
        churn_risk = "MEDIUM"
    else:
        churn_risk = "HIGH"

    # Calculate LTV
    avg_order_value = total_spent / total_purchases
    predicted_ltv = avg_order_value * 6 * 3  # 6 orders/year, 3 years

    # Segment customer
    if risk_score > 80 and predicted_ltv > 3000:
        segment = "VIP"
    elif risk_score > 50:
        segment = "LOYAL"
    else:
        segment = "AT RISK"

    # Output comprehensive report
    print("=== PREDICTIVE ANALYTICS ENGINE ===")
    print()
    print(f"Engagement Metrics:")
    print(f"  Days Since Purchase: {days_since}")
    print(f"  Total Purchases: {total_purchases}")
    print(f"  Total Spent: \\\${total_spent:,.0f}")
    print(f"  Avg Order: \\\${avg_order_value:.0f}")
    print()
    print(f"Predictions:")
    print(f"  Churn Risk: {churn_risk} ({risk_score:.0f}/100)")
    print(f"  Predicted LTV: \\\${predicted_ltv:,.0f}")
    print(f"  Segment: {segment}")
    print()
    print(f"Recommendations:")
    if segment == "VIP":
        print("  ✓ Maintain with VIP perks")
        print("  ✓ Upsell premium products")
    elif segment == "LOYAL":
        print("  ✓ Engage with loyalty rewards")
        print("  ✓ Send personalized offers")
    else:
        print("  ⚠ Re-engagement campaign needed")
        print("  ⚠ Offer win-back discount")

# Test the engine
predict_customer_analytics(30, 12, 2400)`,
        solution: `def predict_customer_analytics(days_since, total_purchases, total_spent):
    recency_score = 100 - days_since
    frequency_score = total_purchases * 10
    monetary_score = total_spent / 100
    risk_score = (recency_score + frequency_score + monetary_score) / 3
    if risk_score > 80:
        churn_risk = "LOW"
    elif risk_score > 50:
        churn_risk = "MEDIUM"
    else:
        churn_risk = "HIGH"
    avg_order_value = total_spent / total_purchases
    predicted_ltv = avg_order_value * 6 * 3
    if risk_score > 80 and predicted_ltv > 3000:
        segment = "VIP"
    elif risk_score > 50:
        segment = "LOYAL"
    else:
        segment = "AT RISK"
    print("=== PREDICTIVE ANALYTICS ENGINE ===")
    print()
    print(f"Engagement Metrics:")
    print(f"  Days Since Purchase: {days_since}")
    print(f"  Total Purchases: {total_purchases}")
    print(f"  Total Spent: \\\${total_spent:,.0f}")
    print(f"  Avg Order: \\\${avg_order_value:.0f}")
    print()
    print(f"Predictions:")
    print(f"  Churn Risk: {churn_risk} ({risk_score:.0f}/100)")
    print(f"  Predicted LTV: \\\${predicted_ltv:,.0f}")
    print(f"  Segment: {segment}")
    print()
    print(f"Recommendations:")
    if segment == "VIP":
        print("  ✓ Maintain with VIP perks")
        print("  ✓ Upsell premium products")
    elif segment == "LOYAL":
        print("  ✓ Engage with loyalty rewards")
        print("  ✓ Send personalized offers")
    else:
        print("  ⚠ Re-engagement campaign needed")
        print("  ⚠ Offer win-back discount")
predict_customer_analytics(30, 12, 2400)`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">🎉 Predictive Engine Complete!</h3>
<p class="mb-4">You built a professional predictive analytics system!</p>
<ul class="list-disc ml-6 mb-4">
  <li>✓ Churn risk scoring</li>
  <li>✓ Lifetime value prediction</li>
  <li>✓ Customer segmentation</li>
  <li>✓ Automated recommendations</li>
</ul>
<p class="mt-4 bg-orange-50 dark:bg-orange-900/20 p-4 rounded border-l-4 border-orange-500">
<strong>Enterprise skill:</strong> Predictive analytics powers recommendation engines, retention campaigns, and marketing automation at companies like Netflix, Spotify, and Amazon!
</p>`,
      },
    ],
  },
  "9": {
    title: "Multi-Dataset Integration Project",
    description: "Combine sales, inventory, and customer data into a unified business intelligence dashboard",
    sections: [
      {
        id: 1,
        title: "Section 1: Understanding Data Integration",
        explain: `<h3 class="font-bold text-lg mb-2">🔗 What is Data Integration?</h3>
<p class="mb-4"><strong>Data Integration:</strong> Combining data from multiple sources to create unified insights.</p>
<p class="mb-4"><strong>Real-world scenario:</strong></p>
<ul class="list-disc ml-6 mb-4">
  <li><strong>Sales data:</strong> What was sold, when, and for how much</li>
  <li><strong>Inventory data:</strong> What's in stock and stock levels</li>
  <li><strong>Customer data:</strong> Who bought what</li>
</ul>
<p class="mb-4"><strong>Goal:</strong> Answer complex questions like "Which high-value customers bought low-stock items?"</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Multi-Dataset Example</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
SALES: Product A sold 15 units for \$750
INVENTORY: Product A has 5 units left (LOW STOCK!)
CUSTOMERS: 3 VIP customers bought Product A

Insight: Restock Product A urgently - high VIP demand!
</pre>`,
        demonstrateCode: `# Three datasets
sales = {"Product A": 15, "Product B": 8, "Product C": 20}
inventory = {"Product A": 5, "Product B": 25, "Product C": 12}
customers = {"Product A": ["VIP", "VIP", "Regular"],
             "Product B": ["Regular"],
             "Product C": ["VIP"]}

# Find low stock bestsellers
for product in sales:
    if sales[product] > 10 and inventory[product] < 10:
        vip_count = customers[product].count("VIP")
        print(f"⚠ {product}: Low stock, {vip_count} VIP buyers")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Integrate Data Sources</h3>
<p class="mb-4">Run the code to see how combining datasets reveals actionable insights.</p>`,
        starterCode: `# Dataset 1: Sales by product
sales = {"Product A": 15, "Product B": 8, "Product C": 20}

# Dataset 2: Inventory levels
inventory = {"Product A": 5, "Product B": 25, "Product C": 12}

# Dataset 3: Customer segments per product
customers = {
    "Product A": ["VIP", "VIP", "Regular"],
    "Product B": ["Regular"],
    "Product C": ["VIP"]
}

# Integration: Find products that need restocking
print("=== INTEGRATED ANALYSIS ===")
print()

for product in sales:
    units_sold = sales[product]
    stock_level = inventory[product]
    vip_buyers = customers[product].count("VIP")

    # Alert for high-selling low-stock items
    if units_sold > 10 and stock_level < 10:
        print(f"⚠ ALERT: {product}")
        print(f"  Sold: {units_sold} units")
        print(f"  Stock: {stock_level} units (LOW!)")
        print(f"  VIP Buyers: {vip_buyers}")
        print(f"  Action: RESTOCK URGENTLY")
        print()`,
        solution: `sales = {"Product A": 15, "Product B": 8, "Product C": 20}
inventory = {"Product A": 5, "Product B": 25, "Product C": 12}
customers = {"Product A": ["VIP", "VIP", "Regular"], "Product B": ["Regular"], "Product C": ["VIP"]}
print("=== INTEGRATED ANALYSIS ===")
print()
for product in sales:
    units_sold = sales[product]
    stock_level = inventory[product]
    vip_buyers = customers[product].count("VIP")
    if units_sold > 10 and stock_level < 10:
        print(f"⚠ ALERT: {product}")
        print(f"  Sold: {units_sold} units")
        print(f"  Stock: {stock_level} units (LOW!)")
        print(f"  VIP Buyers: {vip_buyers}")
        print(f"  Action: RESTOCK URGENTLY")
        print()`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Data Integration Success!</h3>
<p class="mb-4">You identified Product A needs urgent restocking because it's selling well, has low stock, and attracts VIP customers!</p>`,
      },
      {
        id: 2,
        title: "Section 2: Calculate Cross-Dataset Metrics",
        explain: `<h3 class="font-bold text-lg mb-2">📊 Advanced Integration Metrics</h3>
<p class="mb-4"><strong>Inventory Turnover:</strong> How fast inventory sells.<br>
Formula: Sales / Average Inventory</p>
<p class="mb-4"><strong>VIP Revenue %:</strong> What percentage of revenue comes from VIP customers.</p>
<p class="mb-4">These metrics require data from multiple sources combined!</p>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Cross-Dataset Metrics</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
Product A:
  Sales: 15 units × \$50 = \$750
  Avg Inventory: 10 units
  Turnover Rate: 1.5x
  VIP Revenue: \$500 (67%)
  Status: HIGH PERFORMER
</pre>`,
        demonstrateCode: `sales_units = {"A": 15, "B": 8, "C": 20}
prices = {"A": 50, "B": 30, "C": 40}
inventory = {"A": 10, "B": 25, "C": 15}
vip_units = {"A": 10, "B": 2, "C": 5}

for product in sales_units:
    revenue = sales_units[product] * prices[product]
    turnover = sales_units[product] / inventory[product]
    vip_rev = vip_units[product] * prices[product]
    vip_pct = (vip_rev / revenue) * 100

    print(f"{product}: Turnover {turnover:.1f}x, VIP {vip_pct:.0f}%")`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Calculate Integrated Metrics</h3>
<p class="mb-4">Compute turnover and VIP revenue percentage using multiple datasets.</p>`,
        starterCode: `# Multi-dataset metrics
sales_units = {"A": 15, "B": 8, "C": 20}
prices = {"A": 50, "B": 30, "C": 40}
avg_inventory = {"A": 10, "B": 25, "C": 15}
vip_sales_units = {"A": 10, "B": 2, "C": 5}

print("=== CROSS-DATASET METRICS ===")
print()

for product in sales_units:
    # Calculate revenue
    total_revenue = sales_units[product] * prices[product]

    # Calculate turnover rate
    turnover_rate = sales_units[product] / avg_inventory[product]

    # Calculate VIP revenue
    vip_revenue = vip_sales_units[product] * prices[product]
    vip_percentage = (vip_revenue / total_revenue) * 100

    # Output
    print(f"Product {product}:")
    print(f"  Total Revenue: \\\${total_revenue:,}")
    print(f"  Turnover Rate: {turnover_rate:.1f}x")
    print(f"  VIP Revenue: \\\${vip_revenue} ({vip_percentage:.0f}%)")

    if turnover_rate > 1.0 and vip_percentage > 50:
        print(f"  Status: ⭐ HIGH PERFORMER")
    elif turnover_rate < 0.5:
        print(f"  Status: ⚠ SLOW MOVER")
    else:
        print(f"  Status: ✓ STANDARD")
    print()`,
        solution: `sales_units = {"A": 15, "B": 8, "C": 20}
prices = {"A": 50, "B": 30, "C": 40}
avg_inventory = {"A": 10, "B": 25, "C": 15}
vip_sales_units = {"A": 10, "B": 2, "C": 5}
print("=== CROSS-DATASET METRICS ===")
print()
for product in sales_units:
    total_revenue = sales_units[product] * prices[product]
    turnover_rate = sales_units[product] / avg_inventory[product]
    vip_revenue = vip_sales_units[product] * prices[product]
    vip_percentage = (vip_revenue / total_revenue) * 100
    print(f"Product {product}:")
    print(f"  Total Revenue: \\\${total_revenue:,}")
    print(f"  Turnover Rate: {turnover_rate:.1f}x")
    print(f"  VIP Revenue: \\\${vip_revenue} ({vip_percentage:.0f}%)")
    if turnover_rate > 1.0 and vip_percentage > 50:
        print(f"  Status: ⭐ HIGH PERFORMER")
    elif turnover_rate < 0.5:
        print(f"  Status: ⚠ SLOW MOVER")
    else:
        print(f"  Status: ✓ STANDARD")
    print()`,
        hint: "Turnover = sales / inventory, VIP% = (vip_revenue / total_revenue) × 100",
        checkExplanation: `<h3 class="font-bold text-lg mb-2">✅ Cross-Dataset Metrics Complete!</h3>
<p class="mb-4">Product A is a high performer with 1.5x turnover and 67% VIP revenue. Product B is a slow mover with only 0.3x turnover.</p>`,
      },
      {
        id: 3,
        title: "Section 3: Build Complete BI Dashboard",
        explain: `<h3 class="font-bold text-lg mb-2">🎯 Complete Business Intelligence Dashboard</h3>
<p class="mb-4">Build a unified dashboard that:</p>
<ul class="list-disc ml-6 mb-4">
  <li>Integrates sales, inventory, and customer data</li>
  <li>Calculates advanced metrics</li>
  <li>Identifies opportunities and risks</li>
  <li>Provides actionable recommendations</li>
</ul>`,
        demonstrate: `<h3 class="font-bold text-lg mb-2">👀 Complete BI Dashboard</h3>
<pre class="bg-gray-800 text-gray-100 p-4 rounded mb-4 text-sm">
=== BUSINESS INTELLIGENCE DASHBOARD ===

Overview:
  Total Revenue: \$1,930
  Total Units Sold: 43
  VIP Revenue: 54%

Top Performers:
  Product A: \$750 revenue, 1.5x turnover ⭐
  Product C: \$800 revenue, 1.3x turnover ⭐

Alerts:
  ⚠ Product A: Low stock (5 units)
  ⚠ Product B: Slow mover (0.3x turnover)

Recommendations:
  1. RESTOCK Product A immediately
  2. PROMOTE Product B to clear inventory
  3. EXPAND Product C (high VIP appeal)
</pre>`,
        demonstrateCode: `def create_bi_dashboard(sales, prices, inv, vip):
    total_rev = sum(sales[p] * prices[p] for p in sales)
    total_vip_rev = sum(vip[p] * prices[p] for p in vip)

    print("=== BI DASHBOARD ===")
    print(f"Total Revenue: \\\${total_rev}")
    print(f"VIP %: {(total_vip_rev/total_rev)*100:.0f}%")

    # Alerts
    for p in sales:
        if sales[p] > 10 and inv[p] < 10:
            print(f"⚠ {p}: RESTOCK")
        elif sales[p] / inv[p] < 0.5:
            print(f"⚠ {p}: SLOW MOVER")

s = {"A": 15, "B": 8, "C": 20}
p = {"A": 50, "B": 30, "C": 40}
i = {"A": 5, "B": 25, "C": 12}
v = {"A": 10, "B": 2, "C": 5}

create_bi_dashboard(s, p, i, v)`,
        yourTurn: `<h3 class="font-bold text-lg mb-2">✍️ Your Turn: Build Complete BI Dashboard</h3>
<p class="mb-4">Create the comprehensive business intelligence dashboard.</p>`,
        starterCode: `def create_bi_dashboard(sales, prices, inventory, vip_sales):
    # Calculate overview metrics
    total_revenue = sum(sales[p] * prices[p] for p in sales)
    total_units = sum(sales[p] for p in sales)
    total_vip_revenue = sum(vip_sales[p] * prices[p] for p in vip_sales)
    vip_percentage = (total_vip_revenue / total_revenue) * 100

    # Output dashboard
    print("=== BUSINESS INTELLIGENCE DASHBOARD ===")
    print()
    print("Overview:")
    print(f"  Total Revenue: \\\${total_revenue:,}")
    print(f"  Total Units Sold: {total_units}")
    print(f"  VIP Revenue %: {vip_percentage:.0f}%")
    print()

    # Analyze each product
    print("Product Analysis:")
    performers = []
    alerts = []

    for product in sales:
        revenue = sales[product] * prices[product]
        turnover = sales[product] / inventory[product]

        print(f"  {product}: \\\${revenue}, {turnover:.1f}x turnover", end="")

        if turnover > 1.0:
            print(" ⭐")
            performers.append(product)
        else:
            print()

        # Check for alerts
        if sales[product] > 10 and inventory[product] < 10:
            alerts.append(f"Low stock: {product} ({inventory[product]} units)")
        elif turnover < 0.5:
            alerts.append(f"Slow mover: {product} ({turnover:.1f}x turnover)")

    print()
    print("Alerts:")
    for alert in alerts:
        print(f"  ⚠ {alert}")

    print()
    print("Recommendations:")
    if alerts:
        for i, alert in enumerate(alerts, 1):
            if "Low stock" in alert:
                print(f"  {i}. RESTOCK {alert.split(':')[1].split('(')[0].strip()} urgently")
            elif "Slow mover" in alert:
                print(f"  {i}. PROMOTE {alert.split(':')[1].split('(')[0].strip()} with discount")

# Test data
sales = {"A": 15, "B": 8, "C": 20}
prices = {"A": 50, "B": 30, "C": 40}
inventory = {"A": 5, "B": 25, "C": 12}
vip_sales = {"A": 10, "B": 2, "C": 5}

create_bi_dashboard(sales, prices, inventory, vip_sales)`,
        solution: `def create_bi_dashboard(sales, prices, inventory, vip_sales):
    total_revenue = sum(sales[p] * prices[p] for p in sales)
    total_units = sum(sales[p] for p in sales)
    total_vip_revenue = sum(vip_sales[p] * prices[p] for p in vip_sales)
    vip_percentage = (total_vip_revenue / total_revenue) * 100
    print("=== BUSINESS INTELLIGENCE DASHBOARD ===")
    print()
    print("Overview:")
    print(f"  Total Revenue: \\\${total_revenue:,}")
    print(f"  Total Units Sold: {total_units}")
    print(f"  VIP Revenue %: {vip_percentage:.0f}%")
    print()
    print("Product Analysis:")
    performers = []
    alerts = []
    for product in sales:
        revenue = sales[product] * prices[product]
        turnover = sales[product] / inventory[product]
        print(f"  {product}: \\\${revenue}, {turnover:.1f}x turnover", end="")
        if turnover > 1.0:
            print(" ⭐")
            performers.append(product)
        else:
            print()
        if sales[product] > 10 and inventory[product] < 10:
            alerts.append(f"Low stock: {product} ({inventory[product]} units)")
        elif turnover < 0.5:
            alerts.append(f"Slow mover: {product} ({turnover:.1f}x turnover)")
    print()
    print("Alerts:")
    for alert in alerts:
        print(f"  ⚠ {alert}")
    print()
    print("Recommendations:")
    if alerts:
        for i, alert in enumerate(alerts, 1):
            if "Low stock" in alert:
                print(f"  {i}. RESTOCK {alert.split(':')[1].split('(')[0].strip()} urgently")
            elif "Slow mover" in alert:
                print(f"  {i}. PROMOTE {alert.split(':')[1].split('(')[0].strip()} with discount")
sales = {"A": 15, "B": 8, "C": 20}
prices = {"A": 50, "B": 30, "C": 40}
inventory = {"A": 5, "B": 25, "C": 12}
vip_sales = {"A": 10, "B": 2, "C": 5}
create_bi_dashboard(sales, prices, inventory, vip_sales)`,
        checkExplanation: `<h3 class="font-bold text-lg mb-2">🎉 BI Dashboard Complete!</h3>
<p class="mb-4">You built an enterprise-grade business intelligence dashboard!</p>
<ul class="list-disc ml-6 mb-4">
  <li>✓ Multi-dataset integration</li>
  <li>✓ Advanced metrics calculation</li>
  <li>✓ Automated alerts system</li>
  <li>✓ Actionable recommendations</li>
  <li>✓ Executive-level insights</li>
</ul>
<p class="mt-4 bg-red-50 dark:bg-red-900/20 p-4 rounded border-l-4 border-red-500">
<strong>Professional achievement:</strong> You've mastered data integration - the foundation of business intelligence systems used by Fortune 500 companies. This is the exact type of dashboard that drives million-dollar business decisions!
</p>
<p class="mt-4 font-semibold text-lg">Congratulations on completing all 9 guided projects! 🎓</p>`,
      },
    ],
  },
};

export default function GuidedProjectPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projects[projectId];

  const [currentSection, setCurrentSection] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [editorMounted, setEditorMounted] = useState(false);

  useEffect(() => {
    if (project) {
      setCode(project.sections[currentSection].starterCode);
      setOutput("");
      setShowHint(false);
      setShowSolution(false);
      setShowExplanation(false);
      setEditorMounted(false);
      // Small delay to prevent Monaco "Canceled" errors during navigation
      const timer = setTimeout(() => setEditorMounted(true), 100);
      return () => clearTimeout(timer);
    }
  }, [currentSection, project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <Link href="/guided-projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const currentSectionData = project.sections[currentSection];
  const progress = ((currentSection + 1) / project.sections.length) * 100;

  const runCode = async () => {
    setIsRunning(true);
    setOutput("");

    try {
      const lines = code.split("\n");
      let result = "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("print(")) {
          const match = trimmed.match(/print\((.*)\)/);
          if (match) {
            let content = match[1];
            if (content.startsWith('f"') || content.startsWith("f'")) {
              content = content.substring(2, content.length - 1);
              content = content.replace(/\\?\$?\{([^}]+)\}/g, (_, expr) => {
                try {
                  for (const l of lines) {
                    const varMatch = l.match(/(\w+)\s*=\s*(.+)/);
                    if (varMatch) {
                      const varName = varMatch[1];
                      let varValue = varMatch[2].trim();

                      if (varValue.startsWith("[") && varValue.endsWith("]")) {
                        const nums = varValue.slice(1, -1).split(",").map(n => parseFloat(n.trim()));
                        if (expr.includes("sum")) {
                          return nums.reduce((a, b) => a + b, 0).toString();
                        } else if (expr.includes("len")) {
                          return nums.length.toString();
                        } else if (expr.includes("max")) {
                          return Math.max(...nums).toString();
                        } else if (expr.includes("min")) {
                          return Math.min(...nums).toString();
                        } else if (expr === varName) {
                          return varValue;
                        }
                      } else if (expr === varName || expr.includes(varName)) {
                        if (expr.includes("/")) {
                          const parts = expr.split("/").map((p: string) => p.trim());
                          let num1: string | number = varValue;
                          for (const pl of lines) {
                            const m2 = pl.match(/(\w+)\s*=\s*(.+)/);
                            if (m2 && parts[1].includes(m2[1])) {
                              if (parts[1].includes("len(")) {
                                const listMatch = m2[2].match(/\[([^\]]+)\]/);
                                if (listMatch) {
                                  num1 = parseFloat(String(num1)) / listMatch[1].split(",").length;
                                }
                              }
                            }
                          }
                          return typeof num1 === 'number' ? num1.toFixed(2) : num1;
                        }
                        return varValue;
                      }
                    }
                  }
                  return expr;
                } catch (e) {
                  return expr;
                }
              });
              // Format numbers with commas
              content = content.replace(/(\d+)/g, (num) => {
                return parseInt(num) > 999 ? parseInt(num).toLocaleString() : num;
              });
            } else if (content.startsWith('"') || content.startsWith("'")) {
              content = content.substring(1, content.length - 1);
            }
            result += content + "\n";
          }
        }
      }

      setOutput(result || "✓ Code executed (no output)");
    } catch (err: any) {
      setOutput(`❌ Error: ${err.message}`);
    }

    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/guided-projects"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to All Projects
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

          {/* Progress */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Progress</span>
              <span>
                Section {currentSection + 1} of {project.sections.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-green-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Panel: Instructions */}
          <div className="space-y-6">
            {/* Current Section Title */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentSectionData.title}
              </h2>
            </div>

            {/* EXPLAIN Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                EXPLAIN: Understanding the Concept
              </h3>
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: currentSectionData.explain }}
              />
            </div>

            {/* DEMONSTRATE Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="text-3xl mb-3">👀</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                SHOW: Here's How It Works
              </h3>
              <div
                className="prose dark:prose-invert max-w-none mb-4"
                dangerouslySetInnerHTML={{ __html: currentSectionData.demonstrate }}
              />
            </div>

            {/* YOUR TURN Section */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg shadow-md p-6">
              <div className="text-3xl mb-3">✍️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                PRACTICE: Now You Build It!
              </h3>
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: currentSectionData.yourTurn }}
              />
            </div>

            {/* Hint & Solution */}
            <div className="space-y-3">
              {currentSectionData.hint && (
                <div>
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    {showHint ? "Hide" : "Show"} Hint 💡
                  </button>
                  {showHint && (
                    <div className="mt-3 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {currentSectionData.hint}
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div>
                <button
                  onClick={() => setShowSolution(!showSolution)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  {showSolution ? "Hide" : "Show"} Solution
                </button>
                {showSolution && (
                  <div className="mt-3 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-lg">
                    <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                      <code>{currentSectionData.solution}</code>
                    </pre>
                  </div>
                )}
              </div>

              {output && (
                <div>
                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    {showExplanation ? "Hide" : "Show"} Explanation ✅
                  </button>
                  {showExplanation && (
                    <div className="mt-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
                      <div
                        className="prose dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: currentSectionData.checkExplanation }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={() => setCurrentSection(currentSection - 1)}
                disabled={currentSection === 0}
                className="flex-1 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={() => setCurrentSection(currentSection + 1)}
                disabled={currentSection === project.sections.length - 1}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Next →
              </button>
            </div>

            {currentSection === project.sections.length - 1 && (
              <Link
                href="/guided-projects"
                className="block text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                🎉 Project Complete! Choose Next Project →
              </Link>
            )}
          </div>

          {/* Right Panel: Code Editor */}
          <div className="space-y-4 lg:sticky lg:top-4 lg:self-start">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-600">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Code Editor
                </span>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  {isRunning ? "⏳ Running..." : "▶ Run Code"}
                </button>
              </div>

              <div className="h-96">
                {editorMounted ? (
                  <Editor
                    key={`editor-${currentSection}`}
                    height="100%"
                    language="python"
                    value={code}
                    onChange={(value) => setCode(value || "")}
                    theme="vs-dark"
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                      lineNumbers: "on",
                      scrollBeyondLastLine: false,
                      automaticLayout: true,
                    }}
                    loading={
                      <div className="flex items-center justify-center h-full bg-gray-900 text-gray-400">
                        Loading editor...
                      </div>
                    }
                    onMount={() => {
                      // Suppress Monaco Editor's "Canceled" errors
                      const originalError = console.error;
                      console.error = (...args) => {
                        if (args[0]?.includes?.('Canceled') || args[0]?.message?.includes?.('Canceled')) {
                          return;
                        }
                        originalError(...args);
                      };
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gray-900 text-gray-400">
                    Initializing editor...
                  </div>
                )}
              </div>
            </div>

            {/* Output */}
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg min-h-48">
              <div className="flex items-center gap-2 mb-2 text-gray-400">
                <span>💻 Output:</span>
              </div>
              <pre className="whitespace-pre-wrap font-mono text-sm">
                {output || "Click 'Run Code' to see output here..."}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
