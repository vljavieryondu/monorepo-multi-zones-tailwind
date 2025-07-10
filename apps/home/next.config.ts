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
    // Sanitize env vars
    const WEB_BASE = WEB_URL?.replace(/\/$/, "");
    const DOCS_BASE = DOCS_URL?.replace(/\/$/, "");

    return [
      // WEB zone
      {
        source: "/web",
        destination: `${WEB_BASE}/`,
      },
      {
        source: "/web/:path*",
        destination: `${WEB_BASE}/:path*`,
      },
      {
        source: "/_next/static/:path*",
        destination: `${WEB_BASE}/_next/static/:path*`,
      },

      // DOCS zone
      {
        source: "/docs",
        destination: `${DOCS_BASE}/`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_BASE}/:path*`,
      },
      {
        source: "/_next/static/:path*",
        destination: `${DOCS_BASE}/_next/static/:path*`,
      },
    ];
  },
};

export default nextConfig;
