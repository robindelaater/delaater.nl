<script>
	import Button from '../ui/Button.svelte';

	const { section } = $props();
</script>

<section class="hero block-spacing">
	<div class="container">
		<div class="inner">
			<div class="text-wrap">
				<h1 class="heading">{section.heading}</h1>
				<div class="type-gc-lg">{section.subheading}</div>
			</div>

			{#if section.buttons}
				<div class="buttons">
					{#each section.buttons as { linkType, internalLink, externalLink, label, icon, variant, style }, index (index)}
						<Button
							href={linkType === 'external' ? externalLink : internalLink}
							{icon}
							{label}
							{variant}
							{style}
						/>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.hero {
		.inner {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-lg);
			width: 100%;

			@media (min-width: 768px) {
				padding-inline: var(--spacing-3xl);
			}
		}

		.text-wrap {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-sm);
		}

		.buttons {
			display: flex;
			flex-flow: row wrap;
			gap: var(--spacing-md);
		}
	}
</style>
