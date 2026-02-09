import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") ?? "/dashboard"

  if (code) {
    try {
      const supabase = await createClient()
      const { error } = await supabase.auth.exchangeCodeForSession(code)
      if (error) {
        const message = encodeURIComponent(error.message)
        return NextResponse.redirect(`${origin}/login?error=${message}`)
      }
      return NextResponse.redirect(`${origin}${next}`)
    } catch {
      const message = encodeURIComponent("Authentication service unavailable")
      return NextResponse.redirect(`${origin}/login?error=${message}`)
    }
  }

  const message = encodeURIComponent("No authorization code provided")
  return NextResponse.redirect(`${origin}/login?error=${message}`)
}
