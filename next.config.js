/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prototyprio.gumlet.io',
        port: '',
        pathname: '/*/**'
      }
    ]
  },
  env: {
    DISCORD_SERVER_URL: 'https://discord.gg/frontendship'
  }
};

module.exports = nextConfig;
