const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const SITE_URL = 'https://www.ecovoltex.co.uk';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.6 },
  { url: '/faq', changefreq: 'monthly', priority: 0.6 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/areas-we-cover', changefreq: 'monthly', priority: 0.7 },
  { url: '/book now', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/emergency-electrical', changefreq: 'monthly', priority: 0.9 },
  { url: '/services/electrical-installation-maintenance', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/fire-alarms', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/cctv', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/pat-testing', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/ev-charging', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/it-digital-services', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: SITE_URL });

streamToPromise(sitemap)
  .then((data) => {
    createWriteStream('./public/sitemap.xml').end(data.toString());
    console.log('✅ Sitemap generated at public/sitemap.xml');
  })
  .catch(console.error);

links.forEach(link => sitemap.write(link));
sitemap.end();
