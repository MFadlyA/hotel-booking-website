import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  output: "export",
  images: {
    unoptimized: true, // Diperlukan jika menggunakan komponen <Image /> bawaan Next.js pada static export
  },
};

export default nextConfig;
