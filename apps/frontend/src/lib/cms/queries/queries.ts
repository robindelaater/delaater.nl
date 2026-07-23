import { sections } from "./sections";

export const homePageQuery = `
	*[_type == 'homePage'] {
		title,
		sections[]{
			${sections}
		},
	}
`;
