/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.ah.nl',
                port: '',
                pathname: '/dam/product/**',
            },
        ],
    },
};

export default nextConfig;
