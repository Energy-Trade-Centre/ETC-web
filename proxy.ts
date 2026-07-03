import { NextRequest, NextResponse } from 'next/server';

/**
 * Host-based routing for the Japanese site (Next 16 proxy convention).
 *
 * jp.energytradecentre.com serves the (japan) route group: requests to the
 * subdomain are rewritten to /jp internally, so the subdomain root shows the
 * Japanese page while the main domain is untouched. `jp.localhost:3000`
 * works the same way in dev.
 */
const JP_HOSTS = new Set(['jp.energytradecentre.com', 'jp.localhost:3000']);

export default function proxy(req: NextRequest) {
  const host = req.headers.get('host') ?? '';
  if (JP_HOSTS.has(host) && !req.nextUrl.pathname.startsWith('/jp')) {
    const url = req.nextUrl.clone();
    url.pathname = `/jp${url.pathname === '/' ? '' : url.pathname}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  // Skip static assets and API routes.
  matcher: ['/((?!_next|api|favicon.svg|.*\\..*).*)'],
};
