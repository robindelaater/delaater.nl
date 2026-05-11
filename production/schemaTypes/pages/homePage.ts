import { defineField } from "sanity";

export const homePage = {
  name: 'homePage',
  type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			hidden: true,
			initialValue: 'Homepage',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'sections',
			type: 'array',
			of: [
				{ type: 'heroSection' },
				{ type: 'servicesSection' },
				{ type: 'casesSection' },
				{ type: 'aboutSection' },
			]
		}),
  ],
};
