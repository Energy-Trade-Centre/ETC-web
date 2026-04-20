import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions | Procurement, Origination & Investment',
  description:
    'ETC serves corporate buyers, renewable energy developers, and infrastructure investors with institutional-grade tools for PPA trading, asset exchange, and portfolio management.',
  alternates: { canonical: 'https://energytradecentre.com/solutions' },
};

const solutions = [
  {
    tag: 'PROCUREMENT',
    title: 'For corporate buyers & utilities',
    description: 'Your CFO doesn\'t want a PPA. They want a risk-adjusted position with transparent downside. ETC gives procurement teams the liquidity, analytics, and execution speed to deliver certainty.',
    href: '/solutions/buyers',
    points: ['4,500+ live PPA offers across 12 markets', 'Monte Carlo NPV modelling for board presentations', '24/7 CFE hourly matching and verification', 'FastTrack PPA: accelerated close on standardised terms'],
  },
  {
    tag: 'ORIGINATION',
    title: 'For developers & asset owners',
    description: 'Stop relying on three brokers and a Rolodex. ETC gives your development team direct access to the widest institutional buyer network — with deal structures that maximise your transaction value.',
    href: '/solutions/sellers',
    points: ['Direct access to institutional buyer network', 'Asset+PPA bundling for 25-35% premium', 'Auction and bilateral deal structures', 'Global reach across 28 countries'],
  },
  {
    tag: 'INVESTMENT',
    title: 'For infrastructure funds & portfolio managers',
    description: 'From deal sourcing to IFRS 9 compliance, ETC is the platform energy infrastructure investors actually need — built for investment committees, not retrofitted from a consumer tool.',
    href: '/solutions/investors',
    points: ['Monte Carlo simulation across 40+ scenarios', 'IFRS 9 credit risk classification', '7-factor proprietary asset valuations', 'Portfolio performance benchmarking'],
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
              Whether you&apos;re buying certainty, originating offtake, or managing a portfolio —
              ETC replaces fragmented tools with unified market infrastructure.
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
