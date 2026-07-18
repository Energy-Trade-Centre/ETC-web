'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { events, trackEvent } from '@/lib/analytics';

type Tech = 'offshore' | 'onshore' | 'solar';
type Tenor = 3 | 5 | 10;

const technologies: Record<Tech, { label: string; fullLoadHours: number }> = {
  offshore: { label: 'Offshore Wind', fullLoadHours: 4200 },
  onshore: { label: 'Onshore Wind', fullLoadHours: 3200 },
  solar: { label: 'Solar PV', fullLoadHours: 1100 },
};

const formatMillions = (value: number) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 1 }).format(value / 1e6) + 'm';

export default function PPAEstimator() {
  const [tech, setTech] = useState<Tech>('onshore');
  const [tenor, setTenor] = useState<Tenor>(5);
  const [capacity, setCapacity] = useState(50);
  const [referencePrice, setReferencePrice] = useState(60);

  const result = useMemo(() => {
    const annualMWh = capacity * technologies[tech].fullLoadHours;
    const annualValue = annualMWh * referencePrice;
    return {
      annualMWh,
      annualValue,
      contractMWh: annualMWh * tenor,
      contractValue: annualValue * tenor,
    };
  }, [capacity, referencePrice, tech, tenor]);

  const enquiryHref = useMemo(() => {
    const query = new URLSearchParams({
      source: 'ppa-estimator',
      technology: technologies[tech].label,
      capacity: `${capacity} MW`,
      tenor: `${tenor} years`,
      referencePrice: `£${referencePrice}/MWh`,
      annualGeneration: `${Math.round(result.annualMWh).toLocaleString('en-GB')} MWh`,
      contractValue: formatMillions(result.contractValue),
    });
    return `/contact?${query.toString()}`;
  }, [capacity, referencePrice, result, tech, tenor]);

  return (
    <div className="card p-6 sm:p-8" aria-label="PPA value estimator">
      <div className="space-y-6">
        <div>
          <p className="text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">Technology</p>
          <div className="grid grid-cols-3 gap-1.5" role="group" aria-label="Technology">
            {(Object.keys(technologies) as Tech[]).map((key) => (
              <button
                type="button"
                key={key}
                onClick={() => setTech(key)}
                aria-pressed={tech === key}
                className={`text-[11px] sm:text-[12px] font-medium px-1 py-2.5 rounded-md transition-colors ${
                  tech === key
                    ? 'bg-signal/10 text-signal border border-signal/20'
                    : 'surface-3 text-etc-400 border border-subtle hover:text-white'
                }`}
              >
                {technologies[key].label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold text-etc-500 uppercase tracking-wider mb-2">Contract term</p>
          <div className="grid grid-cols-3 gap-1.5" role="group" aria-label="Contract term">
            {([3, 5, 10] as Tenor[]).map((years) => (
              <button
                type="button"
                key={years}
                onClick={() => setTenor(years)}
                aria-pressed={tenor === years}
                className={`text-[13px] font-medium py-2.5 rounded-md transition-colors ${
                  tenor === years
                    ? 'bg-signal/10 text-signal border border-signal/20'
                    : 'surface-3 text-etc-400 border border-subtle hover:text-white'
                }`}
              >
                {years} years
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="ppa-capacity" className="text-[11px] font-semibold text-etc-500 uppercase tracking-wider">Capacity</label>
            <output htmlFor="ppa-capacity" className="mono text-sm text-white font-medium">{capacity} MW</output>
          </div>
          <input id="ppa-capacity" type="range" min={5} max={400} step={5} value={capacity} onChange={(event) => setCapacity(Number(event.target.value))} className="w-full h-1 bg-etc-700 rounded-full appearance-none cursor-pointer accent-signal" />
          <div className="flex justify-between text-[10px] text-etc-600 mt-1"><span>5 MW</span><span>400 MW</span></div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="ppa-price" className="text-[11px] font-semibold text-etc-500 uppercase tracking-wider">Your reference price</label>
            <output htmlFor="ppa-price" className="mono text-sm text-white font-medium">£{referencePrice}/MWh</output>
          </div>
          <input id="ppa-price" type="range" min={30} max={120} step={1} value={referencePrice} onChange={(event) => setReferencePrice(Number(event.target.value))} className="w-full h-1 bg-etc-700 rounded-full appearance-none cursor-pointer accent-signal" />
          <div className="flex justify-between text-[10px] text-etc-600 mt-1"><span>£30/MWh</span><span>£120/MWh</span></div>
        </div>

        <div className="border-t border-subtle pt-6 space-y-3" aria-live="polite">
          <div className="flex items-center justify-between gap-4"><span className="text-[12px] text-etc-500">Estimated annual generation</span><span className="mono text-sm text-etc-300">{Math.round(result.annualMWh / 1000)}k MWh</span></div>
          <div className="flex items-center justify-between gap-4"><span className="text-[12px] text-etc-500">Annual gross value</span><span className="mono text-sm text-etc-300">{formatMillions(result.annualValue)}</span></div>
          <div className="flex items-center justify-between gap-4"><span className="text-[12px] text-etc-500">Contract volume</span><span className="mono text-sm text-etc-300">{(result.contractMWh / 1e6).toFixed(1)}m MWh</span></div>
          <div className="flex items-center justify-between gap-4 border-t border-subtle pt-4"><span className="text-[12px] text-etc-400 font-medium">Indicative contract value</span><span className="mono text-xl text-signal font-bold">{formatMillions(result.contractValue)}</span></div>
        </div>

        <p className="text-[10px] text-etc-600 leading-relaxed">
          Planning estimate based on your chosen reference price and standard technology load factors. This is not an ETC market quote or binding offer; structure, shape, credit, curtailment and market conditions affect executable pricing.
        </p>

        <Link
          href={enquiryHref}
          onClick={() => {
            events.ctaClick('Turn this into an executable PPA', 'ppa_estimator', enquiryHref);
            trackEvent('estimator_lead', { technology: tech, capacity_mw: capacity, tenor_years: tenor, reference_price: referencePrice });
          }}
          className="btn-primary w-full justify-center"
        >
          Turn this into an executable PPA <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-center text-[11px] text-etc-500">Your assumptions will be carried into the enquiry form.</p>
      </div>
    </div>
  );
}
