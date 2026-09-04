"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Zap,
  ClipboardList,
  Briefcase,
  FileText,
  User,
  PanelLeftClose,
  PanelLeftOpen,
  ArrowRight,
  LogOut,
  X,
  Search,
  ChevronDown,
} from "lucide-react";

import { StudentNotifications } from "@/components/student-notifications";

const navigation: {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  badge?: string;
}[] = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/student" },
  { label: "My Skills", icon: Zap, href: "/student/skills" },
  { label: "Assessments", icon: ClipboardList, href: "/student/assessments" },
  { label: "Opportunities", icon: Briefcase, href: "/student/opportunities", badge: "12" },
  { label: "Applications", icon: FileText, href: "/student/applications" },
  { label: "Portfolio", icon: User, href: "/student/portfolio" },
];

export function StudentLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => router.push("/login");

  return (
    <div className="min-h-screen bg-[#f8f8f5] text-ink">
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          aria-label="Close navigation overlay"
          className="fixed inset-0 z-20 bg-ink/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Fixed sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 flex flex-col overflow-hidden border-r border-line bg-[#fbfbf8] transition-all duration-300
          ${collapsed ? "w-[72px]" : "w-[258px]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Logo row */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-5 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-coral text-white shrink-0">
              <Zap size={16} />
            </span>
            {!collapsed && (
              <span className="font-display text-[1.15rem] font-bold tracking-[-0.04em] whitespace-nowrap">
                skill<span className="text-coral">connect</span>
              </span>
            )}
          </Link>

          {/* Desktop collapse toggle */}
          <button
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="ml-auto hidden rounded-lg border border-line bg-white p-1.5 text-muted transition hover:bg-[#efefea] lg:flex items-center justify-center"
            onClick={() => setCollapsed((c) => !c)}
          >
            {collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
          </button>

          {/* Mobile close */}
          <button
            aria-label="Close navigation"
            className="ml-auto text-muted lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          {!collapsed && <p className="eyebrow mb-3 px-3">Workspace</p>}
          <nav className="space-y-1">
            {navigation.map(({ label, icon: Icon, href, badge }) => {
              const isActive =
                pathname === href ||
                (href === "/student" && (pathname === "/student" || pathname === "/student-dashboard" || pathname === "/dashboard")) ||
                (href !== "/student" && pathname.startsWith(href));
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  title={collapsed ? label : undefined}
                  className={`flex w-full items-center rounded-xl px-3 py-3 text-[0.92rem] font-medium transition
                    ${collapsed ? "justify-center" : "gap-3"}
                    ${isActive
                      ? "bg-coral text-white shadow-[0_6px_14px_rgba(228,98,78,0.17)]"
                      : "text-muted hover:bg-[#efefea] hover:text-ink"
                    }`}
                >
                  <Icon size={18} className="shrink-0" />
                  {!collapsed && (
                    <>
                      <span>{label}</span>
                      {badge && (
                        <span
                          className={`ml-auto rounded-full px-2 py-0.5 text-[0.68rem] ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-[#e9ece7] text-muted"
                          }`}
                        >
                          {badge}
                        </span>
                      )}
                    </>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Promo card (hidden when collapsed) */}
        {!collapsed && (
          <div className="mx-3 mb-3 rounded-2xl bg-[#e9f0e8] p-4 shrink-0">
            <div className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-olive text-white">
              <Zap size={16} />
            </div>
            <p className="font-display text-[1rem] font-semibold">Build your edge</p>
            <p className="mt-1 text-xs leading-5 text-muted">
              Complete one assessment to unlock new matches.
            </p>
            <button className="mt-4 flex items-center text-xs font-bold text-olive">
              Explore assessments <ArrowRight size={13} className="ml-2" />
            </button>
          </div>
        )}

        {/* User info + logout */}
        <div className="border-t border-line px-3 py-4 shrink-0">
          {!collapsed ? (
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#d9d4c8] font-display text-sm font-bold">
                AS
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">Aarav Sharma</p>
                <p className="truncate text-xs text-muted">Student account</p>
              </div>
              <button
                onClick={handleLogout}
                title="Logout"
                className="rounded-lg p-1.5 text-muted transition hover:bg-rose-50 hover:text-rose-600"
              >
                <LogOut size={15} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              title="Logout"
              className="flex w-full justify-center rounded-xl py-2.5 text-muted transition hover:bg-rose-50 hover:text-rose-600"
            >
              <LogOut size={16} />
            </button>
          )}
        </div>
      </aside>

      {/* Main area — offset by sidebar */}
      <div className={`flex min-h-screen flex-col transition-all duration-300 ${collapsed ? "lg:pl-[72px]" : "lg:pl-[258px]"}`}>
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-[72px] items-center justify-between border-b border-line bg-[#fbfbf8]/80 px-5 backdrop-blur sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open navigation"
              className="rounded-lg p-2 text-muted hover:bg-[#efefea] lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
            <p className="hidden text-sm text-muted sm:block">
              Saturday, 5 September 2026
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <label className="relative hidden md:block">
              <span className="sr-only">Search</span>
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                placeholder="Search opportunities..."
                className="h-10 w-52 rounded-xl border border-line bg-white pl-9 pr-3 text-sm outline-none transition placeholder:text-[#a3a49e] focus:border-coral lg:w-64"
              />
            </label>
            <StudentNotifications />
            <div className="flex items-center gap-2 border-l border-line pl-3 sm:pl-5">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#d9d4c8] font-display text-xs font-bold">
                AS
              </div>
              <span className="hidden text-sm font-semibold sm:block">Aarav Sharma</span>
              <ChevronDown size={14} className="text-muted hidden sm:block" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
