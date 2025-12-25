"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";

type Language = "python" | "sql" | "javascript";

interface Exercise {
  id: number;
  title: string;
  description: string;
  language: Language;
  starterCode: string;
  solution?: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Calculate Average",
    description: "Calculate the average of a list of numbers",
    language: "python",
    starterCode: `# Calculate the average of sales
sales = [1200, 1500, 1800, 1350, 1900, 1650]

# Your code here
average = 0

print(f"Average sales: ${average}")`,
    solution: `sales = [1200, 1500, 1800, 1350, 1900, 1650]
average = sum(sales) / len(sales)
print(f"Average sales: ${average:.2f}")`,
  },
  {
    id: 2,
    title: "Filter Data",
    description: "Filter products with price greater than $100",
    language: "python",
    starterCode: `# Filter products with price > $100
products = [
    {"name": "Mouse", "price": 29},
    {"name": "Keyboard", "price": 79},
    {"name": "Monitor", "price": 399},
    {"name": "Laptop", "price": 1299}
]

# Your code here
expensive_products = []

for product in expensive_products:
    print(f"{product['name']}: ${product['price']}")`,
    solution: `products = [
    {"name": "Mouse", "price": 29},
    {"name": "Keyboard", "price": 79},
    {"name": "Monitor", "price": 399},
    {"name": "Laptop", "price": 1299}
]

expensive_products = [p for p in products if p['price'] > 100]

for product in expensive_products:
    print(f"{product['name']}: ${product['price']}")`,
  },
  {
    id: 3,
    title: "SQL - Select All",
    description: "Select all employees from the employees table",
    language: "sql",
    starterCode: `-- Write a query to select all employees
-- The table has columns: id, name, department, salary

SELECT `,
    solution: `SELECT * FROM employees;`,
  },
  {
    id: 4,
    title: "SQL - Filter by Department",
    description: "Select employees in the Sales department",
    language: "sql",
    starterCode: `-- Select employees where department is 'Sales'

SELECT `,
    solution: `SELECT * FROM employees WHERE department = 'Sales';`,
  },
  {
    id: 5,
    title: "Data Cleaning",
    description: "Remove null values and calculate statistics",
    language: "python",
    starterCode: `# Clean data and calculate statistics
data = [45, None, 67, 89, None, 23, 56, 78, None, 90]

# Remove None values
clean_data = []

# Calculate min, max, and average
# Your code here

print(f"Clean data: {clean_data}")
print(f"Count: {len(clean_data)}")`,
    solution: `data = [45, None, 67, 89, None, 23, 56, 78, None, 90]

clean_data = [x for x in data if x is not None]

print(f"Clean data: {clean_data}")
print(f"Count: {len(clean_data)}")
print(f"Min: {min(clean_data)}")
print(f"Max: {max(clean_data)}")
print(f"Average: {sum(clean_data) / len(clean_data):.2f}")`,
  },
];

