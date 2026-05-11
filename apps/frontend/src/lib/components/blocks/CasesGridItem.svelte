<script>
	const { title, summary } = $props();
</script>

<div class="case-item">
	<h5>{title}</h5>
	<p class="case-item__summary">{summary}</p>
</div>

<style>
	.case-item {
		padding: var(--spacing-sm);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);

		border: 1px solid var(--color-border);
		border-radius: var(--spacing-3xs);

		.case-item__summary {
			color: var(--color-black-400);
		}
	}
</style>
