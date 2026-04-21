import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions | Procurement, Origination & Investment',
  description:
    'ETC serves utilities, independent traders, IPPs, corporate offtakers and investors across GB. Published indicative curves, counterparty matching and founder-led structuring.',
  alternates: { canonical: 'https://energytradecentre.com/solutions' },
};

const solutions = [
  {
    tag: 'PROCUREMENT',
    title: 'For utilities & corporate offtakers',
    description:
      'Quote from published indicative GB PPA curves, structure against a real counterparty network (Big 6, European majors, independent traders, IPPs), and move from term sheet to signed contract with founder-led execution.',
    href: '/solutions/buyers',
    points: [
      'Published indicative GB PaP ranges by tech and tenor',
      'Counterparty matching across the active network',
      'Structuring: PaP, baseload, shaped, sleeved and virtual PPAs',
      'Direct execution — no sub-brokerage, no hand-offs',
    ],
  },
  {
    tag: 'ORIGINATION',
    title: 'For IPPs & asset owners',
    description:
      'Reach the GB counterparty network without the broker-print chase. Indicative curves you can benchmark against, offtake matching against utilities and corporates, and founder-led structuring through to signed contract.',
    href: '/solutions/sellers',
    points: [
      'Counterparty matching against utilities, majors and corporates',
      'Published reference curves to benchmark offers against',
      'Structuring across PaP, baseload, shaped and sleeved products',
      'Every development stage: pre-NTP, construction, operational',
    ],
  },
  {
    tag: 'INVESTMENT',
    title: 'For infrastructure funds & asset managers',
    description:
      'A published GB reference for revenue assumptions, visibility into who is actively transacting on the other side, and a direct line to the structuring work underpinning each deal. Built to feed IC packs, not replace them.',
    href: '/solutions/investors',
    points: [
      'Published GB indicative PaP curves as a reference',
      'Counterparty coverage notes across the active network',
      'Structuring commentary on shape, credit and REGO treatment',
      'Direct line to the founder running the deal',
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Built for every<br />
              <span className="text-etc-500">side of the trade.</span>
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Whether you&apos;re buying, originating, or investing &mdash; ETC replaces broker
              quotes and spreadsheets with published indicative curves, an active counterparty
              network, and founder-led execution across GB.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-px">
          {solutions.map((s) => (
            <Link
              key={s.tag}
              href={s.href}
              className="group grid lg:grid-cols-2 gap-8 card p-8 lg:p-12 hover:bg-etc-850"
            >
              <div>
                <div className="text-[10px] font-semibold text-etc-600 uppercase tracking-widest mb-3 mono">{s.tag}</div>
                <h2 className="text-2xl font-bold text-white group-hover:text-signal transition-colors">{s.title}</h2>
                <p className="mt-3 text-[14px] text-etc-500 leading-relaxed">{s.description}</p>
                <div className="mt-5 inline-flex items-center text-[13px] font-medium text-etc-600 group-hover:text-signal gap-1.5 transition-colors">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="flex items-center">
                <ul className="space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[13px] text-etc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
