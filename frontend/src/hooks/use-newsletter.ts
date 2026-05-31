"use client";

import { useState } from "react";

export function useNewsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    try {
      // TODO Phase 4: POST ke /api/newsletter
      await new Promise((r) => setTimeout(r, 500)); // simulasi
      setSubscribed(true);
      setEmail("");
    } finally {
      setIsLoading(false);
    }
  }

  return { email, setEmail, subscribed, isLoading, subscribe };
}
