"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

export function useSearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Auto-focus saat modal dibuka
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Reset query setelah modal tertutup
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setQuery(""), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Tutup dengan Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  function search(q?: string) {
    const searchQuery = (q ?? query).trim();
    if (searchQuery) {
      router.push(`/artikel?q=${encodeURIComponent(searchQuery)}`);
      close();
    }
  }

  return { isOpen, open, close, query, setQuery, inputRef, search };
}
