import Link from 'next/link';
import { Zap } from 'lucide-react';

const footerLinks = {
  Platform: [
    { name: 'PPA Marketplace', href: '/platform#marketplace' },
    { name: 'Asset Exchange', href: '/platform#assets' },
    { name: 'BESS Marketplace', href: '/platform#bess' },
    { name: 'Analytics & Modelling', href: '/platform#analytics' },
    { name: 'Grid Intelligence', href: '/platform#grid' },
    { name: 'Lightning PPA', href: '/platform#lightning' },
  ],
  Solutions: [
    { name: 'For Buyers', href: '/solutions/buyers' },
    { name: 'For Sellers', href: '/solutions/sellers' },
    { name: 'For Investors', href: '/solutions/investors' },
  ],
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Market Data', href: '/market-data' },
    { name: 'Contact', href: '/contact' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">ETC</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              The platform powering the global energy transition through transparent, data-driven renewable energy trading.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-green-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Energy Trade Centre. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-600">London &bull; Amsterdam &bull; Houston</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
