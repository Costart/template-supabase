"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import Link from "next/link"

export function ResetPasswordForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    })

    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }
    setLoading(false)
  }

  if (sent) {
    return (
      <div className="text-center">
        <p className="text-gray-600 mb-4">Check your email for a password reset link.</p>
        <Link href="/login" className="text-blue-600 hover:underline">Back to login</Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          className="w-full px-3 py-2 border rounded-md disabled:opacity-50"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send reset link"}
      </button>
      <p className="text-center text-sm">
        <Link href="/login" className="text-blue-600 hover:underline">Back to login</Link>
      </p>
    </form>
  )
}
