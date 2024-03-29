// next.config.mjs

const nextConfig = {
    // Your Next.js configuration
    i18n: {
        locales: ['en', 'esp'],
        defaultLocale: 'en',
    },
    images: {
        domains: ['images.pexels.com', 'images.unsplash.com', 'media.licdn.com', 'i.ibb.co'],
    },
};

const defaultLocale = nextConfig.i18n.defaultLocale;

export { nextConfig as default, defaultLocale };
