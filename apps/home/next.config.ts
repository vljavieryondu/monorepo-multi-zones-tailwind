import type { NextConfig } from "next";

const { WEB_URL } = process.env;
const { DOCS_URL } = process.env;

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    console.log(WEB_URL);
    console.log(DOCS_URL);
    return [
      {
        source: "/web",
        destination: `${WEB_URL}/web`,
      },
      {
        source: "/web/:path+",
        destination: `${WEB_URL}/web/:path+`,
      },
      {
        source: "/web-static/_next/:path+",
        destination: `${WEB_URL}/web-static/_next/:path+`,
      },
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path+",
        destination: `${DOCS_URL}/docs/:path+`,
      },
      {
        source: "/docs-static/_next/:path+",
        destination: `${DOCS_URL}/docs-static/_next/:path+`,
      },
    ];
  },
};

export default nextConfig;
