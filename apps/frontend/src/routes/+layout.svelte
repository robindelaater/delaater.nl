<script lang="ts">
	import '$lib/styles/global.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	import { register } from 'swiper/element/bundle';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(register);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link href="https://dev.iconly.io/public/g8UQwvcdhfKm/iconly.css" rel="stylesheet" />
</svelte:head>

<Header />
{@render children()}
<Footer />
