<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
</script>

<form class="contact-form" method="POST" action="/" use:enhance>
	<div class="contact-form__header">
		<h5>Plan een kennismaking</h5>
		<p>
			Geef een voorkeursdatum en tijd op, dan neem ik contact met je op om een afspraak te maken.
		</p>
	</div>

	<div class="contact-form__fields">
		<div class="field-group">
			<input type="text" id="first_name" name="first_name" placeholder="Voornaam" required />
		</div>

		<div class="field-group">
			<input type="text" id="last_name" name="last_name" placeholder="Achternaam" required />
		</div>

		<div class="field-group field-group--full">
			<input type="text" id="company" name="company" placeholder="Bedrijf" />
		</div>

		<div class="field-group field-group--full">
			<input type="email" id="email" name="email" placeholder="E-mail" required />
		</div>

		<div class="field-group field-group--full">
			<input type="text" id="date" name="date" placeholder="Voorkeursdatum & tijd" />
		</div>

		<div class="field-group">
			<button type="submit" class="btn btn--primary">Verzenden</button>
		</div>

		{#if page.form?.success}
			<div class="field-group field-group--full">
				<p class="success-message">Dank voor je bericht, ik neem z.s.m. contact met je op!</p>
			</div>
		{/if}
	</div>
</form>

<style>
	.contact-form {
		background: var(--color-white);
		border: 1px solid var(--color-primary-600);
		padding-inline: var(--spacing-xl);
		padding-block: var(--spacing-lg);

		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);

		width: fit-content;

		.contact-form__header {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-xs);
		}

		.contact-form__fields {
			display: flex;
			flex-direction: column;
			gap: var(--spacing-sm);

			@media (min-width: 768px) {
				display: grid;
				grid-template-columns: repeat(2, 1fr);
			}

			.field-group {
				display: flex;
				flex-direction: column;
				gap: var(--spacing-2xs);

				&.field-group--full {
					grid-column: span 2;
				}
			}
		}

		.success-message {
			color: var(--color-green-500);
			font-weight: 600;
		}
	}
</style>
