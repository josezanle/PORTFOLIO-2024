/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                // pathname: '/dubv6xkxf/image/upload/v1710174634/jv5w3c1wlvtiudleh73z.webp',
            },
        ],
    },
};


export default nextConfig;