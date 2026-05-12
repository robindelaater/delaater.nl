<script>
	import { onMount } from 'svelte';

	let month = new Date().getMonth();
	let year = new Date().getFullYear();
	const monthNames = [
		'Januari',
		'Februari',
		'Maart',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Augustus',
		'September',
		'October',
		'November',
		'December'
	];

	let totalDaysInMonth = $state(new Date(year, month + 1, 0).getDate());
	let currentDay = $state(new Date().getDate());
	let disabledDays = $state([]);

	function getDisabledDates() {
		for (let i = 1; i <= totalDaysInMonth; i++) {
			const date = new Date(year, month, i);
			if (date.getDay() === 0 || date.getDay() === 6) {
				disabledDays.push(i);
			}
		}
	}

	onMount(() => {
		getDisabledDates();
	});
</script>

<div class="calendar">
	<div class="calendar__header">
		<h5>Plan een kennismaking</h5>
		<p>Gewoon een gesprek over wat je nodig hebt.</p>
	</div>

	<div class="calendar__body">
		<div class="calendar__topbar">
			<button class="month-button month-button--prev" disabled={true}>
				<i class="icon-arrow-left"></i>
			</button>

			<div class="topbar-center">
				<div class="month-selector">
					<button class="month-selector__trigger">{monthNames[month]}</button>
				</div>
				<div class="year-selector">
					<button class="year-selector__trigger">{year}</button>
				</div>
			</div>

			<button class="month-button month-button--next">
				<i class="icon-arrow-right"></i>
			</button>
		</div>

		<div class="calendar__grid">
			<div class="grid-header">Ma</div>
			<div class="grid-header">Di</div>
			<div class="grid-header">Wo</div>
			<div class="grid-header">Do</div>
			<div class="grid-header">Vr</div>
			<div class="grid-header">Za</div>
			<div class="grid-header">Zo</div>

			{#each Array(totalDaysInMonth) as _, i (i)}
				<button
					class="grid-day {i === currentDay - 1 ? 'grid-day--current' : ''} {disabledDays.includes(
						i + 4
					)
						? 'grid-day--disabled'
						: ''}"
					data-day={_}
				>
					{i + 1}
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	.calendar {
		background: var(--color-white);
		border: 1px solid var(--color-primary-600);
		padding-inline: var(--spacing-xl);
		padding-block: var(--spacing-lg);

		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);

		width: fit-content;

		.calendar__header {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-xs);
		}

		.calendar__body {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-sm);
		}

		.calendar__topbar {
			padding: var(--spacing-2xs);
			border: 1px solid var(--color-border);
			border-radius: var(--spacing-3xs);

			display: flex;
			align-items: center;
			justify-content: space-between;

			.month-button {
				display: flex;
				align-items: center;
				justify-content: center;

				font-size: 24px;

				&[disabled] {
					opacity: 0.5;
					pointer-events: none;
				}
			}

			.topbar-center {
				display: flex;
				align-items: center;
				justify-content: center;
				gap: var(--spacing-xs);
			}

			.month-selector {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;

				.month-selector__trigger {
					font-family: var(--font-family-heading);
					font-weight: 500;
					text-transform: uppercase;
				}
			}

			.year-selector {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: center;

				.year-selector__trigger {
					font-family: var(--font-family-heading);
					font-weight: 500;
					text-transform: uppercase;
				}
			}
		}

		.calendar__grid {
			display: grid;
			grid-template-columns: repeat(7, 1fr);
			gap: var(--spacing-3xs);
			background: var(--color-black-100);
			width: fit-content;

			.grid-header {
				display: flex;
				align-items: center;
				justify-content: center;
				text-transform: uppercase;

				font-family: var(--font-family-heading);
				font-weight: 500;
				font-size: var(--font-size-body-sm);
			}

			.grid-day {
				display: flex;
				padding: var(--spacing-sm);
				height: 80px;
				width: 70px;

				background: var(--color-black);
				color: var(--color-on-black);

				&:hover {
					background: var(--color-black-400);
				}

				&.grid-day--current {
					color: var(--color-primary);
				}

				&.grid-day--disabled {
					opacity: 0.5;
					pointer-events: none;
				}
			}
		}
	}
</style>
