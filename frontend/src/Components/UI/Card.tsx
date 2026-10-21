import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Card({
  children,
  className = "",
  ...props
}: CardProps) {

  return (
    <div
      className={`
        rounded-card border border-line bg-surface p-6
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;