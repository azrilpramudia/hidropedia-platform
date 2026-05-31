import type { ArticleCard, Category } from "@/types";

export const MOCK_CATEGORIES: Category[] = [
  { id: "1", name: "Hidroponik", slug: "hidroponik" },
  { id: "2", name: "Akuaponik", slug: "akuaponik" },
  { id: "3", name: "Pertanian Umum", slug: "pertanian-umum" },
];

export const MOCK_ARTICLES: ArticleCard[] = [
  {
    id: "1",
    title: "Panduan Lengkap Memulai Hidroponik di Rumah",
    slug: "panduan-lengkap-memulai-hidroponik-di-rumah",
    summary:
      "Pelajari cara memulai berkebun hidroponik di rumah dengan modal minimal. Dari pemilihan sistem hingga nutrisi tanaman, semua dibahas tuntas.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    published: true,
    createdAt: "2024-11-10T08:00:00Z",
    updatedAt: "2024-11-10T08:00:00Z",
    category: MOCK_CATEGORIES[0],
    author: { id: "a1", name: "Admin Hidropedia", email: "admin@hidropedia.id", avatarUrl: null },
  },
  {
    id: "2",
    title: "Sistem NFT vs DWC: Mana yang Lebih Cocok untuk Pemula?",
    slug: "sistem-nft-vs-dwc-mana-yang-lebih-cocok-untuk-pemula",
    summary:
      "Perbandingan mendalam antara sistem Nutrient Film Technique (NFT) dan Deep Water Culture (DWC) untuk membantu Anda memilih sistem yang tepat.",
    imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800",
    published: true,
    createdAt: "2024-11-08T09:00:00Z",
    updatedAt: "2024-11-08T09:00:00Z",
    category: MOCK_CATEGORIES[0],
    author: { id: "a1", name: "Admin Hidropedia", email: "admin@hidropedia.id", avatarUrl: null },
  },
  {
    id: "3",
    title: "Mengenal Akuaponik: Sinergi Ikan dan Tanaman",
    slug: "mengenal-akuaponik-sinergi-ikan-dan-tanaman",
    summary:
      "Akuaponik menggabungkan budidaya ikan (akuakultur) dengan pertanian tanpa tanah (hidroponik) dalam satu ekosistem yang saling menguntungkan.",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800",
    published: true,
    createdAt: "2024-11-05T10:00:00Z",
    updatedAt: "2024-11-05T10:00:00Z",
    category: MOCK_CATEGORIES[1],
    author: { id: "a1", name: "Admin Hidropedia", email: "admin@hidropedia.id", avatarUrl: null },
  },
  {
    id: "4",
    title: "Nutrisi Hidroponik: Memahami EC dan pH untuk Hasil Optimal",
    slug: "nutrisi-hidroponik-memahami-ec-dan-ph-untuk-hasil-optimal",
    summary:
      "EC (Electrical Conductivity) dan pH adalah dua parameter kritis dalam hidroponik. Pelajari cara mengukur dan mengontrolnya dengan benar.",
    imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
    published: true,
    createdAt: "2024-11-01T07:00:00Z",
    updatedAt: "2024-11-01T07:00:00Z",
    category: MOCK_CATEGORIES[0],
    author: { id: "a1", name: "Admin Hidropedia", email: "admin@hidropedia.id", avatarUrl: null },
  },
  {
    id: "5",
    title: "Pertanian Vertikal: Solusi Keterbatasan Lahan di Perkotaan",
    slug: "pertanian-vertikal-solusi-keterbatasan-lahan-di-perkotaan",
    summary:
      "Dengan lahan yang semakin terbatas, pertanian vertikal hadir sebagai solusi inovatif untuk memaksimalkan produksi pangan di area urban.",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800",
    published: true,
    createdAt: "2024-10-28T11:00:00Z",
    updatedAt: "2024-10-28T11:00:00Z",
    category: MOCK_CATEGORIES[2],
    author: { id: "a1", name: "Admin Hidropedia", email: "admin@hidropedia.id", avatarUrl: null },
  },
  {
    id: "6",
    title: "Memilih Ikan yang Tepat untuk Sistem Akuaponik",
    slug: "memilih-ikan-yang-tepat-untuk-sistem-akuaponik",
    summary:
      "Tidak semua ikan cocok untuk akuaponik. Pelajari kriteria pemilihan ikan dan rekomendasi spesies terbaik untuk sistem akuaponik skala rumahan.",
    imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
    published: true,
    createdAt: "2024-10-20T08:30:00Z",
    updatedAt: "2024-10-20T08:30:00Z",
    category: MOCK_CATEGORIES[1],
    author: { id: "a1", name: "Admin Hidropedia", email: "admin@hidropedia.id", avatarUrl: null },
  },
];
