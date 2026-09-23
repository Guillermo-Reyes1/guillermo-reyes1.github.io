import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (writes to /out)
  output: "export",
  // GitHub Pages serves /projects/foo/ as /projects/foo/index.html
  trailingSlash: true,
  // No image optimization server on a static host
  images: { unoptimized: true },
  // Pin the project root (avoids picking up stray lockfiles in parent dirs)
  turbopack: { root: __dirname },
};

export default nextConfig;
