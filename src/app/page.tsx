import Link from "next/link"
import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-surface to-accent/5 p-8">
      <div className="text-center space-y-6 max-w-2xl">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="font-display rounded-xl bg-primary px-4 py-2 text-lg font-extrabold tracking-wide text-on-primary shadow-lg shadow-primary/20">
            MY
          </span>
          <span className="font-display text-3xl font-extrabold text-on-surface">
            App
          </span>
        </div>
        <h1 className="font-display text-5xl font-extrabold tracking-tight text-on-surface">
          Your App Template
        </h1>
        <p className="text-xl text-on-surface-variant">
          A production-ready Next.js + Supabase starter with authentication,
          dashboard, and more.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/login">
            <Button variant="outlined" size="lg">
              Sign In
            </Button>
          </Link>
        </div>
        <div className="pt-8 text-sm text-on-surface-variant">
          <p>Built with Next.js, Supabase, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </div>
  )
}
