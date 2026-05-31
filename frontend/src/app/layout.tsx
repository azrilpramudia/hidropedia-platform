import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hidropedia — Platform Edukasi Pertanian Berkelanjutan",
    template: "%s | Hidropedia",
  },
  description:
    "Pelajari hidroponik, akuaponik, dan pertanian berkelanjutan modern. Panduan lengkap, tips praktis, dan artikel terkini untuk petani Indonesia.",
  keywords: [
    "hidroponik",
    "akuaponik",
    "pertanian berkelanjutan",
    "urban farming",
  ],
  authors: [{ name: "Hidropedia" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Hidropedia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="flex min-h-screen flex-col font-poppins">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
