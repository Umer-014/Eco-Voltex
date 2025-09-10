const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Update this with your actual domain
const SITE_URL = 'https://www.ecovoltex.co.uk';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/locations', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/electrical', changefreq: 'monthly', priority: 0.8 },
  { url: '/services/Installation-Maintenance', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/Fire-alarms', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/CCTV', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/PAT-testing', changefreq: 'monthly', priority: 0.7 },

];

const sitemap = new SitemapStream({ hostname: SITE_URL });

streamToPromise(sitemap)
  .then((data) => {
    createWriteStream('./public/sitemap.xml').write(data.toString());
    console.log('✅ Sitemap generated at public/sitemap.xml');
  })
  .catch(console.error);

links.forEach(link => sitemap.write(link));
sitemap.end();
