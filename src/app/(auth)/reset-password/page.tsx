import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm"
import Link from "next/link"

export const metadata = { title: "Reset Password" }

export default function ResetPasswordPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-center text-on-surface">
        Reset your password
      </h1>
      <p className="mt-2 text-center text-sm text-on-surface-variant">
        Enter your email and we\u0027ll send you a reset link.
      </p>
      <div className="mt-8">
        <ResetPasswordForm />
      </div>
      <p className="mt-6 text-center text-sm text-on-surface-variant">
        <Link
          href="/login"
          className="font-medium text-primary hover:text-primary-hover"
        >
          Back to login
        </Link>
      </p>
    </div>
  )
}
