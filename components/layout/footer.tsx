import Link from 'next/link';

const footerLinks = {
  Platform: [
    { name: 'PPA Marketplace', href: '/platform#marketplace' },
    { name: 'Asset Exchange', href: '/platform#assets' },
    { name: 'BESS Exchange', href: '/platform#bess' },
    { name: 'Analytics Engine', href: '/platform#analytics' },
    { name: 'Grid Intelligence', href: '/platform#grid' },
    { name: 'Lightning PPA', href: '/platform#lightning' },
  ],
  Solutions: [
    { name: 'Procurement', href: '/solutions/buyers' },
    { name: 'Origination', href: '/solutions/sellers' },
    { name: 'Investment', href: '/solutions/investors' },
  ],
  Intelligence: [
    { name: 'Market Data', href: '/intelligence' },
    { name: 'Research', href: '/intelligence#research' },
    { name: 'Pricing Trends', href: '/intelligence#pricing' },
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
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center gap-0.5">
                <div className="w-1.5 h-4 bg-signal rounded-sm" />
                <div className="w-1.5 h-4 bg-signal/60 rounded-sm" />
                <div className="w-1.5 h-4 bg-signal/30 rounded-sm" />
              </div>
              <span className="text-sm font-bold text-white tracking-tight">ETC</span>
            </Link>
            <p className="text-xs text-etc-500 leading-relaxed">
              The operating system for<br />the energy transition.
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
            <span>London</span>
            <span className="text-etc-750">&bull;</span>
            <span>Amsterdam</span>
            <span className="text-etc-750">&bull;</span>
            <span>Houston</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
