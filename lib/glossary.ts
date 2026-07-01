/**
 * GB energy markets glossary — the data source for /intelligence/glossary.
 *
 * Content rules (keep these when adding terms):
 * - Definitional and structural only. No prices, rates, auction results or
 *   any number that goes stale — those belong in ETC Intel, not here.
 * - GB-focused, plain language, accurate as written. Where a scheme has been
 *   superseded or renamed, say so rather than describing the old world.
 * - `short` doubles as the meta description and index summary: 1–2 sentences.
 */

export type GlossaryTerm = {
  slug: string;
  term: string;
  category: string;
  /** 1–2 sentence summary — used on the index page and as the meta description. */
  short: string;
  /** Body paragraphs, rendered in order. */
  body: string[];
  /** Slugs of related terms. */
  related: string[];
};

export const categories = [
  'PPA structures & contracting',
  'Certificates & support schemes',
  'Storage & flexibility',
  'Grid & market operations',
  'Projects & investment',
] as const;

export const glossary: GlossaryTerm[] = [
  // ── PPA structures & contracting ────────────────────────────────────────
  {
    slug: 'power-purchase-agreement',
    term: 'Power purchase agreement (PPA)',
    category: 'PPA structures & contracting',
    short:
      'A long-term contract between an electricity generator and a buyer that fixes the commercial terms of power supply — price, tenor, volume and shape — ahead of delivery.',
    body: [
      'A power purchase agreement sets out who buys a generator’s output, over what period, at what price and in what shape. In GB, corporate and utility PPAs commonly run over tenors of three to ten years or more, across technologies such as offshore wind, onshore wind and solar PV.',
      'For the generator, a PPA converts uncertain merchant revenue into contracted cash flow, which is often what makes a project financeable. For the buyer, it provides price certainty on long-dated power and — where renewable certificates are transferred with it — a basis for renewable supply claims.',
      'The main structural choices are the delivery profile (pay-as-produced, shaped or baseload) and the delivery mechanism (a physical sleeved structure, or a financially settled virtual structure).',
    ],
    related: ['pay-as-produced-ppa', 'sleeved-ppa', 'virtual-ppa', 'offtaker'],
  },
  {
    slug: 'pay-as-produced-ppa',
    term: 'Pay-as-produced (PaP) PPA',
    category: 'PPA structures & contracting',
    short:
      'A PPA structure in which the buyer takes the generator’s output as it is produced, at an agreed price per MWh, carrying the asset’s shape and volume risk.',
    body: [
      'Under a pay-as-produced structure, delivery simply follows the asset: whatever the wind farm or solar park generates in each settlement period, the buyer takes at the contracted price. There is no obligation on the seller to firm the profile up.',
      'Because the buyer carries the shape and volume risk of an intermittent profile — including the tendency of renewable output to be concentrated in lower-priced hours — pay-as-produced typically prices at a discount to baseload for the same asset and tenor.',
      'PaP is the most common starting point for renewable PPAs, and the reference against which shaped and baseload premia are usually quoted.',
    ],
    related: ['baseload-ppa', 'shaped-ppa', 'power-purchase-agreement'],
  },
  {
    slug: 'baseload-ppa',
    term: 'Baseload PPA',
    category: 'PPA structures & contracting',
    short:
      'A PPA delivering a flat, constant volume in every settlement period, independent of how the underlying asset actually generates.',
    body: [
      'A baseload PPA commits the seller to deliver a flat block of power — the same volume in every settlement period — regardless of the underlying asset’s actual output. The difference between the asset’s real profile and the flat block has to be managed in the market by the seller or its route-to-market provider.',
      'Because the seller absorbs the shape risk, baseload prices at a premium to pay-as-produced for the same asset. It also gives the buyer a product that is directly comparable to standard wholesale baseload contracts, which simplifies hedging and internal benchmarking.',
    ],
    related: ['pay-as-produced-ppa', 'shaped-ppa', 'merchant-exposure'],
  },
  {
    slug: 'shaped-ppa',
    term: 'Shaped PPA',
    category: 'PPA structures & contracting',
    short:
      'A PPA in which delivery follows a profile agreed up front — sitting between pay-as-produced and baseload, with the residual shape risk priced into the contract.',
    body: [
      'A shaped PPA fixes a delivery profile in advance — for example monthly or seasonal volumes reflecting the buyer’s demand or the asset’s expected generation — rather than following actual output (pay-as-produced) or a flat block (baseload).',
      'Shaping allocates part of the profile risk to each side: the seller commits to a firmer profile than PaP, while the buyer accepts a profile that is not perfectly flat. Where the boundary sits, and how the residual shape risk is priced, is one of the main negotiation points in structuring.',
    ],
    related: ['pay-as-produced-ppa', 'baseload-ppa', 'power-purchase-agreement'],
  },
  {
    slug: 'sleeved-ppa',
    term: 'Sleeved PPA',
    category: 'PPA structures & contracting',
    short:
      'A physical corporate PPA in which a licensed electricity supplier sits between the generator and the buyer, “sleeving” the power through its supply licence.',
    body: [
      'In a sleeved structure, the corporate buyer contracts for the output of a specific asset, but the power is delivered through a licensed supplier. The supplier handles balancing and imbalance exposure, tops up supply when the asset under-delivers, and sells back surplus when it over-delivers — for a sleeving fee.',
      'Sleeving lets a corporate buy power from a named project without becoming a market participant itself. It contrasts with a virtual PPA, where no physical delivery to the buyer takes place and the contract settles financially.',
    ],
    related: ['virtual-ppa', 'power-purchase-agreement', 'offtaker'],
  },
  {
    slug: 'virtual-ppa',
    term: 'Virtual (financial) PPA',
    category: 'PPA structures & contracting',
    short:
      'A PPA settled financially against a market reference price rather than through physical delivery — a private contract for difference between generator and buyer.',
    body: [
      'Under a virtual PPA, the parties agree a strike price against a market reference. When the reference price is below the strike, the buyer pays the generator the difference; when it is above, the generator pays the buyer. No power flows between them — each side continues to buy or sell electricity through its existing arrangements.',
      'Virtual structures are commonly used by corporates contracting at scale or across many sites, since they avoid physical delivery logistics entirely. Renewable certificates are typically transferred alongside the financial contract to support the buyer’s renewable claims.',
      'A virtual PPA is a private, bilateral contract for difference — distinct from the UK government’s CfD support scheme, which shares the mechanics but not the counterparty or purpose. Depending on its terms, a virtual PPA may be treated as a financial derivative for accounting purposes, which buyers should assess early.',
    ],
    related: ['sleeved-ppa', 'contracts-for-difference', 'power-purchase-agreement'],
  },
  {
    slug: 'route-to-market',
    term: 'Route-to-market (RtM)',
    category: 'PPA structures & contracting',
    short:
      'How a generator converts its output into revenue — through contracted offtake, merchant sales, or a route-to-market agreement with a supplier or trader providing market access.',
    body: [
      'Every generating asset needs a route from metered output to money. The main options are a long-term PPA with a creditworthy offtaker, selling merchant into the wholesale market, or a route-to-market agreement in which a supplier or trading house provides market access, forecasting and balancing services — usually for smaller or independent generators without their own trading capability.',
      'Route-to-market choices interact directly with financing: lenders generally require a minimum level of contracted revenue, which shapes how much merchant exposure an owner can retain and what PPA structure fits the project.',
    ],
    related: ['merchant-exposure', 'power-purchase-agreement', 'balancing-mechanism'],
  },
  {
    slug: 'merchant-exposure',
    term: 'Merchant exposure',
    category: 'PPA structures & contracting',
    short:
      'Revenue earned at prevailing wholesale prices without contracted offtake — full upside, full volatility.',
    body: [
      'An asset is “merchant” to the extent its output is sold at spot or short-term market prices rather than under contract. Merchant revenue captures upside when prices are high, but leaves the owner fully exposed to price falls, capture-price erosion and volatility.',
      'For renewables, merchant risk is compounded by cannibalisation: wind and solar assets tend to generate at the same time as their neighbours, depressing the prices they capture. Many owners run hybrid strategies — contracting part of the output under a PPA and leaving a portion merchant — with the split driven by risk appetite and lender requirements.',
    ],
    related: ['route-to-market', 'pay-as-produced-ppa', 'curtailment'],
  },
  {
    slug: 'offtaker',
    term: 'Offtaker',
    category: 'PPA structures & contracting',
    short:
      'The buyer of power under a PPA — a utility, supplier, trading house or corporate that commits to purchase a generator’s output.',
    body: [
      'The offtaker is the counterparty that takes the generator’s power under a PPA. In GB the offtaker universe spans utilities and licensed suppliers, European energy majors, independent traders and originators, and corporate or industrial buyers contracting for their own consumption.',
      'Offtaker creditworthiness is central to a PPA’s value: a long-dated contract is only as bankable as the counterparty standing behind it, which is why credit terms, parent guarantees and collateral arrangements feature heavily in structuring.',
    ],
    related: ['power-purchase-agreement', 'sleeved-ppa'],
  },

  // ── Certificates & support schemes ──────────────────────────────────────
  {
    slug: 'rego',
    term: 'REGO (Renewable Energy Guarantee of Origin)',
    category: 'Certificates & support schemes',
    short:
      'A certificate issued by Ofgem for each MWh of accredited renewable generation in Great Britain, used to evidence renewable electricity supply.',
    body: [
      'REGOs are issued to accredited renewable generators at one certificate per megawatt-hour of output. Suppliers use them for fuel-mix disclosure, and they underpin “green tariff” and corporate renewable-supply claims in Great Britain.',
      'REGOs can be transferred with the power they relate to (“bundled”) or traded separately (“unbundled”). In PPA negotiations, whether REGOs transfer to the buyer — and at what value — is a standard structuring point.',
      'REGOs apply in Great Britain. The EU operates a separate Guarantees of Origin scheme, and the two are no longer mutually recognised.',
    ],
    related: ['guarantee-of-origin', 'twenty-four-seven-cfe', 'additionality'],
  },
  {
    slug: 'guarantee-of-origin',
    term: 'Guarantee of Origin (GoO)',
    category: 'Certificates & support schemes',
    short:
      'The EU’s renewable electricity certificate — one certificate per MWh of renewable generation, used to evidence renewable supply across EU member states.',
    body: [
      'Guarantees of Origin perform the same role in the EU that REGOs perform in Great Britain: one certificate is issued per megawatt-hour of accredited renewable generation, and the certificate — not the physical electron — carries the renewable attribute used in supply disclosure and corporate claims.',
      'GoOs are traded across EU member states through national registries. Following Brexit, the GB and EU schemes are no longer mutually recognised, so cross-border transactions need to be structured with the destination market’s certificate regime in mind.',
    ],
    related: ['rego'],
  },
  {
    slug: 'contracts-for-difference',
    term: 'Contracts for Difference (CfD)',
    category: 'Certificates & support schemes',
    short:
      'The UK government’s main support scheme for new low-carbon generation — a two-way contract that tops up or claws back the difference between an agreed strike price and a market reference price.',
    body: [
      'Under the CfD scheme, a low-carbon generator agrees a strike price through a competitive allocation round. When the market reference price is below the strike, the generator receives a top-up payment; when it is above, the generator pays the difference back. Contracts run for 15 years and sit with the Low Carbon Contracts Company (LCCC), a government-owned counterparty.',
      'The two-way design gives new projects long-term revenue stability while capping consumer cost when prices are high. Allocation rounds are run periodically, with capacity awarded by auction within technology pots.',
      'A CfD stabilises the price a generator receives, but the generator still needs to sell its physical power — so CfD-backed assets still require a route to market, and frequently a PPA, alongside the support contract.',
    ],
    related: ['power-purchase-agreement', 'route-to-market', 'capacity-market'],
  },
  {
    slug: 'capacity-market',
    term: 'Capacity Market (CM)',
    category: 'Certificates & support schemes',
    short:
      'The GB scheme that pays capacity providers to be available during periods of system stress, procured through auctions held ahead of each delivery year.',
    body: [
      'The Capacity Market pays generation, storage and demand-side response for being available when the system is tight. Capacity is procured through pay-as-clear auctions held ahead of the delivery year — a main auction roughly four years ahead (T-4) and a top-up closer to delivery (T-1) — with providers paid per kilowatt of de-rated capacity per year.',
      'Providers that fail to deliver during a system stress event face penalties, and different technologies receive different de-rating factors reflecting their expected availability — a key input for battery storage, where de-rating depends on duration.',
      'For flexible assets, CM agreements provide a contracted, availability-based revenue floor that sits alongside merchant streams in the revenue stack.',
    ],
    related: ['bess', 'revenue-stack', 'balancing-mechanism'],
  },
  {
    slug: 'twenty-four-seven-cfe',
    term: '24/7 carbon-free energy (24/7 CFE)',
    category: 'Certificates & support schemes',
    short:
      'Matching electricity consumption with carbon-free generation in every hour of every day — going beyond annual certificate matching.',
    body: [
      'Conventional renewable procurement matches a buyer’s annual consumption with an equal annual volume of renewable certificates. 24/7 CFE tightens the claim to hourly: for every hour of consumption, carbon-free generation must be produced in the same hour, on the same grid.',
      'The approach — pioneered by large technology buyers and promoted through the UN-backed 24/7 Carbon-Free Energy Compact — exposes the “gap hours” that annual matching hides, typically overnight and during low-wind periods. Granular certificate standards such as EnergyTag provide the accounting layer.',
      'Closing the gap in practice requires a portfolio: wind and solar with complementary profiles, storage to shift surplus into gap hours, and firm carbon-free supply — which is what makes hourly matching a structuring problem, not just a procurement one.',
    ],
    related: ['rego', 'additionality', 'bess'],
  },
  {
    slug: 'additionality',
    term: 'Additionality',
    category: 'Certificates & support schemes',
    short:
      'Whether a procurement action causes new renewable capacity to be built, rather than reallocating the output of assets that already exist.',
    body: [
      'A purchase is “additional” if it changes what gets built: the buyer’s commitment enables a project that would not otherwise have been financed. Contracting a long-term PPA with a pre-construction asset is the clearest form of additionality, because the contract itself supports the project’s investment case.',
      'Buying unbundled certificates from existing generation, by contrast, makes a supply claim without necessarily changing the generation mix — which is why additionality has become a central test in how corporate renewable claims are scrutinised.',
    ],
    related: ['twenty-four-seven-cfe', 'rego', 'power-purchase-agreement'],
  },

  // ── Storage & flexibility ───────────────────────────────────────────────
  {
    slug: 'bess',
    term: 'BESS (battery energy storage system)',
    category: 'Storage & flexibility',
    short:
      'Grid-scale battery storage — an asset that buys, stores and resells electricity, and provides flexibility services to the system.',
    body: [
      'A battery energy storage system charges when power is cheap or abundant and discharges when it is scarce or expensive. GB grid-scale batteries are characterised by their power rating (MW) and duration (how long they can sustain full output), with fleet durations lengthening as the market matures.',
      'BESS revenues are inherently stacked: frequency response services, wholesale arbitrage, Balancing Mechanism actions and Capacity Market agreements each contribute, with the optimal mix shifting as individual markets saturate.',
      'Because merchant battery revenue is volatile, contract structures — tolling agreements, revenue floors, optimisation agreements with revenue share — have developed to allocate risk between asset owners and the traders or optimisers operating them.',
    ],
    related: ['revenue-stack', 'tolling-agreement', 'dynamic-containment', 'co-location'],
  },
  {
    slug: 'tolling-agreement',
    term: 'Tolling agreement',
    category: 'Storage & flexibility',
    short:
      'A contract in which an offtaker pays the owner of a storage asset a fixed periodic fee for operational control, taking the market risk and the trading upside.',
    body: [
      'Under a toll, the asset owner hands operational control of the battery to an offtaker — typically a utility or trading house — in exchange for a fixed payment per MW per year. The toller decides when to charge and discharge, captures the trading revenue, and carries the market risk.',
      'For the owner, a toll converts a volatile merchant revenue stack into contracted cash flow, which materially improves debt capacity. The trade-off is giving up upside in strong trading years.',
      'Tolls sit at one end of a spectrum of BESS offtake structures: fully merchant optimisation agreements (revenue share) at the other end, with floor-plus-share hybrids in between.',
    ],
    related: ['bess', 'revenue-stack'],
  },
  {
    slug: 'revenue-stack',
    term: 'Revenue stack',
    category: 'Storage & flexibility',
    short:
      'The combination of income streams a flexible asset earns across different markets — frequency response, wholesale arbitrage, the Balancing Mechanism and the Capacity Market.',
    body: [
      'Flexible assets rarely live on one market. A GB battery’s revenue stack typically combines frequency response services (such as Dynamic Containment), wholesale arbitrage across day-ahead and intraday markets, Balancing Mechanism actions, and Capacity Market agreements.',
      'The weights in the stack move over time: frequency response markets are shallow and saturate as capacity builds, pushing an increasing share of revenue toward trading and the Balancing Mechanism. Any investment case built on a static stack mix ages quickly.',
      'Revenue-stack modelling — how much each stream contributes, under what assumptions, with what saturation dynamics — is the core analytical work behind BESS valuation and offtake structuring.',
    ],
    related: ['bess', 'capacity-market', 'balancing-mechanism', 'dynamic-containment'],
  },
  {
    slug: 'co-location',
    term: 'Co-location',
    category: 'Storage & flexibility',
    short:
      'Siting battery storage together with generation — most commonly solar-plus-BESS or wind-plus-BESS — behind a shared grid connection.',
    body: [
      'Co-locating storage with generation lets two assets share one grid connection, one set of land rights and much of the balance-of-plant cost. The battery can absorb output that would otherwise be curtailed or exported at weak prices, and shift it into stronger hours.',
      'The complexity is contractual and metering-level: how import and export rights are shared, how the PPA treats power that flows through the battery, and how renewable certificates are handled for charged-then-discharged energy all need explicit structuring.',
    ],
    related: ['bess', 'curtailment'],
  },
  {
    slug: 'dynamic-containment',
    term: 'Dynamic Containment (DC)',
    category: 'Storage & flexibility',
    short:
      'NESO’s fast-acting frequency response service, designed to contain large post-fault frequency deviations — procured through daily auctions and dominated by batteries.',
    body: [
      'Dynamic Containment is the fastest of the National Energy System Operator’s frequency response services: providers must respond within a second when system frequency moves outside its operational band after a fault, such as the sudden loss of a large generator.',
      'DC is procured through daily auctions alongside its sister services, Dynamic Moderation and Dynamic Regulation, which handle smaller and slower frequency deviations. The sub-second response requirement makes the suite a natural fit for batteries, which dominate provision.',
      'DC was an outsized share of early GB battery revenues; as the fleet has grown relative to the service’s fixed depth, it has become one component of a broader revenue stack rather than the anchor.',
    ],
    related: ['firm-frequency-response', 'bess', 'revenue-stack'],
  },
  {
    slug: 'firm-frequency-response',
    term: 'Firm Frequency Response (FFR)',
    category: 'Storage & flexibility',
    short:
      'A legacy GB frequency response service, now largely superseded by the dynamic suite (Dynamic Containment, Moderation and Regulation).',
    body: [
      'Firm Frequency Response was for years the main route for providers — batteries in particular — to sell frequency response to the system operator, procured through monthly tenders.',
      'It has been largely superseded by the dynamic response suite procured through daily auctions. The term still appears in older revenue models and legacy contracts, which is worth checking when reviewing historical BESS business cases.',
    ],
    related: ['dynamic-containment', 'revenue-stack'],
  },

  // ── Grid & market operations ────────────────────────────────────────────
  {
    slug: 'balancing-mechanism',
    term: 'Balancing Mechanism (BM)',
    category: 'Grid & market operations',
    short:
      'The real-time tool the National Energy System Operator uses to balance GB supply and demand, accepting bids and offers from market participants after gate closure.',
    body: [
      'The Balancing Mechanism is how NESO keeps the GB system balanced second to second. After gate closure, registered units submit offers (to increase generation or reduce demand) and bids (to reduce generation or increase demand); the operator accepts the actions it needs to balance the system and manage network constraints.',
      'The BM is also the main venue where constraint management happens in practice — for example instructing wind farms behind a transmission constraint to reduce output while bringing on generation elsewhere.',
      'Battery participation in the BM has grown substantially, and BM revenues are an increasingly important layer of the storage revenue stack. Imbalance settlement for the wider market is administered by Elexon under the Balancing and Settlement Code.',
    ],
    related: ['curtailment', 'bess', 'route-to-market'],
  },
  {
    slug: 'curtailment',
    term: 'Curtailment',
    category: 'Grid & market operations',
    short:
      'Reducing a generator’s output below what it could produce — because of network constraints, system needs or market conditions.',
    body: [
      'Curtailment is any situation where a generator produces less than it could: the system operator turning down wind farms behind a transmission constraint, an asset reducing output during negative price periods, or contractual limits on export.',
      'In GB, constraint-driven curtailment is typically actioned through the Balancing Mechanism, with compensation depending on the unit’s bids. Market-driven curtailment — choosing not to generate at negative prices — depends on the asset’s support scheme and contract terms.',
      'For PPAs, curtailment risk is a standard structuring point: who bears the volume loss, whether the buyer compensates for instructed curtailment, and how negative-price hours are treated all need to be explicit in the contract.',
    ],
    related: ['balancing-mechanism', 'co-location', 'merchant-exposure'],
  },

  // ── Projects & investment ───────────────────────────────────────────────
  {
    slug: 'notice-to-proceed',
    term: 'Notice to proceed (NTP)',
    category: 'Projects & investment',
    short:
      'The contractual trigger authorising a contractor to start construction — the conventional dividing line between a development-stage and construction-stage project.',
    body: [
      'Notice to proceed is the formal instruction under a construction contract that authorises work to begin. Issuing NTP usually requires the project’s conditions to be in place: land rights, planning consent, grid connection, financing and — very often — a signed offtake contract.',
      'In asset transactions, “pre-NTP” and “post-NTP” mark distinct risk profiles and price points: pre-NTP projects still carry development risk, while post-NTP projects have crystallised their costs and contracts but not yet their construction outcome.',
    ],
    related: ['commercial-operation-date', 'power-purchase-agreement'],
  },
  {
    slug: 'commercial-operation-date',
    term: 'Commercial operation date (COD)',
    category: 'Projects & investment',
    short:
      'The date a project is certified complete and begins commercial generation — the point where construction risk ends and operating revenue begins.',
    body: [
      'COD is reached when a project has passed its completion and performance tests and formally enters commercial operation. It is the hinge date in most project documents: construction contracts conclude, operating obligations start, and revenue contracts switch on.',
      'PPAs signed pre-construction are typically anchored to COD — delivery obligations start from it, and long-stop provisions define what happens if the project is late. For investors, the pre-COD/post-COD boundary separates construction risk from operating risk, and prices accordingly.',
    ],
    related: ['notice-to-proceed', 'power-purchase-agreement'],
  },
];

export function getTerm(slug: string): GlossaryTerm | undefined {
  return glossary.find((t) => t.slug === slug);
}
