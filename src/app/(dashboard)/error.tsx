"use client"

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-4">{error.message}</p>
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
