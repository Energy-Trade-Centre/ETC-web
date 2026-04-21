'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

// Nav descriptions map to the homepage: PPA Marketplace & ETC Intel are LIVE,
// Asset Exchange / BESS Exchange / Grid Intelligence / 24/7 CFE are on the 2026 roadmap.
const navigation = [
  {
    name: 'Platform',
    href: '/platform',
    children: [
      { name: 'PPA Marketplace', href: '/platform#marketplace', description: 'Live pricing, structuring and execution across GB.' },
      { name: 'ETC Intel', href: '/intelligence', description: 'Indicative curves, counterparty coverage, deal structuring notes.' },
      { name: 'Asset Exchange', href: '/platform#assets', description: '2026 roadmap — project and asset+PPA bundles.' },
      { name: 'BESS Exchange', href: '/platform#bess', description: '2026 roadmap — battery origination and optimisation.' },
      { name: 'Grid Intelligence', href: '/platform#grid', description: '2026 roadmap — constraint and queue visibility.' },
      { name: '24/7 CFE Matching', href: '/platform#cfe', description: '2026 roadmap — hourly carbon-free energy matching.' },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    children: [
      { name: 'Procurement', href: '/solutions/buyers', description: 'For utilities and corporate offtakers buying GB power.' },
      { name: 'Origination', href: '/solutions/sellers', description: 'For IPPs and asset owners seeking offtake in GB.' },
      { name: 'Investment', href: '/solutions/investors', description: 'For funds and investors sizing GB renewables exposure.' },
    ],
  },
  { name: 'Intelligence', href: '/intelligence' },
  { name: 'Company', href: '/about' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-etc-black/80 backdrop-blur-xl border-b border-subtle">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo - ETC as primary brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <div className="w-2 h-5 bg-signal rounded-sm" />
              <div className="w-2 h-5 bg-signal/60 rounded-sm" />
              <div className="w-2 h-5 bg-signal/30 rounded-sm" />
            </div>
            <span className="text-base font-bold text-white tracking-tight">ETC</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3.5 py-1.5 text-[13px] font-medium text-etc-400 hover:text-white rounded-md hover:bg-white/5 transition-colors"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3 h-3 opacity-50" />}
                </Link>

                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-72 surface-2 rounded-xl border border-subtle p-1.5 shadow-2xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3.5 py-2.5 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="text-[13px] font-medium text-white">{child.name}</div>
                        <div className="text-[11px] text-etc-500 mt-0.5">{child.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA — single Book a call (no 'Sign in' until a signed-in product exists) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-[13px] font-semibold text-etc-black bg-signal hover:bg-signal-dim px-4 py-2 rounded-lg transition-colors"
            >
              Book a call
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-etc-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-subtle mt-2 pt-4">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-medium text-etc-300 hover:text-white rounded-lg"
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
                        className="block px-4 py-2 text-[13px] text-etc-500 hover:text-white"
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
                className="text-center text-sm font-semibold text-etc-black bg-signal px-4 py-2.5 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                Book a call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
