import {defineField} from 'sanity'
import {internalReferences} from './utils'

export const linkFields = [
  defineField({
    name: 'linkType',
    type: 'string',
    options: {
      list: ['internal', 'external', 'contact'],
      layout: 'radio',
    },
  }),
  defineField({
    name: 'externalLink',
    type: 'url',
    validation: (Rule) =>
      Rule.uri({
        scheme: ['http', 'https', 'mailto'],
        allowRelative: true,
      }),
    hidden: ({parent}) => parent?.linkType !== 'external',
  }),
  defineField({
    name: 'internal',
    type: 'reference',
    to: internalReferences,
    hidden: ({parent}) => parent?.linkType !== 'internal',
  }),
]
