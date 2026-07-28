import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { structure } from './schemaTypes/structure'

export default defineConfig({
  name: 'default',
  title: 'delaater.nl',

  projectId: 'oz14vifj',
  dataset: 'production',

	plugins: [structureTool({
		structure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
