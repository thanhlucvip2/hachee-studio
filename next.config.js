/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "my"],
    defaultLocale: "en",
  },
  domains: [
    {
      domain: "example.com",
      defaultLocale: "en-US",
    },
    {
      domain: "example.nl",
      defaultLocale: "nl-NL",
    },
    {
      domain: "example.fr",
      defaultLocale: "fr",
      // an optional http field can also be used to test
      // locale domains locally with http instead of https
      http: true,
    },
  ],
  images: {
    domains: ["robohash.org", "res.cloudinary.com", "giadinh.mediacdn.vn"],
  },
};

module.exports = nextConfig;
