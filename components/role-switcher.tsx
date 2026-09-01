"use client";

import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

import { roleOptions } from "@/lib/mock-data/admin-dashboard";

export function RoleSwitcher({ currentRole = "student" }: { currentRole?: "student" | "academician" | "industry" | "admin" }) {
  const router = useRouter();

  return (
    <div className="relative">
      <select
        aria-label="Switch dashboard role"
        value={currentRole}
        onChange={(event) => {
          const route = roleOptions.find((option) => option.value === event.target.value)?.route;
          if (route) router.push(route);
        }}
        className="appearance-none rounded-xl border border-line bg-white px-3 py-2 pr-8 text-sm font-medium text-ink outline-none focus:border-coral"
      >
        {roleOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
    </div>
  );
}
