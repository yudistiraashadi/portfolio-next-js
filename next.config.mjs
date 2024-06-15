/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: [
            "@mantine/core",
            "@mantine/dates",
            "@mantine/hooks",
            "@mantine/notifications",
            "clsx",
            "dayjs",
            "framer-motion",
            "mini-svg-data-uri",
            "nextjs-toploader",
            "sharp",
            "tailwind-merge"
        ],
    },
};

export default nextConfig;
