<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		classes?: string;
		label: string;
		linkType: 'internal' | 'external' | 'contact';
		externalLink?: string;
		internalLink?: object;
		children: Snippet;
	};

	const { classes, label, linkType, externalLink, internalLink, children }: Props = $props();

	let href: string | undefined = $state();

	$effect(() => {
		if (linkType === 'external') {
			href = externalLink;

			return;
		}

		if (linkType === 'internal') {
			console.log(internalLink);

			return;
		}

		if (linkType === 'contact') {
			href = 'mailto:robin@delaater.com';
		}
	});
</script>

<a class={classes} {href} title={label}>
	{@render children()}
</a>

<style>
</style>
