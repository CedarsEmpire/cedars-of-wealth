/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/security/:path*',
        destination: '/404',
      },
    ];
  },
};
module.exports = nextConfig;
