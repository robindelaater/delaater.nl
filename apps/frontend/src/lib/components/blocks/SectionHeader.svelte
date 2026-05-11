<script>
	const { eyebrow, heading, subheading } = $props();
</script>

<header class="section-header">
	{#if eyebrow}
		<p class="eyebrow">{eyebrow}</p>
	{/if}
	<h2 class="heading">{heading}</h2>
	{#if subheading}
		<p class="subheading">{subheading}</p>
	{/if}
</header>
