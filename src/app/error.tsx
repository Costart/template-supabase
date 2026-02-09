"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-4">
          {error.digest ? `Error: ${error.digest}` : error.message}
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
