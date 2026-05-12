<script>
</script>

<form class="contact-form">
	<div class="contact-form__header">
		<h5>Plan een kennismaking</h5>
		<p>
			Geef een voorkeursdatum en tijd op, dan neem ik contact met je op om een afspraak te maken.
		</p>
	</div>

	<div class="contact-form__fields">
		<div class="field-group">
			<input type="text" id="first_name" name="first_name" placeholder="Voornaam" />
		</div>

		<div class="field-group">
			<input type="text" id="last_name" name="last_name" placeholder="Achternaam" />
		</div>

		<div class="field-group field-group--full">
			<input type="text" id="company" name="company" placeholder="Bedrijf" />
		</div>

		<div class="field-group field-group--full">
			<input type="email" id="email" name="email" placeholder="E-mail" />
		</div>

		<div class="field-group">
			<input
				type="date"
				id="date"
				name="date"
				placeholder="Datum"
				min={new Date().toISOString().split('T')[0]}
				class="input"
			/>
		</div>

		<div class="field-group">
			<input type="time" id="time" name="time" placeholder="Tijd" step="900" class="input" />
		</div>

		<div class="field-group">
			<button type="submit" class="btn btn--primary">Verzenden</button>
		</div>
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
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: var(--spacing-sm);

			.field-group {
				display: flex;
				flex-direction: column;
				gap: var(--spacing-2xs);

				&.field-group--full {
					grid-column: span 2;
				}
			}
		}
	}
</style>
