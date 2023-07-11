/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    DB_LOCAL_URL: "mongodb://localhost:27017/bookit",

    CLOUDINARY_CLOUD_NAME: "asimrazzaq",
    CLOUDINARY_API_KEY: "148633524171696",
    CLOUDINARY_API_SECRET: "7LEwjODGWr5ItWyqzixhp6rxbLY",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
