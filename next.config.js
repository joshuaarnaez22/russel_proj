/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [''],
  },
  // rewrites: async () => {
  //   return [
  //     {
  //       source: '/authentication/login/:path*',
  //       destination: 'https://back-end-ochre-five.vercel.app/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
