import { BadgeCheck, LockOpen, Sprout, Recycle } from "lucide-react";

const REASONS = [
  {
    icon: BadgeCheck,
    title: "Konten Terverifikasi",
    description:
      "Setiap artikel ditulis dan ditinjau oleh praktisi berpengalaman untuk memastikan akurasi data teknis.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: LockOpen,
    title: "Gratis Diakses",
    description:
      "Pengetahuan dasar tentang pertanian berkelanjutan harus dapat diakses oleh siapa saja tanpa hambatan biaya.",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Sprout,
    title: "Fokus Spesifik",
    description:
      "Mendalami hidroponik dan akuaponik secara komprehensif dari tingkat pemula hingga skala industri.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: Recycle,
    title: "Keberlanjutan",
    description:
      "Misi utama kami adalah mempromosikan metode pertanian yang menghemat air dan ruang untuk masa depan.",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-500",
  },
];

export function WhySection() {
  return (
    <section className="bg-[#F0F4FF] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Mengapa Memilih Hidropedia?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 md:text-base">
            Kami merancang platform ini untuk memberikan pengalaman belajar
            terbaik
            <br className="hidden sm:block" />
            dengan standar informasi teknis yang tinggi.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Icon */}
              <div
                className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg}`}
              >
                <item.icon className={`h-5 w-5 ${item.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-base font-bold text-slate-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
