import type { NextConfig } from "next";

// Конфигурация для GitHub Pages
const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  output: "export",
  basePath: "/up2u",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
