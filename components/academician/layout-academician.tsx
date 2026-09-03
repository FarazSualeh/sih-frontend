'use client';

import React, { ReactNode, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Bell, CheckCheck, X, LogOut } from 'lucide-react';
import { notificationsSeed } from '@/lib/mock-data/notifications';
import { useAcademicianProfile } from '@/components/academician/profile-provider';
import { SidebarProvider, useSidebar } from '@/components/sidebar-context';
import { SidebarToggleButton } from '@/components/sidebar-toggle-button';

const nav = [
  { label: 'Dashboard', href: '/academician' },
  { label: 'Students', href: '/academician/students' },
  { label: 'Skill Analytics', href: '/academician/analytics' },
  { label: 'Skill Gaps', href: '/academician/skill-gaps' },
  { label: 'Industry Demand', href: '/academician/industry-demand' },
  { label: 'Assessments', href: '/academician/assessments' },
  { label: 'Opportunities', href: '/academician/opportunities' },
  { label: 'Reports', href: '/academician/reports' },
  { label: 'Profile', href: '/academician/profile' },
];

const SIDEBAR_FULL_W = 'w-64';
const SIDEBAR_COLLAPSED_W = 'w-[72px]';

function AcademicianSidebarInner({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { collapsed, mobileOpen, setMobileOpen } = useSidebar();
  const [notifications, setNotifications] = useState(notificationsSeed);
  const [notifOpen, setNotifOpen] = useState(false);
  const { profile, getInitials } = useAcademicianProfile();

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  );
  const markAsRead = (id: string) =>
    setNotifications((cur) => cur.map((n) => (n.id === id ? { ...n, read: true } : n)));
  const markAllAsRead = () =>
    setNotifications((cur) => cur.map((n) => ({ ...n, read: true })));

  const handleLogout = () => {
    router.push('/login');
  };

  const sidebarW = collapsed ? SIDEBAR_COLLAPSED_W : SIDEBAR_FULL_W;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Overlay for mobile */}
      {mobileOpen && (
        <button
          aria-label="Close sidebar"
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Fixed Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col border-r border-white/10 bg-[var(--charcoal)] text-white transition-all duration-300
          ${sidebarW}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* Logo row */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-5 shrink-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)] text-sm font-bold text-white">
            S
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="truncate text-base font-semibold leading-tight">SkillConnect</div>
              <div className="text-[11px] text-slate-400">Mentor Portal</div>
            </div>
          )}
          <SidebarToggleButton variant="dark" />
        </div>

        {/* Profile mini card */}
        <div className={`mx-3 mt-4 mb-2 rounded-xl border border-white/10 bg-white/5 p-3 shrink-0 ${collapsed ? 'px-2' : ''}`}>
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[var(--sage)] text-xs font-bold text-[var(--charcoal)]">
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
              ) : (
                getInitials(profile.name)
              )}
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">{profile.name}</div>
                <div className="truncate text-[11px] text-slate-400">{profile.designation}</div>
              </div>
            )}
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                title={collapsed ? item.label : undefined}
                className={`flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors
                  ${collapsed ? 'justify-center' : 'gap-3'}
                  ${isActive
                    ? 'bg-[var(--accent)] text-white'
                    : 'text-slate-300 hover:bg-white/8 hover:text-white'
                  }`}
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${isActive ? 'bg-white' : 'bg-slate-500'}`} />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-white/10 px-3 py-4 shrink-0">
          <button
            onClick={handleLogout}
            title={collapsed ? 'Logout' : undefined}
            className={`flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-rose-500/15 hover:text-rose-300
              ${collapsed ? 'justify-center' : 'gap-3'}`}
          >
            <LogOut size={16} className="shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main content — offset by sidebar width on desktop */}
      <div className={`flex min-h-screen flex-col transition-all duration-300 ${collapsed ? 'lg:pl-[72px]' : 'lg:pl-64'}`}>
        {/* Top bar */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border)] bg-white/90 px-5 py-3.5 shadow-sm backdrop-blur-sm">
          {/* Mobile hamburger (via SidebarToggleButton rendered outside sidebar) */}
          <div className="flex items-center gap-3">
            <button
              className="flex items-center justify-center rounded-lg border border-line bg-white p-1.5 text-muted transition hover:bg-slate-50 lg:hidden"
              aria-label="Toggle sidebar"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
            <div>
              <h1 className="text-lg font-bold text-[var(--charcoal)]">Hello, {profile.name.split(' ')[0]}</h1>
              <p className="text-xs text-[var(--muted)]">{profile.institution}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen((v) => !v)}
                className="relative rounded-full border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50"
                aria-label="Notifications"
              >
                <Bell size={17} />
                {unreadCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white">
                    {unreadCount}
                  </span>
                )}
              </button>
              {notifOpen && (
                <div className="absolute right-0 top-11 z-50 w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-800">Notifications</p>
                    <button onClick={markAllAsRead} className="flex items-center gap-1 text-xs text-sky-600">
                      <CheckCheck size={12} /> All read
                    </button>
                  </div>
                  <div className="max-h-72 space-y-2 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className={`rounded-lg border p-2.5 ${n.read ? 'border-slate-200 bg-slate-50' : 'border-sky-200 bg-sky-50'}`}>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-xs font-semibold text-slate-800">{n.title}</p>
                            <p className="mt-0.5 text-[11px] text-slate-600">{n.message}</p>
                          </div>
                          {!n.read && (
                            <button onClick={() => markAsRead(n.id)} aria-label="Dismiss">
                              <X size={11} className="text-slate-400" />
                            </button>
                          )}
                        </div>
                        <p className="mt-1.5 text-[10px] text-slate-400">{n.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Avatar → profile */}
            <Link href="/academician/profile" className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-[var(--sage)] text-xs font-bold text-[var(--charcoal)] hover:ring-2 hover:ring-[var(--accent)]">
              {profile.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
              ) : getInitials(profile.name)}
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-5 lg:p-7">{children}</main>
      </div>
    </div>
  );
}

export default function LayoutAcademician({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AcademicianSidebarInner>{children}</AcademicianSidebarInner>
    </SidebarProvider>
  );
}
