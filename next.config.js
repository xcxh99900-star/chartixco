/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  basePath: '/chartixco', // Match your repo name
  assetPrefix: '/chartixco/', // For proper asset loading
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: { 
    unoptimized: true // Already correct for static export
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;