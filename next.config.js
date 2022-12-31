/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGODB_URI: "mongodb://0.0.0.0/skillTester",
  },
};

module.exports = nextConfig;
