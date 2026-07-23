import { defineField } from "sanity";
import { sectionHeading } from "../objects/sectionHeading";

export const aboutSection = {
	name: 'aboutSection',
	title: 'About Section',
	type: 'object',
	fields: [
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
		defineField({
			name: 'imageLabel',
			title: 'Image label',
			type: 'string',
		})
	],
	preview: {
		select: {
			title: 'heading'
		},
		prepare: ({ title }) => ({
			title: 'About section',
			subtitle: title
		})
	}
}
