import type { Metadata } from "next";
import { ArticleCard } from "@/components/articles/article-card";
import { MOCK_ARTICLES, MOCK_CATEGORIES } from "@/lib/mock-data";
import { ArticleFilters } from "@/components/articles/article-filters";

export const metadata: Metadata = {
  title: "Artikel",
  description:
    "Kumpulan artikel seputar hidroponik, akuaponik, dan pertanian berkelanjutan.",
};

interface ArticlePageProps {
  searchParams: Promise<{ kategori?: string; q?: string }>;
}

export default async function ArticlePage({ searchParams }: ArticlePageProps) {
  const { kategori, q } = await searchParams;

  // Filter articles berdasarkan kategori dan search query
  const filtered = MOCK_ARTICLES.filter((article) => {
    const matchCategory = kategori ? article.category.slug === kategori : true;
    const matchSearch = q
      ? article.title.toLowerCase().includes(q.toLowerCase())
      : true;
    return matchCategory && matchSearch;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          Artikel
        </h1>
        <p className="mt-2 text-slate-500">
          Temukan panduan dan informasi seputar pertanian berkelanjutan
        </p>
      </div>

      {/* Filters */}
      <ArticleFilters
        categories={MOCK_CATEGORIES}
        activeCategory={kategori}
        searchQuery={q}
      />

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-slate-700">
            Artikel tidak ditemukan
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Coba ubah kata kunci atau pilih kategori lain
          </p>
        </div>
      )}
    </div>
  );
}
