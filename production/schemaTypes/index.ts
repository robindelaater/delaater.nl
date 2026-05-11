import { caseType } from "./documents/case";
import { homePage } from "./pages/homePage";
import { heroSection } from "./sections/heroSection";
import { servicesSection } from "./sections/servicesSection";
import { aboutSection } from "./sections/aboutSection";
import { casesSection } from "./sections/casesSection";

export const schemaTypes = [
	// documents
	caseType,

	// pages
	homePage,

	// sections
	heroSection,
	servicesSection,
	aboutSection,
	casesSection,
]
