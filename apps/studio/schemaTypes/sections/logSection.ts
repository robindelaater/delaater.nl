import { defineField } from "sanity";

export const logSection = {
	name: 'logSection',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			initialValue: 'Log section',
			hidden: true,
		}),
		defineField({
			name: 'eyebrow',
			title: 'Eyebrow',
			type: 'string',
		}),
		defineField({
			name: 'heading',
			title: 'Heading',
			type: 'string',
		}),
		defineField({
			name: 'subheading',
			title: 'Subheading',
			type: 'string',
		}),
		defineField({
			name: 'logs',
			title: 'Logs',
			type: 'array',
			of: [{type: 'reference', to: [{type: 'log'}]}]
		})
	],
}
