
export const homePageQuery = `
	*[_type == 'homePage'] {
		title,
		sections[]{
			_key,
			_type,
			_type == "heroSection" => {
				heading,
				subheading
			},
			_type == "servicesSection" => {
				eyebrow,
				heading,
				subheading,
				services[]
			},
			_type == "aboutSection" => {
				eyebrow,
				heading,
				description,
				image
			},
		},
	}
`;
