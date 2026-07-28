<script lang="ts">
	import SanityImage from '../cms/SanityImage.svelte';

	const { section } = $props();
</script>

<section class="about block-spacing">
	<div class="container container--sm">
		<div class="inner">
			<div class="content-wrap">
				<h2 class="type-h6">{section.heading}</h2>
				<div class="type-gc">{section.description}</div>
			</div>
			<div class="image-wrap">
				<SanityImage source={section.image} />
				<div class="overlay">
					<div class="label heading--xs">{section.imageLabel}</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		.inner {
			display: flex;
			flex-flow: column;
			align-items: center;
			gap: var(--spacing-lg);

			@media (min-width: 768px) {
				flex-flow: row;
			}
		}

		.content-wrap {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-sm);
		}

		.image-wrap {
			overflow: hidden;
			border-radius: var(--spacing-2xs);

			@media (min-width: 768px) {
				max-width: 200px;
			}

			@media (min-width: 1024px) {
				max-width: 250px;
			}

			position: relative;

			.overlay {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				z-index: 2;

				display: flex;
				align-items: flex-end;
				padding-inline: var(--spacing-sm);
				padding-block: var(--spacing-xs);
			}

			.label {
				color: var(--color-white);
			}
		}
	}
</style>
