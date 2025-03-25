import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Active l'exportation statique
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  trailingSlash: true, // Ajoute une barre oblique à la fin des URLs (recommandé pour GitHub Pages)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
