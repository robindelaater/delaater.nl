import { serverClient } from "$lib/cms/client.server";
import { footerQuery } from "$lib/cms/queries/queries.js";

export const load = async () => {
	const footer = await serverClient.fetch(footerQuery);

	return {
		footer
	}
}
