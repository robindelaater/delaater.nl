import {defineField, defineType} from 'sanity'

export const sectionHeading = defineType({
  name: 'sectionHeading',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (r) => r.required(),
		}),
  ],
})
