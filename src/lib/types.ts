import type { SanityImageSource } from '@sanity/image-url';

export interface SocialLink {
  platform: string;
  url: string;
  label?: string;
}

export interface Sponsor {
  name?: string;
  logo?: SanityImageSource;
  url?: string;
}

export interface SiteSettings {
  siteTitle?: string;
  logo?: SanityImageSource;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  socialLinks?: SocialLink[];
  sponsors?: Sponsor[];
  faAffiliationId?: string;
}

export interface HomePage {
  heroTitle?: string;
  heroSubtitle?: string;
  trainingHeading?: string;
  trainingDetails?: string;
  ageGroupHeading?: string;
  ageGroupDetails?: string;
  priceHeading?: string;
  priceDetails?: string;
  ctaHeading?: string;
  ctaText?: string;
  heroImage?: SanityImageSource;
}

export interface ValueItem {
  title?: string;
  description?: string;
}

export interface PortableTextBlock {
  _type: 'block';
  children?: { text?: string }[];
}

export interface AboutPage {
  pageTitle?: string;
  story?: PortableTextBlock[];
  missionStatement?: string;
  coachNote?: string;
  trainingNote?: string;
  values?: ValueItem[];
  achievementsTitle?: string;
  achievements?: PortableTextBlock[];
}

export interface GalleryImage {
  _key?: string;
  asset?: { _ref?: string; _type?: string };
  alt?: string;
  caption?: string;
}

export interface GalleryDocument {
  title?: string;
  description?: string;
  images?: GalleryImage[];
}

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}
