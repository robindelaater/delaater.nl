import { caseType } from "./documents/case";
import { logType } from "./documents/log";

import { homePage } from "./pages/homePage";

import { heroSection } from "./sections/heroSection";
import { servicesSection } from "./sections/servicesSection";
import { aboutSection } from "./sections/aboutSection";
import { casesSection } from "./sections/casesSection";
import { logSection } from "./sections/logSection";
import { contactSection } from "./sections/contactSection";
import objects from "./objects/_index";


export const schemaTypes = [
	// documents
	caseType,
	logType,

	// pages
	homePage,

	// sections
	heroSection,
	servicesSection,
	aboutSection,
	casesSection,
	logSection,
	contactSection,

	// objects
	...objects
]
