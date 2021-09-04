/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ["src/components", "src/lib", "src/models", "src/pages"],
  },
  images: {
    domains: ["i.ytimg.com"],
  },
};
