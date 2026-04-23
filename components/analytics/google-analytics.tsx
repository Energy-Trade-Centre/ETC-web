'use client';

/**
 * Loads gtag.js for GA4 and fires a page_view on App Router client-side
 * navigation. GA4 Enhanced Measurement can also auto-track SPA history
 * events, but we fire explicit page_view on pathname change so the event
 * always reports the correct page_location/page_path regardless of the
 * stream settings.
 */

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

interface Props {
  gaId: string;
}

function PageViewTracker({ gaId }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    const search = searchParams?.toString();
    const path = pathname + (search ? `?${search}` : '');
    window.gtag('config', gaId, {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchParams, gaId]);

  return null;
}

export default function GoogleAnalytics({ gaId }: Props) {
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}', { send_page_view: true });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViewTracker gaId={gaId} />
      </Suspense>
    </>
  );
}
