import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Exportación estática (carpeta out/) para servirla desde Cloudflare
    output: 'export',
    images: {
        // El optimizador de imágenes necesita un servidor; la exportación estática no lo admite
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
            },
        ],
    },
};

export default withNextIntl(nextConfig);
