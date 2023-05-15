/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  webpack: function (config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};
