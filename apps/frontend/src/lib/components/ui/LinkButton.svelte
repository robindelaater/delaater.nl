<script>
	import { resolve } from '$app/paths';

	const { variant, label, linkType, internal, external } = $props();

	const href = $derived(linkType === 'internal' ? resolve(internal) : external);
</script>

<a {href} class="btn btn--{variant}" title={label}>{label}</a>
