import { defineField, defineType } from "sanity";

export const menuType = defineType({
	name: 'menu',
	type: 'document',
	fields: [
		defineField({
			type: 'string',
			name: 'name',
			validation: r => r.required()
		}),
		defineField({
			type: 'array',
			name: 'menuItems',
			title: "Menu items",
			of: [{ type: 'link' }]
		})
	],
	preview: {
		select: {
			name: 'name'
		},
		prepare: ({ name }) => ({
			title: name ?? 'Menu'
		})
	}
})
