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
print(f"Total Revenue: \${total}")
print(f"Number of Sales: {len(sales_data)}")
print(f"Average Sale: \${average:.2f}")
print(f"Highest Sale: \${highest}")
print(f"Lowest Sale: \${lowest}")
`,
        solution: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]
total = sum(sales_data)
average = total / len(sales_data)
highest = max(sales_data)
lowest = min(sales_data)
print("=== SALES ANALYTICS DASHBOARD ===")
print(f"Total Revenue: \${total}")
print(f"Number of Sales: \${len(sales_data)}")
print(f"Average Sale: \${average:.2f}")
print(f"Highest Sale: \${highest}")
print(f"Lowest Sale: \${lowest}")`,
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

print(f"Total Revenue: \${total_revenue}")
`,
        solution: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]
total_revenue = sum(sales_data)
print(f"Total Revenue: \${total_revenue}")`,
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

print(f"Total Revenue: \${total_revenue}")
print(f"Number of Sales: {len(sales_data)}")
print(f"Average Sale: \${average_sale:.2f}")
`,
        solution: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]
total_revenue = sum(sales_data)
average_sale = total_revenue / len(sales_data)
print(f"Total Revenue: \${total_revenue}")
print(f"Number of Sales: \${len(sales_data)}")
print(f"Average Sale: \${average_sale:.2f}")`,
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

print(f"Highest Sale: \${highest_sale}")
print(f"Lowest Sale: \${lowest_sale}")
print(f"Range: \${highest_sale - lowest_sale}")
`,
        solution: `sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1450]
highest_sale = max(sales_data)
lowest_sale = min(sales_data)
print(f"Highest Sale: \${highest_sale}")
print(f"Lowest Sale: \${lowest_sale}")
print(f"Range: \${highest_sale - lowest_sale}")`,
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
print(f"📊 Total Revenue: \${total_revenue:,}")
print(f"📈 Number of Sales: {num_sales}")
print(f"💰 Average Sale: \${average_sale:,.2f}")
print(f"🏆 Highest Sale: \${highest_sale}")
print(f"📉 Lowest Sale: \${lowest_sale}")
print(f"📏 Sales Range: \${highest_sale - lowest_sale}")
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
print(f"📊 Total Revenue: \${total_revenue:,}")
print(f"📈 Number of Sales: \${num_sales}")
print(f"💰 Average Sale: \${average_sale:,.2f}")
print(f"🏆 Highest Sale: \${highest_sale}")
print(f"📉 Lowest Sale: \${lowest_sale}")
print(f"📏 Sales Range: \${highest_sale - lowest_sale}")
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

  useEffect(() => {
    if (project) {
      setCode(project.sections[currentSection].starterCode);
      setOutput("");
      setShowHint(false);
      setShowSolution(false);
      setShowExplanation(false);
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
                          const parts = expr.split("/").map(p => p.trim());
                          let num1 = varValue;
                          for (const pl of lines) {
                            const m2 = pl.match(/(\w+)\s*=\s*(.+)/);
                            if (m2 && parts[1].includes(m2[1])) {
                              if (parts[1].includes("len(")) {
                                const listMatch = m2[2].match(/\[([^\]]+)\]/);
                                if (listMatch) {
                                  num1 = parseFloat(num1) / listMatch[1].split(",").length;
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
                <Editor
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
                />
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
