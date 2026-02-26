'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const navigation = [
  {
    name: 'Platform',
    href: '/platform',
    children: [
      { name: 'PPA Marketplace', href: '/platform#marketplace', description: 'Browse 4,500+ live PPA offers globally' },
      { name: 'Asset Exchange', href: '/platform#assets', description: 'Buy, sell, and trade renewable energy projects' },
      { name: 'BESS Marketplace', href: '/platform#bess', description: 'Battery storage trading and optimization' },
      { name: 'Analytics & Modelling', href: '/platform#analytics', description: 'NPV, Monte Carlo, portfolio analytics' },
      { name: 'Grid Intelligence', href: '/platform#grid', description: 'Real-time grid data and constraints' },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    children: [
      { name: 'For Buyers', href: '/solutions/buyers', description: 'Corporate & institutional energy procurement' },
      { name: 'For Sellers', href: '/solutions/sellers', description: 'Developers & asset owners seeking offtake' },
      { name: 'For Investors', href: '/solutions/investors', description: 'Infrastructure funds & portfolio managers' },
    ],
  },
  { name: 'Market Data', href: '/market-data' },
  { name: 'About', href: '/about' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-navy-950 leading-tight">Energy Trade Centre</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-navy-950 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-200 p-2 animate-in fade-in slide-in-from-top-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-sm font-medium text-navy-950">{child.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{child.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-navy-950 px-4 py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white bg-green-500 hover:bg-green-600 px-5 py-2.5 rounded-lg transition-colors"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-navy-950 hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-6">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-500 hover:text-navy-950"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4 flex flex-col gap-2">
              <Link
                href="/contact"
                className="text-center text-sm font-medium text-gray-700 border border-gray-300 px-4 py-2.5 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                className="text-center text-sm font-semibold text-white bg-green-500 px-4 py-2.5 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Request Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
