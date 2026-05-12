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
			_type == "casesSection" => {
				eyebrow,
				heading,
				subheading,
				cases[]->{
					_id,
					title,
					summary,
				}
			},
			_type == "logSection" => {
				eyebrow,
				heading,
				subheading,
				logs[]->{
					_id,
					title,
					summary
				}
			},
			_type == "contactSection" => {
				eyebrow,
				heading,
				subheading,
				buttons[]{
					_key,
					variant,
					label,
					linkType,
					internal,
					external
				}
			},
		},
	}
`;
