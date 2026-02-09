import { UpdatePasswordForm } from "@/components/auth/UpdatePasswordForm"

export const metadata = { title: "Set New Password" }

export default function UpdatePasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Set New Password</h1>
        <UpdatePasswordForm />
      </div>
    </div>
  )
}
