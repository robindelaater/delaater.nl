<script>
	import SectionHeader from '../blocks/SectionHeader.svelte';
	import LinkButton from '../ui/LinkButton.svelte';

	const { section } = $props();
</script>

<section class="contact">
	<div class="container">
		<div class="contact__inner">
			<div class="content">
				<SectionHeader
					eyebrow={section.eyebrow}
					heading={section.heading}
					subheading={section.subheading}
				/>

				{#if section.buttons}
					<div class="buttons-wrap">
						{#each section.buttons as button (button._key)}
							<LinkButton {...button} />
						{/each}
					</div>
				{/if}
			</div>

			<div class="contact-form"></div>
		</div>
	</div>
</section>

<style>
	.contact {
		padding-block: var(--section-spacing-xl);
		background: var(--color-primary-100);

		.contact__inner {
			display: grid;
			grid-template-columns: 1fr;
			gap: var(--section-spacing-lg);

			@media (min-width: 768px) {
				grid-template-columns: 1fr 1fr;
			}
		}

		.content {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-md);

			.buttons-wrap {
				display: flex;
				flex-direction: column;
				gap: var(--spacing-md);

				@media (min-width: 768px) {
					flex-direction: row;
				}
			}
		}
	}
</style>
