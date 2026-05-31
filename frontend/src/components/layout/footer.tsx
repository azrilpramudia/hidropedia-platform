import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.svg"
                alt="Hidropedia"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                }}
              />
              <span className="text-base font-bold text-white">
                Hidro<span className="text-green-400">pedia</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Platform edukasi dan informasi pertanian berkelanjutan. Belajar
              hidroponik, akuaponik, dan pertanian modern bersama kami.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Beranda", href: "/" },
                { label: "Artikel", href: "/artikel" },
                { label: "Tentang Kami", href: "/tentang" },
                { label: "Kontak", href: "/kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kategori */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Kategori
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Hidroponik", href: "/artikel?kategori=hidroponik" },
                { label: "Akuaponik", href: "/artikel?kategori=akuaponik" },
                {
                  label: "Pertanian Umum",
                  href: "/artikel?kategori=pertanian-umum",
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs">
          <p>
            &copy; {new Date().getFullYear()} Hidropedia. Dibuat dengan{" "}
            <span className="text-green-400">♥</span> untuk pertanian
            berkelanjutan Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}
