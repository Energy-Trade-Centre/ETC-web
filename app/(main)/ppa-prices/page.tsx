import type { Metadata } from 'next';
import Link from 'next/link';
import TrackedCTA from '@/components/analytics/tracked-cta';
import JsonLd from '@/components/seo/json-ld';
import { breadcrumbList, faqPage, SITE_URL } from '@/lib/seo';
import {
  INDEX_NAME,
  CHART_DOMAIN,
  currentEdition,
  tenorKeys,
  midpoint,
} from '@/lib/benchmark';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: `GB PPA Prices — the ${INDEX_NAME}`,
  description: `Published indicative GB PPA price ranges by technology and tenor. The ${INDEX_NAME} covers pay-as-produced offshore wind, onshore wind and solar PV over 3, 5 and 10-year tenors — built from bids, offers and executed terms across ETC's counterparty network.`,
  alternates: { canonical: `${SITE_URL}/ppa-prices` },
};

const faqs = [
  {
    question: 'How is the ETC GB PPA Index calculated?',
    answer:
      'The index aggregates price signals observed across ETC’s counterparty network — generator offers, corporate & industrial and utility buyer bids, and quoted or executed structures. Observations are normalised to a standard pay-as-produced basis (REGOs excluded), outliers are removed, and a representative low–high range is published per technology and tenor. The full method is set out on the methodology page.',
  },
  {
    question: 'How often is the index updated?',
    answer:
      'Editions are published half-yearly (H1 and H2), with an intra-period republication if the market moves materially. Published editions are never restated; corrections, if ever needed, are footnoted.',
  },
  {
    question: 'Can I transact at these prices?',
    answer:
      'No — the ranges are indicative reference levels, not transactable quotes. Live pricing depends on the specific asset’s shape, credit, curtailment treatment, REGO handling and market conditions at the time of quote. For a live indicative range on your position, book a call.',
  },
];

// Range-bar chart geometry — position along the shared £/MWh domain.
const span = CHART_DOMAIN.max - CHART_DOMAIN.min;
const pct = (v: number) => ((v - CHART_DOMAIN.min) / span) * 100;
const ticks = [40, 50, 60, 70, 80];

