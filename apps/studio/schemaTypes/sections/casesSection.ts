import { defineField } from "sanity";

export const casesSection = {
	name: 'casesSection',
	title: 'Cases section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			initialValue: 'Cases section',
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
			name: 'cases',
			title: 'Cases',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'case' }] }],
		}),
	],
};
