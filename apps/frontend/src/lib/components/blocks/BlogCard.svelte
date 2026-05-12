<script>
	const { title, summary, image } = $props();
</script>

<div class="blog-card">
	{#if image}
		<img src={image} alt={title} />
	{/if}

	<div class="blog-card__content">
		<h5>{title}</h5>
		<p>{summary}</p>
	</div>
</div>

<style>
	.blog-card {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);

		border: 1px solid var(--color-border);
		border-radius: var(--spacing-3xs);

		padding: var(--spacing-md);

		.blog-card__content {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-sm);
		}
	}
</style>
