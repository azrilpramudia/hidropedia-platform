import type { Metadata } from "next";
import Link from "next/link";
import { LogoutButton } from "@/components/auth/logout-button";
import { SIDEBAR_LINKS } from "@/constants/sidebar";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard Hidropedia",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 border-r border-slate-200 bg-white md:flex md:flex-col">
        <div className="flex flex-1 flex-col gap-1 p-4">
          <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Menu
          </p>
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </div>

        {/* Logout */}
        <div className="border-t border-slate-200 p-4">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</div>
      </div>
    </div>
  );
}
