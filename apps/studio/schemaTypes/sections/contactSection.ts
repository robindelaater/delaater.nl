import { defineField } from "sanity";

export const contactSection = {
	name: 'contactSection',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			initialValue: 'Contact section',
			hidden: true,
		}),
		defineField({
			name: 'eyebrow',
			type: 'string',
		}),
		defineField({
			name: 'heading',
			type: 'string',
		}),
		defineField({
			name: 'subheading',
			type: 'text',
		}),
		defineField({
			name: 'buttons',
			type: 'array',
			of: [{ type: 'linkButton'}]
		}),
	],
}
