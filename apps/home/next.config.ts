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
      // WEB zone
      {
        source: "/web",
        destination: `${WEB_URL}/web`,
      },
      {
        source: "/web/:path*",
        destination: `${WEB_URL}/web/:path*`,
      },
      {
        source: "/_next/static/:path*",
        destination: `${WEB_URL}/_next/static/:path*`,
      },

      // DOCS zone
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_URL}/docs/:path*`,
      },
      {
        source: "/_next/static/:path*",
        destination: `${DOCS_URL}/_next/static/:path*`,
      },
    ];
  },
};

export default nextConfig;
