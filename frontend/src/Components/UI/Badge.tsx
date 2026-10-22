import type { HTMLAttributes } from "react";

export type BadgeTone =
  | "blue"
  | "purple"
  | "amber"
  | "green"
  | "red"
  | "gray";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

function Badge({
  children,
  tone = "gray",
  className = "",
  ...props
}: BadgeProps) {
  const tones: Record<BadgeTone, string> = {
    blue: "bg-tone-blue-bg text-tone-blue-text",
    purple: "bg-tone-purple-bg text-tone-purple-text",
    amber: "bg-tone-amber-bg text-tone-amber-text",
    green: "bg-tone-green-bg text-tone-green-text",
    red: "bg-tone-red-bg text-tone-red-text",
    gray: "bg-tone-gray-bg text-tone-gray-text",
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full
        px-3 py-1 text-xs font-semibold
        ${tones[tone]}
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;