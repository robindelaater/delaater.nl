// src/hooks.server.ts
import { redirect, type Handle } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const handle: Handle = async ({ event, resolve }) => {
  const { url, cookies, locals } = event;

  // Enable preview mode
  if (url.pathname === '/preview') {
    const secret = url.searchParams.get('secret');
    const slug = url.searchParams.get('slug') ?? '/';

    if (secret !== env.SANITY_PREVIEW_SECRET) {
      return new Response('Invalid preview secret', { status: 401 });
    }

    cookies.set('sanity-preview', 'true', {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      maxAge: 60 * 60
    });

    throw redirect(307, slug);
  }

  // Disable preview mode
  if (url.pathname === '/preview/disable') {
    cookies.delete('sanity-preview', { path: '/' });
    throw redirect(307, '/');
  }

  locals.preview = cookies.get('sanity-preview') === 'true';

  return resolve(event);
};
