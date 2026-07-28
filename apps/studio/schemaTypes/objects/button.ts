import { defineField, defineType } from "sanity";
import { linkFields } from "../linkFields";

export const button = defineType({
	name: 'button',
	type: 'object',
	options: {
		collapsible: true,
		columns: 2,
	},
	fields: [
		defineField({
			name: 'variant',
			type: 'string',
			options: {
				list: [
					{ title: 'Black', value: 'black' },
					{ title: 'White', value: 'white' },
					{ title: 'Orange', value: 'orange' },
					{ title: 'Yellow', value: 'yellow' },
				]
			}
		}),
		defineField({
			name: 'style',
			type: 'string',
			options: {
				list: [
					{ title: 'Filled', value: 'filled' },
					{ title: 'Outline', value: 'outline' }
				]
			},
		}),
		defineField({
			name: 'label',
			type: 'string',
			validation: r => r.required()
		}),
		defineField({
			name: 'icon',
			type: 'string',
			options: {
				list: [
					{ title: 'Arrow Up', value: 'arrow-up' },
					{ title: 'Arrow Down', value: 'arrow-down' },
					{ title: 'Arrow Back', value: 'arrow-back' },
					{ title: 'Arrow Forward', value: 'arrow-forward' },
					{ title: 'Arrow Outward', value: 'arrow-outward' },
					{ title: 'Mail', value: 'mail' },
					{ title: 'Height', value: 'height' },
					{ title: 'Phone Message', value: 'phone-message' },
				]
			}
		}),
		...linkFields
	],
	initialValue: {
		linkType: 'external'
	}
})
