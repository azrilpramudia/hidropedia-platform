import { Leaf, Droplets, BookOpen } from "lucide-react";

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

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${feature.bg}`}>
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
  );
}
