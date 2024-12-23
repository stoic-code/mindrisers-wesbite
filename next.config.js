/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "via.placeholder.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "182.93.93.82",
                port: "8383",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "tech.mindrisers.com.np",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
