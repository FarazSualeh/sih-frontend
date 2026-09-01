"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { sidebarItems } from "@/lib/mock-data/admin-dashboard";

export function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden border-r border-line bg-[#fbfbf8] transition-all duration-300 lg:flex lg:flex-col ${
        collapsed ? "w-24" : "w-[260px]"
      }`}
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-5">
        {!collapsed && (
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral text-sm font-bold text-white">
              SC
            </div>
            <div>
              <p className="font-display text-lg font-semibold tracking-[-0.04em] text-ink">SkillConnect</p>
            </div>
          </div>
        )}

        <button
          type="button"
          aria-label="Toggle sidebar"
          className="ml-auto rounded-lg border border-line bg-white p-2 text-muted transition hover:bg-[#f5f5f2]"
          onClick={() => setCollapsed((isCollapsed) => !isCollapsed)}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-coral text-white shadow-[0_10px_18px_rgba(228,98,78,0.18)]"
                  : "text-muted hover:bg-[#eef0ea] hover:text-ink"
              } ${collapsed ? "justify-center px-0" : ""}`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span className="truncate">{item.title}</span>}
              {!collapsed && item.badge && (
                <span className={`ml-auto rounded-full px-2 py-0.5 text-[0.62rem] ${isActive ? "bg-white/20 text-white" : "bg-[#eaece7] text-muted"}`}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
