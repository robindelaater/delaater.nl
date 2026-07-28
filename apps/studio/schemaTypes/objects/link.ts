import { defineField, defineType } from "sanity";
import { linkFields } from "../linkFields";

export const link = defineType({
	name: 'link',
	type: 'object',
	fields: [
		defineField({
			name: 'label',
			type: 'string',
		}),
		...linkFields
	],
	initialValue: {
		linkType: 'external'
	}
})
