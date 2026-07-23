<script lang="ts">
	type Props = {
		href?: string;
		icon: string;
		variant?: 'black' | 'white' | 'orange' | 'yellow';
		style?: 'filled' | 'outline';
	};

	const { href, icon, variant = 'black', style = 'filled' }: Props = $props();
</script>

{#snippet buttonContent(iconClass: string)}
	<i class="icon icon-{iconClass}"></i>
{/snippet}

{#if href}
	<a {href} class="btn btn--{variant} btn--{style}">
		{@render buttonContent(icon)}
	</a>
{:else}
	<button class="btn btn--{variant} btn--{style}">
		{@render buttonContent(icon)}
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
		padding-block: var(--spacing-sm);
		aspect-ratio: 1/1;

		.icon {
			font-size: 1rem;
		}

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
