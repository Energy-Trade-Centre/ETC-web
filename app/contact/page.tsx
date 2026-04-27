'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Loader2 } from 'lucide-react';
import { events } from '@/lib/analytics';

const roles = [
  'Energy Buyer / Procurement',
  'Developer / Asset Owner',
  'Investor / Fund Manager',
  'Utility / Offtaker',
  'Consultant / Advisor',
  'Other',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-28 lg:pb-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05] tracking-tight">
              Book a call
            </h1>
            <p className="mt-6 text-lg text-etc-400 leading-relaxed">
              Tell us what you&apos;re trying to price, sell or underwrite. We&apos;ll come back with an indicative range, a read on the live counterparty network, and a time to talk &mdash; typically within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="border-t border-subtle py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="w-12 h-12 text-signal mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-white mb-3">Request received</h2>
                  <p className="text-etc-400">
                    We&apos;ll come back within 24 hours with an indicative view and a time to talk.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (status === 'submitting') return;
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    const payload = {
                      firstName: (data.get('firstName') as string) || '',
                      lastName: (data.get('lastName') as string) || '',
                      email: (data.get('email') as string) || '',
                      company: (data.get('company') as string) || '',
                      role: (data.get('role') as string) || '',
                      message: (data.get('message') as string) || '',
                      // Honeypot field — actual users never fill it.
                      website: (data.get('website') as string) || '',
                    };
                    setStatus('submitting');
                    setErrorMsg('');
                    try {
                      const resp = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload),
                      });
                      const json = (await resp.json().catch(() => ({}))) as { ok?: boolean; error?: string };
                      if (!resp.ok || !json.ok) {
                        throw new Error(json.error || 'Send failed');
                      }
                      events.formSubmit('contact', {
                        form_destination: '/contact',
                        role: payload.role,
                        has_company: Boolean(payload.company),
                      });
                      setStatus('success');
                    } catch (err) {
                      const msg = err instanceof Error ? err.message : 'Something went wrong';
                      setErrorMsg(msg);
                      setStatus('error');
                    }
                  }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">
                        First name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full px-4 py-3 surface-3 border border-subtle rounded-lg text-[14px] text-white placeholder-etc-600 focus:border-signal/40 focus:ring-1 focus:ring-signal/20 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full px-4 py-3 surface-3 border border-subtle rounded-lg text-[14px] text-white placeholder-etc-600 focus:border-signal/40 focus:ring-1 focus:ring-signal/20 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">
                      Work email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 surface-3 border border-subtle rounded-lg text-[14px] text-white placeholder-etc-600 focus:border-signal/40 focus:ring-1 focus:ring-signal/20 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="w-full px-4 py-3 surface-3 border border-subtle rounded-lg text-[14px] text-white placeholder-etc-600 focus:border-signal/40 focus:ring-1 focus:ring-signal/20 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 surface-3 border border-subtle rounded-lg text-[14px] text-etc-300 focus:border-signal/40 focus:ring-1 focus:ring-signal/20 outline-none transition-colors bg-transparent"
                    >
                      <option value="" className="bg-etc-900">Select your role</option>
                      {roles.map((r) => (
                        <option key={r} value={r} className="bg-etc-900">{r}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">
                      What do you need?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 surface-3 border border-subtle rounded-lg text-[14px] text-white placeholder-etc-600 focus:border-signal/40 focus:ring-1 focus:ring-signal/20 outline-none transition-colors resize-none"
                      placeholder="Technology, tenor, shape, volume — or the question you want answered."
                    />
                  </div>

                  {/* Honeypot — invisible, name="website". Bots fill every field; humans never see this. */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  {status === 'error' && (
                    <div className="text-[13px] text-amber bg-amber/10 border border-amber/20 rounded-lg px-4 py-3">
                      Couldn&apos;t send your message{errorMsg ? `: ${errorMsg}` : ''}. Please try again, or email{' '}
                      <a href="mailto:daniel@energytradecentre.com" className="underline">daniel@energytradecentre.com</a>{' '}
                      directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim disabled:opacity-60 disabled:cursor-not-allowed rounded-lg transition-colors"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending&hellip;
                      </>
                    ) : (
                      <>
                        Submit request
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card p-8">
                <h3 className="text-[11px] font-semibold text-etc-600 uppercase tracking-widest mb-6">Contact</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Mail className="w-4 h-4 text-signal mt-1" />
                    <div>
                      <div className="text-[13px] font-medium text-white">Email</div>
                      <div className="text-[13px] text-etc-500">daniel@energytradecentre.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-signal mt-1" />
                    <div>
                      <div className="text-[13px] font-medium text-white">Based</div>
                      <div className="text-[13px] text-etc-500">London, UK &middot; European energy markets, starting in GB</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-8">
                <div className="w-6 h-px bg-signal mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">Typical response: under 24 hours</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">
                  Founder-led. You&apos;ll speak to the person structuring the trade &mdash; not an SDR, not a pooled queue.
                </p>
              </div>

              <div className="card-elevated p-8">
                <div className="w-6 h-px bg-accent mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">Already working with us?</h3>
                <p className="text-[13px] text-etc-500 leading-relaxed">
                  Reach out directly to your point of contact, or email the inbox above and we will route it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
