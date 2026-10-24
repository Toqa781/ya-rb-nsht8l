import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../Components/AuthLayout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // TODO: Connect to backend login API.
    // rememberMe will be used when session handling is implemented.
    void rememberMe;

    setError("Login will be available after backend integration.");
  }

  return (
    <AuthLayout>

      
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[#111827]">
          Welcome back.
        </h1>

        <p className="mt-2 text-sm text-[#6B7280]">
          Your next chapter is right where you left it.
        </p>
      </div>

   
      <form onSubmit={handleSubmit} className="space-y-5">

        
        <div>
          <label
            htmlFor="login-email"
            className="mb-2 block text-sm font-medium"
          >
            Email address
          </label>

          <input
            id="login-email"
            type="email"
            placeholder="alex.chen@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className="h-11 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 text-sm outline-none transition focus:border-[#4F46E5] focus:ring-3 focus:ring-[#A5B4FC]"
          />
        </div>

       
        <div>
          <label
            htmlFor="login-password"
            className="mb-2 block text-sm font-medium"
          >
            Password
          </label>

          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            className="h-11 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 text-sm outline-none transition focus:border-[#4F46E5] focus:ring-3 focus:ring-[#A5B4FC]"
          />
        </div>

        <div className="flex items-center justify-between gap-3">

          <label className="flex cursor-pointer items-center gap-2 text-sm text-[#4B5563]">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 accent-[#4F46E5]"
            />

            Remember me
          </label>

          <span className="text-sm font-medium text-[#4F46E5]">
            Forgot password?
          </span>
        </div>

        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}

        
        <button
          type="submit"
          className="h-11 w-full rounded-lg bg-[#4F46E5] text-sm font-medium text-white transition hover:bg-[#4338CA] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#A5B4FC]"
        >
          Sign in
        </button>

      </form>

      <p className="mt-6 text-center text-sm text-[#4B5563]">
        New to Trackora?{" "}
        <Link
          to="/register"
          className="font-semibold text-[#4F46E5] hover:underline"
        >
          Create an account
        </Link>
      </p>

      
      <p className="mt-6 text-center text-xs text-[#6B7280]">
         Your applications are always private.
      </p>

    </AuthLayout>
  );
}