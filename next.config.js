/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/chartixco' : '',
  assetPrefix: isProd ? '/chartixco' : '',
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