/**
 * Structured-data (JSON-LD) builders shared across pages.
 *
 * Render the returned objects with <JsonLd data={...} /> from
 * `components/seo/json-ld.tsx`. Google parses JSON-LD anywhere in the DOM,
 * so pages can emit these from the body.
 */

export const SITE_URL = 'https://energytradecentre.com';

/** BreadcrumbList schema — pass the trail including Home. */
export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Service schema for the solutions pages. */
export function service(opts: { name: string; description: string; path: string; serviceType: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    serviceType: opts.serviceType,
    areaServed: 'GB',
    provider: {
      '@type': 'Organization',
      name: 'Energy Trade Centre',
      url: SITE_URL,
    },
  };
}

/** FAQPage schema — questions and plain-text answers. */
export function faqPage(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
