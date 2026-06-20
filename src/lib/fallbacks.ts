import type { AboutPage, AchievementsPage, FooterSettings, GalleryDocument, HomePage, SiteSettings, SocialLink, SponsorsDocument } from './types';

export const defaultSocialLinks: SocialLink[] = [
  {
    platform: 'facebook',
    url: 'https://www.facebook.com/people/Eagles-United/61557290646207',
  },
  {
    platform: 'instagram',
    url: 'https://www.instagram.com/eaglesunitedwfc/',
  },
  {
    platform: 'linkedin',
    url: 'https://www.linkedin.com/in/eagles-united-wfc-461213376/',
  },
  {
    platform: 'tiktok',
    url: 'https://www.tiktok.com/@eaglesunitedwfc',
  },
];

export const defaultSiteSettings: SiteSettings = {
  siteTitle: 'Eagles United WFC',
  contactSectionTitle: 'Get in Touch',
  contactSectionSubtitle:
    "Whether you're looking to join our Thursday training sessions, inquire about sponsorship opportunities, or just say hello, drop us a message.",
};

export const defaultSponsors: SponsorsDocument = {
  sponsors: [],
};

export const defaultFooterSettings: FooterSettings = {
  contactEmail: 'eaglesuniteduk@gmail.com',
  address: 'New River Sports Centre\nWhite Hart Lane\nLondon N22 5QW',
  trainingTimes: 'Thursday 7pm to 8:30pm (£7 per session)',
  socialLinks: defaultSocialLinks,
  faAffiliationId: '108720',
};

export const defaultHomePage: HomePage = {
  heroTitle: 'EAGLES UNITED WFC',
  heroSubtitle:
    "Women's football in Haringey — community, confidence and the love of the game",
  trainingHeading: 'Training',
  trainingDetails:
    'Thursdays · 7pm\nNew River Sports Centre\nWhite Hart Lane\nLondon N22 5QW',
  ageGroupHeading: 'Age Group',
  ageGroupDetails: 'Women & Girls 16+\nAll abilities welcome',
  priceHeading: 'Price',
  priceDetails:
    '£7 per session\nPay by cash or bank transfer\n\nSimply turn up for your first session or email us: eaglesuniteduk@gmail.com',
  ctaHeading: 'Ready to join?',
  ctaText: 'Turn up on Thursday at 7pm or get in touch — everyone is welcome.',
};

export const defaultAboutPage: AboutPage = {
  pageTitle: 'Our Story',
  story: [
    {
      _type: 'block',
      children: [
        {
          text: 'Eagles United WFC was founded in 2024 to create accessible football opportunities for women and girls in Haringey and beyond. We welcome players aged 16+, offering open training sessions, league competitions, and a supportive environment where all abilities are valued.',
        },
      ],
    },
  ],
  missionStatement:
    'Our mission is simple: make football open, affordable, and empowering for every woman who wants to play.',
  coachNote:
    'We have a UEFA C qualified coach with DBS and safeguarding certificates.',
  trainingNote:
    'We train every Thursday at New River Sports Centre, White Hart Lane, London N22 5QW and are proudly FA Affiliated (ID: 108720).',
  values: [
    {
      title: 'Community',
      description:
        'We provide a friendly, safe and welcoming space where women can enjoy football, meet people, and feel part of a team.',
    },
    {
      title: 'Diversity',
      description:
        'Eagles celebrates the rich cultural diversity of North London. Our players come from a wide range of backgrounds, abilities, and experiences — and everyone is valued.',
    },
    {
      title: 'Ambition',
      description:
        'Since our founding in 2024, we have competed in 5aside and 8aside leagues, took part in tournaments and organized our own successful tournament. We aim to continue growing, competing, and expanding into an 11aside team.',
    },
  ],
};

export const defaultAchievementsPage: AchievementsPage = {
  title: 'Leagues and achievements',
  achievements: [
    {
      title: '2024',
      description: "Won the All Nation's 5aside B league twice.",
    },
    {
      title: '2025',
      description: "Competed in All Nation's 5aside and 8aside leagues, and the Super5 5aside league, winning the latter one season. We also organized our first own successful tournament with 10 teams.",
    },
    {
      title: '2026',
      description: "Continuing to compete in the All Nation's 8aside league and the Super5 5aside league. We will participate in tournaments and are planning to organize our own tournament again.",
    },
  ],
  leagues: [
    {
      name: "All Nation's 8aside league",
      url: 'https://citygoalslondon.leaguerepublic.com/index.html',
    },
    {
      name: 'Super5 league',
      url: 'https://www.super5league.com/',
    },
  ],
};

export const defaultGallery: GalleryDocument = {
  title: 'Gallery',
  description: "Moments from training, matches and tournaments with Eagles United WFC.",
  transitionInterval: 10,
  images: [],
};

