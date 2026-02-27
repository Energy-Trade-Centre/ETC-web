<?php
/**
 * Template: Homepage (front-page.php)
 *
 * @package ETC
 */

get_header();
?>

<!-- Live Price Ticker -->
<div class="ticker">
	<div class="container">
		<div class="ticker-inner">
			<div class="flex items-center gap-2 shrink-0">
				<div class="ticker-dot signal-pulse"></div>
				<span class="ticker-label">PPA P50</span>
				<span style="color:var(--etc-700);font-size:11px">Updated 4m ago</span>
			</div>
			<?php
			$live_prices = array(
				array( 'market' => 'ERCOT', 'tech' => 'Solar', 'price' => 24.50, 'change' => 2.3 ),
				array( 'market' => 'PJM', 'tech' => 'Wind', 'price' => 28.90, 'change' => -1.1 ),
				array( 'market' => 'Nordpool', 'tech' => 'Solar', 'price' => 38.60, 'change' => 3.1 ),
				array( 'market' => 'EPEX', 'tech' => 'Wind', 'price' => 36.80, 'change' => 1.7 ),
				array( 'market' => 'N2EX', 'tech' => 'Solar', 'price' => 48.90, 'change' => -2.0 ),
				array( 'market' => 'CAISO', 'tech' => 'Wind', 'price' => 32.50, 'change' => -0.4 ),
			);
			foreach ( $live_prices as $p ) :
			?>
			<div class="ticker-item">
				<span style="color:var(--etc-400);font-weight:500"><?php echo esc_html( $p['market'] ); ?></span>
				<span style="color:var(--etc-500)"><?php echo esc_html( $p['tech'] ); ?></span>
				<span class="mono" style="color:#fff;font-weight:500">$<?php echo number_format( $p['price'], 2 ); ?></span>
				<span class="mono" style="font-weight:500;color:<?php echo $p['change'] > 0 ? 'var(--signal)' : 'var(--red)'; ?>">
					<?php echo $p['change'] > 0 ? '+' : ''; ?><?php echo number_format( $p['change'], 1 ); ?>%
				</span>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</div>

<!-- Hero -->
<section class="hero hero-xl">
	<div class="absolute inset-0 grid-bg"></div>
	<div class="hero-glow-1"></div>
	<div class="hero-glow-2"></div>

	<div class="container">
		<div class="hero-content" style="max-width:64rem">
			<div class="live-indicator" style="margin-bottom:2rem">
				<div class="live-dot signal-pulse"></div>
				<span class="text-11 font-medium text-etc-500 uppercase tracking-wider">Live across 12 markets</span>
			</div>

			<h1>
				The infrastructure<br>
				for energy<br>
				<span class="etc-gradient">liquidity</span>
			</h1>

			<p class="hero-lead" style="max-width:42rem">
				ETC is the institutional-grade platform where corporates, developers, and investors
				trade PPAs, renewable assets, and storage capacity with full price transparency
				and real-time market intelligence.
			</p>

			<div class="hero-actions">
				<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">
					Request access <?php echo etc_icon_arrow_right(); ?>
				</a>
				<a href="<?php echo esc_url( home_url( '/intelligence/' ) ); ?>" class="btn btn-secondary">
					View market intelligence
				</a>
			</div>

			<!-- Metrics strip -->
			<div class="metrics-grid">
				<?php
				$metrics = array(
					array( 'value' => '4,523', 'label' => 'Live PPA offers', 'sub' => 'across 12 markets' ),
					array( 'value' => '1,425', 'label' => 'MW in assets', 'sub' => 'listed for exchange' ),
					array( 'value' => '14d', 'label' => 'Lightning PPA', 'sub' => 'avg. time to close' ),
					array( 'value' => '92', 'label' => 'Confidence Score', 'sub' => 'platform median' ),
				);
				foreach ( $metrics as $m ) :
				?>
				<div class="metric-cell">
					<div class="metric-value"><?php echo esc_html( $m['value'] ); ?></div>
					<div class="metric-label"><?php echo esc_html( $m['label'] ); ?></div>
					<div class="metric-sub"><?php echo esc_html( $m['sub'] ); ?></div>
				</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<!-- ETC Confidence Score — Brand Pillar -->
