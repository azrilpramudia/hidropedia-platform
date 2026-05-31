import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { MOCK_ARTICLES } from "@/lib/mock-data";

export function LatestInsightsSection() {
  const [featured, ...sideArticles] = MOCK_ARTICLES.slice(0, 4);
  const side = sideArticles.slice(0, 3);

  return (
    <section className="bg-light py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="mb-8 text-2xl font-bold text-slate-900 md:text-3xl">
          Latest Insights
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_420px]">
          {/* ── Featured Article (kiri) ── */}
          <Link
            href={`/artikel/${featured.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Gambar */}
            <div className="relative h-64 w-full overflow-hidden md:h-80">
              <Image
                src={featured.imageUrl}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Badge kategori */}
              <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                {featured.category.name}
              </span>
            </div>

            {/* Konten */}
            <div className="flex flex-1 flex-col p-6">
              {/* Meta */}
              <div className="mb-3 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(featured.createdAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />5 min read
                </span>
              </div>

              {/* Judul */}
              <h3 className="mb-3 text-xl font-bold leading-snug text-slate-900 group-hover:text-green-700 md:text-2xl">
                {featured.title}
              </h3>

              {/* Deskripsi */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-500 line-clamp-3">
                {featured.summary}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  {featured.author.name.charAt(0)}
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-slate-800">
                    {featured.author.name}
                  </p>
                  <p className="text-xs text-slate-400">Editorial Team</p>
                </div>
              </div>
            </div>
          </Link>

          {/* ── Side Articles (kanan) ── */}
          <div className="flex flex-col gap-4">
            {side.map((article) => (
              <Link
                key={article.id}
                href={`/artikel/${article.slug}`}
                className="group flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Thumbnail */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="80px"
                  />
                </div>

                {/* Teks */}
                <div className="min-w-0 flex-1">
                  {/* Kategori */}
                  <span className="mb-1 block text-[11px] font-bold uppercase tracking-widest text-teal-600">
                    {article.category.name}
                  </span>

                  {/* Judul */}
                  <h3 className="mb-1.5 line-clamp-2 text-sm font-semibold leading-snug text-slate-800 group-hover:text-green-700">
                    {article.title}
                  </h3>

                  {/* Tanggal */}
                  <p className="text-xs text-slate-400">
                    {formatDate(article.createdAt)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
