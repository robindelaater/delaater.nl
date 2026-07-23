import { serverClient } from '$lib/cms/client.server';
import { homePageQuery } from '$lib/cms/queries/queries';
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
		const token = formData.get('token')?.toString();

		if (!token) {
			return {
				success: false,
				error: 'Could not verify Turnstile.'
			};
		}

		const isVerified = await verifyTurnstile(token);
		if (!isVerified) {
			return {
				success: false,
				error: 'Could not verify Turnstile.'
			};
		}

		const firstname = formData.get('first_name')?.toString();
		const lastname = formData.get('last_name')?.toString();
		const company = formData.get('company')?.toString();
		const email = formData.get('email')?.toString();
		const date = formData.get('date')?.toString();

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
		};
	}
};

async function verifyTurnstile(token: string) {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			secret: env.TURNSTILE_SITE_SECRET,
			response: token
		})
	});
	const data = await response.json();
	return data.success;
}
