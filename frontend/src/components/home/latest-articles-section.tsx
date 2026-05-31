import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/articles/article-card";
import type { ArticleCard as ArticleCardType } from "@/types";

interface LatestArticlesSectionProps {
  articles: ArticleCardType[];
}

export function LatestArticlesSection({
  articles,
}: LatestArticlesSectionProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Artikel Terbaru
            </h2>
            <p className="mt-2 text-slate-500">
              Konten terkini seputar pertanian berkelanjutan
            </p>
          </div>
          <Link
            href="/artikel"
            className="hidden items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 sm:flex"
          >
            Lihat semua
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Link href="/artikel">
            <Button variant="outline">
              Lihat Semua Artikel
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
