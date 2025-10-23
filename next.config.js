/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/chartix-v2.0' : '',
  assetPrefix: isProd ? '/chartix-v2.0/' : '',
  images: { 
    unoptimized: true 
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = nextConfig