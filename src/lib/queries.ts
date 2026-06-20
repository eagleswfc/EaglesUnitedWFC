export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteTitle,
  logo,
  contactSectionTitle,
  contactSectionSubtitle
}`;

export const footerQuery = `*[_type == "footer"][0]{
  contactEmail,
  address,
  trainingTimes,
  contactPhone,
  socialLinks,
  faAffiliationId
}`;

export const sponsorsQuery = `*[_type == "sponsors"][0]{
  sponsors[]{ name, logo, url }
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
  values[]{ title, description }
}`;

export const achievementsPageQuery = `*[_type == "achievementsPage"][0]{
  title,
  achievements[]{ title, description },
  leagues[]{ name, url }
}`;

export const galleryQuery = `*[_type == "gallery"][0]{
  title,
  description,
  transitionInterval,
  images[]{
    _key,
    asset,
    alt,
    caption
  }
}`;
