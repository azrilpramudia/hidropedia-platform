import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  LayoutGrid,
  Sprout,
  FlaskConical,
  Cpu,
  Leaf,
} from "lucide-react";

const TOPICS = [
  {
    icon: Droplets,
    label: "Hidroponik",
    slug: "hidroponik",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: LayoutGrid,
    label: "Akuaponik",
    slug: "akuaponik",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Sprout,
    label: "Budidaya",
    slug: "budidaya",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: FlaskConical,
    label: "Nutrisi",
    slug: "nutrisi",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: Cpu,
    label: "Teknologi",
    slug: "teknologi",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-500",
  },
  {
    icon: Leaf,
    label: "Sustainability",
    slug: "sustainability",
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
];

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
          {TOPICS.map((topic) => (
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
                {topic.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
