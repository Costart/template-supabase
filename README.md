# Next.js + Supabase Template

A production-ready full-stack template with authentication, dashboard, and clean architecture.

## Stack

- **Next.js 16** - React framework
- **Supabase** - Database + Auth
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Vercel** - Hosting (recommended)

## Features

- Email/password authentication
- Password reset flow
- Protected routes with middleware
- Error boundaries and loading states
- Dashboard layout with navigation
- Reusable UI components (forwardRef, accessible)
- useUser hook for client components
- Type-safe Supabase client
- Auto-redirect based on auth state
- Auth callback error handling

## Quick Start

### 1. Clone the template

```bash
git clone https://github.com/YOUR_USERNAME/your-project-name
cd your-project-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Copy `.env.local.example` to `.env.local`
3. Add your Supabase credentials

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
SUPABASE_SERVICE_ROLE_KEY=your-secret-key
```

**Finding your keys:** In Supabase dashboard, go to Settings > API. The publishable key starts with `sb_publishable_`. The secret key starts with `sb_secret_`.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploying to Vercel

### 1. Push to GitHub and import in Vercel

### 2. Add environment variables in Vercel

In Vercel project settings > Environment Variables, add:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### 3. Configure Supabase redirect URLs

In Supabase dashboard > Authentication > URL Configuration:
- **Site URL**: Set to your Vercel domain (e.g. `https://your-app.vercel.app`)
- **Redirect URLs**: Add your Vercel domain (e.g. `https://your-app.vercel.app/**`)

This ensures email confirmation and password reset links redirect to your deployed app, not localhost.

## Project Structure

```
src/
  app/
    (auth)/              # Auth pages (login, signup, reset-password, update-password)
    (dashboard)/         # Protected pages (dashboard, settings)
    api/auth/callback/   # Auth callback handler
    error.tsx            # Global error boundary
    not-found.tsx        # 404 page
    layout.tsx           # Root layout with metadata
  components/
    ui/                  # Button, Input, Card (forwardRef, accessible)
    auth/                # LoginForm, SignupForm, ResetPasswordForm, UpdatePasswordForm
    layout/              # DashboardNav, header
  lib/
    supabase/            # client.ts, server.ts, middleware.ts
    hooks/               # use-user.ts
    utils.ts             # cn() utility
middleware.ts            # Route protection entry point
```

## Key Patterns

### Supabase key naming
This template uses `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (not the legacy `ANON_KEY`). Newer Supabase projects issue keys starting with `sb_publishable_`.

### Middleware error handling
The middleware wraps `supabase.auth.getUser()` in try/catch so the app doesn't crash if Supabase is temporarily unreachable.

### Auth callback errors
The `/api/auth/callback` route catches errors and redirects back to `/login?error=message` so users see what went wrong.

### LoginForm with useSearchParams
`LoginForm` uses `useSearchParams()` to display callback errors. The login page wraps it in `<Suspense>` (required by Next.js for client components using searchParams).

## What's Next

- Add your database tables in Supabase
- Build features in the dashboard
- Customize the UI components
- Add more pages and routes