<section class="section section--alt section--border-y" id="confidence-score">
	<div class="container">
		<div class="grid-2-asym" style="align-items:center">
			<div>
				<div class="text-11 font-semibold text-signal uppercase tracking-wider mono mb-4">Proprietary Signal</div>
				<h2 class="text-3xl font-bold" style="line-height:1.25">The ETC Confidence Score</h2>
				<p class="mt-4 text-etc-400 leading-relaxed">
					Every offer, every asset, every counterparty on ETC is scored 0-100 by our
					proprietary quality signal. It synthesizes credit risk, project maturity,
					pricing competitiveness, and counterparty track record into a single number
					your team can act on.
				</p>
				<p class="mt-4 text-13 text-etc-500 leading-relaxed">
					Deals with a Confidence Score above 85 close 3x faster. The platform
					median sits at 92 — because we curate for quality, not quantity.
				</p>
			</div>
			<div class="card p-8">
				<div class="flex items-center justify-between mb-8">
					<span class="text-11 font-semibold text-etc-600 uppercase tracking-widest mono">Score Breakdown</span>
					<div class="flex items-center gap-2">
						<div class="live-dot signal-pulse" style="width:6px;height:6px"></div>
						<span class="text-11 text-etc-600">Live</span>
					</div>
				</div>
				<div class="text-center mb-8">
					<div class="mono text-7xl font-bold text-signal">92</div>
					<div class="text-12 text-etc-500 mt-2">Platform median Confidence Score</div>
				</div>
				<?php
				$factors = array(
					array( 'label' => 'Counterparty Credit', 'score' => 94 ),
					array( 'label' => 'Pricing Competitiveness', 'score' => 91 ),
					array( 'label' => 'Project Maturity', 'score' => 89 ),
					array( 'label' => 'Execution Probability', 'score' => 93 ),
				);
				foreach ( $factors as $f ) :
				?>
				<div style="margin-bottom:1rem">
					<div class="flex items-center justify-between" style="margin-bottom:6px">
						<span class="text-12 text-etc-400"><?php echo esc_html( $f['label'] ); ?></span>
						<span class="mono text-12 text-white font-medium"><?php echo esc_html( $f['score'] ); ?></span>
					</div>
					<div class="score-bar-track">
						<div class="score-bar-fill" style="width:<?php echo esc_attr( $f['score'] ); ?>%"></div>
					</div>
				</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<!-- PPA Revenue Estimator -->
<section class="section" id="estimator">
	<div class="container">
		<div class="grid-2-asym" style="align-items:start">
			<div>
				<div class="text-11 font-semibold text-signal uppercase tracking-wider mono mb-4">Indicative Pricing</div>
				<h2 class="text-3xl font-bold" style="line-height:1.25">What&rsquo;s your energy worth?</h2>
				<p class="mt-4 text-etc-400 leading-relaxed">
					See indicative PPA revenue for your project based on live market data.
					No forms. No sales calls. Just the numbers.
				</p>
				<p class="mt-6 text-13 text-etc-600 leading-relaxed">
					Full P0-P100 pricing, counterparty matching, and deal execution available
					on the platform.
				</p>
			</div>
			<div class="card p-8" id="ppa-estimator">
				<!-- PPA Estimator rendered by JS -->
			</div>
		</div>
	</div>
</section>

