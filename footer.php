<?php
/**
 * Theme Footer
 *
 * @package ETC
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
</main>

<footer class="site-footer">
	<div class="footer-inner">
		<div class="footer-grid">
			<!-- Brand -->
			<div class="footer-brand">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="footer-logo">
					<svg class="footer-logo-icon" width="22" height="22" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M34 7 H19 C10.7 7 4 13.7 4 22 C4 30.3 10.7 37 19 37 H34" stroke="#00E676" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
						<line x1="19" y1="22" x2="30" y2="22" stroke="#00E676" stroke-width="5.5" stroke-linecap="round"/>
					</svg>
					<span class="footer-logo-text">ETC</span>
				</a>
				<p class="footer-tagline">The operating system for<br>the energy transition.</p>
			</div>

			<!-- Platform -->
			<div>
				<h3 class="footer-col-title">Platform</h3>
				<div class="footer-links">
					<a href="<?php echo esc_url( home_url( '/platform/#marketplace' ) ); ?>" class="footer-link">PPA Marketplace</a>
					<a href="<?php echo esc_url( home_url( '/platform/#assets' ) ); ?>" class="footer-link">Asset Exchange</a>
					<a href="<?php echo esc_url( home_url( '/platform/#bess' ) ); ?>" class="footer-link">BESS Exchange</a>
					<a href="<?php echo esc_url( home_url( '/platform/#analytics' ) ); ?>" class="footer-link">Analytics Engine</a>
					<a href="<?php echo esc_url( home_url( '/platform/#grid' ) ); ?>" class="footer-link">Grid Intelligence</a>
					<a href="<?php echo esc_url( home_url( '/platform/#lightning' ) ); ?>" class="footer-link">Lightning PPA</a>
				</div>
			</div>

			<!-- Solutions -->
			<div>
				<h3 class="footer-col-title">Solutions</h3>
				<div class="footer-links">
					<a href="<?php echo esc_url( home_url( '/solutions/buyers/' ) ); ?>" class="footer-link">Procurement</a>
					<a href="<?php echo esc_url( home_url( '/solutions/sellers/' ) ); ?>" class="footer-link">Origination</a>
					<a href="<?php echo esc_url( home_url( '/solutions/investors/' ) ); ?>" class="footer-link">Investment</a>
				</div>
			</div>

			<!-- Intelligence -->
			<div>
				<h3 class="footer-col-title">Intelligence</h3>
				<div class="footer-links">
					<a href="<?php echo esc_url( home_url( '/intelligence/' ) ); ?>" class="footer-link">Market Data</a>
					<a href="<?php echo esc_url( home_url( '/intelligence/#research' ) ); ?>" class="footer-link">Research</a>
					<a href="<?php echo esc_url( home_url( '/intelligence/#pricing' ) ); ?>" class="footer-link">Pricing Trends</a>
				</div>
			</div>

			<!-- Company -->
			<div>
				<h3 class="footer-col-title">Company</h3>
				<div class="footer-links">
					<a href="<?php echo esc_url( home_url( '/about/' ) ); ?>" class="footer-link">About</a>
					<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="footer-link">Contact</a>
					<a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>" class="footer-link">Transition Services</a>
					<a href="<?php echo esc_url( home_url( '/privacy/' ) ); ?>" class="footer-link">Privacy</a>
					<a href="<?php echo esc_url( home_url( '/terms/' ) ); ?>" class="footer-link">Terms</a>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<p class="footer-copy">&copy; <?php echo esc_html( date( 'Y' ) ); ?> Energy Trade Centre Ltd. All rights reserved.</p>
			<div class="footer-offices">
				<span>London</span>
				<span class="footer-offices-dot">&bull;</span>
				<span>Amsterdam</span>
				<span class="footer-offices-dot">&bull;</span>
				<span>Houston</span>
			</div>
		</div>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
