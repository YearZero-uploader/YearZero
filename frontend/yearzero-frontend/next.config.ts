import type { NextConfig } from "next";
import siteConfig from "./site.config";

const nextConfig: NextConfig = {
  output: "export",
  basePath: siteConfig.basePath,
  // assetPrefix also helps ensure CSS/JS chunks load from the right place
  assetPrefix: `${siteConfig.basePath}/`,
  /* config options here */
};

export default nextConfig;
