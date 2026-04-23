/**
 * GA4 analytics helpers for the ETC website.
 *
 * Script loading lives in `components/analytics/google-analytics.tsx`.
 * This module exposes a typed `trackEvent` wrapper around window.gtag and a
 * small library of named events we fire across the app.
 *
 * The helpers are safe to call when GA is not loaded (SSR, missing env var,
 * ad blocker, etc.) — they become no-ops.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const isAnalyticsConfigured = Boolean(GA_MEASUREMENT_ID);

type GtagCommand = 'config' | 'event' | 'set' | 'consent' | 'js' | 'get';
type GtagFn = (command: GtagCommand, ...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export type GAEventParams = Record<string, string | number | boolean | undefined | null>;

export function trackEvent(name: string, params: GAEventParams = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  const clean: Record<string, string | number | boolean> = {};
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null) clean[k] = v as string | number | boolean;
  }
  window.gtag('event', name, clean);
}

export const events = {
  ctaClick: (label: string, location: string, href?: string) => {
    trackEvent('cta_click', { cta_label: label, cta_location: location, cta_href: href });
    trackEvent('select_content', {
      content_type: 'cta',
      item_id: label,
      cta_location: location,
      cta_href: href,
    });
  },

  navClick: (label: string, href: string) =>
    trackEvent('nav_click', { nav_label: label, nav_href: href }),

  formSubmit: (formName: string, params: GAEventParams = {}) => {
    trackEvent('form_submit', { form_name: formName, ...params });
    trackEvent('generate_lead', { form_name: formName, ...params });
  },

  outboundClick: (href: string, label?: string) =>
    trackEvent('click', { link_url: href, link_domain: safeDomain(href), outbound: true, link_text: label }),
};

function safeDomain(href: string): string | undefined {
  try {
    return new URL(href).hostname;
  } catch {
    return undefined;
  }
}
