'use client';

import React, { ReactNode, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  BarChart3,
  Bell,
  Briefcase,
  Building2,
  CheckCheck,
  ClipboardList,
  Home,
  LogOut,
  MessageSquarePlus,
  Settings,
  Star,
  UserCheck,
  Users,
  X,
} from 'lucide-react';
import { notificationsSeed } from '@/lib/mock-data/notifications';
import { useIndustryProfile } from '@/components/industry/industry-profile-provider';
import { SidebarProvider, useSidebar } from '@/components/sidebar-context';
import { SidebarToggleButton } from '@/components/sidebar-toggle-button';

const industryNav = [
  { label: 'Dashboard', href: '/industry', icon: Home },
  { label: 'Opportunities', href: '/industry/opportunities', icon: Briefcase },
  { label: 'Applications', href: '/industry/applications', icon: ClipboardList },
  { label: 'Talent Matches', href: '/industry/talent-matches', icon: UserCheck },
  { label: 'Shortlisted', href: '/industry/shortlisted', icon: Star },
  { label: 'Candidates', href: '/industry/candidates', icon: Users },
  { label: 'Analytics', href: '/industry/analytics', icon: BarChart3 },
  { label: 'Feedback', href: '/industry/feedback', icon: MessageSquarePlus },
  { label: 'Profile', href: '/industry/profile', icon: Building2 },
  { label: 'Settings', href: '/industry/settings', icon: Settings },
];

function LayoutIndustryInner({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { collapsed, mobileOpen, setMobileOpen } = useSidebar();
  const [notifications, setNotifications] = useState(notificationsSeed);
  const [notifOpen, setNotifOpen] = useState(false);
  const { profile, getCompanyInitials } = useIndustryProfile();

  const unreadCount = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);
  const markAsRead = (id: string) =>
    setNotifications((cur) => cur.map((n) => (n.id === id ? { ...n, read: true } : n)));
  const markAllAsRead = () =>
    setNotifications((cur) => cur.map((n) => ({ ...n, read: true })));

  const handleLogout = () => router.push('/login');

  const sidebarW = collapsed ? 'w-[72px]' : 'w-64';
  const contentPl = collapsed ? 'lg:pl-[72px]' : 'lg:pl-64';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          aria-label="Close sidebar"
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Fixed Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col border-r border-white/10 bg-gradient-to-b from-slate-900 to-slate-800 text-white transition-all duration-300
          ${sidebarW}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* Logo row */}
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-5 shrink-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ef6d52] text-sm font-bold text-white">
            S
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="truncate text-base font-semibold">SkillConnect</div>
              <div className="text-[11px] text-amber-400 flex items-center gap-1">
                <Building2 size={11} /> Recruiter Portal
              </div>
            </div>
          )}
          <SidebarToggleButton variant="dark" />
        </div>

        {/* Company mini card */}
        <div className={`mx-3 mt-4 mb-2 rounded-xl border border-white/10 bg-white/5 p-3 shrink-0 ${collapsed ? 'px-2' : ''}`}>
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3'}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-emerald-500 to-teal-700 text-xs font-bold text-white">
              {profile.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.logo} alt={profile.name} className="h-full w-full object-cover" />
              ) : (
                getCompanyInitials(profile.name)
              )}
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold">{profile.name}</div>
                <div className="truncate text-[11px] text-slate-400">{profile.industry}</div>
              </div>
            )}
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          {industryNav.map((item) => {
            const Icon = item.icon;
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
                    ? 'bg-[#ef6d52] text-white shadow-md'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
              >
                <Icon size={16} className={`shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer info + Logout */}
        <div className="border-t border-white/10 px-3 py-4 shrink-0 space-y-1">
          {!collapsed && (
            <div className="px-3 pb-2 text-[11px] text-slate-500">
              <div className="font-semibold text-slate-400">SkillConnect AI Engine</div>
              <div>Demand-to-Curriculum Loop Active</div>
            </div>
          )}
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

      {/* Main content */}
      <div className={`flex min-h-screen flex-col transition-all duration-300 ${contentPl}`}>
        {/* Header */}
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-[var(--border)] bg-white/90 px-5 py-3.5 shadow-sm backdrop-blur-sm">
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
              <div className="flex items-center gap-2">
                <h1 className="text-base font-bold text-[var(--charcoal)]">{profile.name}</h1>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-800">Verified</span>
              </div>
              <p className="text-[11px] text-[var(--muted)]">{profile.industry} · {profile.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/industry/post-opportunity"
              className="hidden sm:flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white shadow hover:bg-[var(--accent-strong)] transition"
            >
              <Briefcase size={14} /> Post Opportunity
            </Link>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen((v) => !v)}
                className="relative rounded-full border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50"
                aria-label="Notifications"
              >
                <Bell size={17} />
                {unreadCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--accent)] px-1 text-[9px] font-bold text-white ring-2 ring-white">
                    {unreadCount}
                  </span>
                )}
              </button>
              {notifOpen && (
                <div className="absolute right-0 top-11 z-50 w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
                  <div className="mb-2 flex items-center justify-between border-b pb-2">
                    <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                      <Bell size={13} className="text-[var(--accent)]" /> Notifications
                    </p>
                    <button onClick={markAllAsRead} className="flex items-center gap-1 text-xs text-sky-600">
                      <CheckCheck size={12} /> All read
                    </button>
                  </div>
                  <div className="max-h-72 space-y-2 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className={`rounded-xl border p-3 ${n.read ? 'border-slate-200 bg-slate-50' : 'border-amber-200 bg-amber-50/70'}`}>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-xs font-semibold text-slate-900">{n.title}</p>
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

            {/* Avatar */}
            <Link
              href="/industry/profile"
              className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-gradient-to-br from-emerald-500 to-teal-700 text-xs font-bold text-white hover:ring-2 hover:ring-[var(--accent)] transition"
            >
              {profile.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.logo} alt={profile.name} className="h-full w-full object-cover" />
              ) : getCompanyInitials(profile.name)}
            </Link>
          </div>
        </header>

        <main className="flex-1 p-5 lg:p-7">{children}</main>
      </div>
    </div>
  );
}

export default function LayoutIndustry({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <LayoutIndustryInner>{children}</LayoutIndustryInner>
    </SidebarProvider>
  );
}
