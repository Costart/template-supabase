import { UpdatePasswordForm } from "@/components/auth/UpdatePasswordForm"

export const metadata = { title: "Set New Password" }

export default function UpdatePasswordPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-center text-on-surface">
        Set a new password
      </h1>
      <p className="mt-2 text-center text-sm text-on-surface-variant">
        Enter your new password below.
      </p>
      <div className="mt-8">
        <UpdatePasswordForm />
      </div>
    </div>
  )
}
