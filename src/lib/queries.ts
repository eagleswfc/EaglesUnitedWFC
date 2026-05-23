export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteTitle,
  logo,
  contactEmail,
  contactPhone,
  address,
  socialLinks,
  sponsors[]{ name, logo, url },
  faAffiliationId
}`;

export const homePageQuery = `*[_type == "homePage"][0]{
  heroTitle,
  heroSubtitle,
  trainingHeading,
  trainingDetails,
  ageGroupHeading,
  ageGroupDetails,
  priceHeading,
  priceDetails,
  ctaHeading,
  ctaText,
  heroImage
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  pageTitle,
  story,
  missionStatement,
  coachNote,
  trainingNote,
  values[]{ title, description },
  achievementsTitle,
  achievements
}`;

export const galleryQuery = `*[_type == "gallery"][0]{
  title,
  description,
  images[]{
    _key,
    asset,
    alt,
    caption
  }
}`;
