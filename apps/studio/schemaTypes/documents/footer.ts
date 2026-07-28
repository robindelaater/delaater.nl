import { defineField, defineType } from "sanity";
import { linkButton } from "../objects/linkButton";

export const footerType = defineType({
	name: 'footer',
	type: 'document',
	fieldsets: [{ name: 'cta', title: 'CTA' }],
	fields: [
		defineField({
			name: 'menu',
			type: 'reference',
			to: { type: 'menu' }
		}),
		defineField({
			name: 'logo',
			type: 'image'
		}),
		defineField({
			name: 'ctaHeading',
			type: 'string',
			validation: r => r.required(),
			fieldset: 'cta'
		}),
		defineField({
			name: 'ctaContent',
			type: 'text',
			rows: 2,
			validation: r => r.required(),
			fieldset: 'cta'
		}),
		defineField({
			name: 'ctaButton',
			type: 'button',
			fieldset: 'cta'
		}),
		defineField({
			name: 'companyDetails',
			type: 'array',
			of: [{ type: 'string' }],
			validation: r => r.max(2)
		})
	],
	preview: {
		prepare: () => ({
			title: 'Footer'
		})
	}
})
