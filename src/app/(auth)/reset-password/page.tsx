import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm"

export const metadata = { title: "Reset Password" }

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Reset Password</h1>
        <ResetPasswordForm />
      </div>
    </div>
  )
}
