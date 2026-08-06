<script>
	import Link from '../cms/Link.svelte';
	import SanityImage from '../cms/SanityImage.svelte';
	import Button from '../ui/Button.svelte';

	const { footer } = $props();
</script>

<footer class="footer block-spacing">
	<div class="container">
		<div class="inner {!footer.menu ? 'no-menu' : null}">
			{#if footer.menu}
				<nav>
					{#each footer.menu?.menuItems as menuItem, index (index)}
						<Link element="a" classes="nav-item type-h-sm" label={menuItem.label} {...menuItem}>
							{menuItem.label}
						</Link>
					{/each}
				</nav>
			{/if}

			<div class="columns">
				<div class="cta-column">
					<div class="text-wrap">
						<h5>{footer.ctaHeading}</h5>
						<div class="type-gc">
							{footer.ctaContent}
						</div>
					</div>
					<Button {...footer.ctaButton} />
				</div>

				<div class="logo-column">
					<SanityImage classes="logo" source={footer.logo} />

					<ul class="company-details">
						{#each footer.companyDetails as item, index (index)}
							<li class="type-h-xs">{item}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<a class="source-link" href="https://github.com/robindelaater/delaater.nl" target="_blank">
			View source on Github <i class="icon icon-arrow-outward"></i>
		</a>
	</div>
</footer>

<style>
	.footer {
		.container {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-2xl);
		}

		.inner {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-3xl);

			padding-block: var(--spacing-lg);
			padding-inline: var(--spacing-lg);

			background: var(--color-black-50-50);
			backdrop-filter: blur(var(--spacing-xs));

			@media (min-width: 768px) {
				padding-block: var(--spacing-lg) var(--spacing-3xl);
				padding-inline: var(--spacing-3xl);

				&.no-menu {
					padding-block: var(--spacing-3xl);
				}
			}
		}

		nav {
			display: none;
			flex-flow: row wrap;
			gap: var(--spacing-md);
			justify-content: space-between;

			@media (min-width: 768px) {
				display: flex;
			}

			:global .nav-item {
				display: flex;
				align-items: center;
				gap: var(--spacing-2xs);
			}
		}

		.columns {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-4xl);

			@media (min-width: 768px) {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				align-items: flex-end;
			}
		}

		.cta-column {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-md);

			.text-wrap {
				display: flex;
				flex-flow: column;
				gap: var(--spacing-xs);
			}
		}

		.logo-column {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-lg);

			:global .logo {
				width: 100%;
			}

			.company-details {
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;

				color: var(--color-black-400);
			}
		}

		.source-link {
			display: flex;
			align-items: center;
			gap: var(--spacing-2xs);
			color: var(--color-black);

			border-bottom: 1px solid var(--color-black);

			width: fit-content;

			margin-inline: auto;
		}
	}
</style>
