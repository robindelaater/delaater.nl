<script lang="ts">
	import Hero from '../sections/Hero.svelte';
	import Services from '../sections/Services.svelte';
	import About from '../sections/About.svelte';

	const { sections = [] } = $props();

	const components: Record<string, typeof Hero> = {
		heroSection: Hero,
		servicesSection: Services,
		aboutSection: About
	};
</script>

{#each sections as section (section._key)}
	{@const SectionComponent = components[section._type]}
	{#if SectionComponent}
		<SectionComponent {section} />
	{:else if import.meta.env.DEV}
		<div style="padding:1rem;background:#fee;color:#900;font-family:monospace">
			Unknown section type: <strong>{section._type}</strong>
		</div>
	{/if}
{/each}
