<script>
	import SectionHeading from '../SectionHeading.svelte';

	const { section } = $props();
</script>

<section class="cases block-spacing" id="#cases">
	<div class="container">
		<div class="inner">
			<SectionHeading data={section.sectionHeading} />

			<div class="cases-grid"></div>
		</div>
	</div>
</section>

<style>
	.cases {
		.inner {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-xl);
		}
	}
</style>
