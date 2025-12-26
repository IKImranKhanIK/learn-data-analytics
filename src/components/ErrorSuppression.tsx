"use client";

import { useEffect } from "react";

export default function ErrorSuppression() {
  useEffect(() => {
    // Suppress Monaco Editor's development-mode console errors
    const originalError = console.error;
    const originalWarn = console.warn;

    console.error = (...args: any[]) => {
      // Convert first argument to string for checking
      const firstArg = args[0];
      let errorMessage = "";

      if (firstArg instanceof Error) {
        errorMessage = firstArg.message || firstArg.toString();
      } else if (typeof firstArg === "string") {
        errorMessage = firstArg;
      } else if (firstArg && typeof firstArg === "object") {
        errorMessage = JSON.stringify(firstArg);
      } else {
        errorMessage = String(firstArg || "");
      }

      // Suppress Monaco Editor specific errors
      const suppressPatterns = [
        "Canceled",
        "stackframe",
        "error-stack-parser",
        "Duplicate definition of module",
      ];

      if (suppressPatterns.some((pattern) => errorMessage.includes(pattern))) {
        return; // Suppress this error
      }

      // Log all other errors normally
      originalError(...args);
    };

    console.warn = (...args: any[]) => {
      const firstArg = args[0];
      const warnMessage = String(firstArg || "");

      // Suppress Monaco Editor specific warnings
      if (
        warnMessage.includes("error-stack-parser") ||
        warnMessage.includes("Duplicate definition")
      ) {
        return;
      }

      originalWarn(...args);
    };

    // Cleanup function to restore original console methods
    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  return null; // This component doesn't render anything
}
