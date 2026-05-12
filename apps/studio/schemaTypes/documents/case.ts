import { Rule } from "sanity";

export const caseType = {
	name: 'case',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
			validation: (Rule: Rule) => Rule.required(),
		},
		{
			name: 'summary',
			type: 'text',
			validation: (Rule: Rule) => Rule.required().min(100).max(250),
		},
	],
}
