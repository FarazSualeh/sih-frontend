import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-coral text-white shadow-[0_8px_16px_rgba(228,98,78,0.18)] hover:bg-[#d85643]",
  secondary: "bg-[#eef1ed] text-ink hover:bg-[#e5e9e3]",
  outline: "border border-line bg-transparent text-ink hover:bg-[#f4f5f0]",
  ghost: "bg-transparent text-ink hover:bg-[#f4f5f0]",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-10 px-4 py-2 text-sm",
  sm: "h-8 px-3 py-1.5 text-xs",
  lg: "h-11 px-5 py-3 text-sm",
  icon: "h-8 w-8 p-0 text-sm",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
