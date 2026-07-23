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

const hero = groq`{
	heading,
	subheading,
	buttons[]{
		${buttonFields}
	}
}`;

export const sections = groq`
	_key,
	_type,
	_type == 'heroSection' => ${hero}
`
