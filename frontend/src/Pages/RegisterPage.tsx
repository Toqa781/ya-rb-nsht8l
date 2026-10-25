import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../Components/AuthLayout";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswords, setShowPasswords] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (
      password.length < 8 ||
      !/[A-Za-z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setError(
        "Password must contain at least 8 characters, including a letter and a number."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreeToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }

    // TODO: Connect to backend registration API.
    setError("Registration will be available after backend integration.");
  }

  const inputClass =
    "h-11 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 text-sm outline-none transition focus:border-[#4F46E5] focus:ring-3 focus:ring-[#A5B4FC]";

  return (
    <AuthLayout>

      <div className="mb-7">
        <h1 className="max-w-xs text-3xl font-semibold leading-tight tracking-tight">
          Your next chapter starts here.
        </h1>

        <p className="mt-2 text-sm leading-6 text-[#6B7280]">
          Create your free account. A little organization,
          a lot more possibility.
        </p>
      </div>

   
      <form onSubmit={handleSubmit} className="space-y-5">

      
        <div>
          <label
            htmlFor="register-name"
            className="mb-2 block text-sm font-medium"
          >
            Full name
          </label>

          <input
            id="register-name"
            type="text"
            placeholder="Alex Chen"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
            className={inputClass}
          />
        </div>

        
        <div>
          <label
            htmlFor="register-email"
            className="mb-2 block text-sm font-medium"
          >
            Email address
          </label>

          <input
            id="register-email"
            type="email"
            placeholder="alex.chen@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            className={inputClass}
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="register-password"
            className="mb-2 block text-sm font-medium"
          >
            Password
          </label>

          <input
            id="register-password"
            type={showPasswords ? "text" : "password"}
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
            className={inputClass}
          />

          <p className="mt-2 text-xs text-[#6B7280]">
            Use at least 8 characters, including a letter and a number.
          </p>
        </div>

       
        <div>
          <label
            htmlFor="register-confirm-password"
            className="mb-2 block text-sm font-medium"
          >
            Confirm password
          </label>

          <input
            id="register-confirm-password"
            type={showPasswords ? "text" : "password"}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            required
            className={inputClass}
          />
        </div>

        
        <label className="flex cursor-pointer items-center gap-2 text-sm text-[#4B5563]">
          <input
            type="checkbox"
            checked={showPasswords}
            onChange={(e) => setShowPasswords(e.target.checked)}
            className="h-4 w-4 accent-[#4F46E5]"
          />

          Show passwords
        </label>

        
        <label className="flex cursor-pointer items-start gap-2 text-sm leading-6 text-[#4B5563]">
          <input
            type="checkbox"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-[#4F46E5]"
          />

          <span>
            I agree to Trackora's{" "}
            <span className="font-medium text-[#4F46E5]">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="font-medium text-[#4F46E5]">
              Privacy Policy
            </span>
            .
          </span>
        </label>

        
        {error && (
          <p role="alert" className="text-sm text-red-600">
            {error}
          </p>
        )}

        
        <button
          type="submit"
          className="h-11 w-full rounded-lg bg-[#4F46E5] text-sm font-medium text-white transition hover:bg-[#4338CA] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#A5B4FC]"
        >
          Create account
        </button>

      </form>

      
      <p className="mt-6 text-center text-sm text-[#4B5563]">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#4F46E5] hover:underline"
        >
          Sign in
        </Link>
      </p>

    </AuthLayout>
  );
}