<script lang="ts">
	type Props = {
		label: string;
		icon?: string;
		variant?: 'black' | 'white' | 'orange' | 'yellow';
		style?: 'filled' | 'outline';
		linkType?: 'internal' | 'external' | 'contact';
		externalLink?: string;
		internalLink?: object;
	};

	const {
		label,
		icon,
		variant = 'black',
		style = 'filled',
		linkType,
		externalLink,
		internalLink
	}: Props = $props();

	let link: string | undefined = $state();

	$effect(() => {
		if (linkType === 'external') {
			link = externalLink;

			return;
		}

		if (linkType === 'internal') {
			console.log(internalLink);
			return;
		}

		if (linkType === 'contact') {
			link = 'mailto:robin@delaater.com';

			return;
		}
	});
</script>

{#snippet buttonContent(label, iconClass)}
	{#if iconClass}
		<i class="icon icon-{iconClass}"></i>
	{/if}
	<div class="label">{label}</div>
{/snippet}

{#if link}
	<a href={link} class="btn btn--{variant} btn--{style}">
		{@render buttonContent(label, icon)}
	</a>
{:else}
	<button class="btn btn--{variant} btn--{style}">
		{@render buttonContent(label, icon)}
	</button>
{/if}

<style>
	.btn {
		display: flex;
		flex-flow: row;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-xs);

		border-radius: var(--spacing-2xs);

		padding-inline: var(--spacing-sm);
		padding-block: 0.75rem;

		&.btn--filled {
			&.btn--black {
				background: var(--color-black);
				color: var(--color-white);
			}

			&.btn--orange {
				background: var(--color-orange-500);
				color: var(--color-white);
			}
		}

		&.btn--outline {
			&.btn--black {
				background: transparent;
				color: var(--color-black);
				border: 1px solid var(--color-black);
			}

			&.btn--orange {
				background: transparent;
				color: var(--color-black);
				border: 1px solid var(--color-orange-500);
			}
		}
	}
</style>
