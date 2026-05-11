import { createImageUrlBuilder } from '@sanity/image-url';
import { client } from '$lib/cms/client';

const builder = createImageUrlBuilder(client);

export default function urlFor(source, width: number | undefined, height: number | undefined) {
	let img = builder.image(source);
	if (width) img = img.width(width);
	if (height) img = img.height(height);

	return img.url();
}
