"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/artikel" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/tentang" },
  { label: "Contact", href: "/kontak" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Logo ── */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/images/banner.png"
            alt="Hidropedia — Pertanian Berkelanjutan, Masa Depan Berkelanjutan"
            width={1052}
            height={228}
            className="w-auto object-contain"
            style={{ height: "48px" }}
            priority
          />
        </Link>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-base font-medium transition-colors",
                  isActive
                    ? "text-green-700"
                    : "text-slate-600 hover:text-slate-900",
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-green-600" />
                )}
              </Link>
            );
          })}
        </div>

        {/* ── Desktop Right: Search + Login ── */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Search */}
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center gap-2">
                <input
                  autoFocus
                  type="text"
                  placeholder="Cari artikel..."
                  className="w-52 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-base text-slate-800 placeholder:text-slate-400 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all"
                  onBlur={() => setIsSearchOpen(false)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setIsSearchOpen(false);
                    if (e.key === "Enter") {
                      const val = (e.target as HTMLInputElement).value.trim();
                      if (val)
                        window.location.href = `/artikel?q=${encodeURIComponent(val)}`;
                    }
                  }}
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="text-slate-400 hover:text-slate-600"
                  aria-label="Tutup pencarian"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
                aria-label="Buka pencarian"
              >
                <Search className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Login Button */}
          <Link
            href="/login"
            className="rounded-full bg-green-600 px-6 py-2.5 text-base font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            Login
          </Link>
        </div>

        {/* ── Mobile: Search + Hamburger ── */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/artikel"
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Cari artikel"
          >
            <Search className="h-5 w-5" />
          </Link>
          <button
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 md:hidden",
          isOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="space-y-1 border-t border-slate-200 bg-white px-4 py-3">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="border-t border-slate-100 pt-3">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-full bg-green-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-green-700"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
