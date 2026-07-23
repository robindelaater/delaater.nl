import { defineField } from "sanity";
import { sectionTypes } from "../sections/_index";

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
			of: sectionTypes
		}),
  ],
};
