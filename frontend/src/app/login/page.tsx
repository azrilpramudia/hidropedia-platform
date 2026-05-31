import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Login Admin",
  description: "Halaman login untuk admin Hidropedia",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
            <p className="mt-2 text-sm text-slate-500">
              Masuk untuk mengelola konten Hidropedia
            </p>
          </div>

          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Halaman ini hanya untuk admin. Tidak ada registrasi publik.
        </p>
      </div>
    </div>
  );
}
