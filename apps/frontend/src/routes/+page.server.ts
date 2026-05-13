import { serverClient } from '$lib/cms/client.server';
import { homePageQuery } from '$lib/cms/queries';
import type { Actions } from '@sveltejs/kit';

export const load = async () => {
  const data = await serverClient.fetch(homePageQuery);
	return {
		data
  };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const name = formData.get('name');
		const email = formData.get('email');
		const date = formData.get('date');
		const time = formData.get('time');

		console.log(name, email, date, time)

		return {
			success: true
		}
	}
}
