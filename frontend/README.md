# Hidropedia Platform

Platform edukasi dan informasi pertanian berkelanjutan — hidroponik, akuaponik, dan pertanian modern.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL via Supabase
- **ORM**: Prisma
- **Auth & Storage**: Supabase Auth & Supabase Storage
- **Deployment**: Vercel + Supabase

---

## Setup & Installation

### 1. Install Dependencies

```bash
bun install
bun add @prisma/client @supabase/supabase-js @supabase/ssr lucide-react clsx tailwind-merge
bun add -d prisma
```

### 2. Environment Variables

Salin `.env.example` ke `.env.local` dan isi dengan kredensial Supabase Anda:

```bash
cp .env.example .env.local
```

Isi nilai berikut dari Supabase Dashboard:

- `DATABASE_URL` — Connection string dengan pgbouncer (untuk Prisma)
- `DIRECT_URL` — Direct connection string (untuk migrasi)
- `NEXT_PUBLIC_SUPABASE_URL` — URL project Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Anon/public key

### 3. Setup Database

```bash
# Generate Prisma Client
bun db:generate

# Push schema ke database (development)
bun db:push

# Atau jalankan migrasi (production-ready)
bun db:migrate
```

### 4. Jalankan Development Server

```bash
bun dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## Struktur Folder

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # 404 page
│   ├── artikel/
│   │   ├── page.tsx        # Daftar artikel + filter
│   │   └── [slug]/
│   │       └── page.tsx    # Detail artikel (SSG/ISR)
│   ├── login/
│   │   └── page.tsx        # Login admin
│   └── dashboard/          # Protected admin area
│       ├── layout.tsx      # Dashboard layout + sidebar
│       ├── page.tsx        # Overview stats
│       └── artikel/        # CRUD artikel (Phase 4)
│
├── components/
│   ├── ui/                 # Komponen UI dasar (Button, Badge)
│   ├── layout/             # Navbar, Footer
│   ├── articles/           # ArticleCard, ArticleFilters
│   └── auth/               # LoginForm, LogoutButton
│
├── lib/
│   ├── prisma.ts           # Prisma client singleton
│   ├── utils.ts            # Helper functions (cn, formatDate, dll)
│   ├── mock-data.ts        # Data mock untuk Phase 2
│   └── supabase/
│       ├── client.ts       # Supabase browser client
│       ├── server.ts       # Supabase server client
│       └── middleware.ts   # Supabase middleware helper
│
├── types/
│   └── index.ts            # TypeScript types
│
└── middleware.ts            # Next.js middleware (auth guard)

prisma/
└── schema.prisma           # Database schema
```

---

## Development Phases

| Phase   | Status  | Deskripsi                                        |
| ------- | ------- | ------------------------------------------------ |
| Phase 1 | ✅ Done | Setup Next.js, Tailwind, Supabase, Prisma schema |
| Phase 2 | ✅ Done | UI slicing dengan mock data                      |
| Phase 3 | 🔜 Next | Integrasi Prisma + Supabase (ganti mock data)    |
| Phase 4 | 🔜      | Admin auth + CRUD artikel                        |
| Phase 5 | 🔜      | Deploy ke Vercel + Supabase                      |

---

## Color Palette

| Token           | Hex       | Penggunaan             |
| --------------- | --------- | ---------------------- |
| Primary Green   | `#16A34A` | CTA, badge, link aktif |
| Secondary Green | `#22C55E` | Hover state            |
| Water Blue      | `#0EA5E9` | Aksen, ikon            |
| Deep Blue       | `#0369A1` | Link, teks info        |
| Dark Slate      | `#0F172A` | Background gelap       |
| Gray            | `#64748B` | Teks sekunder          |
| Light BG        | `#F8FAFC` | Background halaman     |
