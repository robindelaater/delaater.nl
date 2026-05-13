import { serverClient } from '$lib/cms/client.server';
import { homePageQuery } from '$lib/cms/queries';
import type { Actions } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';

export const load = async () => {
  const data = await serverClient.fetch(homePageQuery);
	return {
		data
  };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const firstname = formData.get('first_name');
		const lastname = formData.get('last_name');
		const company = formData.get('company');
		const email = formData.get('email');
		const date = formData.get('date');

		const resend = new Resend(env.RESEND_API_KEY)
		await resend.emails.send({
			to: 'robin@laater.dev',
			template: {
				id: 'new-inquiry',
				variables: {
					firstname: firstname || '',
					lastname: lastname || '',
					company: company || '',
					email: email || '',
					date: date || '',
				}
			}
		})

		return {
			success: true
		}
	}
}
