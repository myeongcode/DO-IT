/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://yonsei-do-it.vercel.app/:path*`,
      },
    ];
  },
};

export default nextConfig;
