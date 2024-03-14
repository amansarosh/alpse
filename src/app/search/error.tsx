"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-start justify-center mt-20 min-h-screen">
      <div className="p-10 border-gray-200 rounded-lg shadow-md bg-gray-800">
        <div className="mb-6 text-2xl font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p className="text-slate-200 mt-4 text-xl">Flight Not Found</p>
          <p className="mt-2 text-slate-200 text-lg">
            We couldn't find the flight number you entered. Please check and try
            again.
          </p>
          <button
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-blue-600"
            onClick={
              // Attempt to recover by trying to re-render the invoices route
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
