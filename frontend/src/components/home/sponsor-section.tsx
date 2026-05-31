"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";

// Import logo lokal dari assets/images
import logoKementan from "@/assets/images/kementan.png";
import logoWWF from "@/assets/images/wwf.svg";
import logoFAO from "@/assets/images/fao.png";
import logoIPB from "@/assets/images/IPB University.svg";
import logoGoogle from "@/assets/images/google.svg";
import logoITB from "@/assets/images/ITB.svg";
import logoBRIN from "@/assets/images/brin.png";
import logoGreenpeace from "@/assets/images/Greenpeace.svg";
import logoMeta from "@/assets/images/meta.svg";
import logoTutWuri from "@/assets/images/Tut Wuri Handayani.svg";

type Sponsor = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logo: any;
  width: number;
  height: number;
};

const ROW_1: Sponsor[] = [
  {
    name: "Kementerian Pertanian RI",
    logo: logoKementan,
    width: 52,
    height: 52,
  },
  { name: "WWF Indonesia", logo: logoWWF, width: 80, height: 40 },
  { name: "FAO", logo: logoFAO, width: 72, height: 44 },
  { name: "IPB University", logo: logoIPB, width: 52, height: 52 },
  { name: "Google", logo: logoGoogle, width: 88, height: 30 },
];

const ROW_2: Sponsor[] = [
  { name: "ITB", logo: logoITB, width: 52, height: 52 },
  { name: "BRIN", logo: logoBRIN, width: 80, height: 40 },
  {
    name: "Greenpeace Indonesia",
    logo: logoGreenpeace,
    width: 110,
    height: 30,
  },
  { name: "Meta", logo: logoMeta, width: 88, height: 30 },
  { name: "Tut Wuri Handayani", logo: logoTutWuri, width: 52, height: 52 },
];

function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  return (
    <Image
      src={sponsor.logo}
      alt={sponsor.name}
      width={sponsor.width}
      height={sponsor.height}
      className="max-h-10 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0"
    />
  );
}

function EmblaTrack({
  sponsors,
  direction,
}: {
  sponsors: Sponsor[];
  direction: "forward" | "backward";
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
      containScroll: false,
    },
    [
      AutoScroll({
        speed: 1.2,
        direction,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: false,
      }),
    ],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins()?.autoScroll;
    if (autoScroll) autoScroll.play();
  }, [emblaApi]);

  // Duplikat 3x untuk seamless loop
  const items = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {items.map((sponsor, i) => (
          <div
            key={`${sponsor.name}-${i}`}
            className="flex shrink-0 items-center justify-center px-10"
            style={{ minWidth: "160px" }}
          >
            <SponsorLogo sponsor={sponsor} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SponsorSection() {
  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Didukung Oleh
          </p>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Mitra &amp; Sponsor Kami
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Bersama institusi terpercaya untuk pertanian berkelanjutan Indonesia
          </p>
        </div>
      </div>

      {/* Baris 1 — scroll ke kanan (forward) */}
      <div className="relative mb-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-slate-50 to-transparent" />
        <EmblaTrack sponsors={ROW_1} direction="forward" />
      </div>

      {/* Baris 2 — scroll ke kiri (backward) */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-slate-50 to-transparent" />
        <EmblaTrack sponsors={ROW_2} direction="backward" />
      </div>
    </section>
  );
}
