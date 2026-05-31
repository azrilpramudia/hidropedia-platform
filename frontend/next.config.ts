import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Supabase Storage
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      // Unsplash (mock data development)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Wikipedia / Wikimedia (logo sponsor)
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      // GoodPlant
      {
        protocol: "https",
        hostname: "goodplant.id",
      },
      // Indmira
      {
        protocol: "https",
        hostname: "indmira.com",
      },
    ],
  },
};

export default nextConfig;
