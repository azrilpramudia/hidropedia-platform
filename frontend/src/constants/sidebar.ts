import { LayoutDashboard, FileText, PlusCircle } from "lucide-react";

/**
 * Sidebar links untuk dashboard admin
 */
export const SIDEBAR_LINKS = [
  { label: "Overview",       href: "/dashboard",              icon: LayoutDashboard },
  { label: "Semua Artikel",  href: "/dashboard/artikel",      icon: FileText },
  { label: "Tulis Artikel",  href: "/dashboard/artikel/baru", icon: PlusCircle },
] as const;
