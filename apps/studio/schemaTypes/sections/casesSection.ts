import { defineField } from "sanity";
import { sectionHeading } from "../objects/sectionHeading";

export const casesSection = {
	name: 'casesSection',
	title: 'Cases section',
	type: 'object',
	fields: [
		sectionHeading,
		defineField({
			name: 'cases',
			title: 'Cases',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'case' }] }],
		}),
	],
	preview: {
		select: {
			title: 'sectionHeading.title',
		},
		prepare: ({title}) => ({
			title: 'Cases section',
			subtitle: title
		})
	}
};
