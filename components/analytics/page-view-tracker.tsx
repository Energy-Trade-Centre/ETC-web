'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview } from '@/lib/analytics';

function Tracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

export default function PageViewTracker() {
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  );
}
