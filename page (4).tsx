import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.baseUrl;

  const staticRoutes: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1.0, changeFreq: 'weekly' },

    // Service pages
    { path: '/services', priority: 0.9, changeFreq: 'monthly' },
    { path: '/services/tradeshow-headshot-activation', priority: 1.0, changeFreq: 'monthly' },
    { path: '/services/conference-headshot-booth', priority: 0.9, changeFreq: 'monthly' },
    { path: '/services/sko-sales-kickoff-headshots', priority: 0.9, changeFreq: 'monthly' },
    { path: '/services/corporate-headshots', priority: 0.8, changeFreq: 'monthly' },
    { path: '/services/event-photography', priority: 0.9, changeFreq: 'monthly' },
    { path: '/services/booth-beauty-photography', priority: 0.8, changeFreq: 'monthly' },
    { path: '/services/food-photography', priority: 0.7, changeFreq: 'monthly' },

    // Las Vegas venue pages
    { path: '/las-vegas', priority: 0.9, changeFreq: 'monthly' },
    { path: '/las-vegas/convention-center', priority: 0.9, changeFreq: 'monthly' },
    { path: '/las-vegas/venetian-expo', priority: 0.8, changeFreq: 'monthly' },
    { path: '/las-vegas/mandalay-bay', priority: 0.8, changeFreq: 'monthly' },
    { path: '/las-vegas/caesars-forum', priority: 0.8, changeFreq: 'monthly' },

    // Event pages
    { path: '/events', priority: 0.8, changeFreq: 'monthly' },
    { path: '/events/ces-headshots', priority: 0.9, changeFreq: 'monthly' },
    { path: '/events/nab-show-headshots', priority: 0.8, changeFreq: 'monthly' },
    { path: '/events/sema-headshots', priority: 0.8, changeFreq: 'monthly' },
    { path: '/events/mjbizcon-headshots', priority: 0.8, changeFreq: 'monthly' },

    // Company pages
    { path: '/about', priority: 0.7, changeFreq: 'monthly' },
    { path: '/pricing', priority: 0.9, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.8, changeFreq: 'yearly' },
    { path: '/portfolio', priority: 0.7, changeFreq: 'monthly' },

    // Blog
    { path: '/blog', priority: 0.8, changeFreq: 'weekly' },
    { path: '/blog/ultimate-guide-tradeshow-booth-traffic', priority: 0.8, changeFreq: 'monthly' },
    { path: '/blog/what-is-headshot-activation', priority: 0.8, changeFreq: 'monthly' },
  ];

  return staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }));
}
