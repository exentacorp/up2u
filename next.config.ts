import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const isExport = process.env.BUILD_STATIC === 'true';

const nextConfig: NextConfig = {
  // Only use static export when explicitly building for export
  output: isExport ? "export" : undefined,
  // Only use basePath for GitHub Pages (production static export)
  basePath: isExport ? '/up2u' : '',
  trailingSlash: isExport ? true : false,
  images: {
    unoptimized: isExport ? true : false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
