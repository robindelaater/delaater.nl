<script lang="ts">
	import '$lib/styles/global.css';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	import { register } from 'swiper/element/bundle';
	import { onMount } from 'svelte';
	import Pattern from '$lib/components/ui/Pattern.svelte';
	import SeoTags from '$lib/components/SeoTags.svelte';

	let { data, children } = $props();

	onMount(() => {
		register();
	});
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="shortcut icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="LAATER." />
	<link rel="manifest" href="/site.webmanifest" />

	<link href="https://dev.iconly.io/public/g8UQwvcdhfKm/iconly.css" rel="stylesheet" />

	<title>LAATER. - Web development services</title>

	<SeoTags />
</svelte:head>

<Header />
{@render children()}
<Footer footer={data.footer} />
<Pattern />
