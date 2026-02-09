"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-2xl font-bold text-on-surface">
          Something went wrong
        </h1>
        <p className="mt-2 text-on-surface-variant">
          An unexpected error occurred. Please try again.
        </p>
        {error.digest && (
          <p className="mt-1 text-xs text-outline">Error ID: {error.digest}</p>
        )}
        <button
          onClick={reset}
          className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-on-primary shadow-elevation-1 hover:bg-primary-hover hover:shadow-elevation-2 transition-all active:scale-[0.98]"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
