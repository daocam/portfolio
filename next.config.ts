import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Active l'exportation statique
  trailingSlash: true, // Ajoute une barre oblique à la fin des URLs (recommandé pour GitHub Pages)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
