import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/seo/json-ld';
import { breadcrumbList, SITE_URL } from '@/lib/seo';
import { glossary, getTerm } from '@/lib/glossary';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return glossary.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) return {};
  return {
    title: `${term.term} — GB energy markets glossary`,
    description: term.short,
    alternates: { canonical: `${SITE_URL}/intelligence/glossary/${term.slug}` },
  };
}

export default async function GlossaryTermPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) notFound();

  const related = term.related
    .map((s) => getTerm(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'ETC Intel', path: '/intelligence' },
          { name: 'Glossary', path: '/intelligence/glossary' },
          { name: term.term, path: `/intelligence/glossary/${term.slug}` },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          name: term.term,
          description: term.short,
          url: `${SITE_URL}/intelligence/glossary/${term.slug}`,
          inDefinedTermSet: {
            '@type': 'DefinedTermSet',
            name: 'ETC energy markets glossary',
            url: `${SITE_URL}/intelligence/glossary`,
          },
        }}
      />

      {/* Term */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-28 lg:pb-16">
          <Link
            href="/intelligence/glossary"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-etc-500 hover:text-signal transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Glossary
          </Link>
          <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-4 mono">
            {term.category}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
            {term.term}
          </h1>
          <p className="mt-6 text-lg text-etc-300 leading-relaxed font-medium">{term.short}</p>
        </div>
      </section>

      <section className="border-t border-subtle py-14 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {term.body.map((p) => (
              <p key={p.slice(0, 40)} className="text-[15px] text-etc-400 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-5 mono">
                Related terms
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/intelligence/glossary/${r.slug}`}
                    className="px-4 py-2 text-[13px] font-medium text-etc-300 surface-2 border border-subtle rounded-lg hover:border-etc-600 hover:text-signal transition-colors"
                  >
                    {r.term}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="surface-2 border-t border-subtle py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8 lg:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Structuring against this in a live deal?
              </h2>
              <p className="mt-2 text-[13px] text-etc-500 leading-relaxed max-w-md">
                ETC prices and executes PPAs across GB &mdash; founder-led, from indicative
                quote to signed contract.
              </p>
            </div>
            <div className="flex flex-col sm:items-end gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
              >
                Book a call <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ppa"
                className="text-[12px] font-medium text-etc-500 hover:text-signal transition-colors"
              >
                Explore the PPA Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
