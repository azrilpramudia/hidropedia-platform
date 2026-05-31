"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Home,
  FileText,
  FolderOpen,
  Info,
  Phone,
  ChevronRight,
  Leaf,
  Mail,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Unlock,
  Clock,
  Users,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const NAV = [
  { label: "Home", href: "/", icon: Home },
  { label: "Articles", href: "/artikel", icon: FileText },
  { label: "Resources", href: "/resources", icon: FolderOpen },
  { label: "About", href: "/tentang", icon: Info },
  { label: "Contact", href: "/kontak", icon: Phone },
];

const CATS = [
  { label: "Hidroponik", href: "/artikel?kategori=hidroponik" },
  { label: "Akuaponik", href: "/artikel?kategori=akuaponik" },
  { label: "Budidaya", href: "/artikel?kategori=budidaya" },
  { label: "Nutrisi Tanaman", href: "/artikel?kategori=nutrisi" },
  { label: "Teknologi Pertanian", href: "/artikel?kategori=teknologi" },
  { label: "Pertanian Umum", href: "/artikel?kategori=pertanian-umum" },
];

const FEATS = [
  {
    icon: BookOpen,
    title: "Konten Berkualitas",
    sub: "Artikel ditulis oleh ahli di bidangnya",
  },
  { icon: Unlock, title: "Gratis Diakses", sub: "100% gratis untuk semua" },
  { icon: Clock, title: "Update Rutin", sub: "Konten terbaru setiap minggu" },
  { icon: Users, title: "Untuk Semua", sub: "Pemula hingga profesional" },
];

const SOCIALS = [
  {
    Icon: FaFacebook,
    href: "#",
    label: "Facebook",
    color: "hover:text-blue-600",
  },
  {
    Icon: FaInstagram,
    href: "#",
    label: "Instagram",
    color: "hover:text-pink-600",
  },
  { Icon: FaYoutube, href: "#", label: "YouTube", color: "hover:text-red-600" },
  {
    Icon: FaLinkedin,
    href: "#",
    label: "LinkedIn",
    color: "hover:text-blue-700",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-slate-100 bg-white">
      {/* Background Vector Decorative */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 opacity-10">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 190 Q30 100 100 80 Q60 140 10 190Z" fill="#16a34a" />
          <path d="M5 180 Q50 120 130 60 Q80 130 5 180Z" fill="#22c55e" />
          <path
            d="M0 170 Q40 110 120 50 Q70 120 0 170Z"
            fill="#16a34a"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-12 pb-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* ── Kolom 1: Logo & Deskripsi Singkat ── */}
          <div className="space-y-5">
            {/* PERBAIKAN: Menambahkan 'className="block"' agar layout space-y-5 mengenali tinggi Link */}
            <Link href="/" className="block">
              <Image
                src="/images/banner.png"
                alt="Hidropedia"
                width={1052}
                height={228}
                className="w-auto object-contain"
                style={{ height: "44px" }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              Platform edukasi dan informasi pertanian berkelanjutan. Belajar
              hidroponik, akuaponik, dan pertanian modern bersama kami.
            </p>
            <ul className="space-y-3">
              {FEATS.map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-green-50">
                    <f.icon className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-slate-800">
                      {f.title}
                    </p>
                    <p className="text-xs text-slate-400">{f.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Kolom 2: Navigasi Internal ── */}
          <div>
            <h3 className="mb-5 text-base font-bold text-slate-900">
              Navigasi
            </h3>
            <ul className="space-y-1">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
                  >
                    <span className="flex items-center gap-3 text-sm text-slate-600 group-hover:text-green-700">
                      <link.icon className="h-4 w-4 text-slate-400 group-hover:text-green-500" />
                      {link.label}
                    </span>
                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-green-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Kolom 3: Kategori Artikel ── */}
          <div>
            <h3 className="mb-5 text-base font-bold text-slate-900">
              Kategori Populer
            </h3>
            <ul className="space-y-2.5">
              {CATS.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="group flex items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-green-700"
                  >
                    <Leaf className="h-3.5 w-3.5 shrink-0 text-green-400 group-hover:text-green-600" />
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Kolom 4: Newsletter Form ── */}
          <div>
            <h3 className="mb-2 text-base font-bold text-slate-900">
              Dapatkan Update Terbaru
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-slate-500">
              Dapatkan artikel terbaru, tips, dan informasi menarik seputar
              pertanian berkelanjutan langsung ke email Anda.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                <CheckCircle2 className="h-4 w-4" />
                Terima kasih! Anda sudah berlangganan.
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-3">
                <div className="flex items-center overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-green-400 focus-within:ring-2 focus-within:ring-green-400/20">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Anda"
                    required
                    className="flex-1 bg-transparent px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
                  />
                  <Mail className="mr-3 h-4 w-4 shrink-0 text-slate-400" />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-between rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                  Berlangganan
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
            <p className="mt-3 flex items-start gap-1.5 text-xs text-slate-400">
              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-400" />
              Kami tidak akan membagikan email Anda ke pihak ketiga.
            </p>
          </div>
        </div>

        {/* ── Banner Tengah: CTA Bertumbuh Bersama ── */}
        <div className="my-10 flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-green-100 bg-green-50/50 px-8 py-6 sm:flex-row">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-100">
            <Leaf className="h-8 w-8 text-green-600" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Mari Bertumbuh Bersama
            </h4>
            <p className="mt-1 text-sm text-slate-500">
              Hidropedia hadir untuk mendukung masa depan pertanian yang lebih
              hijau, modern, dan berkelanjutan.
            </p>
          </div>
          <Link
            href="/artikel"
            className="shrink-0 flex items-center gap-2 rounded-xl border border-green-600 px-5 py-2.5 text-sm font-semibold text-green-700 transition-colors hover:bg-green-600 hover:text-white"
          >
            Pelajari Lebih Lanjut
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ── Baris Bawah: Copyright, Nav Mini, & Social Media ── */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {year}{" "}
            <span className="font-semibold text-slate-600">Hidropedia</span>.
            Semua hak dilindungi. Dibuat dengan{" "}
            <span className="text-green-500">&#9829;</span> untuk pertanian
            berkelanjutan Indonesia.
          </p>
          <nav className="hidden items-center sm:flex">
            {NAV.map((link, i) => (
              <span key={link.href} className="flex items-center">
                {i > 0 && (
                  <span className="mx-2 h-1 w-1 rounded-full bg-slate-300" />
                )}
                <Link
                  href={link.href}
                  className="text-xs text-slate-500 hover:text-green-600"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ Icon, href, label, color }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors hover:border-current hover:bg-slate-50 ${color}`}
              >
                <Icon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
