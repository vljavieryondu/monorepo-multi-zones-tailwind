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
    return [
      {
        source: "/web",
        destination: `${WEB_URL}/web`,
      },
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
    ];
  },
};

export default nextConfig;
