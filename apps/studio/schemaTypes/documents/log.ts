import { defineField } from "sanity";

export const logType = {
	name: 'log',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'summary',
			type: 'text',
			validation: (Rule) => Rule.required().min(100).max(250),
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }]
		})
	],
}
