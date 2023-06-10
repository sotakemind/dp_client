/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
    APP_URL: process.env.APP_URL
  },
  images: { domains: ['loremflickr.com', 'freebiefy.com', 'avatars.mds.yandex.net', 'c.dns-shop.ru']}
}

module.exports = nextConfig