<!-- Lightning PPA — Feature Case Study -->
<section class="section section--alt section--border-y" id="lightning-ppa">
	<div class="container">
		<div class="grid-5-asym">
			<div>
				<div class="text-11 font-semibold text-amber uppercase tracking-wider mono mb-4">The ETC Disruptor</div>
				<h2 class="text-3xl font-bold" style="line-height:1.25">
					Lightning PPA: 14 days<br>
					<span class="text-etc-500">vs. 6-12 months industry average</span>
				</h2>
				<p class="mt-4 text-etc-400 leading-relaxed">
					Standardised templates, pre-qualified counterparties, and automated term sheet
					generation mean sub-25MW PPAs close in an average of 14 days on ETC. That&rsquo;s
					not an aspirational target &mdash; it&rsquo;s the platform average across 200+ closed deals.
				</p>
				<div class="grid" style="grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:2rem">
					<div class="card-elevated p-5 rounded-lg">
						<div class="text-11 text-etc-500 mb-2">Industry average</div>
						<div class="mono text-2xl font-bold text-white">6-12 months</div>
						<div class="text-11 text-etc-600 mt-1">discovery to signing</div>
					</div>
					<div class="card-elevated p-5 rounded-lg">
						<div class="text-11 text-etc-500 mb-2">ETC Lightning PPA</div>
						<div class="mono text-2xl font-bold text-white">14 days</div>
						<div class="text-11 text-etc-600 mt-1">same process, 95% faster</div>
					</div>
				</div>
			</div>
			<div class="card p-6">
				<h3 class="text-11 font-semibold text-etc-600 uppercase tracking-widest mono mb-4">How Lightning PPA Works</h3>
				<?php
				$steps = array(
					array( 'num' => '01', 'label' => 'Select template', 'detail' => 'Solar, wind, hybrid, or BESS. Pre-negotiated legal terms.' ),
					array( 'num' => '02', 'label' => 'Configure deal', 'detail' => 'Set MW, tenor, price. Instant term sheet generation.' ),
					array( 'num' => '03', 'label' => 'Match & execute', 'detail' => 'Pre-qualified counterparties. Digital signatures.' ),
					array( 'num' => '04', 'label' => 'Closed', 'detail' => 'Average: 14 days. Record: 6 days.' ),
				);
				foreach ( $steps as $s ) :
				?>
				<div class="flex gap-4 items-start" style="margin-bottom:1rem">
					<span class="mono text-12 font-bold text-amber shrink-0 pt-05"><?php echo esc_html( $s['num'] ); ?></span>
					<div>
						<div class="text-13 font-medium text-white"><?php echo esc_html( $s['label'] ); ?></div>
						<div class="text-12 text-etc-500"><?php echo esc_html( $s['detail'] ); ?></div>
					</div>
				</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<!-- Capabilities -->
<section class="section" id="capabilities">
	<div class="container">
		<div class="mb-16">
			<h2 class="text-3xl font-bold">Full-stack energy trading</h2>
			<p class="mt-4 text-etc-400" style="max-width:42rem">
				Discovery to execution. Analytics to settlement. ETC isn&rsquo;t a marketplace &mdash; it&rsquo;s the
				operating system the market runs on.
			</p>
		</div>

		<div class="cap-grid">
			<?php
			$capabilities = array(
				array( 'tag' => 'DISCOVERY', 'title' => 'PPA Marketplace', 'desc' => 'Browse, price, and execute power purchase agreements from the deepest liquidity pool in the market. Risk-scored. Real-time.', 'href' => '/platform/#marketplace' ),
				array( 'tag' => 'EXCHANGE', 'title' => 'Asset Exchange', 'desc' => 'Trade renewable energy projects at every stage. Our Asset+PPA bundles deliver 25-35% premium over asset-only transactions.', 'href' => '/platform/#assets' ),
				array( 'tag' => 'STORAGE', 'title' => 'BESS Exchange', 'desc' => 'The first integrated marketplace for battery storage — Flexibility Index pricing, revenue stack optimisation, and performance benchmarking.', 'href' => '/platform/#bess' ),
				array( 'tag' => 'ANALYTICS', 'title' => 'Analytics Engine', 'desc' => 'Monte Carlo simulation, IFRS 9 credit risk, portfolio cashflow modelling. Built for investment committees, not spreadsheets.', 'href' => '/platform/#analytics' ),
				array( 'tag' => 'GRID', 'title' => 'Grid Intelligence', 'desc' => 'Live generation mix, constraint mapping, cannibalization analysis, revenue stack modelling, and regional capacity data.', 'href' => '/platform/#grid' ),
				array( 'tag' => 'CFE', 'title' => '24/7 CFE Matching', 'desc' => 'Hourly carbon-free energy verification against real load profiles. Go beyond annual RECs to true 24/7 coverage.', 'href' => '/platform/#cfe' ),
			);
			foreach ( $capabilities as $cap ) :
			?>
			<a href="<?php echo esc_url( home_url( $cap['href'] ) ); ?>" class="cap-item">
				<div class="cap-tag"><?php echo esc_html( $cap['tag'] ); ?></div>
				<h3 class="cap-title"><?php echo esc_html( $cap['title'] ); ?></h3>
				<p class="cap-desc"><?php echo esc_html( $cap['desc'] ); ?></p>
				<div class="cap-link">Explore <?php echo etc_icon_arrow_up_right(); ?></div>
			</a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- The ETC Difference -->
