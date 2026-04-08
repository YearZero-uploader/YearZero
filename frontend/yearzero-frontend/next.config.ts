import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/YearZero",
  // assetPrefix also helps ensure CSS/JS chunks load from the right place
  assetPrefix: "/YearZero/",
  /* config options here */
};

export default nextConfig;
