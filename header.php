<?php
/**
 * Theme Header
 *
 * @package ETC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$signin_url = get_theme_mod( 'etc_signin_url', '/dashboard' );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/favicon.svg" type="image/svg+xml">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="site-header">
	<nav class="nav-inner">
		<!-- Logo -->
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="nav-logo">
			<svg class="nav-logo-icon" width="28" height="28" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M34 7 H19 C10.7 7 4 13.7 4 22 C4 30.3 10.7 37 19 37 H34" stroke="#00E676" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
				<line x1="19" y1="22" x2="30" y2="22" stroke="#00E676" stroke-width="5.5" stroke-linecap="round"/>
			</svg>
			<span class="nav-logo-text">ETC</span>
		</a>

		<!-- Desktop Navigation -->
		<div class="nav-links">
			<!-- Platform dropdown -->
			<div class="nav-has-dropdown">
				<a href="<?php echo esc_url( home_url( '/platform/' ) ); ?>" class="nav-link">
					Platform <?php echo etc_icon_chevron_down(); ?>
				</a>
				<div class="nav-dropdown">
					<a href="<?php echo esc_url( home_url( '/platform/#marketplace' ) ); ?>" class="nav-dropdown-item">
						<div class="nav-dropdown-item-title">PPA Marketplace</div>
						<div class="nav-dropdown-item-desc">4,500+ live offers. 12 markets. Real-time pricing.</div>
					</a>
					<a href="<?php echo esc_url( home_url( '/platform/#assets' ) ); ?>" class="nav-dropdown-item">
						<div class="nav-dropdown-item-title">Asset Exchange</div>
						<div class="nav-dropdown-item-desc">Trade renewable projects. Asset+PPA bundles.</div>
					</a>
					<a href="<?php echo esc_url( home_url( '/platform/#bess' ) ); ?>" class="nav-dropdown-item">
						<div class="nav-dropdown-item-title">BESS Exchange</div>
						<div class="nav-dropdown-item-desc">Storage capacity. Flexibility Index. Matching.</div>
					</a>
					<a href="<?php echo esc_url( home_url( '/platform/#analytics' ) ); ?>" class="nav-dropdown-item">
						<div class="nav-dropdown-item-title">Analytics Engine</div>
						<div class="nav-dropdown-item-desc">Monte Carlo. IFRS 9. Portfolio modelling.</div>
					</a>
					<a href="<?php echo esc_url( home_url( '/platform/#grid' ) ); ?>" class="nav-dropdown-item">
						<div class="nav-dropdown-item-title">Grid Intelligence</div>
						<div class="nav-dropdown-item-desc">Live generation. Constraints. Cannibalization.</div>
					</a>
					<a href="<?php echo esc_url( home_url( '/platform/#cfe' ) ); ?>" class="nav-dropdown-item">
						<div class="nav-dropdown-item-title">24/7 CFE</div>
						<div class="nav-dropdown-item-desc">Hourly matching. Carbon-free verification.</div>
					</a>
				</div>
			</div>

			<!-- Solutions dropdown -->
			<div class="nav-has-dropdown">
				<a href="<?php echo esc_url( home_url( '/solutions/' ) ); ?>" class="nav-link">
					Solutions <?php echo etc_icon_chevron_down(); ?>
				</a>
				<div class="nav-dropdown">
					<a href="<?php echo esc_url( home_url( '/solutions/buyers/' ) ); ?>" class="nav-dropdown-item">
						<div class="nav-dropdown-item-title">Procurement</div>
						<div class="nav-dropdown-item-desc">For corporates &amp; utilities buying clean energy</div>
					</a>
					<a href="<?php echo esc_url( home_url( '/solutions/sellers/' ) ); ?>" class="nav-dropdown-item">
						<div class="nav-dropdown-item-title">Origination</div>
						<div class="nav-dropdown-item-desc">For developers &amp; asset owners seeking offtake</div>
					</a>
					<a href="<?php echo esc_url( home_url( '/solutions/investors/' ) ); ?>" class="nav-dropdown-item">
						<div class="nav-dropdown-item-title">Investment</div>
						<div class="nav-dropdown-item-desc">For infrastructure funds &amp; portfolio managers</div>
					</a>
				</div>
			</div>

			<a href="<?php echo esc_url( home_url( '/intelligence/' ) ); ?>" class="nav-link">Intelligence</a>
			<a href="<?php echo esc_url( home_url( '/about/' ) ); ?>" class="nav-link">Company</a>
		</div>

		<!-- CTA buttons -->
		<div class="nav-cta">
			<a href="<?php echo esc_url( $signin_url ); ?>" class="nav-cta-signin">Sign in</a>
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="nav-cta-btn">Get access</a>
		</div>

		<!-- Mobile toggle -->
		<button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation">
			<span class="nav-toggle-open"><?php echo etc_icon_menu(); ?></span>
			<span class="nav-toggle-close" style="display:none"><?php echo etc_icon_x(); ?></span>
		</button>
	</nav>

	<!-- Mobile menu -->
	<div class="mobile-menu" id="mobile-menu">
		<a href="<?php echo esc_url( home_url( '/platform/' ) ); ?>" class="mobile-menu-link">Platform</a>
		<a href="<?php echo esc_url( home_url( '/platform/#marketplace' ) ); ?>" class="mobile-menu-child">PPA Marketplace</a>
		<a href="<?php echo esc_url( home_url( '/platform/#assets' ) ); ?>" class="mobile-menu-child">Asset Exchange</a>
		<a href="<?php echo esc_url( home_url( '/platform/#bess' ) ); ?>" class="mobile-menu-child">BESS Exchange</a>
		<a href="<?php echo esc_url( home_url( '/platform/#analytics' ) ); ?>" class="mobile-menu-child">Analytics Engine</a>
		<a href="<?php echo esc_url( home_url( '/platform/#grid' ) ); ?>" class="mobile-menu-child">Grid Intelligence</a>
		<a href="<?php echo esc_url( home_url( '/platform/#cfe' ) ); ?>" class="mobile-menu-child">24/7 CFE</a>

		<a href="<?php echo esc_url( home_url( '/solutions/' ) ); ?>" class="mobile-menu-link">Solutions</a>
		<a href="<?php echo esc_url( home_url( '/solutions/buyers/' ) ); ?>" class="mobile-menu-child">Procurement</a>
		<a href="<?php echo esc_url( home_url( '/solutions/sellers/' ) ); ?>" class="mobile-menu-child">Origination</a>
		<a href="<?php echo esc_url( home_url( '/solutions/investors/' ) ); ?>" class="mobile-menu-child">Investment</a>

		<a href="<?php echo esc_url( home_url( '/intelligence/' ) ); ?>" class="mobile-menu-link">Intelligence</a>
		<a href="<?php echo esc_url( home_url( '/about/' ) ); ?>" class="mobile-menu-link">Company</a>

		<div class="mobile-menu-actions">
			<a href="<?php echo esc_url( $signin_url ); ?>" style="color:var(--etc-300);border:1px solid var(--border-subtle)">Sign in</a>
			<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" style="color:var(--etc-black);background:var(--signal);font-weight:600">Get access</a>
		</div>
	</div>
</header>

<main style="padding-top:3.5rem">