<section class="section section--alt section--border-y">
	<div class="container">
		<div class="mb-16">
			<h2 class="text-3xl font-bold">
				Not a broker. Not a matchmaker.<br>
				<span class="text-etc-500">The market itself.</span>
			</h2>
		</div>

		<div class="grid md-grid-3" style="gap:2rem">
			<?php
			$diffs = array(
				array( 'title' => 'Liquidity, not listings', 'desc' => 'Brokers show you their book. ETC shows you the market. 4,500+ live offers with transparent pricing, risk scores, and real-time P50 benchmarks.' ),
				array( 'title' => 'Certainty, not complexity', 'desc' => 'Lightning PPA closes in 14 days. Monte Carlo models your downside. IFRS 9 classifies your risk. Every tool built to reduce time-to-certainty.' ),
				array( 'title' => 'Intelligence, not information', 'desc' => "Cannibalization analysis. Flexibility Index. Confidence Scores. ETC doesn't just aggregate data — it synthesizes the signal from the noise." ),
			);
			foreach ( $diffs as $d ) :
			?>
			<div class="card p-8">
				<div class="diff-line"></div>
				<h3 class="text-lg font-semibold text-white mb-3"><?php echo esc_html( $d['title'] ); ?></h3>
				<p class="text-13 text-etc-500 leading-relaxed"><?php echo esc_html( $d['desc'] ); ?></p>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- Advisory Intelligence -->
<section class="section" id="advisory">
	<div class="container">
		<div class="mb-16">
			<div class="text-11 font-medium text-etc-600 uppercase tracking-wider mono mb-4">Advisory Intelligence</div>
			<h2 class="text-3xl font-bold">
				The platform provides the data.<br>
				<span class="text-etc-500">Our sector leads provide the strategy.</span>
			</h2>
			<p class="mt-4 text-etc-400" style="max-width:42rem">
				Every ETC client has access to sector-specific advisors who know the markets,
				the counterparties, and the deal structures. Technology handles scale. Humans
				handle nuance.
			</p>
		</div>

		<div class="grid grid-4 grid-px grid-rounded grid-bg-subtle">
			<?php
			$advisors = array(
				array( 'domain' => 'PPA & Offtake Strategy', 'initials' => 'JC', 'desc' => 'Former utility procurement lead. 15+ years structuring PPAs across UK, Nordics, and Iberian markets. Your direct line to deal execution.' ),
				array( 'domain' => 'Asset Transactions & M&A', 'initials' => 'KR', 'desc' => 'Ex-investment banking, energy infrastructure. Led £2B+ of renewable asset transactions. Covers valuation, due diligence, and deal structuring.' ),
				array( 'domain' => 'BESS & Storage Markets', 'initials' => 'SP', 'desc' => 'Battery storage specialist. Former optimiser at a top-3 trading house. Covers revenue stacks, flexibility markets, and contract structuring.' ),
				array( 'domain' => 'Grid & Regulatory', 'initials' => 'MW', 'desc' => 'Power systems engineer turned market analyst. DNO connections, constraint modelling, and regulatory compliance across UK and European grids.' ),
			);
			foreach ( $advisors as $a ) :
			?>
			<div class="surface-1 p-6">
				<div class="advisor-avatar"><span><?php echo esc_html( $a['initials'] ); ?></span></div>
				<h3 class="text-13 font-semibold text-white mb-2"><?php echo esc_html( $a['domain'] ); ?></h3>
				<p class="text-12 text-etc-500 leading-relaxed"><?php echo esc_html( $a['desc'] ); ?></p>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- Social Proof -->
