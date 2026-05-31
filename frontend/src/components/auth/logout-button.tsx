"use client";

import { LogOut } from "lucide-react";
import { useSupabaseAuth } from "@/hooks/use-supabase-auth";

export function LogoutButton() {
  const { signOut } = useSupabaseAuth();

  return (
    <button
      onClick={signOut}
      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600"
    >
      <LogOut className="h-4 w-4" />
      Keluar
    </button>
  );
}
