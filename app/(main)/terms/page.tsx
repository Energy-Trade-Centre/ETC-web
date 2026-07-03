import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms governing use of energytradecentre.com, including the status of indicative pricing, intellectual property, disclaimers and governing law.',
  alternates: { canonical: 'https://energytradecentre.com/terms' },
};

const LAST_UPDATED = '1 July 2026';

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-28 lg:pb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
            Terms of Use
          </h1>
          <p className="mt-4 text-[13px] text-etc-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="border-t border-subtle py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[14px] text-etc-400 leading-relaxed">
          <p>
            These terms govern your use of <span className="text-etc-300">energytradecentre.com</span>{' '}
            (the &ldquo;site&rdquo;), operated by Energy Trade Centre Ltd (&ldquo;ETC&rdquo;). By using
            the site you agree to these terms.
          </p>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Use of the site</h2>
            <p>
              The site is provided for general information about ETC&rsquo;s services. You agree not
              to misuse it, attempt to disrupt it, or use it for any unlawful purpose.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Indicative pricing and market information</h2>
            <p>
              Any prices, curves, ranges or market commentary shown or provided by ETC are{' '}
              <span className="text-etc-300">indicative only</span>. They are not offers, quotes,
              financial advice, or a recommendation to enter into any transaction, and may change
              without notice. Binding terms are only ever set out in a signed contract. You are
              responsible for your own analysis and decisions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Intellectual property</h2>
            <p>
              The content, design and branding of the site are owned by ETC or its licensors and are
              protected by intellectual property laws. You may not copy, reproduce or redistribute
              them without our permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">No warranty</h2>
            <p>
              The site is provided &ldquo;as is&rdquo; without warranties of any kind. While we work
              to keep information accurate and current, we do not guarantee that it is complete,
              error-free or up to date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, ETC is not liable for any loss or damage
              arising from your use of, or reliance on, the site or its content. Nothing in these
              terms limits liability that cannot be limited under applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Governing law</h2>
            <p>
              These terms are governed by the laws of England and Wales, and the courts of England
              and Wales have exclusive jurisdiction over any dispute.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
            <p>
              Questions about these terms? Email{' '}
              <a href="mailto:daniel@energytradecentre.com" className="text-signal hover:underline">
                daniel@energytradecentre.com
              </a>
              .
            </p>
          </div>

          <p className="text-[12px] text-etc-600">
            This page is provided for general information and does not constitute legal advice.
          </p>
        </div>
      </section>
    </>
  );
}
