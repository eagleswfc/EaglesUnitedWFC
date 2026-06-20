import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Eagles United WFC',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'contactSectionTitle',
      title: 'Contact Section Title',
      type: 'string',
      initialValue: 'Get in Touch',
    }),
    defineField({
      name: 'contactSectionSubtitle',
      title: 'Contact Section Subtitle',
      type: 'text',
      rows: 3,
      initialValue: "Whether you're looking to join our Thursday training sessions, inquire about sponsorship opportunities, or just say hello, drop us a message.",
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
