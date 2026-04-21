export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const isAnalyticsEnabled =
  process.env.NODE_ENV === 'production' && Boolean(GA_MEASUREMENT_ID);

type GtagCommand = 'config' | 'event' | 'set' | 'consent' | 'js';
type GtagFn = (command: GtagCommand, ...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export function pageview(url: string) {
  if (!isAnalyticsEnabled || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('config', GA_MEASUREMENT_ID as string, { page_path: url });
}

export type GAEventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: GAEventParams = {}) {
  if (!isAnalyticsEnabled || typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}

export const events = {
  ctaClick: (label: string, location: string, href?: string) =>
    trackEvent('cta_click', { cta_label: label, cta_location: location, cta_href: href }),

  navClick: (label: string, href: string) =>
    trackEvent('nav_click', { nav_label: label, nav_href: href }),

  formSubmit: (formName: string, params: GAEventParams = {}) =>
    trackEvent('form_submit', { form_name: formName, ...params }),

  fileDownload: (fileName: string, fileType: string) =>
    trackEvent('file_download', { file_name: fileName, file_extension: fileType }),

  newsletterSignup: (location: string) =>
    trackEvent('newsletter_signup', { signup_location: location }),

  estimatorInteraction: (field: string, value: string | number) =>
    trackEvent('estimator_interaction', { field, value: String(value) }),
};
