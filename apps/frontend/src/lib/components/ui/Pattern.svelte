<script></script>

<div class="pattern"></div>

<style>
	.pattern {
		opacity: 0.2;
		position: absolute;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		height: calc(100% + var(--grid-cell) / 2);
		top: calc(-1 * var(--grid-cell) / 2);

		background-image:
			linear-gradient(to right, var(--color-black-200) 1px, transparent 1px),
			linear-gradient(to bottom, var(--color-black-200) 1px, transparent 1px);
		background-size: var(--grid-cell) var(--grid-cell);
		background-position: calc(50% + var(--grid-cell) / 2) 0;
	}
</style>
