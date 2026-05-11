<script>
	import SanityImage from '$lib/components/cms/SanityImage.svelte';

	const { section } = $props();
</script>

<section class="about">
	<div class="container container--sm about__inner">
		<div class="image-wrap">
			<SanityImage source={section.image} width={400} alt={section.heading} />
		</div>

		<div class="section-header">
			<div class="eyebrow">{section.eyebrow}</div>
			<h2>{section.heading}</h2>
			<div class="subheading">{section.description}</div>
		</div>
	</div>
</section>

<style>
	.about {
		padding-block: var(--section-spacing-xl);

		.about__inner {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: var(--spacing-3xl);

			@media (min-width: 768px) {
				flex-direction: row;
			}
		}

		.image-wrap {
			width: 100%;

			:global img {
				width: 100%;
			}
		}

		.subheading {
			max-width: 100ch;
		}
	}
</style>
