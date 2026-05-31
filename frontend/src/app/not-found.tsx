import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
      <p className="text-6xl font-bold text-green-600">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-900">
        Halaman Tidak Ditemukan
      </h1>
      <p className="mt-2 text-slate-500">
        Halaman yang Anda cari tidak ada atau sudah dipindahkan.
      </p>
      <Link href="/" className="mt-8">
        <Button>Kembali ke Beranda</Button>
      </Link>
    </div>
  );
}
