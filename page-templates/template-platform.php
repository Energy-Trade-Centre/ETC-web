<?php
/**
 * Template Name: Platform
 *
 * @package ETC
 */

get_header();

$modules = array(
	array(
		'id' => 'marketplace',
		'tag' => 'DISCOVERY',
		'title' => 'PPA Marketplace',
		'lead' => 'The deepest liquidity pool for power purchase agreements.',
		'desc' => 'Browse 4,500+ live PPA offers across ERCOT, PJM, MISO, CAISO, Nordpool, EPEX, N2EX, and more. Every offer includes an ETC Confidence Score, counterparty credit rating, and real-time P50 pricing.',
		'features' => array(
			'Filter by technology, market, maturity, price range, and risk profile',
			'ETC Confidence Score (0-100) on every offer — proprietary quality signal',
			'Watchlists with automated price alerts and position tracking',
			'P0/P25/P50/P75/P100 pricing with 8-quarter rolling history',
			'RFP creation with automated response aggregation',
			'Integrated due diligence documentation',
		),
		'metric_value' => '4,523',
		'metric_label' => 'live offers',
	),
	array(
		'id' => 'assets',
		'tag' => 'EXCHANGE',
		'title' => 'Asset Exchange',
		'lead' => 'Trade renewable energy projects. Greenfield to operational.',
		'desc' => 'The only platform where you can buy, sell, and trade renewable projects bundled with PPA offtake agreements. Our Asset+PPA bundles consistently deliver 25-35% premium over asset-only transactions.',
		'features' => array(
			'7-factor proprietary valuation model with Revenue Certainty Scores',
			'Asset+PPA Bundling — unique ETC feature for maximum transaction value',
			'Full pipeline tracking from LOI to financial close',
			'Verified buyer & seller registry with institutional counterparties',
			'Auction and bilateral deal structures',
			'Every development stage: greenfield through secondary sale',
		),
		'metric_value' => '1,425',
		'metric_label' => 'MW listed',
	),
	array(
		'id' => 'bess',
		'tag' => 'STORAGE',
		'title' => 'BESS Exchange',
		'lead' => 'The first institutional marketplace for battery storage.',
		'desc' => 'Trade storage capacity, match asset owners with optimisers, structure contracts, and benchmark performance. Purpose-built for the storage revolution, not retrofitted from a PPA tool.',
		'features' => array(
			'Revenue Stack Optimisation: model DC, FFR, BM, arbitrage, and CM income streams together',
			'Flexibility Index: live pricing across all five revenue streams with P10-P90 bands',
			'Algorithmic matching of assets with optimisers and offtakers',
			'Standardised contract templates: optimisation, tolling, revenue share, co-location',
			'Independent performance benchmarking vs market average',
			'Developer pipeline for pre-construction projects seeking partners',
		),
		'metric_value' => '300+',
		'metric_label' => 'MWh registered',
	),
	array(
		'id' => 'analytics',
		'tag' => 'ANALYTICS',
		'title' => 'Analytics Engine',
		'lead' => 'Institutional-grade modelling built for investment committees.',
		'desc' => "Not a spreadsheet plugin. ETC's Analytics Engine is a fully integrated financial modelling suite — Monte Carlo simulation, IFRS 9 credit risk, portfolio cashflow analysis, and price benchmarking — powered by live market data.",
		'features' => array(
			'PPA Deal Modeller with real-time NPV/IRR at P10/P50/P90 confidence bands',
			'Monte Carlo simulation across 40+ price scenarios',
			'Portfolio cashflow projection: actual vs forecast over multi-year horizons',
			'IFRS 9 credit risk: 3-stage classification, expected loss, counterparty exposure',
			'Price benchmarking: contracted rates vs current market P50',
			'Customisable reports with data export for board presentations',
		),
		'metric_value' => '40+',
		'metric_label' => 'price scenarios',
	),
	array(
		'id' => 'cfe',
		'tag' => 'CFE',
		'title' => '24/7 CFE Matching',
		'lead' => 'Beyond annual RECs. Hourly carbon-free energy verification.',
		'desc' => 'The ETC CFE engine matches your portfolio against real load profiles hour-by-hour. See your true carbon-free energy score, identify unmatched hours, quantify the cost to close gaps, and optimise your portfolio to reach 24/7 targets.',
		'features' => array(
			'Hourly matching of generation to consumption profiles',
			'CFE Score calculation (0-100%) with granular breakdown by hour',
			'Gap analysis: identify unmatched hours and cost-to-close',
			'Portfolio optimisation recommendations across solar, wind, and BESS',
			'Aligned with EnergyTag and 24/7 Carbon-Free Energy Compact standards',
			'4 optimal portfolio configurations ranked by cost vs coverage',
		),
		'metric_value' => '24/7',
		'metric_label' => 'hourly resolution',
	),
	array(
		'id' => 'grid',
		'tag' => 'GRID',
		'title' => 'Grid Intelligence',
		'lead' => 'Decisions informed by the grid, not just the market.',
		'desc' => 'Live generation mix, regional DNO capacity, constraint mapping, cannibalization analysis, and inter-regional power flows. The data layer that turns procurement decisions into infrastructure decisions.',
		'features' => array(
			'Live generation mix with real-time renewable share and system frequency',
			'Regional DNO capacity headroom and connection queue data',
			'Cannibalization analysis: capture rate trends and revenue at risk',
			'Revenue stack modelling for co-located solar+BESS and wind+BESS projects',
			'Active constraint mapping with associated cost data and affected assets',
			'Inter-regional power flows, interconnector utilisation, and congestion pricing',
		),
		'metric_value' => '12+',
		'metric_label' => 'markets covered',
	),
);

