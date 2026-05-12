import {defineField} from 'sanity'

export const servicesSection = {
  name: 'servicesSection',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Services section',
      hidden: true,
    }),
    defineField({
      name: 'eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      type: 'text',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
}
