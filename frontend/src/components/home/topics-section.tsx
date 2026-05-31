import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/constants/categories";

export function TopicsSection() {
  return (
    <section className="bg-[#F0F4FF] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Jelajahi Berdasarkan Topik
          </h2>
          <Link
            href="/artikel"
            className="flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700"
          >
            Lihat Semua Topik
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Topic Cards */}
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {CATEGORIES.map((topic) => (
            <Link
              key={topic.slug}
              href={`/artikel?kategori=${topic.slug}`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-green-200 hover:shadow-md"
            >
              {/* Icon circle */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${topic.iconBg} transition-transform group-hover:scale-110`}
              >
                <topic.icon className={`h-6 w-6 ${topic.iconColor}`} />
              </div>

              {/* Label */}
              <span className="text-center text-sm font-semibold text-slate-700 group-hover:text-green-700">
                {topic.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
