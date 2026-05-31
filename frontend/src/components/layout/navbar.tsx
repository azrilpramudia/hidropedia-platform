"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/artikel" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/tentang" },
  { label: "Contact", href: "/kontak" },
];

const SUGGESTIONS = [
  "Cara memulai hidroponik di rumah",
  "Sistem NFT vs DWC",
  "Nutrisi hidroponik EC dan pH",
  "Akuaponik untuk pemula",
  "Pertanian vertikal perkotaan",
  "Memilih ikan untuk akuaponik",
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input saat modal dibuka
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  // Reset query setelah modal tertutup
  useEffect(() => {
    if (!isSearchOpen) {
      const t = setTimeout(() => setSearchQuery(""), 300);
      return () => clearTimeout(t);
    }
  }, [isSearchOpen]);

  // Tutup dengan Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsSearchOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = isSearchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  function handleSearch(q?: string) {
    const query = (q ?? searchQuery).trim();
    if (query) {
      router.push(`/artikel?q=${encodeURIComponent(query)}`);
      setIsSearchOpen(false);
    }
  }

  const filtered = searchQuery.trim()
    ? SUGGESTIONS.filter((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : SUGGESTIONS;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
        <nav className="mx-auto flex h-19 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
            <button
              onClick={() => setIsSearchOpen(true)}
              className="rounded-full p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
              aria-label="Buka pencarian"
            >
              <Search className="h-6 w-6" />
            </button>
            <Link
              href="/login"
              className="rounded-full bg-green-600 px-6 py-2.5 text-base font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            >
              Login
            </Link>
          </div>

          {/* ── Mobile: Search + Hamburger ── */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
              aria-label="Cari artikel"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
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

      {/* ══════════════════════════════════════
          Search Modal
      ══════════════════════════════════════ */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-100 flex items-start justify-center px-4 pt-20 sm:pt-24"
          role="dialog"
          aria-modal="true"
          aria-label="Pencarian artikel"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsSearchOpen(false)}
          />

          {/* Tombol ESC di pojok kanan atas */}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-4 top-4 flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:right-6"
            aria-label="Tutup pencarian"
          >
            <X className="h-4 w-4" />
            <span className="hidden sm:inline">Esc</span>
          </button>

          {/* Modal Card */}
          <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-2xl">
            {/* Input area */}
            <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4">
              <Search className="h-5 w-5 shrink-0 text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari artikel..."
                className="flex-1 bg-transparent text-lg text-slate-800 placeholder:text-slate-400 focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="shrink-0 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                  aria-label="Hapus teks"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Suggestion list */}
            <ul className="max-h-72 overflow-y-auto py-2">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleSearch(item)}
                      className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-green-700"
                    >
                      <Search className="h-4 w-4 shrink-0 text-slate-300" />
                      <span className="flex-1">{item}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-300" />
                    </button>
                  </li>
                ))
              ) : (
                <li className="px-5 py-4 text-sm text-slate-400">
                  Tidak ada hasil untuk &ldquo;{searchQuery}&rdquo;
                </li>
              )}
            </ul>

            {/* Footer hint */}
            <div className="flex items-center justify-between border-t border-slate-100 px-5 py-3">
              <span className="text-xs text-slate-400">
                Tekan{" "}
                <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-500">
                  Enter
                </kbd>{" "}
                untuk mencari
              </span>
              <span className="text-xs text-slate-400">
                <kbd className="rounded border border-slate-200 bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-500">
                  Esc
                </kbd>{" "}
                untuk menutup
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
