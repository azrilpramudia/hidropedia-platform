"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export function useArticleFilters(
  activeCategory?: string,
  searchQuery?: string,
) {
  const router = useRouter();
  const pathname = usePathname();

  const updateParams = useCallback(
    (key: string, value: string | undefined) => {
      const params = new URLSearchParams();
      if (activeCategory && key !== "kategori") params.set("kategori", activeCategory);
      if (searchQuery && key !== "q") params.set("q", searchQuery);
      if (value) params.set(key, value);
      router.push(`${pathname}?${params.toString()}`);
    },
    [router, pathname, activeCategory, searchQuery],
  );

  const clearAll = useCallback(() => {
    router.push(pathname);
  }, [router, pathname]);

  const hasFilters = Boolean(activeCategory || searchQuery);

  return { updateParams, clearAll, hasFilters };
}
