import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { MOCK_ARTICLES } from "@/lib/mock-data";

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params untuk SSG
export async function generateStaticParams() {
  return MOCK_ARTICLES.map((article) => ({ slug: article.slug }));
}

// Generate metadata dinamis untuk SEO
export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [{ url: article.imageUrl }],
      type: "article",
      publishedTime: String(article.createdAt),
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) notFound();

  // Artikel terkait (kategori sama, bukan artikel ini)
  const related = MOCK_ARTICLES.filter(
    (a) => a.category.slug === article.category.slug && a.slug !== slug,
  ).slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Back Link */}
      <Link
        href="/artikel"
        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-green-600"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Artikel
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <Link href={`/artikel?kategori=${article.category.slug}`}>
            <Badge variant="green">
              <Tag className="mr-1 h-3 w-3" />
              {article.category.name}
            </Badge>
          </Link>
        </div>

        <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
          {article.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-slate-500">
          {article.summary}
        </p>

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-b border-slate-100 py-4 text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <User className="h-4 w-4" />
            {article.author.name}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {formatDate(article.createdAt)}
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative mb-10 h-64 w-full overflow-hidden rounded-2xl md:h-96">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>

      {/* Article Content */}
      {/* Setelah integrasi Prisma, content akan di-render sebagai Markdown/HTML */}
      <div className="prose prose-slate prose-green max-w-none">
        <p className="text-slate-600 leading-relaxed">
          {/* Placeholder — akan diganti dengan konten dari database */}
          Konten artikel akan ditampilkan di sini setelah integrasi database
          selesai pada Phase 3. Saat ini halaman ini menampilkan data mock untuk
          keperluan development UI.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="mt-16 border-t border-slate-200 pt-10">
          <h2 className="mb-6 text-xl font-bold text-slate-900">
            Artikel Terkait
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((rel) => (
              <Link
                key={rel.id}
                href={`/artikel/${rel.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-md"
              >
                <div className="relative mb-3 h-32 overflow-hidden rounded-lg">
                  <Image
                    src={rel.imageUrl}
                    alt={rel.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <h3 className="line-clamp-2 text-sm font-medium text-slate-800 group-hover:text-green-600">
                  {rel.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  {formatDate(rel.createdAt)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
