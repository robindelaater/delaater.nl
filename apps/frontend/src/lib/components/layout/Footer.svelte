<script>
	import Button from '../ui/Button.svelte';
</script>

<footer class="footer block-spacing">
	<div class="container">
		<div class="inner">
			<nav>
				<a href="#" class="nav-item type-h-sm">My work</a>
				<a href="#" class="nav-item type-h-sm">Logs<span class="subtext type-h-xs">7</span></a>
				<a href="#" class="nav-item type-h-sm">How I work</a>
				<a href="#" class="nav-item type-h-sm">About me</a>
				<a href="#" class="nav-item type-h-sm">Contact</a>
			</nav>

			<div class="columns">
				<div class="cta-column">
					<div class="text-wrap">
						<h5>Thanks for checking out my site</h5>
						<div class="type-gc">
							I’m available for new projects starting next month. Have something you need my help
							with? Or have an idea you want to discuss?
						</div>
					</div>
					<Button label="Send me a message" icon="mail" variant="orange" />
				</div>

				<div class="logo-column">
					<img class="logo" src="/logo-dark.svg" alt="LAATER. logo" />

					<ul class="company-details">
						<li class="type-h-xs">KVK: 42047872</li>
						<li class="type-h-xs">BTW: NL005456478B58</li>
					</ul>
				</div>
			</div>
		</div>

		<a class="source-link" href="https://github.com/robindelaater/delaater.nl">
			View source on Github <i class="icon icon-arrow-outward"></i>
		</a>
	</div>
</footer>

<style>
	.footer {
		.container {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-2xl);
		}

		.inner {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-3xl);

			padding-block: var(--spacing-lg);
			padding-inline: var(--spacing-lg);

			background: var(--color-black-50-50);
			backdrop-filter: blur(var(--spacing-xs));

			@media (min-width: 768px) {
				padding-block: var(--spacing-lg) var(--spacing-3xl);
				padding-inline: var(--spacing-3xl);
			}
		}

		nav {
			display: none;
			flex-flow: row wrap;
			gap: var(--spacing-md);
			justify-content: space-between;

			@media (min-width: 768px) {
				display: flex;
			}

			.nav-item {
				display: flex;
				align-items: center;
				gap: var(--spacing-2xs);

				.subtext {
					align-self: flex-start;
				}
			}
		}

		.columns {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-4xl);

			@media (min-width: 768px) {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				align-items: flex-end;
			}
		}

		.cta-column {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-md);

			.text-wrap {
				display: flex;
				flex-flow: column;
				gap: var(--spacing-xs);
			}
		}

		.logo-column {
			display: flex;
			flex-flow: column;
			gap: var(--spacing-lg);

			.logo {
				width: 100%;
			}

			.company-details {
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;

				color: var(--color-black-400);
			}
		}

		.source-link {
			display: flex;
			align-items: center;
			gap: var(--spacing-2xs);
			color: var(--color-black);

			border-bottom: 1px solid var(--color-black);

			width: fit-content;

			margin-inline: auto;
		}
	}
</style>
