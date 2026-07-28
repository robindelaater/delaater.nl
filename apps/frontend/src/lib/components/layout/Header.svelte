<script>
	import { resolve } from '$app/paths';
	import IconButton from '../ui/IconButton.svelte';
</script>

<header class="header">
	<div class="container">
		<div class="inner">
			<a href={resolve('/')} title="Home" class="logo"> LAATER. </a>

			<nav></nav>

			<div class="button-wrap">
				<IconButton href="mailto:robin@delaater.com" icon="mail" />
			</div>
		</div>
	</div>
</header>

<style>
	.header {
		padding-block-start: var(--spacing-lg);
		position: sticky;
		top: 0;
		z-index: 1000;

		.inner {
			padding-block: var(--spacing-xs);
			padding-inline: var(--spacing-sm);

			background: var(--color-black-50-50);
			border: 1px solid var(--color-black-100);
			border-radius: var(--spacing-2xs);
			backdrop-filter: blur(var(--spacing-xs));

			display: grid;
			align-items: center;
			grid-template-columns: 100px 1fr 100px;

			@media (min-width: 768px) {
				padding-inline: var(--spacing-md);
			}
		}

		.logo {
			font-family: var(--font-family-heading);
			font-size: 1.125rem;
			font-weight: bold;
		}

		.button-wrap {
			display: flex;
			align-items: center;
			justify-content: flex-end;
		}
	}
</style>
