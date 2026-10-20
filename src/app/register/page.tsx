"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreed) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    setError(
      "Registration is not connected to the authentication service yet.",
    );
  }

  return (
    <main className="grid min-h-screen bg-[#f8f6f1] lg:grid-cols-2">
      {/* LEFT IMAGE */}
      <section className="relative hidden min-h-screen lg:block">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90"
          alt="Warm and elegant hotel interior"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#292722]/85 via-[#292722]/25 to-[#292722]/15" />

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
            YOUR JOURNEY STARTS HERE
          </p>

          <h1 className="mt-5 max-w-lg text-5xl leading-tight xl:text-6xl">
            Make Every Journey Memorable.
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
            Create an account and discover a more personal way to plan your next
            stay.
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

          <div className="mb-8 mt-10">
            <Link href="/" className="flex flex-col lg:hidden">
              <span className="text-2xl tracking-[0.12em] text-[#4a382d]">
                Arundra Signature
              </span>

              <span className="mt-1 text-[9px] tracking-[0.42em] text-[#a58b72]">
                HOTEL & RESIDENCE
              </span>
            </Link>

            <p className="mt-8 text-xs font-semibold tracking-[0.3em] text-[#a58b72]">
              BECOME A MEMBER
            </p>

            <h2 className="mt-4 text-4xl text-[#4a382d] sm:text-5xl">
              Create Account
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#777064]">
              Join us and make your next stay more personal.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-[#4a382d]"
              >
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="w-full border border-[#ded5c8] bg-white px-4 py-3.5 text-sm placeholder:text-[#aaa198]"
                required
              />
            </div>

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
                className="w-full border border-[#ded5c8] bg-white px-4 py-3.5 text-sm placeholder:text-[#aaa198]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-[#4a382d]"
              >
                Phone Number{" "}
                <span className="font-normal text-[#aaa198]">(Optional)</span>
              </label>

              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+62 812 3456 7890"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="w-full border border-[#ded5c8] bg-white px-4 py-3.5 text-sm placeholder:text-[#aaa198]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#4a382d]"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full border border-[#ded5c8] bg-white px-4 py-3.5 pr-12 text-sm placeholder:text-[#aaa198]"
                  minLength={8}
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

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-[#4a382d]"
              >
                Confirm Password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="w-full border border-[#ded5c8] bg-white px-4 py-3.5 pr-12 text-sm placeholder:text-[#aaa198]"
                  required
                />

                <button
                  type="button"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#777064]"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-3 pt-2">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
                className="mt-1 accent-[#4a382d]"
              />

              <span className="text-xs leading-6 text-[#777064]">
                I agree to the{" "}
                <span className="font-medium text-[#4a382d]">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="font-medium text-[#4a382d]">
                  Privacy Policy
                </span>
                .
              </span>
            </label>

            {error && (
              <p
                role="alert"
                className="border border-[#e7c7bd] bg-[#fbefeb] px-4 py-3 text-sm leading-6 text-[#984b3b]"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#4a382d] py-4 text-sm font-medium text-white hover:bg-[#655043]"
            >
              Create Account
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-[#777064]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#4a382d] hover:text-[#a58b72]"
            >
              Sign In
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
