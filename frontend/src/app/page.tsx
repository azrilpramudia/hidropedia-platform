import Link from "next/link";
import { ArrowRight, Leaf, Droplets, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/articles/article-card";
import { MOCK_ARTICLES } from "@/lib/mock-data";

const FEATURES = [
  {
    icon: Leaf,
    title: "Hidroponik",
    description:
      "Panduan lengkap budidaya tanaman tanpa tanah menggunakan larutan nutrisi.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Droplets,
    title: "Akuaponik",
    description:
      "Sistem terintegrasi yang menggabungkan budidaya ikan dan tanaman secara sinergis.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: BookOpen,
    title: "Edukasi",
    description:
      "Artikel, panduan, dan tips praktis untuk petani modern dari berbagai level.",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
];

export default function HomePage() {
  const featuredArticles = MOCK_ARTICLES.slice(0, 3);

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-green-950 to-slate-900 py-24 md:py-32">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400 ring-1 ring-green-500/20">
              <Leaf className="h-3.5 w-3.5" />
              Platform Pertanian Berkelanjutan
            </span>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Belajar Bertani Modern{" "}
              <span className="text-green-400">Bersama Hidropedia</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 md:text-xl">
              Temukan panduan lengkap hidroponik, akuaponik, dan pertanian
              berkelanjutan. Dari pemula hingga ahli, semua ada di sini.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/artikel">
                <Button size="lg" className="gap-2">
                  Jelajahi Artikel
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tentang">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Tentang Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div
                  className={`mb-4 inline-flex rounded-xl p-3 ${feature.bg}`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Articles Section ── */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Artikel Terbaru
              </h2>
              <p className="mt-2 text-slate-500">
                Konten terkini seputar pertanian berkelanjutan
              </p>
            </div>
            <Link
              href="/artikel"
              className="hidden items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 sm:flex"
            >
              Lihat semua
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/artikel">
              <Button variant="outline">
                Lihat Semua Artikel
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-linear-to-r from-green-600 to-green-700 px-8 py-12 text-center md:py-16">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Mulai Perjalanan Bertani Anda
            </h2>
            <p className="mt-3 text-green-100">
              Ratusan artikel siap membantu Anda memulai dan mengembangkan kebun
              hidroponik atau akuaponik.
            </p>
            <Link href="/artikel" className="mt-8 inline-block">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50"
              >
                Mulai Belajar Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
