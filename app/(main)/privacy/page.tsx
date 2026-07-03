import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Energy Trade Centre Ltd collects, uses and protects personal data submitted through energytradecentre.com, including contact enquiries and website analytics.',
  alternates: { canonical: 'https://energytradecentre.com/privacy' },
};

const LAST_UPDATED = '1 July 2026';

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-28 lg:pb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[13px] text-etc-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="border-t border-subtle py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-[14px] text-etc-400 leading-relaxed">
          <p>
            This policy explains how Energy Trade Centre Ltd (&ldquo;ETC&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;) collects and uses personal data when you use{' '}
            <span className="text-etc-300">energytradecentre.com</span>. We are the data controller
            for the personal data described below.
          </p>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Data we collect</h2>
            <ul className="space-y-2 list-disc pl-5 marker:text-signal">
              <li>
                <span className="text-etc-300">Contact enquiries.</span> When you submit our contact
                form we collect your name, work email, company, role and any message you send us.
              </li>
              <li>
                <span className="text-etc-300">Usage data.</span> We use Google Analytics 4 to
                understand how the site is used (pages viewed, approximate location, device and
                referral source). This data is collected through cookies and similar technologies.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">How and why we use it</h2>
            <ul className="space-y-2 list-disc pl-5 marker:text-signal">
              <li>To respond to your enquiry and discuss whether ETC can be useful to you.</li>
              <li>To operate, secure and improve the website.</li>
              <li>
                To understand aggregate site performance and demand for our services.
              </li>
            </ul>
            <p className="mt-3">
              Our lawful bases are your consent (for analytics cookies) and our legitimate interests
              in responding to enquiries and running our business, under the UK GDPR and the Data
              Protection Act 2018.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Who we share it with</h2>
            <p>
              We use trusted service providers to run the site and handle enquiries, including{' '}
              <span className="text-etc-300">Resend</span> (transactional email delivery) and{' '}
              <span className="text-etc-300">Google Analytics</span> (website measurement). These
              providers process data on our behalf under appropriate agreements. We do not sell your
              personal data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Retention</h2>
            <p>
              We keep enquiry data for as long as needed to respond and to maintain a record of our
              business relationship, and then delete or anonymise it. Analytics data is retained in
              line with our Google Analytics configuration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Your rights</h2>
            <p>
              Under UK data protection law you have the right to access, correct, delete or restrict
              the use of your personal data, to object to certain processing, and to data
              portability. You may also withdraw consent to analytics cookies at any time and
              complain to the Information Commissioner&rsquo;s Office (ico.org.uk).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
            <p>
              For any privacy request, email{' '}
              <a href="mailto:daniel@energytradecentre.com" className="text-signal hover:underline">
                daniel@energytradecentre.com
              </a>
              . Energy Trade Centre Ltd is based in London, United Kingdom.
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