export default function CodePlaygroundPage() {
  const [language, setLanguage] = useState<Language>("python");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [showSolution, setShowSolution] = useState(false);
  const pyodideRef = useRef<any>(null);
  const sqlRef = useRef<any>(null);

  // Default starter code
  const defaultCode = {
    python: `# Python Data Analytics Playground
# Pre-loaded with common data analysis libraries

# Example: Analyze sales data
sales_data = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1750]

# Calculate statistics
total_sales = sum(sales_data)
average_sales = total_sales / len(sales_data)
max_sales = max(sales_data)
min_sales = min(sales_data)

print(f"Total Sales: ${total_sales}")
print(f"Average Sales: ${average_sales:.2f}")
print(f"Maximum Sale: ${max_sales}")
print(f"Minimum Sale: ${min_sales}")

# Try your own analysis below:
`,
    sql: `-- SQL Data Analytics Playground
-- Sample database with employees table

-- View all employees
SELECT * FROM employees LIMIT 5;

-- Try your own queries below:
`,
    javascript: `// JavaScript Data Analytics Playground

// Example: Analyze sales data
const salesData = [1200, 1500, 1800, 1350, 1900, 1650, 2100, 1750];

// Calculate statistics
const totalSales = salesData.reduce((a, b) => a + b, 0);
const averageSales = totalSales / salesData.length;
const maxSales = Math.max(...salesData);
const minSales = Math.min(...salesData);

console.log(\`Total Sales: $\${totalSales}\`);
console.log(\`Average Sales: $\${averageSales.toFixed(2)}\`);
console.log(\`Maximum Sale: $\${maxSales}\`);
console.log(\`Minimum Sale: $\${minSales}\`);

// Try your own analysis below:
`,
  };

  useEffect(() => {
    if (!selectedExercise) {
      setCode(defaultCode[language]);
    }
  }, [language, selectedExercise]);

  useEffect(() => {
    // Load Pyodide for Python
    if (language === "python" && !pyodideRef.current) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
      script.async = true;
      script.onload = async () => {
        // @ts-ignore
        pyodideRef.current = await loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
        });
      };
      document.body.appendChild(script);
    }

    // Load sql.js for SQL
    if (language === "sql" && !sqlRef.current) {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/sql-wasm.js";
      script.async = true;
      script.onload = async () => {
        // @ts-ignore
        const SQL = await initSqlJs({
          locateFile: (file: string) =>
            `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`,
        });
        const db = new SQL.Database();

        // Create sample tables
        db.run(`
          CREATE TABLE employees (
            id INTEGER PRIMARY KEY,
            name TEXT,
            department TEXT,
            salary INTEGER
          );
        `);

        db.run(`
          INSERT INTO employees VALUES
            (1, 'John Doe', 'Sales', 55000),
            (2, 'Jane Smith', 'Marketing', 62000),
            (3, 'Bob Johnson', 'Sales', 58000),
            (4, 'Alice Brown', 'Engineering', 75000),
            (5, 'Charlie Wilson', 'Marketing', 60000),
            (6, 'Diana Lee', 'Engineering', 80000),
            (7, 'Frank Miller', 'Sales', 53000),
            (8, 'Grace Davis', 'HR', 52000);
        `);

        sqlRef.current = db;
      };
      document.body.appendChild(script);
    }
  }, [language]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput("");
    setShowSolution(false);

    try {
      if (language === "python") {
        if (!pyodideRef.current) {
          setOutput("⏳ Loading Python environment... Please wait and try again.");
          setIsRunning(false);
          return;
        }

        // Capture print statements
        let outputBuffer = "";
        pyodideRef.current.setStdout({
          batched: (msg: string) => {
            outputBuffer += msg + "\n";
          },
        });

        await pyodideRef.current.runPythonAsync(code);
        setOutput(outputBuffer || "✓ Code executed successfully (no output)");
      } else if (language === "sql") {
        if (!sqlRef.current) {
          setOutput("⏳ Loading SQL environment... Please wait and try again.");
          setIsRunning(false);
          return;
        }

        const statements = code
          .split(";")
          .map((s) => s.trim())
          .filter((s) => s.length > 0);
        let results = "";

        for (const statement of statements) {
          try {
            const result = sqlRef.current.exec(statement);
            if (result.length > 0) {
              const table = result[0];
              results += `\n${statement};\n\n`;
              results += formatSQLResult(table);
              results += "\n";
            }
          } catch (err: any) {
            results += `\n❌ Error in query: ${err.message}\n`;
          }
        }

        setOutput(results || "✓ Query executed successfully (no results)");
      } else if (language === "javascript") {
        // Capture console.log
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args: any[]) => {
          logs.push(args.map((a) => String(a)).join(" "));
        };

        try {
          // eslint-disable-next-line no-eval
          eval(code);
          console.log = originalLog;
          setOutput(logs.join("\n") || "✓ Code executed successfully (no output)");
        } catch (err: any) {
          console.log = originalLog;
          throw err;
        }
      }
    } catch (err: any) {
      setOutput(`❌ Error:\n${err.message}`);
    }

    setIsRunning(false);
  };

  const formatSQLResult = (result: any) => {
    if (!result.columns || result.columns.length === 0) {
      return "No results";
    }

    const columns = result.columns;
    const values = result.values;

    // Calculate column widths
    const widths = columns.map((col: string, i: number) => {
      const maxValueLength = Math.max(
        ...values.map((row: any[]) => String(row[i]).length)
      );
      return Math.max(col.length, maxValueLength);
    });

    // Header
    let table = "";
    table += columns.map((col: string, i: number) => col.padEnd(widths[i])).join(" | ");
    table += "\n";
    table += widths.map((w: number) => "-".repeat(w)).join("-|-");
    table += "\n";

    // Rows
    values.forEach((row: any[]) => {
      table += row.map((val: any, i: number) => String(val).padEnd(widths[i])).join(" | ");
      table += "\n";
    });

    table += `\n(${values.length} row${values.length !== 1 ? "s" : ""})`;

    return table;
  };

  const loadExercise = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setLanguage(exercise.language);
    setCode(exercise.starterCode);
    setOutput("");
    setShowSolution(false);
  };

  const resetToDefault = () => {
    setSelectedExercise(null);
    setCode(defaultCode[language]);
    setOutput("");
    setShowSolution(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/tools"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to Tools
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Code Playground
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Practice Python, SQL, and JavaScript for data analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Exercises Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Exercises
              </h2>
              <div className="space-y-2">
                {exercises.map((exercise) => (
                  <button
                    key={exercise.id}
                    onClick={() => loadExercise(exercise)}
                    className={`w-full text-left p-3 rounded-md transition-colors ${
                      selectedExercise?.id === exercise.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    <div className="font-medium text-sm">{exercise.title}</div>
                    <div className="text-xs opacity-75 mt-1">
                      {exercise.language.toUpperCase()}
                    </div>
                  </button>
                ))}
              </div>
              {selectedExercise && (
                <button
                  onClick={resetToDefault}
                  className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Reset to Playground
                </button>
              )}
            </div>
          </div>

          {/* Code Editor Area */}
          <div className="lg:col-span-3">
            {selectedExercise && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {selectedExercise.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {selectedExercise.description}
                </p>
              </div>
            )}

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              {/* Controls */}
              <div className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-600">
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage("python")}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      language === "python"
                        ? "bg-blue-600 text-white"
                        : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
                    }`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setLanguage("sql")}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      language === "sql"
                        ? "bg-blue-600 text-white"
                        : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
                    }`}
                  >
                    SQL
                  </button>
                  <button
                    onClick={() => setLanguage("javascript")}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      language === "javascript"
                        ? "bg-blue-600 text-white"
                        : "bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500"
                    }`}
                  >
                    JavaScript
                  </button>
                </div>
                <div className="flex gap-2">
                  {selectedExercise?.solution && (
                    <button
                      onClick={() => {
                        setShowSolution(!showSolution);
                        if (!showSolution && selectedExercise.solution) {
                          setCode(selectedExercise.solution);
                        } else {
                          setCode(selectedExercise.starterCode);
                        }
                      }}
                      className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      {showSolution ? "Hide" : "Show"} Solution
                    </button>
                  )}
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center gap-2"
                  >
                    {isRunning ? "⏳ Running..." : "▶ Run Code"}
                  </button>
                </div>
              </div>

              {/* Editor */}
              <div className="h-96">
                <Editor
                  height="100%"
                  language={language}
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

              {/* Output */}
              <div className="bg-gray-900 text-gray-100 p-4 min-h-48 max-h-96 overflow-auto font-mono text-sm">
                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <span>💻 Output:</span>
                </div>
                <pre className="whitespace-pre-wrap">{output || "Run your code to see output here..."}</pre>
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Tips
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Python
                  </h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use print() to display output</li>
                    <li>• Great for data analysis</li>
                    <li>• Try list comprehensions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    SQL
                  </h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• End statements with ;</li>
                    <li>• Use SELECT to query data</li>
                    <li>• Try WHERE, GROUP BY</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    JavaScript
                  </h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Use console.log() for output</li>
                    <li>• Array methods are powerful</li>
                    <li>• Try map, filter, reduce</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