$execution = array(
	array( 'title' => 'Lightning PPA', 'desc' => '200+ deals closed. 6 pre-built templates. Sub-25MW PPAs from discovery to signed contract in 14 days — vs. 6-12 months industry average.', 'metric' => '14d avg.' ),
	array( 'title' => 'Deal Room', 'desc' => '7-stage pipeline from discovery to signing. Full document management, negotiation tracking, milestone alerts.', 'metric' => '58d avg.' ),
	array( 'title' => 'Settlements', 'desc' => 'Automated payment tracking, reconciliation, and dispute management. Average settlement: 1.2 days.', 'metric' => '1.2d avg.' ),
	array( 'title' => 'Compliance', 'desc' => 'FERC filings, REC reporting, regulatory tracking, audit trails. Complete documentation.', 'metric' => 'Automated' ),
);
?>

<!-- Hero -->
<section class="hero">
	<div class="absolute inset-0 grid-bg"></div>
	<div class="container">
		<div class="hero-content">
			<div class="hero-tag">The Platform</div>
			<h1>
				Your command centre<br>
				for the <span class="etc-gradient">energy transition</span>
			</h1>
			<p class="hero-lead">
				Six integrated modules. One platform. From PPA discovery and asset exchange
				to BESS trading, financial modelling, and grid analytics — ETC replaces
				spreadsheets, brokers, and fragmented tools with unified market infrastructure.
			</p>
			<div class="hero-actions">
				<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">
					Request access <?php echo etc_icon_arrow_right(); ?>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Modules -->
<?php foreach ( $modules as $idx => $mod ) : ?>
<section id="<?php echo esc_attr( $mod['id'] ); ?>" class="section section--border<?php echo $idx % 2 !== 0 ? ' section--alt' : ''; ?>">
	<div class="container">
		<div class="grid-2-asym">
			<div>
				<div class="cap-tag"><?php echo esc_html( $mod['tag'] ); ?></div>
				<h2 class="text-3xl font-bold"><?php echo esc_html( $mod['title'] ); ?></h2>
				<p class="mt-2 text-lg text-etc-400 font-medium"><?php echo esc_html( $mod['lead'] ); ?></p>
				<p class="mt-4 text-14 text-etc-500 leading-relaxed"><?php echo esc_html( $mod['desc'] ); ?></p>
				<div class="module-metric">
					<span class="module-metric-value"><?php echo esc_html( $mod['metric_value'] ); ?></span>
					<span class="module-metric-label"><?php echo esc_html( $mod['metric_label'] ); ?></span>
				</div>
			</div>
			<div class="card p-8">
				<h3 class="text-11 font-semibold text-etc-600 uppercase tracking-widest mb-6">Key Capabilities</h3>
				<div class="feature-list">
					<?php foreach ( $mod['features'] as $f ) : ?>
					<div class="feature-item">
						<?php echo etc_icon_check(); ?>
						<span class="feature-text"><?php echo esc_html( $f ); ?></span>
					</div>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</section>
<?php endforeach; ?>

<!-- Execution layer -->
<section class="section section--alt section--border" id="execution">
	<div class="container">
		<div class="mb-16">
			<div class="cap-tag">EXECUTION</div>
			<h2 class="text-3xl font-bold">Discovery is half the job.</h2>
			<p class="mt-4 text-etc-400" style="max-width:42rem">
				ETC manages the full lifecycle from term sheet through settlement and compliance.
				Time-to-certainty is the metric that matters.
			</p>
		</div>
		<div class="grid grid-4 grid-px grid-rounded grid-bg-subtle">
			<?php foreach ( $execution as $e ) : ?>
			<div class="surface-1 p-7">
				<div class="mono text-lg font-bold text-signal mb-3"><?php echo esc_html( $e['metric'] ); ?></div>
				<h3 class="text-base font-semibold text-white mb-2"><?php echo esc_html( $e['title'] ); ?></h3>
				<p class="text-12 text-etc-500 leading-relaxed"><?php echo esc_html( $e['desc'] ); ?></p>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="section section--border">
	<div class="container-md text-center">
		<h2 class="text-3xl font-bold">See the command centre</h2>
		<p class="mt-4 text-etc-400" style="max-width:36rem;margin:1rem auto 0">
			Book a personalised walkthrough and see why the most sophisticated energy
			participants are building on ETC.
		</p>
		<div class="mt-8">
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">
				Request access <?php echo etc_icon_arrow_right(); ?>
			</a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
