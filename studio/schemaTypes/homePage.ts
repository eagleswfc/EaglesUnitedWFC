import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'trainingHeading',
      title: 'Training Card Heading',
      type: 'string',
      initialValue: 'Training',
    }),
    defineField({
      name: 'trainingDetails',
      title: 'Training Details',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'ageGroupHeading',
      title: 'Age Group Card Heading',
      type: 'string',
      initialValue: 'Age Group',
    }),
    defineField({
      name: 'ageGroupDetails',
      title: 'Age Group Details',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'priceHeading',
      title: 'Price Card Heading',
      type: 'string',
      initialValue: 'Price',
    }),
    defineField({
      name: 'priceDetails',
      title: 'Price Details',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'ctaHeading',
      title: 'CTA Heading',
      type: 'string',
      initialValue: 'Ready to join?',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home Page' }),
  },
});
