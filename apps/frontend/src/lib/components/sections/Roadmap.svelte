<script>
	import SectionHeading from '../SectionHeading.svelte';

	const { section } = $props();
</script>

<section class="roadmap block-spacing">
	<div class="container">
		<div class="inner">
			<SectionHeading data={section.sectionHeading} />

			<div class="blocks">
				{#each section.items as block, index (index)}
					<div class="block">
						<div class="number">{index + 1}</div>
						<h6 class="title">{block.title}</h6>
						<div class="subtitle">{block.subtitle}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.roadmap {
		.inner {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-xl);
		}

		.blocks {
			display: grid;
			gap: var(--spacing-sm);

			@media (min-width: 1024px) {
				grid-template-columns: repeat(3, 1fr);
			}
		}

		.block {
			background: var(--color-white);
			border: 1px solid var(--color-black-100);
			border-radius: var(--spacing-2xs);

			display: flex;
			flex-flow: column;
			gap: var(--spacing-xs);
			justify-self: stretch;

			padding-block: var(--spacing-sm);
			padding-inline: var(--spacing-lg);

			.number {
				color: var(--color-orange-300);
				font-weight: bold;
				font-family: var(--font-family-heading);
				font-size: var(--font-size-h5);
			}
		}
	}
</style>
