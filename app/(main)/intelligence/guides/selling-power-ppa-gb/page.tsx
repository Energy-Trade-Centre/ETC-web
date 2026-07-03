import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/json-ld';
import { breadcrumbList, SITE_URL } from '@/lib/seo';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Selling your power — PPA routes to market for GB generators',
  description:
    'A generator’s guide to selling power in GB: utility vs corporate PPA vs merchant routes, what buyers actually price, how to benchmark offers, and the process from data pack to signed contract.',
  alternates: { canonical: `${SITE_URL}/intelligence/guides/selling-power-ppa-gb` },
};

const G = '/intelligence/glossary';

export default function SellingPowerGuidePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'ETC Intel', path: '/intelligence' },
          { name: 'Guides', path: '/intelligence/guides' },
          { name: 'Selling your power', path: '/intelligence/guides/selling-power-ppa-gb' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Selling your power — PPA routes to market for GB generators',
          description:
            'Routes to market for GB renewable generators: utility and corporate PPAs, merchant exposure, what buyers price, and how to run the process.',
          url: `${SITE_URL}/intelligence/guides/selling-power-ppa-gb`,
          author: { '@type': 'Organization', name: 'Energy Trade Centre', url: SITE_URL },
          publisher: { '@type': 'Organization', name: 'Energy Trade Centre', url: SITE_URL },
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-28 lg:pb-16">
          <Link
            href="/intelligence/guides"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-etc-500 hover:text-signal transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Guides
          </Link>
          <div className="text-[10px] font-semibold text-signal uppercase tracking-widest mb-4 mono">
            Guide &middot; For generators
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
            Selling your power in GB
          </h1>
          <p className="mt-6 text-lg text-etc-300 leading-relaxed font-medium">
            The routes to market open to a GB renewable generator, what buyers actually price
            when they look at your project, and how to run the process so the best offer wins —
            not just the first one.
          </p>
        </div>
      </section>

      <section className="border-t border-subtle py-14 lg:py-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[15px] text-etc-400 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Your three routes to market</h2>
            <p>
              Every generating asset needs a{' '}
              <Link href={`${G}/route-to-market`} className="text-signal hover:underline">route to market</Link>.
              In GB there are three broad options, and most portfolios end up blending them. A{' '}
              <span className="text-etc-300">utility PPA</span> — selling to a supplier or trading
              desk — is the traditional route: simple, liquid, usually shorter-dated. A{' '}
              <span className="text-etc-300">corporate PPA</span> — selling to an end consumer,
              sleeved or virtual — typically pays more for longer tenors, because the buyer values
              the named asset and its certificates, not just the electrons. Staying{' '}
              <Link href={`${G}/merchant-exposure`} className="text-signal hover:underline">merchant</Link>{' '}
              keeps the upside and all of the volatility; lenders will cap how much of it you can
              carry.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">What buyers actually price</h2>
            <p>
              Offers differ because buyers price your project&apos;s specifics, not a generic
              curve: the expected generation profile and how it correlates with GB prices (capture
              risk and cannibalisation); the delivery structure —{' '}
              <Link href={`${G}/pay-as-produced-ppa`} className="text-signal hover:underline">pay-as-produced</Link>{' '}
              versus firmer profiles; exposure to{' '}
              <Link href={`${G}/curtailment`} className="text-signal hover:underline">curtailment</Link> and
              negative-price hours; your credit story and what support you can post; and{' '}
              <Link href={`${G}/rego`} className="text-signal hover:underline">REGO</Link> treatment.
              Development-stage projects also carry timing risk — a buyer prices a{' '}
              <Link href={`${G}/notice-to-proceed`} className="text-signal hover:underline">pre-NTP</Link>{' '}
              project differently from one approaching{' '}
              <Link href={`${G}/commercial-operation-date`} className="text-signal hover:underline">COD</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">Benchmark before you negotiate</h2>
            <p>
              The single most common mistake generators make is anchoring on the first print they
              receive. One offer is a data point, not a market. Before responding to anything,
              establish where the market sits for your technology and tenor — the{' '}
              <Link href="/ppa-prices" className="text-signal hover:underline">ETC GB PPA Index</Link>{' '}
              publishes indicative PaP ranges exactly for this purpose — then judge every offer as
              a spread to that reference. An offer 10% below the published range needs a reason:
              shape, credit, curtailment terms, or simply a counterparty trying its luck.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">Running the process</h2>
            <ol className="space-y-3 list-decimal pl-5 marker:text-signal marker:font-semibold">
              <li>
                <span className="text-etc-300 font-medium">Assemble the data pack.</span> Capacity,
                technology, location and grid connection status, expected generation (P50/P90),
                target tenor and structure, development stage and COD. Complete packs get priced;
                incomplete ones get discounted for uncertainty.
              </li>
              <li>
                <span className="text-etc-300 font-medium">Get an indicative range.</span> Anchor
                on the published reference and a live read on which counterparties are pricing your
                shape today.
              </li>
              <li>
                <span className="text-etc-300 font-medium">Go to the market wide enough.</span>{' '}
                Utilities, European majors, independent traders and corporate offtakers price the
                same asset very differently. A process that only reaches one desk finds one price.
              </li>
              <li>
                <span className="text-etc-300 font-medium">Negotiate structure, not just price.</span>{' '}
                A higher headline with harsh curtailment or shape terms can be worth less than a
                lower one with clean terms. Compare offers on a normalised basis.
              </li>
              <li>
                <span className="text-etc-300 font-medium">Execute with one accountable party.</span>{' '}
                Term sheet to signed contract typically runs 2–6 months; hand-offs between brokers
                and desks are where deals stall.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">Common pitfalls</h2>
            <p>
              Over-tenoring — locking the full output for 15 years when finance only requires 10 —
              gives away optionality for nothing. Ignoring shape terms turns a good headline price
              into a poor realised one. And treating REGOs as an afterthought leaves value on the
              table: certificate treatment belongs in the first conversation, not the last.
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-lg font-semibold text-white mb-2">Taking a project to market?</h2>
            <p className="text-[13px] text-etc-500 leading-relaxed mb-5">
              Send the basics — technology, capacity, stage, target tenor — and we&apos;ll come
              back with an indicative range from the published curves and the counterparties
              actually pricing your shape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/ppa-prices"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-signal hover:text-signal-dim transition-colors"
              >
                See the GB PPA Index <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-signal hover:text-signal-dim transition-colors"
              >
                Book a call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
