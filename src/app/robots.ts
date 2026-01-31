import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://abdullahdevs.vercel.app'

    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/_next/image', '/_next/static/media'],
                disallow: ['/api/', '/_next/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
