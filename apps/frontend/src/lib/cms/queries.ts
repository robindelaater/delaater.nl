
export const homePageQuery = `
	*[_type == 'homePage'] {
		title,
		sections[]{
			_key,
			_type,
			_type == "heroSection" => {
				heading,
				subheading
			}
		},
	}
`;
