import { defineField } from "sanity";

export const heroSection = {
  name: 'heroSection',
  type: 'object',
  fields: [
		defineField({
			name: 'title',
			type: 'string',
			initialValue: 'Hero section',
			hidden: true,
		}),
		defineField({
			name: 'heading',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'subheading',
			type: 'string',
			validation: (Rule) => Rule.required(),
		})
  ],
};
