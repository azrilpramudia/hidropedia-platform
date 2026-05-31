import { Droplets, LayoutGrid, Sprout, FlaskConical, Cpu, Leaf } from "lucide-react";

/**
 * Kategori artikel — dipakai di TopicsSection, Footer, ArticleFilters
 */
export const CATEGORIES = [
  {
    id: "1",
    name: "Hidroponik",
    slug: "hidroponik",
    icon: Droplets,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: "2",
    name: "Akuaponik",
    slug: "akuaponik",
    icon: LayoutGrid,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    id: "3",
    name: "Budidaya",
    slug: "budidaya",
    icon: Sprout,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: "4",
    name: "Nutrisi Tanaman",
    slug: "nutrisi",
    icon: FlaskConical,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    id: "5",
    name: "Teknologi Pertanian",
    slug: "teknologi",
    icon: Cpu,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-500",
  },
  {
    id: "6",
    name: "Pertanian Umum",
    slug: "pertanian-umum",
    icon: Leaf,
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
] as const;

export type Category = (typeof CATEGORIES)[number];
