/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DB_LOCAL_URL: "mongodb://localhost:27017/bookit",
  },
};

module.exports = nextConfig;
