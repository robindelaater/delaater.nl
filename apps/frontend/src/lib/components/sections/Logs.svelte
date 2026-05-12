<script>
	import BlogCard from '../blocks/BlogCard.svelte';
	import SectionHeader from '../blocks/SectionHeader.svelte';

	const { section } = $props();

	function initSwiper(target) {
		const controls = target.closest('.logs').querySelector('.slider-controls');
		const prevButton = controls.querySelector('.slider-control--prev');
		const nextButton = controls.querySelector('.slider-control--next');

		const options = {
			spaceBetween: 24,
			breakpoints: {
				0: {
					slidesPerView: 1.2
				},
				567: {
					slidesPerView: 2
				},
				1024: {
					slidesPerView: 3
				},
				1440: {
					slidesPerView: 4
				}
			},
			navigation: {
				prevEl: prevButton,
				nextEl: nextButton
			},
			scrollbar: true
		};

		Object.assign(target, options);
	}
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
			<swiper-container {@attach initSwiper}>
				{#each section.logs as log (log._id)}
					<swiper-slide>
						<BlogCard {...log} />
					</swiper-slide>
				{/each}
			</swiper-container>
		</div>
	</div>
</section>

<style>
	.logs {
		padding-block: var(--section-spacing-xl);
		max-width: 100vw;
		overflow: hidden;

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

		swiper-container::part(container) {
			overflow: visible !important;
		}

		swiper-slide {
			height: auto !important;

			:global .blog-card {
				height: 100%;
			}
		}

		swiper-container::part(scrollbar) {
			--swiper-scrollbar-size: var(--spacing-xs);
			--swiper-scrollbar-bottom: calc(-1 * var(--spacing-xl));
			--swiper-scrollbar-bg-color: var(--color-primary-100);
			--swiper-scrollbar-drag-bg-color: var(--color-primary);
		}
	}
</style>
