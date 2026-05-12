<script>
	const { section } = $props();
</script>

<section class="hero">
	<div class="container hero__inner">
		<h1 class="heading">{section.heading}</h1>
		<div class="description">{section.subheading}</div>
	</div>
</section>

<style>
	.hero {
		background: #000000;
		background-image: url('/rectangle.svg');
		background-size: 50px;

		color: var(--color-on-black);
		padding-block: var(--section-spacing-xl);

		border: 1px solid var(--color-border);

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

			.description {
				max-width: 50ch;
			}
		}
	}
</style>
