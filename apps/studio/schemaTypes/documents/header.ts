import { defineField, defineType } from "sanity";

export const headerType = defineType({
	name: 'header',
	type: 'document',
	fields: [
		defineField({
			name: 'logo',
			type: 'image',
		})
	],
	preview: {
		prepare: () => ({
			title: 'Header'
		})
	}
})
