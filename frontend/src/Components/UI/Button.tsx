import type { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-button font-medium
    transition-colors
    focus-visible:outline-hidden
    focus-visible:ring-2
    focus-visible:ring-focus
    disabled:cursor-not-allowed
    disabled:bg-disabled-bg
    disabled:text-disabled-text
    disabled:border-disabled-bg
  `;

  const variants = {
    primary:
      "bg-primary text-white enabled:hover:bg-primary-hover",

    secondary:
      "border border-line-strong bg-surface text-ink enabled:hover:bg-page",

    danger:
      "bg-danger text-white enabled:hover:bg-danger-hover",
  };

  const sizes = {
    sm: "h-11 px-3 text-sm",
    md: "h-11 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;