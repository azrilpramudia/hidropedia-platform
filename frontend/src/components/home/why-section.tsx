import { WHY_REASONS } from "@/constants/features";

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
          {WHY_REASONS.map((item) => (
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
