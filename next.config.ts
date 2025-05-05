import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  generateBuildId: () => "ewer",
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },

      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  compiler: {
    emotion: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zenko.b-cdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3011",
        pathname: "/static/**",
      },
      {
        protocol: "http",
        hostname: "69.55.49.138",
        port: "3011",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.wamanga.me",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
