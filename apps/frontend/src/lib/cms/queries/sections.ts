import groq from "groq";

const buttonFields = groq`
	variant,
	style,
	label,
	icon,
	linkType,
	internalLink,
	externalLink,
`

const sectionHeading = groq`sectionHeading{
	title
}`

const hero = groq`{
	heading,
	subheading,
	buttons[]{
		${buttonFields}
	}
}`;

const cases = groq`{
	${sectionHeading}
}`;

const roadmap = groq`{
	${sectionHeading},
	items[]{
		title,
		subtitle
	}
}`

const about = groq`{
	heading,
	description,
	image,
	imageLabel
}`

export const sections = groq`
	_key,
	_type,
	_type == 'heroSection' => ${hero},
	_type == 'casesSection' => ${cases},
	_type == 'roadmapSection' => ${roadmap},
	_type == 'aboutSection' => ${about}
`
