"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function useSupabaseAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signIn(email: string, password: string) {
    setIsLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Email atau password salah. Silakan coba lagi.");
      setIsLoading(false);
      return false;
    }

    router.push("/dashboard");
    router.refresh();
    return true;
  }

  async function signOut() {
    setIsLoading(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
    setIsLoading(false);
  }

  return { signIn, signOut, isLoading, error, clearError: () => setError(null) };
}
