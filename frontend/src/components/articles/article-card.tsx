import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { ArticleCard } from "@/types";

interface ArticleCardProps {
  article: ArticleCard;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Thumbnail */}
      <Link href={`/artikel/${article.slug}`} className="block overflow-hidden">
        <div className="relative h-48 w-full">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category Badge */}
        <div className="mb-3">
          <Link href={`/artikel?kategori=${article.category.slug}`}>
            <Badge variant="green">{article.category.name}</Badge>
          </Link>
        </div>

        {/* Title */}
        <Link href={`/artikel/${article.slug}`}>
          <h2 className="mb-2 line-clamp-2 text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-green-600">
            {article.title}
          </h2>
        </Link>

        {/* Summary */}
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-500">
          {article.summary}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <User className="h-3.5 w-3.5" />
            {article.author.name}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(article.createdAt)}
          </span>
        </div>
      </div>
    </article>
  );
}
