import {defineField, defineType} from 'sanity'
import {sectionHeading} from '../objects/sectionHeading'

export const roadmapSection = defineType({
  name: 'roadmapSection',
  type: 'object',
  fields: [
		sectionHeading,
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
            }),
            defineField({
              name: 'subtitle',
              type: 'text',
              rows: 2,
            }),
          ],
        },
      ],
    }),
	],
	preview: {
		select: {
			title: 'sectionHeading.title'
		},
		prepare: ({ title }) => ({
			title: "Roadmap section",
			subtitle: title
		})
	}
})
