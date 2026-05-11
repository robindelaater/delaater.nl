<script>
	import SectionHeader from '$lib/components/blocks/SectionHeader.svelte';
	import CasesGridItem from '../blocks/CasesGridItem.svelte';

	const { section } = $props();
</script>

<section class="cases">
	<div class="container cases__inner">
		<SectionHeader
			eyebrow={section.eyebrow}
			heading={section.heading}
			subheading={section.subheading}
		/>

		<div class="cases__grid">
			{#each section.cases as item (item._id)}
				<CasesGridItem {...item} />
			{/each}
		</div>
	</div>
</section>

<style>
	.cases {
		padding-block: var(--section-spacing-xl);

		.cases__inner {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-lg);
		}

		:global .section-header {
			@media (min-width: 768px) {
				max-width: 50%;
			}
		}

		.cases__grid {
			display: grid;
			grid-template-columns: 1fr;
			gap: var(--spacing-md);

			@media (min-width: 768px) {
				grid-template-columns: repeat(2, 1fr);
			}

			@media (min-width: 1440px) {
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
</style>
