import {defineField} from 'sanity'

export const internalReferences = [{type: 'case'}, {type: 'log'}]

export const buttonVariantSelector = defineField({
  name: 'variant',
  type: 'string',
  options: {
    list: [
      {title: 'Primary', value: 'primary'},
      {title: 'Secondary', value: 'secondary'},
      {title: 'Dark', value: 'dark'},
    ],
  },
  initialValue: 'primary',
})
