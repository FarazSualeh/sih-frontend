"use client";

import { Bell, ChevronDown, Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { roleOptions } from "@/lib/mock-data/admin-dashboard";

export function AdminNavbar() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[#fbfbf8]/80 backdrop-blur supports-[backdrop-filter]:bg-[#fbfbf8]/75">
      <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-line bg-white px-2.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            SkillConnect
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search users, skills, opportunities..."
              className="h-11 w-full rounded-xl border border-line bg-white pl-10 pr-4 text-sm text-ink outline-none placeholder:text-muted focus:border-coral"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-line bg-white p-2.5 text-muted transition hover:bg-[#f4f5f0]">
            <Bell className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-2.5 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e9f0e8] font-display text-sm font-bold text-ink">
              AD
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-ink">Admin</p>
              <p className="text-[0.65rem] text-muted">Platform overview</p>
            </div>
            <div className="relative">
              <select
                aria-label="Switch role"
                className="appearance-none bg-transparent pr-6 text-sm font-medium text-ink outline-none"
                defaultValue="admin"
                onChange={(event) => {
                  const route = roleOptions.find((option) => option.value === event.target.value)?.route;
                  if (route) router.push(route);
                }}
              >
                {roleOptions.filter((option) => option.value === "student" || option.value === "admin").map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
