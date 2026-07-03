import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/json-ld';
import { breadcrumbList, SITE_URL } from '@/lib/seo';
import { INDEX_NAME } from '@/lib/benchmark';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: `${INDEX_NAME} — methodology`,
  description: `How the ${INDEX_NAME} is constructed: inputs, qualification criteria, normalisation, aggregation, publication cadence, revision policy and limitations.`,
  alternates: { canonical: `${SITE_URL}/ppa-prices/methodology` },
};

const sections = [
  {
    title: '1. What the index measures',
    paragraphs: [
      `The ${INDEX_NAME} publishes indicative price ranges for pay-as-produced (PaP) power purchase agreements with delivery in Great Britain, by technology (offshore wind, onshore wind, solar PV) and tenor bucket (3, 5 and 10 years), in £/MWh with REGOs excluded.`,
      'It is a reference for negotiation and analysis — a common starting point both sides of a trade can quote from — not a traded price, a forecast, or a valuation of any specific asset.',
    ],
  },
  {
    title: '2. Inputs',
    paragraphs: [
      'The index is built from price signals ETC observes directly in the course of operating its platform: offers from generators and asset owners, bids from corporate & industrial and utility buyers, and the terms of structures quoted or executed across the counterparty network.',
      'It is not a survey of third parties and not a model output. Where activity in a given technology/tenor cell is thin in a period, the published range reflects the observations available and is reviewed with additional scrutiny before publication.',
    ],
  },
  {
    title: '3. Qualification criteria',
    paragraphs: [
      'An observation qualifies for inclusion when it relates to: GB delivery; a pay-as-produced delivery profile (or a structure that can be reliably normalised to PaP); a tenor that maps to the 3, 5 or 10-year bucket; and standard commercial terms (investment-grade or credit-supported counterparty assumptions, standard curtailment treatment).',
      'Observations that are stale, non-arm’s-length, distressed, or structurally unusual in ways that cannot be normalised are excluded.',
    ],
  },
  {
    title: '4. Normalisation and aggregation',
    paragraphs: [
      'Qualifying observations are normalised to a common basis: shape and profile effects are adjusted to a PaP equivalent, embedded certificate (REGO) value is stripped, and credit or structural premia are removed where identifiable.',
      'After outlier exclusion, the published range represents where ETC assesses genuine two-way interest to sit for a standard transaction in that technology and tenor. The midpoint is published for reference only; it is not a traded level.',
    ],
  },
  {
    title: '5. Publication cadence and revision policy',
    paragraphs: [
      'Editions are published half-yearly (H1 and H2). If the market moves materially within a period, an intra-period republication may be issued and labelled as such.',
      'Published editions are never restated. If a correction is ever required, it is made transparently: the corrected figure is published alongside a footnote describing what changed and why. Historical editions remain available as published.',
    ],
  },
  {
    title: '6. Independence and limitations',
    paragraphs: [
      'The index is produced by ETC based on activity across its own platform and network. ETC acts in transactions between counterparties and therefore has commercial interests in the market the index describes; the no-restatement policy, fixed cadence and published methodology exist to keep the reference honest.',
      `The ranges are indicative only. They are not transactable quotes, not offers or solicitations, not investment advice, and the ${INDEX_NAME} is not a regulated benchmark under the UK Benchmarks Regulation. Users should not rely on the index as the sole basis for any transaction or investment decision.`,
    ],
  },
  {
    title: '7. Citation',
    paragraphs: [
      `Media, analysts and researchers are welcome to cite the index with attribution — "${INDEX_NAME}, [edition]" — and a link to the index page. For methodology questions, commentary or interview requests, contact daniel@energytradecentre.com.`,
    ],
  },
];

export default function MethodologyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'GB PPA Prices', path: '/ppa-prices' },
          { name: 'Methodology', path: '/ppa-prices/methodology' },
        ])}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-28 lg:pb-16">
          <Link
            href="/ppa-prices"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-etc-500 hover:text-signal transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> {INDEX_NAME}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
            Methodology
          </h1>
          <p className="mt-6 text-lg text-etc-400 leading-relaxed">
            How the {INDEX_NAME} is constructed &mdash; and the rules that keep it honest.
          </p>
        </div>
      </section>

      <section className="border-t border-subtle py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-white mb-4">{s.title}</h2>
              <div className="space-y-4">
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-[14px] text-etc-400 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
