<?php
/**
 * Template Name: Contact
 *
 * Supports Contact Form 7, WPForms, Gravity Forms via Customizer shortcode.
 * Falls back to a styled HTML form if no plugin shortcode is configured.
 *
 * @package ETC
 */

get_header();

$form_shortcode = get_theme_mod( 'etc_contact_form_shortcode', '' );
$signin_url     = get_theme_mod( 'etc_signin_url', '/dashboard' );

$roles = array(
	'Energy Buyer / Procurement',
	'Developer / Asset Owner',
	'Investor / Fund Manager',
	'Utility / Offtaker',
	'Consultant / Advisor',
	'Other',
);
?>

<!-- Hero -->
<section class="hero">
	<div class="absolute inset-0 grid-bg"></div>
	<div class="container">
		<div class="hero-content">
			<h1>Get access to ETC</h1>
			<p class="hero-lead">
				Request a personalised walkthrough of the platform. We&rsquo;ll tailor the demo
				to your workflow &mdash; whether that&rsquo;s procurement, origination, or portfolio management.
			</p>
		</div>
	</div>
</section>

<!-- Form + Info -->
<section class="section section--border">
	<div class="container">
		<div class="grid-5-asym">
			<!-- Form Column -->
			<div>
				<?php if ( ! empty( $form_shortcode ) ) : ?>
					<!-- Plugin form (Contact Form 7, WPForms, Gravity Forms, etc.) -->
					<div class="etc-form">
						<?php echo do_shortcode( $form_shortcode ); ?>
					</div>
				<?php else : ?>
					<!-- Fallback: built-in form -->
					<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" class="etc-form">
						<?php wp_nonce_field( 'etc_contact_form', 'etc_nonce' ); ?>
						<input type="hidden" name="action" value="etc_contact_submit">

						<div class="form-row">
							<div>
								<label for="firstName">First name</label>
								<input id="firstName" name="firstName" type="text" required>
							</div>
							<div>
								<label for="lastName">Last name</label>
								<input id="lastName" name="lastName" type="text" required>
							</div>
						</div>

						<div>
							<label for="email">Work email</label>
							<input id="email" name="email" type="email" required>
						</div>

						<div>
							<label for="company">Company</label>
							<input id="company" name="company" type="text" required>
						</div>

						<div>
							<label for="role">Role</label>
							<select id="role" name="role">
								<option value="">Select your role</option>
								<?php foreach ( $roles as $r ) : ?>
								<option value="<?php echo esc_attr( $r ); ?>"><?php echo esc_html( $r ); ?></option>
								<?php endforeach; ?>
							</select>
						</div>

						<div>
							<label for="message">Tell us about your needs</label>
							<textarea id="message" name="message" rows="4" placeholder="What markets, volumes, or features are most relevant to you?"></textarea>
						</div>

						<button type="submit" class="btn btn-primary">
							Submit request <?php echo etc_icon_arrow_right(); ?>
						</button>
					</form>
				<?php endif; ?>
			</div>

			<!-- Contact Info Column -->
			<div style="display:flex;flex-direction:column;gap:1.5rem">
				<div class="card p-8">
					<h3 class="text-11 font-semibold text-etc-600 uppercase tracking-widest mb-6">Contact</h3>
					<div style="display:flex;flex-direction:column;gap:1.25rem">
						<div class="flex items-start gap-4">
							<?php echo etc_icon_mail(); ?>
							<div>
								<div class="text-13 font-medium text-white">Email</div>
								<div class="text-13 text-etc-500">info@energytradecentre.com</div>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<?php echo etc_icon_map_pin(); ?>
							<div>
								<div class="text-13 font-medium text-white">Headquarters</div>
								<div class="text-13 text-etc-500">London, United Kingdom</div>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<?php echo etc_icon_building(); ?>
							<div>
								<div class="text-13 font-medium text-white">Offices</div>
								<div class="text-13 text-etc-500">Amsterdam &bull; Houston</div>
							</div>
						</div>
					</div>
				</div>

				<div class="card-elevated p-8">
					<div style="width:1.5rem;height:1px;background:var(--signal);margin-bottom:1rem"></div>
					<h3 class="text-base font-semibold text-white mb-2">Typical response: under 24 hours</h3>
					<p class="text-13 text-etc-500 leading-relaxed">
						For demo requests, we&rsquo;ll schedule a personalised walkthrough with a
						member of our team who understands your specific workflow and market.
					</p>
				</div>

				<div class="card-elevated p-8">
					<div style="width:1.5rem;height:1px;background:var(--accent);margin-bottom:1rem"></div>
					<h3 class="text-base font-semibold text-white mb-2">Existing users</h3>
					<p class="text-13 text-etc-500 leading-relaxed">
						Already on the platform? <a href="<?php echo esc_url( $signin_url ); ?>" style="color:var(--signal)">Sign in</a> to your command centre to access support,
						documentation, and your dedicated account team.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<?php get_footer(); ?>
