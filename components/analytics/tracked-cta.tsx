'use client';

/**
 * Client-side wrapper around next/link that fires a GA `cta_click` event
 * before navigation. Use this on key CTAs (Book a call, Get access, etc.).
 */

import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, ReactNode, MouseEvent } from 'react';
import { events } from '@/lib/analytics';

type TrackedCTAProps = Omit<LinkProps, 'href'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> & {
    href: string;
    children: ReactNode;
    /** Text label sent as `cta_label` (e.g. "Book a call"). */
    ctaLabel: string;
    /** Where on the site the CTA is (e.g. "homepage_hero"). */
    ctaLocation: string;
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  };

export default function TrackedCTA({
  ctaLabel,
  ctaLocation,
  onClick,
  href,
  children,
  ...rest
}: TrackedCTAProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    events.ctaClick(ctaLabel, ctaLocation, href);
    onClick?.(e);
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
