import * as React from "react";

import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "info" | "danger";
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-[#eef1ed] text-ink",
  success: "bg-[#e8f2eb] text-[#2e6f4b]",
  warning: "bg-[#fff3d8] text-[#9d6d00]",
  info: "bg-[#eaf4fb] text-[#276c8f]",
  danger: "bg-[#fdeae7] text-[#b33d2d]",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em]",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
