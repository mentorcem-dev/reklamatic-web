export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/tr/', '/private/', '/admin/'],
        },
        sitemap: 'https://reklamatic.ai/sitemap.xml',
    }
}
