"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("Login is not connected to the authentication service yet.");
  }

  return (
    <main className="grid min-h-screen bg-[#f8f6f1] lg:grid-cols-2">
      {/* LEFT IMAGE */}
      <section className="relative hidden min-h-screen lg:block">
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=90"
          alt="Elegant hotel bedroom"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#292722]/85 via-[#292722]/20 to-[#292722]/20" />

        <Link
          href="/"
          className="absolute left-12 top-10 z-10 flex flex-col text-white"
        >
          <span className="text-2xl tracking-[0.12em]">Arundra Signature</span>
          <span className="mt-1 text-[9px] tracking-[0.42em] text-[#e0c6a5]">
            HOTEL & RESIDENCE
          </span>
        </Link>

        <div className="absolute bottom-16 left-12 right-12 text-white">
          <p className="text-xs tracking-[0.3em] text-[#e0c6a5]">
            WELCOME BACK
          </p>

          <h1 className="mt-5 max-w-lg text-5xl leading-tight xl:text-6xl">
            Your next exceptional stay begins here.
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            Sign in to manage your reservations and make your next visit
            effortless.
          </p>
        </div>
      </section>

      {/* RIGHT FORM */}
      <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#777064] hover:text-[#4a382d]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mb-10 mt-12 lg:mt-16">
            <Link href="/" className="flex flex-col lg:hidden">
              <span className="text-2xl tracking-[0.12em] text-[#4a382d]">
                Arundra Signature
              </span>

              <span className="mt-1 text-[9px] tracking-[0.42em] text-[#a58b72]">
                HOTEL & RESIDENCE
              </span>
            </Link>

            <p className="mt-10 text-xs font-semibold tracking-[0.3em] text-[#a58b72]">
              YOUR PERSONAL SPACE
            </p>

            <h2 className="mt-4 text-4xl text-[#4a382d] sm:text-5xl">
              Welcome Back
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#777064]">
              Enter your details to access your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#4a382d]"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-lg w-full border border-[#ded5c8] bg-white px-4 py-4 text-sm text-[#292722] placeholder:text-[#aaa198]"
                required
              />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-[#4a382d]"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs text-[#a58b72] hover:text-[#4a382d]"
                  onClick={() =>
                    setError("Password recovery is not connected yet.")
                  }
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="rounded-lg w-full border border-[#ded5c8] bg-white px-4 py-4 pr-12 text-sm text-[#292722] placeholder:text-[#aaa198]"
                  required
                />

                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#777064]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <p
                role="alert"
                className="border border-[#e7c7bd] bg-[#fbefeb] px-4 py-3 text-sm text-[#984b3b]"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="rounded-lg w-full bg-[#4a382d] py-4 text-sm font-medium text-white hover:bg-[#655043]"
            >
              Sign In
            </button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#ded5c8]" />
            <span className="text-xs text-[#aaa198]">
              NEW TO Arundra Signature?
            </span>
            <div className="h-px flex-1 bg-[#ded5c8]" />
          </div>

          <Link
            href="/register"
            className="rounded-lg block border border-[#4a382d] py-4 text-center text-sm font-medium text-[#4a382d] hover:bg-[#eee7dc]"
          >
            Create an Account
          </Link>

          <p className="mt-10 text-center text-xs leading-6 text-[#aaa198]">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>
    </main>
  );
}
