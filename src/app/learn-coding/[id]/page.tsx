"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Editor from "@monaco-editor/react";

interface Step {
  id: number;
  title: string;
  explanation: string;
  starterCode: string;
  solution: string;
  hint?: string;
  expectedOutput?: string;
  checkCode?: (code: string) => boolean;
}

const lessons: Record<string, { title: string; language: "python" | "sql"; steps: Step[] }> = {
  "1": {
    title: "Your First Python Program",
    language: "python",
    steps: [
      {
        id: 1,
        title: "Step 1: Print a Message",
        explanation: `Welcome to your first Python program!

The most basic thing you can do in Python is display text on the screen. We use the <code>print()</code> function to do this.

<strong>How it works:</strong>
- <code>print()</code> is a built-in Python function
- Put your text inside quotes: <code>"Hello"</code>
- The text will appear in the output below

Try it now! Click "Run Code" to see your message appear.`,
        starterCode: `# This is a comment - Python ignores it
# Now let's print a message!

print("Hello, World!")`,
        solution: `print("Hello, World!")`,
        expectedOutput: "Hello, World!",
        hint: "Just click 'Run Code' to see the magic happen!",
      },
      {
        id: 2,
        title: "Step 2: Print Your Own Message",
        explanation: `Great job! Now try changing the message.

<strong>Your task:</strong> Change the text to print your own name.

For example: <code>print("Hello, Sarah!")</code>

<strong>Remember:</strong>
- Keep the quotes around your text
- Don't change the word "print"
- Don't forget the parentheses ()`,
        starterCode: `# Change the message below to include your name
print("Hello, World!")`,
        solution: `print("Hello, [Your Name]!")`,
        hint: "Replace 'World' with your actual name, keeping the quotes!",
      },
      {
        id: 3,
        title: "Step 3: Print Multiple Lines",
        explanation: `You can print multiple messages! Just use <code>print()</code> multiple times.

Each <code>print()</code> statement creates a new line of output.

<strong>Try this:</strong> Print three different messages.`,
        starterCode: `# Print three different messages
print("Line 1")
# Add two more print statements below

`,
        solution: `print("Line 1")
print("Line 2")
print("Line 3")`,
        hint: "Copy the first print statement and change the text for lines 2 and 3",
      },
      {
        id: 4,
        title: "Step 4: Print Numbers",
        explanation: `Python can print numbers too! You can print numbers without quotes.

<strong>Two ways to print numbers:</strong>
- With quotes: <code>print("42")</code> - treats it as text
- Without quotes: <code>print(42)</code> - treats it as a number

Try both ways and see if you notice any difference!`,
        starterCode: `# Print a number without quotes
print(42)

# Print a number with quotes
print("42")

# They look the same, but Python treats them differently!
`,
        solution: `print(42)
print("42")`,
        hint: "Click Run to see that both work! The difference matters later when doing math.",
      },
      {
        id: 5,
        title: "Step 5: Your First Data Analytics Output",
        explanation: `Let's apply what you learned!

Imagine you're analyzing sales data. Print a simple report showing:
- A title
- A sales amount
- A message

This is your first step toward real data analytics!`,
        starterCode: `# Create a simple sales report
# Print a title, then a sales amount, then a summary

print("Sales Report")
# Add your code below to print:
# The number: 1500
# A message: "Great job!"

`,
        solution: `print("Sales Report")
print(1500)
print("Great job!")`,
        hint: "You need three print() statements total - one for the title (already there), one for 1500, and one for the message.",
      },
    ],
  },
  "2": {
    title: "Variables and Numbers",
    language: "python",
    steps: [
      {
        id: 1,
        title: "Step 1: What is a Variable?",
        explanation: `A <strong>variable</strong> is like a box that stores information.

Instead of writing the same number over and over, you can:
1. Store it in a variable
2. Use the variable whenever you need it

<strong>Syntax:</strong> <code>variable_name = value</code>

Let's see it in action!`,
        starterCode: `# Create a variable called 'sales' and store the value 1500
sales = 1500

# Print the variable
print(sales)`,
        solution: `sales = 1500
print(sales)`,
        expectedOutput: "1500",
        hint: "Run the code to see how variables work!",
      },
      {
        id: 2,
        title: "Step 2: Using Variables in Messages",
        explanation: `You can combine text and variables using <strong>f-strings</strong>.

<strong>Format:</strong> <code>f"Text \${variable}"</code>

The 'f' before the quote makes it an f-string. The \${} inserts the variable's value into the text.`,
        starterCode: `# Store a value in a variable
sales = 1500

# Print it in a sentence using an f-string
print(f"Total sales: \${sales}")

# Try changing the sales value and run again!
`,
        solution: `sales = 1500
print(f"Total sales: \${sales}")`,
        hint: "Notice the f before the quote and the \${sales} inside the string!",
      },
      {
        id: 3,
        title: "Step 3: Basic Math with Variables",
        explanation: `Variables are powerful because you can do math with them!

<strong>Python math operators:</strong>
- <code>+</code> Addition
- <code>-</code> Subtraction
- <code>*</code> Multiplication
- <code>/</code> Division

Let's calculate total sales from two months!`,
        starterCode: `# Sales from two months
january = 1200
february = 1500

# Calculate the total
total = january + february

# Print the result
print(f"Total sales: \${total}")
`,
        solution: `january = 1200
february = 1500
total = january + february
print(f"Total sales: \${total}")`,
        expectedOutput: "Total sales: 2700",
        hint: "Run the code to see automatic calculation!",
      },
      {
        id: 4,
        title: "Step 4: Calculate an Average",
        explanation: `Now let's calculate an average - a common data analytics task!

<strong>Formula:</strong> Average = Total ÷ Count

To get the average of two numbers:
1. Add them together
2. Divide by 2`,
        starterCode: `# Two sales values
sales1 = 1200
sales2 = 1800

# Calculate the average
# Hint: (sales1 + sales2) / 2
average = 0  # Replace 0 with the correct formula

print(f"Average sales: \${average}")
`,
        solution: `sales1 = 1200
sales2 = 1800
average = (sales1 + sales2) / 2
print(f"Average sales: \${average}")`,
        hint: "Replace 0 with: (sales1 + sales2) / 2",
      },
      {
        id: 5,
        title: "Step 5: Your First Analytics Calculation",
        explanation: `Let's create a real analytics report!

Calculate and display:
- Total sales
- Average sales
- Number of sales

This is what data analysts do every day!`,
        starterCode: `# Three months of sales data
month1 = 1200
month2 = 1500
month3 = 1800

# Calculate total
total = month1 + month2 + month3

# Calculate average (total divided by 3)
average = total / 3

# Print the report
print("Sales Analytics Report")
print(f"Total: \${total}")
print(f"Average: \${average}")
print("Number of months: 3")
`,
        solution: `month1 = 1200
month2 = 1500
month3 = 1800
total = month1 + month2 + month3
average = total / 3
print("Sales Analytics Report")
print(f"Total: \${total}")
print(f"Average: \${average}")
print("Number of months: 3")`,
        hint: "Just run the code - it's already complete! This is your first analytics report.",
      },
    ],
  },
};