export default function PpaPricesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'GB PPA Prices', path: '/ppa-prices' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Dataset',
          name: `${INDEX_NAME} — ${currentEdition.edition}`,
          description:
            'Indicative GB pay-as-produced PPA price ranges by technology (offshore wind, onshore wind, solar PV) and tenor (3, 5 and 10 years), in £/MWh, REGOs excluded.',
          url: `${SITE_URL}/ppa-prices`,
          temporalCoverage: currentEdition.edition,
          spatialCoverage: 'Great Britain',
          license: `${SITE_URL}/ppa-prices/methodology`,
          creator: {
            '@type': 'Organization',
            name: 'Energy Trade Centre',
            url: SITE_URL,
          },
        }}
      />
      <JsonLd data={faqPage(faqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 lg:pt-32 lg:pb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[11px] font-semibold text-signal uppercase tracking-widest mono">
                {INDEX_NAME}
              </span>
              <span className="text-[10px] font-semibold text-etc-black bg-signal px-2 py-0.5 rounded mono uppercase tracking-wider">
                {currentEdition.edition}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
              GB PPA prices,<br />
              <span className="etc-gradient">published.</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Indicative pay-as-produced PPA ranges for Great Britain by technology and tenor
              &mdash; built from bids, offers and executed terms across ETC&apos;s counterparty
              network of generators, utilities and corporate &amp; industrial buyers. A reference
              both sides of the trade can quote from.
            </p>
          </div>
        </div>
      </section>

      {/* Index — chart + table */}
      <section className="surface-2 border-y border-subtle py-16 lg:py-24" id="index">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Indicative PaP ranges &mdash; {currentEdition.edition}
              </h2>
              <p className="mt-2 text-[13px] text-etc-500">
                &pound;/MWh &middot; pay-as-produced &middot; REGOs excluded &middot; GB delivery
              </p>
            </div>
            <Link
              href="/ppa-prices/methodology"
              className="text-[13px] font-medium text-signal hover:text-signal-dim transition-colors shrink-0"
            >
              How the index is built →
            </Link>
          </div>

          {/* Range-bar chart. Every value is directly labelled and the full
              table below is the canonical view. */}
          <div className="card p-6 sm:p-8">
            <div className="space-y-8">
              {currentEdition.rows.map((row) => (
                <div key={row.slug}>
                  <h3 className="text-[13px] font-semibold text-white mb-3">{row.technology}</h3>
                  <div className="space-y-2">
                    {tenorKeys.map((t) => {
                      const r = row.tenors[t];
                      return (
                        <div
                          key={t}
                          className="grid grid-cols-[2rem_2.25rem_1fr_2.25rem] items-center gap-2 group"
                          title={`${row.technology} ${t}: £${r.low}–${r.high}/MWh`}
                        >
                          <span className="text-[11px] text-etc-500 mono">{t}</span>
                          <span className="text-[11px] text-etc-300 mono text-right">{r.low}</span>
                          <div className="relative h-4">
                            {/* Recessive gridlines */}
                            {ticks.map((tick) => (
                              <div
                                key={tick}
                                className="absolute top-0 bottom-0 w-px bg-white/[0.05]"
                                style={{ left: `${pct(tick)}%` }}
                              />
                            ))}
                            {/* Range mark */}
                            <div
                              className="absolute top-1/2 -translate-y-1/2 h-2.5 rounded bg-signal-dim group-hover:bg-signal transition-colors"
                              style={{ left: `${pct(r.low)}%`, width: `${pct(r.high) - pct(r.low)}%` }}
                            />
                          </div>
                          <span className="text-[11px] text-etc-300 mono">{r.high}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Axis */}
              <div className="grid grid-cols-[2rem_2.25rem_1fr_2.25rem] gap-2 pt-1 border-t border-subtle">
                <span />
                <span />
                <div className="relative h-5">
                  {ticks.map((tick) => (
                    <span
                      key={tick}
                      className="absolute top-1 -translate-x-1/2 text-[10px] text-etc-600 mono"
                      style={{ left: `${pct(tick)}%` }}
                    >
                      &pound;{tick}
                    </span>
                  ))}
                </div>
                <span />
              </div>
            </div>
          </div>

          {/* Canonical table */}
          <div className="mt-8 card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-subtle">
                    <th className="px-6 py-4 text-[11px] font-semibold text-etc-500 uppercase tracking-wider">
                      Technology
                    </th>
                    {tenorKeys.map((t) => (
                      <th
                        key={t}
                        className="px-6 py-4 text-[11px] font-semibold text-etc-500 uppercase tracking-wider"
                      >
                        {t} low&ndash;high <span className="text-etc-600">(mid)</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentEdition.rows.map((row) => (
                    <tr key={row.slug} className="border-b border-subtle last:border-0">
                      <td className="px-6 py-4 text-[14px] font-medium text-white">
                        {row.technology}
                      </td>
                      {tenorKeys.map((t) => {
                        const r = row.tenors[t];
                        return (
                          <td key={t} className="px-6 py-4 mono text-[14px] text-etc-300">
                            &pound;{r.low}&ndash;{r.high}{' '}
                            <span className="text-etc-600 text-[12px]">({midpoint(r).toFixed(1)})</span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 surface-2 border-t border-subtle">
              <p className="text-[11px] text-etc-600 leading-relaxed">
                {INDEX_NAME}, {currentEdition.edition}. Indicative reference ranges &mdash; not
                transactable quotes, offers or investment advice. Actual pricing depends on shape,
                credit, curtailment treatment, REGO handling and market conditions at time of
                quote. Not a regulated benchmark under the UK Benchmarks Regulation.
                {currentEdition.notes ? ` ${currentEdition.notes}` : ''}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it's built — summary */}
      <section className="py-16 lg:py-24" id="method">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="text-[10px] font-semibold text-signal uppercase tracking-widest mb-3 mono">
                METHOD
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Built from real market signals.
              </h2>
              <p className="mt-4 text-etc-400 leading-relaxed">
                The index is not a survey and not a model output. It aggregates what ETC observes
                directly: generator offers, buyer bids and quoted or executed structures across the
                counterparty network &mdash; normalised to a common basis and published on a fixed
                cadence with a no-restatement policy.
              </p>
              <div className="mt-6">
                <Link
                  href="/ppa-prices/methodology"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-signal hover:text-signal-dim transition-colors"
                >
                  Read the full methodology <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="card p-8">
              <ul className="space-y-5">
                {[
                  ['Inputs', 'Generator offers, C&I and utility buyer bids, quoted and executed terms.'],
                  ['Normalisation', 'Standard PaP basis; shape, credit and REGO effects stripped; outliers excluded.'],
                  ['Cadence', 'Half-yearly editions, republished intra-period if the market moves materially.'],
                  ['Integrity', 'Published editions are never restated. Corrections are footnoted, not overwritten.'],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-start gap-4">
                    <span className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mono w-24 shrink-0 pt-0.5">
                      {k}
                    </span>
                    <span className="text-[13px] text-etc-300 leading-relaxed">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-2 border-t border-subtle py-16 lg:py-24" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            About the index
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
            {faqs.map((f) => (
              <div key={f.question} className="surface-1 p-8">
                <h3 className="text-[15px] font-semibold text-white mb-3">{f.question}</h3>
                <p className="text-[13px] text-etc-400 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>

          {/* Citation */}
          <div className="mt-8 card px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <span className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mono shrink-0">
              Citing the index
            </span>
            <p className="text-[13px] text-etc-400 leading-relaxed">
              Media and analysts are welcome to cite these ranges with attribution:
              &ldquo;{INDEX_NAME}, {currentEdition.edition}&rdquo; and a link to this page. For
              commentary or interview requests, email{' '}
              <a href="mailto:daniel@energytradecentre.com" className="text-signal hover:underline">
                daniel@energytradecentre.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-subtle py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Need a live range for your position?</h2>
          <p className="mt-4 text-etc-400 max-w-xl mx-auto">
            The index is the reference. Your asset&apos;s shape, credit and structure move the
            number &mdash; tell us what you&apos;re pricing and we&apos;ll come back with a live
            indicative range.
          </p>
          <div className="mt-8">
            <TrackedCTA
              href="/contact"
              ctaLabel="Book a call"
              ctaLocation="ppa_prices_cta"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
            >
              Book a call <ArrowRight className="w-4 h-4" />
            </TrackedCTA>
          </div>
        </div>
      </section>
    </>
  );
}
