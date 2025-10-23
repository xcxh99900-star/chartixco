/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // CRITICAL: Enables static export
  basePath: '/chartixco',  // Your repo name
  assetPrefix: '/chartixco',  // Ensures assets load correctly
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
  reactStrictMode: true,
};
module.exports = nextConfig;