<script lang="ts">
	import urlFor from '$lib/utils/sanityImageUrl';

	interface SanityImageProps {
		source: string;
		alt?: string;
		width?: number;
		height?: number;
	}

	let { source, alt = '', width, height }: SanityImageProps = $props();

	let imageUrl = $derived(urlFor(source, width, height));
</script>

{#if imageUrl}
	<img src={imageUrl} {alt} {width} {height} />
{/if}
