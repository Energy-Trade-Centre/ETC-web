import type { MetadataRoute } from 'next';
import { glossary } from '@/lib/glossary';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://energytradecentre.com';

  const glossaryEntries: MetadataRoute.Sitemap = glossary.map((t) => ({
    url: `${baseUrl}/intelligence/glossary/${t.slug}`,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/ppa`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/platform`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/solutions`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solutions/buyers`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solutions/sellers`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solutions/investors`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/intelligence`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/intelligence/glossary`, changeFrequency: 'monthly', priority: 0.7 },
    ...glossaryEntries,
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
