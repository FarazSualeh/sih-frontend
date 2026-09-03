'use client';

import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { useSidebar } from '@/components/sidebar-context';

/**
 * A toggle button placed next to the logo in every sidebar header.
 * - On desktop: collapses/expands the sidebar (icon-only vs full).
 * - On mobile: opens/closes the sidebar drawer.
 * Pass `variant` to match the enclosing sidebar's colour scheme.
 */
export function SidebarToggleButton({
  variant = 'dark',
}: {
  variant?: 'dark' | 'light';
}) {
  const { collapsed, mobileOpen, toggleCollapsed, setMobileOpen } = useSidebar();

  const baseClass =
    'flex items-center justify-center rounded-lg border p-1.5 transition-colors duration-200';

  const darkClass =
    'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white';
  const lightClass =
    'border-line bg-white text-muted hover:bg-[#f4f5f0] hover:text-ink';

  const cls = `${baseClass} ${variant === 'dark' ? darkClass : lightClass}`;

  return (
    <>
      {/* Desktop toggle */}
      <button
        type="button"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        onClick={toggleCollapsed}
        className={`${cls} hidden lg:flex`}
      >
        {collapsed ? (
          <PanelLeftOpen className="h-4 w-4" />
        ) : (
          <PanelLeftClose className="h-4 w-4" />
        )}
      </button>

      {/* Mobile toggle */}
      <button
        type="button"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMobileOpen(!mobileOpen)}
        className={`${cls} lg:hidden`}
      >
        {mobileOpen ? (
          <PanelLeftClose className="h-4 w-4" />
        ) : (
          <PanelLeftOpen className="h-4 w-4" />
        )}
      </button>
    </>
  );
}
