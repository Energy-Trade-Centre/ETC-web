import Link from 'next/link';
import BrandLogo from '@/components/brand/brand-logo';

// Labels and destinations are kept consistent with the navigation and page
// content — every link resolves to a real page or an anchor that exists.
const footerLinks = {
  Platform: [
    { name: 'PPA Platform', href: '/ppa' },
    { name: 'ETC Intel', href: '/intelligence' },
    { name: 'Asset Exchange', href: '/platform#assets' },
    { name: 'BESS Exchange', href: '/platform#bess' },
    { name: 'Grid Intelligence', href: '/platform#grid' },
    { name: '24/7 CFE Matching', href: '/platform#cfe' },
  ],
  Solutions: [
    { name: 'Energy procurement', href: '/solutions/buyers' },
    { name: 'Renewable energy trading', href: '/solutions/sellers' },
    { name: 'Investment', href: '/solutions/investors' },
  ],
  Intelligence: [
    { name: 'Overview', href: '/intelligence' },
    { name: 'Signal blocks', href: '/intelligence#signals' },
    { name: 'How it works', href: '/intelligence#how' },
    { name: 'Glossary', href: '/intelligence/glossary' },
  ],
  Company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="surface-1 border-t border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex mb-4" aria-label="Energy Trade Centre home">
              <BrandLogo compact />
            </Link>
            <p className="text-xs text-etc-500 leading-relaxed">
              The institutional platform for<br />energy transactions.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-etc-400 hover:text-signal transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-etc-600">
            &copy; {new Date().getFullYear()} Energy Trade Centre Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-etc-600">
            <span>London, UK</span>
            <span className="text-etc-750">&bull;</span>
            <span>Focused in GB &middot; active in Europe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
