/** @type {import('next').NextConfig} */
const Dotenv = require("dotenv-webpack")
const nextConfig = {
  reactStrictMode: true,
  env:new Dotenv({silent:true})
}

module.exports =nextConfig;