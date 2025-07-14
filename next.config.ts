import NextBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/landing-starter-kit" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig);
