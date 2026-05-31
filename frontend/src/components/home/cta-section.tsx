import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
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
  );
}
