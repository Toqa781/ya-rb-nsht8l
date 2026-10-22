import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {

  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex w-full flex-col gap-2">

      <label
        htmlFor={inputId}
        className="text-sm font-medium text-ink"
      >
        {label}
      </label>

      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`
          w-full rounded-button border bg-surface px-4 py-2.5
          text-sm text-ink outline-none
          placeholder:text-subtle
          focus:border-primary focus:ring-2 focus:ring-focus
          ${error ? "border-danger" : "border-line"}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p
          id={`${inputId}-error`}
          className="text-xs text-danger"
        >
          {error}
        </p>
      )}

    </div>
  );
}

export default Input;