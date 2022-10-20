/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sin1.contabostorage.com',
        pathname: '/de4425191d2e47d69db71db4a9e57219:undanganyudaayu/*',
      },
    ],
  },
}

module.exports = nextConfig
