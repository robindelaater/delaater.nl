<script>
	import BlogCard from '../blocks/BlogCard.svelte';
	import SectionHeader from '../blocks/SectionHeader.svelte';

	const { section } = $props();
</script>

<section class="logs">
	<div class="container logs__inner">
		<div class="header-wrap">
			<SectionHeader
				eyebrow={section.eyebrow}
				heading={section.heading}
				subheading={section.subheading}
			/>

			<div class="slider-controls">
				<button
					class="btn btn--primary btn--icon slider-control slider-control--prev"
					aria-labelledby="previous slide"
				>
					<i class="icon-arrow-left"></i>
				</button>
				<button
					class="btn btn--primary btn--icon slider-control slider-control--next"
					aria-labelledby="next slide"
				>
					<i class="icon-arrow-right"></i>
				</button>
			</div>
		</div>

		<div class="logs__slider-wrap">
			<div class="logs__controls"></div>
			<swiper-container slides-per-view="2" space-between="24">
				{#each section.logs as log (log._id)}
					<swiper-slide>
						<BlogCard {...log} />
					</swiper-slide>
				{/each}
			</swiper-container>
			<swiper-scrollbar></swiper-scrollbar>
		</div>
	</div>
</section>

<style>
	.logs {
		padding-block: var(--section-spacing-xl);

		.logs__inner {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-xl);
		}

		.header-wrap {
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
		}

		.slider-controls {
			display: flex;
			gap: var(--spacing-xs);
		}
	}
</style>
