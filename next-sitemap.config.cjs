const raw =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  'example.com'

// Add https:// only when missing (hostname-only or bare domain)
const SITE_URL = /^https?:\/\//i.test(raw) ? raw.replace(/\/$/, '') : `https://${raw.replace(/\/$/, '')}`

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ['/posts-sitemap.xml', '/pages-sitemap.xml', '/*', '/posts/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/admin/*',
      },
    ],
    additionalSitemaps: [`${SITE_URL}/pages-sitemap.xml`, `${SITE_URL}/posts-sitemap.xml`],
  },
}
