import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Настройки для GitHub Pages
  output: "export",
  basePath: "/up2u",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
