/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', ← RETIRÉ pour permettre les Server Actions
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  // Pour Next.js 14+, serverActions est activé par défaut
  // Pas besoin de configuration experimental
};

module.exports = nextConfig;