<section class="section section--alt section--border-y">
	<div class="container">
		<div class="mb-16">
			<div class="text-11 font-medium text-etc-600 uppercase tracking-wider mono mb-4">Trusted by</div>
			<h2 class="text-3xl font-bold">
				The platform institutional<br>energy runs on
			</h2>
		</div>

		<!-- Partner logos -->
		<div class="flex flex-wrap items-center" style="gap:2.5rem 2.5rem;margin-bottom:3rem">
			<?php
			$partners = array(
				array( 'name' => 'Nordpool', 'role' => 'Market data' ),
				array( 'name' => 'EPEX SPOT', 'role' => 'Market data' ),
				array( 'name' => 'National Grid ESO', 'role' => 'Grid data' ),
				array( 'name' => 'Elexon', 'role' => 'Settlement data' ),
				array( 'name' => 'S&P Global', 'role' => 'Credit ratings' ),
			);
			foreach ( $partners as $partner ) :
			?>
			<div class="partner-item">
				<div class="partner-bar"></div>
				<div>
					<span class="partner-name"><?php echo esc_html( $partner['name'] ); ?></span>
					<span class="partner-role"><?php echo esc_html( $partner['role'] ); ?></span>
				</div>
			</div>
			<?php endforeach; ?>
		</div>

		<div class="grid grid-2 grid-px grid-rounded grid-bg-subtle">
			<?php
			$proof = array(
				array( 'type' => 'Data Centre Operators', 'detail' => 'Hyperscale procurement teams using ETC for multi-market PPA sourcing' ),
				array( 'type' => 'Infrastructure Funds', 'detail' => 'Top-tier energy funds managing deal pipelines and portfolio analytics on ETC' ),
				array( 'type' => 'Utility-Scale Developers', 'detail' => 'Developers listing 500MW+ of projects across North America and Europe' ),
				array( 'type' => 'Corporate Sustainability', 'detail' => 'FTSE 250 & Fortune 500 companies tracking 24/7 CFE goals on ETC' ),
			);
			foreach ( $proof as $p ) :
			?>
			<div class="surface-1 p-8">
				<h3 class="text-base font-semibold text-white mb-2"><?php echo esc_html( $p['type'] ); ?></h3>
				<p class="text-13 text-etc-500 leading-relaxed"><?php echo esc_html( $p['detail'] ); ?></p>
			</div>
			<?php endforeach; ?>
		</div>

		<div class="flex flex-wrap gap-6 items-center mt-8">
			<?php
			$stats = array( '12+ electricity markets', '28 countries', '50+ active counterparties', 'IFRS 9 compliant' );
			foreach ( $stats as $stat ) :
			?>
			<div class="flex items-center gap-2 text-12 text-etc-500">
				<div class="stat-dot"></div>
				<?php echo esc_html( $stat ); ?>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="section">
	<div class="container-md text-center">
		<h2 class="text-3xl font-bold">
			The energy transition needs<br>better infrastructure.
		</h2>
		<p class="mt-4 text-etc-400" style="max-width:36rem;margin-left:auto;margin-right:auto">
			Request access to ETC and see why the most sophisticated energy
			participants are moving their operations onto our platform.
		</p>
		<div class="flex justify-center gap-4 mt-8" style="flex-wrap:wrap">
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">
				Request access <?php echo etc_icon_arrow_right(); ?>
			</a>
			<a href="<?php echo esc_url( home_url( '/platform/' ) ); ?>" class="btn btn-secondary">
				Explore the platform
			</a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
