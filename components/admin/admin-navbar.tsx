"use client";

import { GlobalSearch } from "@/components/admin/shared/global-search";
import { NotificationPanel } from "@/components/admin/shared/notification-panel";
import { AdminRoleSwitcher } from "@/components/admin/shared/role-switcher";

export function AdminNavbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[#fbfbf8]/80 backdrop-blur supports-[backdrop-filter]:bg-[#fbfbf8]/75">
      <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-line bg-white px-2.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            SkillConnect
          </div>
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
            <AdminRoleSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
