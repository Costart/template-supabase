import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Page not found</h2>
        <p className="text-gray-600 mb-4">The page you requested does not exist.</p>
        <Link
          href="/"
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}
