import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Static JS/CSS/fonts/images: content-hashed by Next.js so the filename
        // changes on every deploy — safe to cache for 1 year in the browser.
        // Browsers never serve stale files because the URL itself changes.
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // HTML pages: always revalidate with the server.
        // Sends a tiny 304 Not Modified if unchanged — still fast.
        // Ensures clients always load the latest JS chunk references after a deploy.
        source: "/((?!_next/static).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
