import { Leaf, Droplets, BookOpen, BadgeCheck, LockOpen, Sprout, Recycle, Unlock, Clock, Users } from "lucide-react";

/**
 * Topik pembelajaran — dipakai di FeaturesSection
 */
export const LEARNING_TOPICS = [
  {
    icon: Leaf,
    title: "Hidroponik",
    description: "Panduan lengkap budidaya tanaman tanpa tanah menggunakan larutan nutrisi.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Droplets,
    title: "Akuaponik",
    description: "Sistem terintegrasi yang menggabungkan budidaya ikan dan tanaman secara sinergis.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: BookOpen,
    title: "Edukasi",
    description: "Artikel, panduan, dan tips praktis untuk petani modern dari berbagai level.",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
] as const;

/**
 * Alasan memilih Hidropedia — dipakai di WhySection
 */
export const WHY_REASONS = [
  {
    icon: BadgeCheck,
    title: "Konten Terverifikasi",
    description: "Setiap artikel ditulis dan ditinjau oleh praktisi berpengalaman untuk memastikan akurasi data teknis.",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: LockOpen,
    title: "Gratis Diakses",
    description: "Pengetahuan dasar tentang pertanian berkelanjutan harus dapat diakses oleh siapa saja tanpa hambatan biaya.",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    icon: Sprout,
    title: "Fokus Spesifik",
    description: "Mendalami hidroponik dan akuaponik secara komprehensif dari tingkat pemula hingga skala industri.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: Recycle,
    title: "Keberlanjutan",
    description: "Misi utama kami adalah mempromosikan metode pertanian yang menghemat air dan ruang untuk masa depan.",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-500",
  },
] as const;

/**
 * Keunggulan platform — dipakai di Footer
 */
export const PLATFORM_FEATURES = [
  { icon: BookOpen, title: "Konten Berkualitas", subtitle: "Artikel ditulis oleh ahli di bidangnya" },
  { icon: Unlock,   title: "Gratis Diakses",     subtitle: "100% gratis untuk semua" },
  { icon: Clock,    title: "Update Rutin",        subtitle: "Konten terbaru setiap minggu" },
  { icon: Users,    title: "Untuk Semua",         subtitle: "Pemula hingga profesional" },
] as const;
