import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/json-ld';
import { breadcrumbList, SITE_URL } from '@/lib/seo';
import { glossary, categories } from '@/lib/glossary';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Energy markets glossary — PPA, storage & GB market terms',
  description:
    'Plain-language definitions of GB energy market terms: PPA structures (pay-as-produced, baseload, sleeved, virtual), REGOs, CfDs, the Capacity Market, BESS revenue stacks and more.',
  alternates: { canonical: `${SITE_URL}/intelligence/glossary` },
};

export default function GlossaryIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'ETC Intel', path: '/intelligence' },
          { name: 'Glossary', path: '/intelligence/glossary' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTermSet',
          name: 'ETC energy markets glossary',
          description:
            'Plain-language definitions of GB energy market terms — PPA structures, certificates and support schemes, storage and flexibility, grid operations, and project milestones.',
          url: `${SITE_URL}/intelligence/glossary`,
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-20">
          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold text-signal uppercase tracking-widest mb-4 mono">
              ETC Intel &middot; Reference
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Energy markets <span className="etc-gradient">glossary</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              The terms behind GB energy transactions, defined in plain language &mdash; PPA
              structures, certificates and support schemes, storage revenue models, and the
              market operations that sit underneath them.
            </p>
          </div>
        </div>
      </section>

      {/* Terms by category */}
      {categories.map((cat, idx) => {
        const terms = glossary.filter((t) => t.category === cat);
        if (terms.length === 0) return null;
        return (
          <section
            key={cat}
            className={`border-t border-subtle py-16 lg:py-20 ${idx % 2 === 0 ? 'surface-2' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-8 mono">
                {cat}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
                {terms.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/intelligence/glossary/${t.slug}`}
                    className="group surface-1 p-7 hover:bg-etc-850 transition-colors"
                  >
                    <h3 className="text-[15px] font-semibold text-white group-hover:text-signal transition-colors">
                      {t.term}
                    </h3>
                    <p className="mt-2 text-[12px] text-etc-500 leading-relaxed">{t.short}</p>
                    <div className="mt-4 inline-flex items-center text-[12px] font-medium text-etc-600 group-hover:text-signal gap-1 transition-colors">
                      Read definition <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Pricing or structuring against one of these?</h2>
          <p className="mt-4 text-etc-400 max-w-xl mx-auto">
            The definitions are free. If you want to know how a structure prices in today&apos;s
            GB market &mdash; book a call.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
            >
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
