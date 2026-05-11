<script>
	import { resolve } from '$app/paths';
</script>

<header class="header">
	<div class="header__inner container">
		<div class="logo-wrap">
			<a href={resolve('/')} title="Laater." class="header__logo h6">Laater.</a>
		</div>

		<nav class="header__nav" aria-label="Main navigation">
			<a href="#" class="header__nav-item">Projecten</a>
			<a href="#" class="header__nav-item">Logs</a>
			<a href="#" class="header__nav-item">Contact</a>
		</nav>

		<div class="cta-wrap">
			<a href="#" class="header__cta btn btn--secondary"> Contact </a>
		</div>
	</div>
</header>

<style>
	.header {
		padding-block: var(--spacing-md);

		.header__inner {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: center;

			@media (min-width: 768px) {
				grid-template-columns: repeat(3, 1fr);
			}
		}

		.header__logo {
			text-decoration: none;
			color: var(--color-black);
		}

		.header__nav {
			display: none;
			gap: var(--spacing-md);
			border-radius: var(--spacing-3xs);
			border: 0.5px solid var(--color-black-400);
			width: fit-content;
			margin-inline: auto;

			@media (min-width: 768px) {
				display: flex;
			}

			.header__nav-item {
				text-decoration: none;
				color: var(--color-black);
				padding-block: var(--spacing-sm);
				padding-inline: var(--spacing-md);

				font-family: var(--font-family-heading);
				text-transform: uppercase;
				color: var(--color-black-300);

				transition: color 75ms ease-in;

				&:hover {
					color: var(--color-black-500);
				}

				&:first-child {
					padding-inline-start: var(--spacing-xl);
				}

				&:last-child {
					padding-inline-end: var(--spacing-xl);
				}
			}
		}

		.cta-wrap {
			display: flex;
			align-items: center;
			justify-content: end;
		}
	}
</style>
