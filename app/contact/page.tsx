'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import {
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building2,
  Zap,
} from 'lucide-react';

const interests = [
  'PPA Marketplace',
  'Asset Exchange',
  'BESS Marketplace',
  'Analytics & Modelling',
  '24/7 CFE Matching',
  'Grid Intelligence',
  'General Enquiry',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Request a personalised demo, ask a question, or learn how Energy Trade Centre can
              accelerate your renewable energy strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-navy-950 mb-4">Thank You</h2>
                  <p className="text-gray-500 text-lg">
                    We&apos;ve received your request. A member of our team will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-navy-950 mb-8">Request a Demo</h2>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors bg-white"
                    >
                      <option value="">Select your role</option>
                      <option>Energy Buyer / Procurement</option>
                      <option>Developer / Asset Owner</option>
                      <option>Investor / Fund Manager</option>
                      <option>Utility / Offtaker</option>
                      <option>Consultant / Advisor</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      I&apos;m interested in
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => (
                        <label
                          key={interest}
                          className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:border-green-500 hover:bg-green-50 transition-colors has-[:checked]:border-green-500 has-[:checked]:bg-green-50"
                        >
                          <input type="checkbox" name="interests" value={interest} className="sr-only" />
                          <span className="text-sm text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
                  >
                    Submit Request
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-navy-950 mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <div className="font-medium text-navy-950">Email</div>
                      <div className="text-gray-500">info@energytradecentre.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <div className="font-medium text-navy-950">Headquarters</div>
                      <div className="text-gray-500">London, United Kingdom</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Building2 className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <div className="font-medium text-navy-950">Additional Offices</div>
                      <div className="text-gray-500">Amsterdam &bull; Houston</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy-950 rounded-2xl p-8">
                <Zap className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Quick Response</h3>
                <p className="text-gray-400 leading-relaxed">
                  Our team typically responds within 24 hours. For demo requests,
                  we&apos;ll schedule a personalised walkthrough at a time that suits you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
