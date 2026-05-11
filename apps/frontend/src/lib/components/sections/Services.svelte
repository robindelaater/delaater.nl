<script>
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';

	const { section } = $props();
</script>

<section class="services">
	<div class="container services__inner">
		<SectionHeader
			eyebrow={section.eyebrow}
			heading={section.heading}
			subheading={section.subheading}
		/>

		<ul class="services__list">
			{#each section.services as service, index (index)}
				<li class="services__item subheading">{service}</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.services {
		padding-block: var(--section-spacing-md);

		.services__inner {
			display: grid;
			grid-template-columns: 1fr;
			gap: var(--spacing-3xl);

			@media (min-width: 768px) {
				grid-template-columns: 1fr 1fr;
			}
		}

		.services__list {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-sm);
		}

		.services__item {
			display: flex;
			padding-inline: var(--spacing-sm);
			padding-block: var(--spacing-xs);
			border: 1px solid var(--color-primary);
			border-radius: var(--spacing-3xs);
			gap: var(--spacing-sm);
			width: fit-content;
		}
	}
</style>
