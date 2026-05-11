<script lang="ts">
	import '$lib/styles/global.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children()}
<Footer />
