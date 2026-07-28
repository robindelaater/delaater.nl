import groq from "groq";
import { sections } from "./sections";

export const homePageQuery = groq`
	*[_type == 'homePage'] {
		title,
		sections[]{
			${sections}
		},
	}
`;

export const footerQuery = groq`*[_type == 'footer'][0]{
	menu->{
		name,
		menuItems[]
	},
	logo,
	ctaHeading,
	ctaContent,
	ctaButton,
	companyDetails[]
}`
