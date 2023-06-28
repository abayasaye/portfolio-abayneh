/** @type {import('next').NextConfig} */
// const Dotenv = require("dotenv-webpack")
const nextConfig = {
  reactStrictMode: true,
  // env:new Dotenv({silent:true}),
  env: {
    AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE,
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
