import type { AboutPage, GalleryDocument, HomePage, SiteSettings } from './types';

export const defaultSiteSettings: SiteSettings = {
  siteTitle: 'Eagles United WFC',
  contactEmail: 'eaglesuniteduk@gmail.com',
  address: 'New River Sports Centre\nWhite Hart Lane\nLondon N22 5QW',
  faAffiliationId: '108720',
  socialLinks: [],
  sponsors: [],
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
  achievementsTitle: 'Leagues and achievements',
  achievements: [
    {
      _type: 'block',
      children: [
        {
          text: "In 2024, we won the All Nation's 5aside B league twice.",
        },
      ],
    },
    {
      _type: 'block',
      children: [
        {
          text: "In 2025, we competed in All Nation's 5aside and 8aside leagues, and the Super5 5aside league, winning the latter one season. We also organized our first own successful tournament with 10 teams. In 2026, we are continuing to compete in the All Nation's 8aside league and the Super5 5aside league. We will participate in tournaments and are planning to organize our own tournament again.",
        },
      ],
    },
  ],
};

export const defaultGallery: GalleryDocument = {
  title: 'Gallery',
  description: "Moments from training, matches and tournaments with Eagles United WFC.",
  images: [],
};

export const defaultContact = {
  pageTitle: 'Get in Touch',
  intro:
    "Whether you're looking to join our Thursday training sessions, inquire about sponsorship opportunities, or just say hello, drop us a message.",
  location: 'New River Sports Centre White Hart Lane, London N22 5QW',
  trainingTimes: 'Thursdays at 7:00 PM · £7 Per Session',
};
