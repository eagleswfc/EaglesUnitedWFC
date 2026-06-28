import {
  defaultAboutPage,
  defaultAchievementsPage,
  defaultFooterSettings,
  defaultGallery,
  defaultHomePage,
  defaultSiteSettings,
  defaultSponsors,
} from './fallbacks';
import { imageUrl } from './image';
import {
  aboutPageQuery,
  achievementsPageQuery,
  footerQuery,
  galleryQuery,
  homePageQuery,
  siteSettingsQuery,
  sponsorsQuery,
} from './queries';
import { isSanityConfigured, sanityClient } from './sanity';
import type {
  AboutPage,
  AchievementsPage,
  CarouselImage,
  FooterSettings,
  GalleryDocument,
  HomePage,
  PortableTextBlock,
  SiteSettings,
  SponsorsDocument,
} from './types';

async function fetchSanity<T>(query: string): Promise<T | null> {
  if (!isSanityConfigured) return null;
  try {
    return await sanityClient.fetch<T>(query);
  } catch (error) {
    console.warn('[sanity] fetch failed, using fallbacks:', error);
    return null;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const data = await fetchSanity<SiteSettings>(siteSettingsQuery);
  return { ...defaultSiteSettings, ...data };
}

export async function getSponsors(): Promise<SponsorsDocument> {
  const data = await fetchSanity<SponsorsDocument>(sponsorsQuery);
  return { ...defaultSponsors, ...data };
}

export async function getFooterSettings(): Promise<FooterSettings> {
  const data = await fetchSanity<FooterSettings>(footerQuery);
  return { ...defaultFooterSettings, ...data };
}

export async function getHomePage(): Promise<HomePage> {
  const data = await fetchSanity<HomePage>(homePageQuery);
  return { ...defaultHomePage, ...data };
}

export async function getAboutPage(): Promise<AboutPage> {
  const data = await fetchSanity<AboutPage>(aboutPageQuery);
  return { ...defaultAboutPage, ...data };
}

export async function getAchievementsPage(): Promise<AchievementsPage> {
  const data = await fetchSanity<AchievementsPage>(achievementsPageQuery);
  return { ...defaultAchievementsPage, ...data };
}

export async function getGallery(): Promise<GalleryDocument> {
  const data = await fetchSanity<GalleryDocument>(galleryQuery);
  return { ...defaultGallery, ...data };
}

export function blocksToParagraphs(blocks?: PortableTextBlock[]): string[] {
  if (!blocks?.length) return [];
  return blocks
    .filter((block) => block._type === 'block')
    .map((block) => block.children?.map((child) => child.text ?? '').join('') ?? '')
    .filter(Boolean);
}

export function multilineToHtml(text?: string): string {
  if (!text) return '';
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('<br />');
}

export async function getGalleryCarouselImages(): Promise<CarouselImage[]> {
  const gallery = await getGallery();

  if (!gallery.images?.length) return [];

  return gallery.images
    // 1. THIS IS THE FIX: Filter out any empty image blocks first
    .filter((image: any) => image && image.asset && image.asset._ref)
    // 2. Now safely map over the valid images
    .map((image, index): CarouselImage | null => {
      const src = imageUrl(image, { width: 1600, quality: 85 });
      if (!src) return null;
      return {
        id: image._key ?? `gallery-${index}`,
        src,
        alt: image.alt ?? 'Eagles United WFC gallery photo',
        caption: image.caption,
      };
    })
    .filter((item): item is CarouselImage => item !== null);
}
