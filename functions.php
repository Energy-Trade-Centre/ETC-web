<?php
/**
 * ETC Theme Functions
 *
 * @package ETC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'ETC_VERSION', '1.0.0' );

/**
 * Theme setup
 */
function etc_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'custom-logo' );
	add_theme_support( 'editor-styles' );

	register_nav_menus( array(
		'primary'  => __( 'Primary Navigation', 'etc' ),
		'footer'   => __( 'Footer Navigation', 'etc' ),
	) );
}
add_action( 'after_setup_theme', 'etc_setup' );

/**
 * Enqueue styles and scripts
 */
function etc_scripts() {
	wp_enqueue_style( 'etc-theme', get_template_directory_uri() . '/assets/css/theme.css', array(), ETC_VERSION );
	wp_enqueue_style( 'etc-style', get_stylesheet_uri(), array( 'etc-theme' ), ETC_VERSION );

	wp_enqueue_script( 'etc-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), ETC_VERSION, true );

	// Only load PPA estimator on pages that need it
	if ( is_front_page() ) {
		wp_enqueue_script( 'etc-ppa-estimator', get_template_directory_uri() . '/assets/js/ppa-estimator.js', array(), ETC_VERSION, true );
	}
}
add_action( 'wp_enqueue_scripts', 'etc_scripts' );

/**
 * Register widget areas
 */
function etc_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Footer Widget Area', 'etc' ),
		'id'            => 'footer-1',
		'before_widget' => '<div class="footer-widget">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="footer-col-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'etc_widgets_init' );

/**
 * Add Schema.org structured data (skip if Yoast/RankMath active)
 */
function etc_schema_output() {
	if ( defined( 'WPSEO_VERSION' ) || defined( 'RANK_MATH_VERSION' ) ) {
		return;
	}

	$schema_org = array(
		'@context'    => 'https://schema.org',
		'@type'       => 'Organization',
		'name'        => 'Energy Trade Centre',
		'alternateName' => 'ETC',
		'url'         => home_url( '/' ),
		'logo'        => get_template_directory_uri() . '/assets/images/favicon.svg',
		'description' => 'The institutional-grade platform for PPA trading, renewable asset exchange, battery storage, and energy market intelligence.',
		'address'     => array(
			'@type'           => 'PostalAddress',
			'addressLocality' => 'London',
			'addressCountry'  => 'GB',
		),
		'contactPoint' => array(
			'@type'       => 'ContactPoint',
			'contactType' => 'sales',
			'email'       => 'info@energytradecentre.com',
		),
	);

	$schema_site = array(
		'@context' => 'https://schema.org',
		'@type'    => 'WebSite',
		'name'     => 'ETC',
		'url'      => home_url( '/' ),
	);

	echo '<script type="application/ld+json">' . wp_json_encode( $schema_org, JSON_UNESCAPED_SLASHES ) . '</script>' . "\n";
	echo '<script type="application/ld+json">' . wp_json_encode( $schema_site, JSON_UNESCAPED_SLASHES ) . '</script>' . "\n";
}
add_action( 'wp_head', 'etc_schema_output' );

/**
 * Add meta tags for SEO (skip if Yoast/RankMath active)
 */
function etc_meta_tags() {
	if ( defined( 'WPSEO_VERSION' ) || defined( 'RANK_MATH_VERSION' ) ) {
		return;
	}

	$description = 'ETC is the institutional-grade platform for PPA trading, renewable asset exchange, battery storage, and energy market intelligence. 4,500+ live offers. 12 markets. Full transparency.';
	$keywords = 'PPA marketplace, power purchase agreement, renewable energy trading, energy asset exchange, battery storage marketplace, BESS trading, corporate PPA, renewable energy procurement, energy analytics, grid intelligence, carbon free energy, 24/7 CFE matching, PPA pricing, renewable energy platform, energy market intelligence, solar PPA, wind PPA, energy trade centre, ETC platform, PPA revenue estimator, lightning PPA';

	echo '<meta name="description" content="' . esc_attr( $description ) . '">' . "\n";
	echo '<meta name="keywords" content="' . esc_attr( $keywords ) . '">' . "\n";
	echo '<meta property="og:type" content="website">' . "\n";
	echo '<meta property="og:locale" content="en_GB">' . "\n";
	echo '<meta property="og:site_name" content="ETC">' . "\n";
	echo '<meta property="og:title" content="' . esc_attr( wp_get_document_title() ) . '">' . "\n";
	echo '<meta property="og:description" content="' . esc_attr( $description ) . '">' . "\n";
	echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
}
add_action( 'wp_head', 'etc_meta_tags' );

/**
 * Customizer: Contact form shortcode
 */
function etc_customize_register( $wp_customize ) {
	$wp_customize->add_section( 'etc_contact', array(
		'title'    => __( 'Contact Form', 'etc' ),
		'priority' => 130,
	) );

	$wp_customize->add_setting( 'etc_contact_form_shortcode', array(
		'default'           => '',
		'sanitize_callback' => 'wp_kses_post',
	) );

	$wp_customize->add_control( 'etc_contact_form_shortcode', array(
		'label'       => __( 'Contact Form Shortcode', 'etc' ),
		'description' => __( 'Paste your Contact Form 7, WPForms, or Gravity Forms shortcode here. If empty, the built-in form will be used.', 'etc' ),
		'section'     => 'etc_contact',
		'type'        => 'textarea',
	) );

	// Sign-in URL
	$wp_customize->add_setting( 'etc_signin_url', array(
		'default'           => '/dashboard',
		'sanitize_callback' => 'esc_url_raw',
	) );

	$wp_customize->add_control( 'etc_signin_url', array(
		'label'   => __( 'Sign In URL', 'etc' ),
		'section' => 'etc_contact',
		'type'    => 'url',
	) );
}
add_action( 'customize_register', 'etc_customize_register' );

/**
 * SVG check icon helper
 */
function etc_icon_check() {
	return '<svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--signal)"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
}

/**
 * SVG arrow-right icon helper
 */
function etc_icon_arrow_right() {
	return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
}

/**
 * SVG arrow-up-right icon helper
 */
function etc_icon_arrow_up_right() {
	return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>';
}

/**
 * SVG chevron-down icon helper
 */
function etc_icon_chevron_down() {
	return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
}

/**
 * SVG mail icon helper
 */
function etc_icon_mail() {
	return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--signal)"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>';
}

/**
 * SVG map-pin icon helper
 */
function etc_icon_map_pin() {
	return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--signal)"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
}

/**
 * SVG building icon helper
 */
function etc_icon_building() {
	return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:var(--signal)"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>';
}

/**
 * SVG menu icon helper
 */
function etc_icon_menu() {
	return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
}

/**
 * SVG x (close) icon helper
 */
function etc_icon_x() {
	return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
}

/**
 * Disable WordPress emoji scripts for performance
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
