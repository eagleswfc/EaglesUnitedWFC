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
  contactSectionTitle?: string;
  contactSectionSubtitle?: string;
}

export interface SponsorsDocument {
  sponsors?: Sponsor[];
}

export interface FooterSettings {
  contactEmail?: string;
  address?: string;
  trainingTimes?: string;
  contactPhone?: string;
  socialLinks?: SocialLink[];
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
}

export interface AchievementItem {
  title?: string;
  description?: string;
}

export interface LeagueItem {
  name?: string;
  url?: string;
}

export interface AchievementsPage {
  title?: string;
  achievements?: AchievementItem[];
  leagues?: LeagueItem[];
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
  transitionInterval?: number;
  images?: GalleryImage[];
}

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}
