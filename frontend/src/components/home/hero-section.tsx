import Link from "next/link";
import Image from "next/image";
import { ArrowRight, FileText, Tag, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  {
    icon: FileText,
    value: "100+",
    label: "Artikel Edukasi",
    position: "top-4 left-4",
  },
  {
    icon: Tag,
    value: "10+",
    label: "Kategori",
    position: "top-4 right-4",
  },
  {
    icon: Users,
    value: "5K+",
    label: "Pembaca Aktif",
    // Menggunakan koordinat yang lebih aman agar tidak terlalu ke bawah
    position: "bottom-20 left-4 sm:bottom-24",
  },
  {
    icon: Globe,
    value: "1",
    label: "Misi Keberlanjutan",
    position: "bottom-4 right-4",
  },
];

export function HeroSection() {
  return (
    // PERBAIKAN 1: Menggunakan min-h-[calc(100vh-64px)] agar pas satu layar penuh setelah navbar
    // Ditambah flex dan items-center agar kontennya otomatis berada di tengah secara vertikal
    <section className="bg-light min-h-[calc(100vh-64px)] flex items-center py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* ── Kolom Kiri: Teks ── */}
          <div className="flex flex-col items-start z-10">
            {/* Badge pill */}
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
              <span className="text-green-500">✦</span>
              100+ Articles • Sustainable Agriculture
            </span>

            {/* Judul */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Platform Edukasi{" "}
              <span className="block text-green-600">Pertanian</span>
              <span className="block text-green-600">Berkelanjutan</span>
            </h1>

            {/* Deskripsi */}
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500 md:text-lg">
              Belajar hidroponik, akuaponik, budidaya modern, dan teknologi
              pertanian masa depan melalui artikel berkualitas tinggi.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/artikel">
                <Button
                  size="lg"
                  className="gap-2 bg-green-700 hover:bg-green-800"
                >
                  Mulai Belajar
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/artikel">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  Lihat Artikel
                </Button>
              </Link>
            </div>
          </div>

          {/* ── Kolom Kanan: Gambar + Floating Cards ── */}
          {/* PERBAIKAN 2: Ditambahkan pb-10 pada mobile agar posisi absolute card bawah punya ruang aman */}
          <div className="relative pb-12 lg:pb-0">
            {/* Gambar utama */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80"
                alt="Kebun hidroponik modern"
                width={800}
                height={520}
                className="h-[340px] w-full object-cover md:h-[420px]"
                priority
              />
              {/* Overlay gradient bawah */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating stat cards */}
            {STATS.map((stat) => (
              <div
                key={stat.label}
                // PERBAIKAN 3: Ditambahkan 'whitespace-nowrap' agar teks tidak patah ke bawah di layar kecil
                className={`absolute ${stat.position} flex items-center gap-2.5 rounded-xl bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-sm whitespace-nowrap transition-transform hover:scale-105 duration-200`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50">
                  <stat.icon className="h-4 w-4 text-green-600" />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-slate-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
