<script>
	import SanityImage from '$lib/components/cms/SanityImage.svelte';
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';

	const { section } = $props();
</script>

<section class="about">
	<div class="container container--sm about__inner">
		<div class="image-wrap">
			<SanityImage source={section.image} width={400} alt={section.heading} />
		</div>

		<SectionHeader
			eyebrow={section.eyebrow}
			heading={section.heading}
			subheading={section.description}
		/>
	</div>
</section>

<style>
	.about {
		padding-block: var(--section-spacing-xl);
		background-image: url('/rectangle.svg');
		background-size: 50px;
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);

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

		:global .subheading {
			max-width: 100ch;
		}
	}
</style>
