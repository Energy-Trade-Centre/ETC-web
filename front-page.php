<?php
/**
 * Template: Homepage (front-page.php)
 *
 * @package ETC
 */

get_header();
?>

<!-- GB Indicative PPA Ranges — H2 2025 -->
<div class="ticker">
	<div class="container">
		<div class="ticker-inner">
			<div class="flex items-center gap-2 shrink-0">
				<div class="ticker-dot signal-pulse"></div>
				<span class="ticker-label">GB Indicative PPA Ranges &middot; H2 2025</span>
				<span id="ticker-timestamp" style="color:var(--etc-700);font-size:11px"></span>
			</div>
			<div id="ticker-prices">
				<?php
				$indicative_ranges = array(
					array( 'tech' => 'Offshore Wind',  'tenor' => 'PaP &middot; 3Y', 'range' => '&pound;75&ndash;78/MWh' ),
					array( 'tech' => 'Offshore Wind',  'tenor' => 'PaP &middot; 5Y', 'range' => '&pound;73&ndash;76/MWh' ),
					array( 'tech' => 'Onshore Wind',   'tenor' => 'PaP &middot; 3Y', 'range' => '&pound;55&ndash;62/MWh' ),
					array( 'tech' => 'Onshore Wind',   'tenor' => 'PaP &middot; 5Y', 'range' => '&pound;52&ndash;58/MWh' ),
					array( 'tech' => 'Solar PV',       'tenor' => 'PaP &middot; 3Y', 'range' => '&pound;48&ndash;55/MWh' ),
					array( 'tech' => 'Solar PV',       'tenor' => 'PaP &middot; 5Y', 'range' => '&pound;45&ndash;52/MWh' ),
				);
				foreach ( $indicative_ranges as $r ) :
				?>
				<div class="ticker-item">
					<span style="color:var(--etc-400);font-weight:500"><?php echo esc_html( $r['tech'] ); ?></span>
					<span style="color:var(--etc-500)"><?php echo wp_kses( $r['tenor'], array() ); ?></span>
					<span class="mono" style="color:var(--signal);font-weight:500"><?php echo wp_kses( $r['range'], array() ); ?></span>
				</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</div>
<!-- Illustrative only — not a binding offer. Prices exclude REGOs unless stated. -->

<!-- Hero -->
<section class="hero hero-xl">
	<div class="absolute inset-0 grid-bg"></div>
	<div class="hero-glow-1"></div>
	<div class="hero-glow-2"></div>

	<div class="container">
		<div class="hero-content" style="max-width:64rem">
			<div class="live-indicator" style="margin-bottom:2rem">
				<div class="live-dot signal-pulse"></div>
				<span class="text-11 font-medium text-etc-500 uppercase tracking-wider">Focused in GB &middot; Active in Europe</span>
			</div>

			<h1>
				The infrastructure<br>
				for energy<br>
				<span class="etc-gradient">liquidity</span>
			</h1>

			<p class="hero-lead" style="max-width:42rem">
				The institutional platform for energy transactions. Pricing, structuring and execution
				for PPAs across GB &mdash; and the rails for assets, storage and grid to follow.
			</p>

			<div class="hero-actions">
				<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">
					Book a call <?php echo etc_icon_arrow_right(); ?>
				</a>
				<a href="<?php echo esc_url( home_url( '/intelligence/' ) ); ?>" class="btn btn-secondary">
					View market intelligence
				</a>
			</div>

		</div>
	</div>
</section>

