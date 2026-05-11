<script>
	const { section } = $props();
</script>

<section class="hero">
	<div class="container hero__inner">
		<h1 class="heading">{section.heading}</h1>
		<div class="subheading">{section.subheading}</div>
	</div>
</section>

<style>
	.hero {
		background: var(--color-black);
		background-image: url('/rectangle.svg');
		background-size: 50px;

		color: var(--color-on-black);
		padding-block: var(--section-spacing-xl);

		border: 1px solid var(--border-color);

		.hero__inner {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-sm);

			align-items: center;
			justify-content: center;
			text-align: center;

			.heading {
				max-width: 1144px;
			}

			.subheading {
				max-width: 50ch;
			}
		}
	}
</style>
