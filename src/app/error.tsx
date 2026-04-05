"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Something went wrong
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <Button onClick={reset}>Try Again</Button>
      </div>
    </div>
  );
}
