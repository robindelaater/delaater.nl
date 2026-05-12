<script></script>

<footer class="footer">
	<div class="container">
		<div class="footer__inner">
			<div class="footer__top">
				<nav class="footer__nav">
					<a href="#" class="footer__nav-item">Projecten</a>
					<a href="#" class="footer__nav-item">Logs</a>
					<a href="#" class="footer__nav-item">Contact</a>
				</nav>

				<div class="cta-wrap">
					<a href="#" class="footer__cta btn btn--light"> Contact </a>
				</div>
			</div>

			<div class="footer__logo">
				<img src="/logo.svg" alt="Logo" />
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: #000000;
		background-image: url('/footer-pattern.svg');
		padding-block: var(--section-spacing-md);

		.footer__inner {
			display: flex;
			flex-direction: column;
			gap: var(--section-spacing-2xl);

			padding-inline: var(--spacing-3xl);
		}

		.footer__top {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.footer__nav {
			display: flex;
			gap: var(--spacing-3xl);
			width: fit-content;

			.footer__nav-item {
				font-family: var(--font-family-heading);
				color: var(--color-black-100);
				text-decoration: none;
				text-transform: uppercase;

				transition: color 75ms ease-in;

				&:hover {
					color: var(--color-white-500);
				}
			}
		}
	}
</style>
