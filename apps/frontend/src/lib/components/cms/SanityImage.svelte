<script lang="ts">
	import urlFor from '$lib/utils/sanityImageUrl';

	interface SanityImageProps {
		source: string;
		alt?: string;
		width?: number;
		height?: number;
		classes?: string;
	}

	let { source, alt = '', width, height, classes = '' }: SanityImageProps = $props();

	let imageUrl = $derived(urlFor(source, width, height));
</script>

{#if imageUrl}
	<img class={classes} src={imageUrl} {alt} {width} {height} />
{/if}