<!-- PPA Revenue Estimator -->
<section class="section" id="estimator">
	<div class="container">
		<div class="grid-2-asym" style="align-items:start">
			<div>
				<div class="text-11 font-semibold text-signal uppercase tracking-wider mono mb-4">Indicative Pricing &middot; GB &middot; H2 2025</div>
				<h2 class="text-3xl font-bold" style="line-height:1.25">What&rsquo;s your PPA worth?</h2>
				<p class="mt-4 text-etc-400 leading-relaxed">
					GB-native indicative PaP ranges by technology and tenor. No forms.
					No sales calls. Just the numbers.
				</p>
				<p class="mt-6 text-13 text-etc-600 leading-relaxed">
					Counterparty-specific pricing, structuring, and execution available via a call.
				</p>
			</div>
			<div class="card p-8" id="ppa-estimator">
				<!-- PPA Estimator rendered by JS -->
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
				Live today on PPAs and market intelligence. On the 2026 roadmap for assets, storage,
				grid and 24/7 CFE &mdash; the infrastructure the market needs next.
			</p>
		</div>

		<div class="cap-grid">
			<?php
			$capabilities = array(
				array( 'tag' => 'LIVE NOW', 'title' => 'PPA Marketplace & Brokerage', 'desc' => 'Source, match, structure, execute. The deepest GB pipeline in one place — with senior execution on every deal.', 'href' => '/platform/#marketplace', 'status' => 'live' ),
				array( 'tag' => 'LIVE NOW', 'title' => 'ETC Intel', 'desc' => 'Free for clients. UK power & gas, Big 6 curves, baseload/peak spreads, EU hubs, grid constraints, storage, demand and weather — one feed.', 'href' => '/intelligence/', 'status' => 'live' ),
				array( 'tag' => '2026 ROADMAP', 'title' => 'Asset Exchange', 'desc' => 'Renewable assets tradable across development stages. Early access on request.', 'href' => '/platform/#assets', 'status' => 'roadmap' ),
				array( 'tag' => '2026 ROADMAP', 'title' => 'BESS Exchange', 'desc' => 'Storage-native marketplace — revenue stack, flexibility benchmarks, performance.', 'href' => '/platform/#bess', 'status' => 'roadmap' ),
				array( 'tag' => '2026 ROADMAP', 'title' => 'Grid Intelligence', 'desc' => 'Constraint mapping, DNO connections, capacity and cannibalisation modelling.', 'href' => '/platform/#grid', 'status' => 'roadmap' ),
				array( 'tag' => '2026 ROADMAP', 'title' => '24/7 CFE Matching', 'desc' => 'Hourly carbon-free energy verification against real load profiles. Go beyond annual RECs.', 'href' => '/platform/#cfe', 'status' => 'roadmap' ),
			);
			foreach ( $capabilities as $cap ) :
				$is_roadmap = isset( $cap['status'] ) && $cap['status'] === 'roadmap';
			?>
			<a href="<?php echo esc_url( home_url( $cap['href'] ) ); ?>" class="cap-item<?php echo $is_roadmap ? ' cap-item--roadmap' : ''; ?>">
				<div class="cap-tag<?php echo $is_roadmap ? ' cap-tag--roadmap' : ''; ?>"><?php echo esc_html( $cap['tag'] ); ?></div>
				<h3 class="cap-title">
					<?php echo esc_html( $cap['title'] ); ?>
					<?php if ( $is_roadmap ) : ?><span class="cap-badge">2026</span><?php endif; ?>
				</h3>
				<p class="cap-desc"><?php echo esc_html( $cap['desc'] ); ?></p>
				<div class="cap-link"><?php echo $is_roadmap ? 'Early access' : 'Explore'; ?> <?php echo etc_icon_arrow_up_right(); ?></div>
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
				Not just a broker. Not just a middleman.<br>
				<span class="text-etc-500">Infrastructure.</span>
			</h2>
		</div>

		<div class="grid md-grid-2" style="gap:2rem">
			<?php
			$diffs = array(
				array( 'title' => 'Full market visibility', 'desc' => "The widest range of PPA opportunities in GB — projects you won't find through bilateral channels alone." ),
				array( 'title' => 'Published market prices', 'desc' => 'Live indicative ranges. Benchmark curves by technology. No hidden fees, no opaque mark-ups.' ),
				array( 'title' => 'Faster execution', 'desc' => 'Streamlined processes and digital tooling cut weeks off traditional PPA timelines.' ),
				array( 'title' => 'GB-native, Europe-connected', 'desc' => 'Built from inside the GB PPA market. Counterparty networks across European utilities, traders and asset managers.' ),
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

<!-- Leadership Perspective -->
<section class="section" id="advisory">
	<div class="container">
		<div class="mb-16">
			<div class="text-11 font-medium text-etc-600 uppercase tracking-wider mono mb-4">Leadership Perspective</div>
			<h2 class="text-3xl font-bold">
				Not just brokerage. Not just advisory.<br>
				<span class="text-etc-500">Infrastructure.</span>
			</h2>
			<p class="mt-4 text-etc-400" style="max-width:42rem">
				Founder-led. Senior on every deal. No handoffs to junior layers, no referrals to
				outsourced teams &mdash; decisions in hours, not weeks.
			</p>
		</div>

		<div class="founder-card card p-8" style="max-width:48rem">
			<div class="founder-name text-lg font-semibold text-white">Daniel Zemmour</div>
			<div class="founder-title text-11 font-medium text-signal uppercase tracking-wider mono mt-1 mb-6">Founder &middot; Energy Trade Centre</div>
			<blockquote class="text-base text-white leading-relaxed mb-6" style="font-style:italic;border-left:2px solid var(--signal);padding-left:1.25rem;margin:0 0 1.5rem">
				&ldquo;In today&rsquo;s market, generators and asset owners need more than standard broker coverage.
				They need a partner that understands asset-level complexity, responds quickly, and is
				willing to structure differently when the situation demands it.&rdquo;
			</blockquote>
			<ul class="founder-bullets text-13 text-etc-400 leading-relaxed" style="margin:0;padding-left:1.25rem">
				<li>Faster response to evolving counterparty demand</li>
				<li>Creative structuring for complex assets and hybrid projects</li>
				<li>Bespoke execution aligned to each asset&rsquo;s economics</li>
				<li>Senior on every deal &mdash; decisions in hours, not weeks</li>
			</ul>
		</div>
	</div>
</section>

<!-- Counterparty Network -->
<section class="section section--alt section--border-y">
	<div class="container">
		<div class="mb-16">
			<div class="text-11 font-medium text-etc-600 uppercase tracking-wider mono mb-4">Who you transact with</div>
			<h2 class="text-3xl font-bold">
				Institutional counterparty network
			</h2>
		</div>

		<!-- Counterparty categories -->
		<div class="flex flex-wrap items-center" style="gap:2.5rem 2.5rem;margin-bottom:3rem">
			<?php
			$counterparties = array(
				array( 'name' => 'Big 6 utilities', 'role' => 'Majority of GB network' ),
				array( 'name' => 'European energy majors', 'role' => 'Multiple active' ),
				array( 'name' => 'Independent traders & originators', 'role' => 'Leading books' ),
				array( 'name' => 'IPPs', 'role' => 'Independent Power Producers' ),
				array( 'name' => 'Corporate offtakers', 'role' => 'Data centres, industrials' ),
			);
			foreach ( $counterparties as $cp ) :
			?>
			<div class="partner-item">
				<div class="partner-bar"></div>
				<div>
					<span class="partner-name"><?php echo esc_html( $cp['name'] ); ?></span>
					<span class="partner-role"><?php echo esc_html( $cp['role'] ); ?></span>
				</div>
			</div>
			<?php endforeach; ?>
		</div>

		<p class="text-13 text-etc-400 leading-relaxed" style="max-width:48rem;margin-bottom:3rem">
			<strong class="text-signal">80%+</strong> of our offtaker network holds investment-grade credit ratings.
			Backed by parent companies including <strong class="text-white">Fortune 500 companies</strong>.
		</p>

		<div class="grid grid-2 grid-px grid-rounded grid-bg-subtle">
			<?php
			$segments = array(
				array( 'type' => 'Utilities', 'detail' => 'Big 6 and European majors looking to fill offtake books and route complex generation.' ),
				array( 'type' => 'Independent traders & originators', 'detail' => 'Proprietary books sourcing GB pipeline at institutional scale.' ),
				array( 'type' => 'IPPs & asset owners', 'detail' => 'Generators, aggregators and infrastructure funds monetising wind, solar, BESS and EfW output.' ),
				array( 'type' => 'Corporate offtakers', 'detail' => 'Data centres, industrials and large energy buyers seeking bilateral PPA cover.' ),
			);
			foreach ( $segments as $p ) :
			?>
			<div class="surface-1 p-8">
				<h3 class="text-base font-semibold text-white mb-2"><?php echo esc_html( $p['type'] ); ?></h3>
				<p class="text-13 text-etc-500 leading-relaxed"><?php echo esc_html( $p['detail'] ); ?></p>
			</div>
			<?php endforeach; ?>
		</div>

		<div class="flex flex-wrap gap-6 items-center mt-8">
			<?php
			$stats = array( '1,500MW+ GB pipeline', 'Big 6 + European majors', '80%+ investment-grade offtakers', 'Founder-led execution' );
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
			Let&rsquo;s talk.
		</h2>
		<p class="mt-4 text-etc-400" style="max-width:36rem;margin-left:auto;margin-right:auto">
			Whether you&rsquo;re looking for offtake, sourcing generation, or want to understand
			what the GB PPA market can offer your book &mdash; we&rsquo;d welcome a conversation.
		</p>
		<div class="flex justify-center gap-4 mt-8" style="flex-wrap:wrap">
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="btn btn-primary">
				Book a call <?php echo etc_icon_arrow_right(); ?>
			</a>
		</div>
	</div>
</section>

<?php get_footer(); ?>
