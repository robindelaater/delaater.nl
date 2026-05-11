import { serverClient } from '$lib/cms/client.server';
import { homePageQuery } from '$lib/cms/queries';

export const load = async () => {
  const data = await serverClient.fetch(homePageQuery);
	return {
		data
  };
};
