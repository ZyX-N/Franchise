import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.brandsandbranches.com",
      },
    ],
  },
};

export default nextConfig;
