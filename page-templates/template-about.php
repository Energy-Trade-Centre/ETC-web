<?php
/**
 * Template Name: About
 *
 * @package ETC
 */

get_header();

$team = array(
	array( 'role' => 'Renewable Energy Advisory', 'desc' => 'Former utility procurement leads, PPA structurers, and energy traders with 15+ years of deal-making experience across European and US markets.' ),
	array( 'role' => 'Quantitative Analytics', 'desc' => 'Financial engineers from investment banking and commodity trading houses, building the Monte Carlo, IFRS 9, and valuation models that power the platform.' ),
	array( 'role' => 'Grid & Infrastructure', 'desc' => 'Power systems engineers with deep expertise in grid constraints, DNO capacity, generation forecasting, and the physics that underpin energy markets.' ),
	array( 'role' => 'Platform Engineering', 'desc' => 'Engineers from Bloomberg, Refinitiv, and fintech, building institutional-grade infrastructure designed for the speed and reliability that energy trading demands.' ),
);

$milestones = array(
	array( 'year' => '2022', 'event' => 'Founded with the thesis that energy trading infrastructure was a decade behind financial markets' ),
	array( 'year' => '2023', 'event' => 'Launched PPA Marketplace covering North American and European markets' ),
	array( 'year' => '2024', 'event' => 'Shipped Asset Exchange, BESS Exchange, Analytics Engine, and 24/7 CFE matching' ),
	array( 'year' => '2025', 'event' => 'Expanded to 12+ markets, 4,500+ live offers, and 50+ institutional counterparties' ),
	array( 'year' => '2026', 'event' => 'Continuing to build the operating system the energy transition runs on' ),
);

$stats = array(
	array( 'value' => '12+', 'label' => 'Electricity markets' ),
	array( 'value' => '28', 'label' => 'Countries' ),
	array( 'value' => '4,500+', 'label' => 'Live PPA offers' ),
	array( 'value' => '50+', 'label' => 'Institutional counterparties' ),
);

$offices = array(
	array( 'city' => 'London', 'role' => 'Headquarters' ),
	array( 'city' => 'Amsterdam', 'role' => 'European Operations' ),
	array( 'city' => 'Houston', 'role' => 'North American Markets' ),
);
?>

<section class="hero">
	<div class="absolute inset-0 grid-bg"></div>
	<div class="container">
		<div class="hero-content">
			<h1>Building the rails<br>for the <span class="etc-gradient">energy transition</span></h1>
			<p class="hero-lead">
				The energy transition is constrained not by technology, but by transaction
				infrastructure. We built ETC to fix that.
			</p>
		</div>
	</div>
</section>

<!-- Mission -->
<section class="section section--border">
	<div class="container">
		<div class="grid-2-asym" style="gap:4rem">
			<div>
				<h2 class="text-2xl font-bold mb-6">The problem</h2>
				<p class="text-14 text-etc-400 leading-relaxed mb-4">
					Energy markets trade $2 trillion annually, yet the infrastructure for
					renewable energy transactions remains fragmented across brokers, spreadsheets,
					email chains, and phone calls.
				</p>
				<p class="text-14 text-etc-400 leading-relaxed mb-4">
					A corporate buyer seeking a PPA has no transparent way to see the full market.
					A developer listing an asset has no efficient way to reach institutional buyers.
					An investor modelling a portfolio has no integrated tool for IFRS 9 compliance.
				</p>
				<p class="text-14 text-etc-400 leading-relaxed">
					The result: slower deals, higher costs, and less capital flowing into clean
					energy than the market demands.
				</p>
			</div>
			<div>
				<h2 class="text-2xl font-bold mb-6">Our thesis</h2>
				<p class="text-14 text-etc-400 leading-relaxed mb-4">
					Energy trading infrastructure is a decade behind financial markets. When we
					built ETC, we didn&rsquo;t start with what energy trading looks like today &mdash; we
					started with what it needs to look like to support a net-zero grid.
				</p>
				<p class="text-14 text-etc-400 leading-relaxed">
					That means transparent pricing, integrated analytics, real-time market data,
					and execution speed that matches the pace of the transition. Not a marketplace.
					Not a broker. An operating system.
				</p>
			</div>
		</div>

		<!-- Stats -->
		<div class="metrics-grid mt-16">
			<?php foreach ( $stats as $s ) : ?>
			<div class="metric-cell">
				<div class="mono text-2xl font-bold text-white"><?php echo esc_html( $s['value'] ); ?></div>
				<div class="text-12 text-etc-500 mt-1"><?php echo esc_html( $s['label'] ); ?></div>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- Team -->
<section class="section section--alt section--border">
	<div class="container">
		<div class="mb-12">
			<h2 class="text-2xl font-bold">The team behind ETC</h2>
			<p class="mt-2 text-13 text-etc-500">
				Energy professionals, quantitative analysts, and infrastructure engineers building
				the platform the industry needs.
			</p>
		</div>

		<div class="grid grid-2 grid-px grid-rounded grid-bg-subtle">
			<?php foreach ( $team as $t ) : ?>
			<div class="surface-1 p-8">
				<h3 class="text-base font-semibold text-white mb-3"><?php echo esc_html( $t['role'] ); ?></h3>
				<p class="text-13 text-etc-500 leading-relaxed"><?php echo esc_html( $t['desc'] ); ?></p>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- Timeline -->
<section class="section section--border">
	<div class="container-sm">
		<h2 class="text-2xl font-bold mb-12">Timeline</h2>
		<div style="display:flex;flex-direction:column;gap:2rem">
			<?php foreach ( $milestones as $m ) : ?>
			<div class="timeline-item">
				<div class="timeline-year"><?php echo esc_html( $m['year'] ); ?></div>
				<div class="timeline-text"><?php echo esc_html( $m['event'] ); ?></div>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- Offices -->
<section class="section section--alt section--border">
	<div class="container text-center">
		<h2 class="text-2xl font-bold mb-8">Global presence</h2>
		<div class="flex flex-wrap justify-center gap-4">
			<?php foreach ( $offices as $o ) : ?>
			<div class="card px-8 py-5 text-center">
				<div class="text-base font-semibold text-white"><?php echo esc_html( $o['city'] ); ?></div>
				<div class="text-11 text-etc-600 mt-1"><?php echo esc_html( $o['role'] ); ?></div>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="section section--border">
	<div class="container-md text-center">
		<h2 class="text-3xl font-bold">Join the transition</h2>
		<p class="mt-4 text-etc-400" style="max-width:36rem;margin:1rem auto 0">
			Whether you&rsquo;re buying, selling, or investing &mdash; ETC gives you the infrastructure
			to participate in the world&rsquo;s largest market transformation.
		</p>
		<div class="mt-8">
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">Get in touch <?php echo etc_icon_arrow_right(); ?></a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
