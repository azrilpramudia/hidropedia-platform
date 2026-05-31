import { FileText, Tag, Users, Globe } from "lucide-react";

/**
 * Statistik platform — dipakai di HeroSection floating cards
 */
export const PLATFORM_STATS = [
  {
    icon: FileText,
    value: "100+",
    label: "Artikel Edukasi",
    position: "top-4 left-4",
  },
  {
    icon: Tag,
    value: "10+",
    label: "Kategori",
    position: "top-4 right-4",
  },
  {
    icon: Users,
    value: "5K+",
    label: "Pembaca Aktif",
    position: "bottom-20 left-4 sm:bottom-24",
  },
  {
    icon: Globe,
    value: "1",
    label: "Misi Keberlanjutan",
    position: "bottom-4 right-4",
  },
] as const;
