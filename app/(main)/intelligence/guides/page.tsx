import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/json-ld';
import { breadcrumbList, SITE_URL } from '@/lib/seo';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Guides — corporate PPAs, selling power & GB market structure',
  description:
    'Practical guides to GB energy transactions: how corporate PPAs work, how generators take power to market, and how to benchmark and negotiate against published reference prices.',
  alternates: { canonical: `${SITE_URL}/intelligence/guides` },
};

const guides = [
  {
    tag: 'For buyers',
    title: 'Corporate PPAs in the UK — the complete guide',
    description:
      'Sleeved vs virtual structures, delivery profiles, what drives the price, the procurement process step by step, and the contract terms that matter.',
    href: '/intelligence/guides/corporate-ppas-uk',
  },
  {
    tag: 'For generators',
    title: 'Selling your power — PPA routes to market in GB',
    description:
      'Utility vs corporate vs merchant routes, what buyers actually price, how to benchmark offers against the published reference, and how to run the process.',
    href: '/intelligence/guides/selling-power-ppa-gb',
  },
];

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'ETC Intel', path: '/intelligence' },
          { name: 'Guides', path: '/intelligence/guides' },
        ])}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 lg:pt-32 lg:pb-20">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-signal uppercase tracking-widest mb-4 mono">
              ETC Intel &middot; Guides
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Guides to GB energy <span className="etc-gradient">transactions</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Practical, structural guides &mdash; how the contracts work, what drives the
              prices, and how to run a process. Definitions live in the{' '}
              <Link href="/intelligence/glossary" className="text-signal hover:underline">
                glossary
              </Link>
              ; numbers live in the{' '}
              <Link href="/ppa-prices" className="text-signal hover:underline">
                GB PPA Index
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-subtle py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group surface-1 p-8 lg:p-10 hover:bg-etc-850 transition-colors"
              >
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">
                  {g.tag}
                </div>
                <h2 className="text-xl font-semibold text-white group-hover:text-signal transition-colors">
                  {g.title}
                </h2>
                <p className="mt-3 text-[13px] text-etc-500 leading-relaxed">{g.description}</p>
                <div className="mt-6 inline-flex items-center text-[12px] font-medium text-etc-600 group-hover:text-signal gap-1 transition-colors">
                  Read the guide <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
