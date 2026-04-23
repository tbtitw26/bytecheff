import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,

    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",

    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
                    { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
                ],
            },
        ];
    },

    trailingSlash: false,

    images: {
        qualities: [75, 85, 90, 95, 100],
        deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384, 512],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.freepik.com",
            },
            {
                protocol: "https",
                hostname: "media.shipster.se",
            },
        ],
    },

    experimental: {
        optimizeCss: true,
        scrollRestoration: true,
    },

    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
