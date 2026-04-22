'use client';

import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, forwardRef, MouseEvent, ReactNode } from 'react';
import { events } from '@/lib/analytics';

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
    trackLabel: string;
    trackLocation: string;
  };

const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  ({ trackLabel, trackLocation, onClick, href, ...rest }, ref) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      events.ctaClick(trackLabel, trackLocation, typeof href === 'string' ? href : undefined);
      onClick?.(e);
    };

    return <Link ref={ref} href={href} onClick={handleClick} {...rest} />;
  }
);

TrackedLink.displayName = 'TrackedLink';

export default TrackedLink;
