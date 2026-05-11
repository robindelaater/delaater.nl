import { defineField } from "sanity";

export const aboutSection = {
	name: 'aboutSection',
	title: 'About Section',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			initialValue: 'About section',
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
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
		}),
	],
}
