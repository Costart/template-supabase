import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl font-extrabold text-primary">404</h1>
        <h2 className="mt-4 font-display text-xl font-bold text-on-surface">
          Page not found
        </h2>
        <p className="mt-2 text-on-surface-variant">
          The page you\u0027re looking for doesn\u0027t exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-on-primary shadow-elevation-1 hover:bg-primary-hover hover:shadow-elevation-2 transition-all active:scale-[0.98]"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
