<script>
	import Sections from '$lib/components/layout/Sections.svelte';

	const { data } = $props();
</script>

<Sections sections={data.data[0]?.sections ?? []} />
