"use client";

import { useRouter, usePathname } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Category } from "@/types";

interface ArticleFiltersProps {
  categories: Category[];
  activeCategory?: string;
  searchQuery?: string;
}

export function ArticleFilters({
  categories,
  activeCategory,
  searchQuery,
}: ArticleFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();

  function updateParams(key: string, value: string | undefined) {
    const params = new URLSearchParams();
    if (activeCategory && key !== "kategori")
      params.set("kategori", activeCategory);
    if (searchQuery && key !== "q") params.set("q", searchQuery);
    if (value) params.set(key, value);
    router.push(`${pathname}?${params.toString()}`);
  }

  function clearAll() {
    router.push(pathname);
  }

  const hasFilters = activeCategory || searchQuery;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Cari artikel..."
          defaultValue={searchQuery}
          onChange={(e) => {
            const val = e.target.value;
            // Debounce sederhana
            const timer = setTimeout(
              () => updateParams("q", val || undefined),
              400,
            );
            return () => clearTimeout(timer);
          }}
          className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => updateParams("kategori", undefined)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
            !activeCategory
              ? "bg-green-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200",
          )}
        >
          Semua
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => updateParams("kategori", cat.slug)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              activeCategory === cat.slug
                ? "bg-green-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200",
            )}
          >
            {cat.name}
          </button>
        ))}

        {hasFilters && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-slate-400 hover:text-slate-600"
          >
            <X className="h-3.5 w-3.5" />
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
