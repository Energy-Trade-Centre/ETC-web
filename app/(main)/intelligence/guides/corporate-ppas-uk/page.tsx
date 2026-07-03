import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/json-ld';
import { breadcrumbList, SITE_URL } from '@/lib/seo';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate PPAs in the UK — the complete guide',
  description:
    'How corporate power purchase agreements work in the UK: sleeved vs virtual structures, delivery profiles, what drives the price, the procurement process step by step, and the contract terms that matter.',
  alternates: { canonical: `${SITE_URL}/intelligence/guides/corporate-ppas-uk` },
};

const G = '/intelligence/glossary';

export default function CorporatePpaGuidePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'ETC Intel', path: '/intelligence' },
          { name: 'Guides', path: '/intelligence/guides' },
          { name: 'Corporate PPAs in the UK', path: '/intelligence/guides/corporate-ppas-uk' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Corporate PPAs in the UK — the complete guide',
          description:
            'How corporate power purchase agreements work in the UK: structures, pricing drivers, process and key contract terms.',
          url: `${SITE_URL}/intelligence/guides/corporate-ppas-uk`,
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
            Guide &middot; For buyers
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
            Corporate PPAs in the UK
          </h1>
          <p className="mt-6 text-lg text-etc-300 leading-relaxed font-medium">
            What a corporate PPA is, how sleeved and virtual structures differ, what actually
            drives the price, and how a procurement runs from first scoping to signed contract.
          </p>
        </div>
      </section>

      <section className="border-t border-subtle py-14 lg:py-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[15px] text-etc-400 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">What is a corporate PPA?</h2>
            <p>
              A corporate <Link href={`${G}/power-purchase-agreement`} className="text-signal hover:underline">power purchase agreement</Link>{' '}
              is a long-term contract in which a business buys power directly from a specific
              renewable generator — rather than simply taking a green tariff from its supplier.
              The contract fixes price, tenor, volume basis and certificate treatment ahead of
              delivery, typically over 5 to 15 years in the UK corporate market.
            </p>
            <p className="mt-4">
              Companies sign them for three reasons: long-dated price certainty on a material
              operating cost; credible renewable claims backed by a named asset and its{' '}
              <Link href={`${G}/rego`} className="text-signal hover:underline">REGOs</Link>; and{' '}
              <Link href={`${G}/additionality`} className="text-signal hover:underline">additionality</Link> —
              contracting a pre-construction project means the purchase helps a new asset get built,
              which is increasingly the test sustainability claims are held to.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">Sleeved or virtual: the first structural choice</h2>
            <p>
              A <Link href={`${G}/sleeved-ppa`} className="text-signal hover:underline">sleeved PPA</Link> is
              physical: a licensed supplier sits between the generator and the buyer, delivers the
              project&apos;s power through its supply licence, and tops up or sells back the
              difference between the asset&apos;s output and the buyer&apos;s demand, for a sleeving
              fee. The buyer&apos;s electricity bill and its PPA become one integrated arrangement.
            </p>
            <p className="mt-4">
              A <Link href={`${G}/virtual-ppa`} className="text-signal hover:underline">virtual PPA</Link> is
              financial: no power flows between the parties. They settle the difference between an
              agreed strike price and a market reference, while the buyer keeps its existing supply
              arrangements. Virtual structures suit multi-site buyers and those contracting at
              scale, but can attract derivative accounting treatment — worth assessing early with
              your auditors.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">Delivery profile: PaP, baseload or shaped</h2>
            <p>
              The second structural choice is what delivery profile you buy.{' '}
              <Link href={`${G}/pay-as-produced-ppa`} className="text-signal hover:underline">Pay-as-produced</Link>{' '}
              takes the asset&apos;s output as it comes and prices cheapest;{' '}
              <Link href={`${G}/baseload-ppa`} className="text-signal hover:underline">baseload</Link>{' '}
              delivers a flat block and prices at a premium because the seller absorbs the shape
              risk; <Link href={`${G}/shaped-ppa`} className="text-signal hover:underline">shaped</Link>{' '}
              sits between the two. The right answer depends on how your demand profile matches
              renewable output and how much shape risk your organisation can carry.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">What drives the price</h2>
            <p>
              A corporate PPA price is built from identifiable components: the underlying GB
              forward power curve for the tenor; a discount or premium for the delivery profile
              (PaP discounts for shape and capture risk, baseload premia for firming); a credit
              component reflecting who stands behind the contract; the treatment of{' '}
              <Link href={`${G}/curtailment`} className="text-signal hover:underline">curtailment</Link> and
              negative-price hours; and the value of REGOs if they transfer. Understanding which
              component moved is what separates negotiating from guessing — and it&apos;s why a
              published reference matters. The{' '}
              <Link href="/ppa-prices" className="text-signal hover:underline">ETC GB PPA Index</Link>{' '}
              publishes indicative PaP ranges by technology and tenor as that starting point.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">The process, step by step</h2>
            <ol className="space-y-3 list-decimal pl-5 marker:text-signal marker:font-semibold">
              <li>
                <span className="text-etc-300 font-medium">Scope the requirement.</span> Annual
                volume, sites and metering, target tenor, sleeved vs virtual preference, and the
                sustainability claims the contract needs to support.
              </li>
              <li>
                <span className="text-etc-300 font-medium">Benchmark before you tender.</span>{' '}
                Anchor internal approvals to a published reference range rather than the first
                broker print you receive.
              </li>
              <li>
                <span className="text-etc-300 font-medium">Shortlist counterparties.</span>{' '}
                Operating assets deliver sooner; pre-construction projects score on additionality
                but carry timing risk — check development stage (
                <Link href={`${G}/notice-to-proceed`} className="text-signal hover:underline">NTP</Link>,{' '}
                <Link href={`${G}/commercial-operation-date`} className="text-signal hover:underline">COD</Link>).
              </li>
              <li>
                <span className="text-etc-300 font-medium">Negotiate the term sheet.</span> Price,
                profile, tenor, credit support, curtailment treatment, REGO transfer, change-in-law —
                the heads of terms determine 90% of the final contract.
              </li>
              <li>
                <span className="text-etc-300 font-medium">Contract and close.</span> Long-stop
                dates for pre-COD projects, conditions precedent, and the sleeving supplier&apos;s
                terms if physical. UK corporate PPAs typically run 3–9 months from scoping to
                signature.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">The terms that matter most</h2>
            <p>
              Beyond headline price: who carries volume and shape risk in each settlement period;
              what happens in negative-price hours; whether curtailment is compensated; the credit
              support each side posts and the triggers that change it; REGO delivery obligations;
              and termination and change-in-law provisions on a contract that may outlive two
              parliaments. None of these are boilerplate — each one is a price lever in disguise.
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-lg font-semibold text-white mb-2">Pricing a corporate PPA?</h2>
            <p className="text-[13px] text-etc-500 leading-relaxed mb-5">
              Start from the published reference, then get a live range for your actual demand
              profile and structure. Founder-led, from indicative quote to signed contract.
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
