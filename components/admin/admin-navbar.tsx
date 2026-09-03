"use client";

import { GlobalSearch } from "@/components/admin/shared/global-search";
import { NotificationPanel } from "@/components/admin/shared/notification-panel";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { useSidebar } from "@/components/sidebar-context";

export function AdminNavbar() {
  const router = useRouter();
  const { mobileOpen, setMobileOpen } = useSidebar();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[#fbfbf8]/80 backdrop-blur supports-[backdrop-filter]:bg-[#fbfbf8]/75">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Mobile hamburger */}
        <div className="flex items-center gap-3">
          <button
            aria-label={mobileOpen ? "Close sidebar" : "Open sidebar"}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg border border-line bg-white p-2 text-muted transition hover:bg-[#f4f5f0] lg:hidden"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <GlobalSearch />

        <div className="flex items-center gap-3">
          <NotificationPanel />

          <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-2.5 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e9f0e8] font-display text-sm font-bold text-ink">
              AD
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-ink">Admin</p>
              <p className="text-[0.65rem] text-muted">Platform overview</p>
            </div>
          </div>

          <button
            onClick={() => router.push("/login")}
            title="Logout"
            className="flex items-center gap-1.5 rounded-xl border border-line bg-white px-3 py-2 text-xs font-medium text-muted transition hover:bg-rose-50 hover:text-rose-600"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
