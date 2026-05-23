import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { sanityClient } from './sanity';

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function imageUrl(
  source: SanityImageSource | undefined,
  options?: { width?: number; height?: number; quality?: number },
): string | undefined {
  if (!source) return undefined;

  let url = urlFor(source).auto('format').fit('max').quality(options?.quality ?? 80);

  if (options?.width) url = url.width(options.width);
  if (options?.height) url = url.height(options.height);

  return url.url();
}
