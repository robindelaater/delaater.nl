<script></script>

<div class="pattern"></div>

<style>
	.pattern {
		opacity: 0.2;
		position: absolute;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		top: calc(-1 * var(--spacing-md));
		height: 100%;

		background-image:
			linear-gradient(to right, var(--color-black-200) 1px, transparent 1px),
			linear-gradient(to bottom, var(--color-black-200) 1px, transparent 1px);
		background-size: 64px 64px;

		/* puts vertical grid lines at viewport center ± 32px, so the container's
		   960px content box (15 × 64, with 32px padding each side) edges land on
		   grid lines at viewport widths ≥ 1024px */
		background-position: 50% 0;
	}
</style>
