import type { Metadata } from "next";
import Link from "next/link";
import { FileText, PlusCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOCK_ARTICLES } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Overview" };

export default function DashboardPage() {
  const totalArticles = MOCK_ARTICLES.length;
  const publishedArticles = MOCK_ARTICLES.filter((a) => a.published).length;
  const recentArticles = MOCK_ARTICLES.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">
            Selamat datang kembali, Admin
          </p>
        </div>
        <Link href="/dashboard/artikel/baru">
          <Button size="sm" className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Tulis Artikel
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-50 p-2.5">
              <FileText className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Total Artikel</p>
              <p className="text-2xl font-bold text-slate-900">
                {totalArticles}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-sky-50 p-2.5">
              <Eye className="h-5 w-5 text-sky-600" />
            </div>
            <div>
              <p className="text-sm text-slate-500">Artikel Dipublikasi</p>
              <p className="text-2xl font-bold text-slate-900">
                {publishedArticles}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Articles */}
      <div className="rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2 className="font-semibold text-slate-900">Artikel Terbaru</h2>
          <Link
            href="/dashboard/artikel"
            className="text-sm text-green-600 hover:text-green-700"
          >
            Lihat semua
          </Link>
        </div>
        <div className="divide-y divide-slate-100">
          {recentArticles.map((article) => (
            <div
              key={article.id}
              className="flex items-center justify-between px-6 py-4"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-slate-800">
                  {article.title}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  {article.category.name} · {formatDate(article.createdAt)}
                </p>
              </div>
              <div className="ml-4 flex items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    article.published
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {article.published ? "Publik" : "Draft"}
                </span>
                <Link
                  href={`/dashboard/artikel/${article.id}/edit`}
                  className="text-xs text-slate-400 hover:text-green-600"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
