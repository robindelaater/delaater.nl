import { defineField } from "sanity";
import { buttonVariantSelector, internalReferences } from "../utils";

export const linkButton = {
	name: 'linkButton',
	type: 'object',
	fields: [
		buttonVariantSelector,
		defineField({
			name: 'label',
			type: 'string',
		}),
		defineField({
			name: 'linkType',
			type: 'string',
			options: {
				list: [
					{ title: 'Internal', value: 'internal' },
					{ title: 'External', value: 'external' },
				],
			},
			initialValue: 'internal',
		}),
		defineField({
			name: 'external',
			type: 'url',
			validation: (Rule) => Rule.uri({
				scheme: ['http', 'https', 'mailto'],
			}),
			hidden: ({ parent }) => parent?.linkType !== 'external',
		}),
		defineField({
			name: 'internal',
			type: 'reference',
			to: internalReferences,
			hidden: ({ parent }) => parent?.linkType !== 'internal',
		}),
	],
}
