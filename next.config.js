/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {
    DB_LOCAL_URL: "mongodb://localhost:27017/bookit",

    CLOUDINARY_CLOUD_NAME: "asimrazzaq",
    CLOUDINARY_API_KEY: "148633524171696",
    CLOUDINARY_API_SECRET: "7LEwjODGWr5ItWyqzixhp6rxbLY",
    SMTP_HOST : 'sandbox.smtp.mailtrap.io',
    SMTP_PORT : 2525,
    SMTP_USER : '3730c65cd45b37',
    SMTP_PASSWORD : '2c41e8ce70c725',
    SMTP_FROM_NAME: 'BookIT',
    SMTP_FROM_EMAIL: 'norply@bookit.com'
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
