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
  experimental: {
    serverActions: {
      enabled: true,
    },
  },
};

module.exports = nextConfig;