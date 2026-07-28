import { caseType } from "./documents/case";
import { logType } from "./documents/log";

import { homePage } from "./pages/homePage";

import objects from "./objects/_index";
import { sections } from "./sections/_index";
import { documents } from "./documents/_index";


export const schemaTypes = [
	// documents
	...documents,

	// pages
	homePage,

	// sections
	...sections,

	// objects
	...objects
]