export default function CodingLessonPage() {
  const params = useParams();
  const lessonId = params.id as string;
  const lesson = lessons[lessonId];

  const [currentStep, setCurrentStep] = useState(0);
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (lesson) {
      setCode(lesson.steps[currentStep].starterCode);
      setOutput("");
      setShowHint(false);
      setShowSolution(false);
    }
  }, [currentStep, lesson]);

  if (!lesson) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Lesson Not Found
          </h1>
          <Link href="/learn-coding" className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Back to Lessons
          </Link>
        </div>
      </div>
    );
  }

  const currentStepData = lesson.steps[currentStep];
  const progress = ((currentStep + 1) / lesson.steps.length) * 100;

  const runCode = async () => {
    setIsRunning(true);
    setOutput("");

    try {
      if (lesson.language === "python") {
        // Simple Python execution simulation for basic print statements
        const lines = code.split("\n");
        let result = "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (trimmed.startsWith("print(")) {
            // Extract content between print( and )
            const match = trimmed.match(/print\((.*)\)/);
            if (match) {
              let content = match[1];
              // Handle f-strings
              if (content.startsWith('f"') || content.startsWith("f'")) {
                content = content.substring(2, content.length - 1);
                // Replace ${variable} with actual values by evaluating the code context
                // This is a simplified simulation
                content = content.replace(/\$\{(\w+)\}/g, (_, varName) => {
                  // Try to find the variable value in previous lines
                  for (const prevLine of lines) {
                    const varMatch = prevLine.match(new RegExp(`${varName}\\s*=\\s*(.+)`));
                    if (varMatch) {
                      let value = varMatch[1].trim();
                      // Handle calculations
                      if (value.includes("+") || value.includes("-") || value.includes("*") || value.includes("/")) {
                        try {
                          // Replace variable names with their values
                          let evalStr = value;
                          for (const l of lines) {
                            const m = l.match(/(\w+)\s*=\s*(\d+)/);
                            if (m) {
                              evalStr = evalStr.replace(new RegExp(m[1], 'g'), m[2]);
                            }
                          }
                          value = eval(evalStr).toString();
                        } catch (e) {
                          // If eval fails, keep original
                        }
                      }
                      return value;
                    }
                  }
                  return varName;
                });
              } else if (content.startsWith('"') || content.startsWith("'")) {
                // Regular string
                content = content.substring(1, content.length - 1);
              }
              // Handle plain numbers or variables
              else {
                for (const prevLine of lines) {
                  const varMatch = prevLine.match(new RegExp(`${content}\\s*=\\s*(.+)`));
                  if (varMatch) {
                    content = varMatch[1].trim();
                    break;
                  }
                }
              }
              result += content + "\n";
            }
          }
        }

        setOutput(result || "✓ Code executed (no output)");
      }
    } catch (err: any) {
      setOutput(`❌ Error: ${err.message}`);
    }

    setIsRunning(false);
  };

  const nextStep = () => {
    if (currentStep < lesson.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/learn-coding"
            className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block"
          >
            ← Back to All Lessons
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {lesson.title}
          </h1>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>Progress</span>
              <span>
                Step {currentStep + 1} of {lesson.steps.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Instructions Panel */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {currentStepData.title}
              </h2>
              <div
                className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: currentStepData.explanation }}
              />
            </div>

            {/* Hint Button */}
            {currentStepData.hint && (
              <div>
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition-colors mb-3"
                >
                  {showHint ? "Hide" : "Show"} Hint 💡
                </button>
                {showHint && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {currentStepData.hint}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Solution Button */}
            <div>
              <button
                onClick={() => setShowSolution(!showSolution)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors mb-3"
              >
                {showSolution ? "Hide" : "Show"} Solution
              </button>
              {showSolution && (
                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-lg">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                    <code>{currentStepData.solution}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-3">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex-1 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                ← Previous Step
              </button>
              <button
                onClick={nextStep}
                disabled={currentStep === lesson.steps.length - 1}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Next Step →
              </button>
            </div>

            {currentStep === lesson.steps.length - 1 && (
              <Link
                href="/learn-coding"
                className="block text-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                ✓ Complete Lesson & Choose Next
              </Link>
            )}
          </div>

          {/* Code Editor Panel */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-600">
                <span className="font-semibold text-gray-900 dark:text-white">
                  Code Editor
                </span>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-md font-medium transition-colors flex items-center gap-2"
                >
                  {isRunning ? "⏳ Running..." : "▶ Run Code"}
                </button>
              </div>

              <div className="h-64">
                <Editor
                  height="100%"
                  language={lesson.language}
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

            {/* Output Panel */}
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg min-h-32">
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
