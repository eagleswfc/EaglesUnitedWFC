import { defineField, defineType } from 'sanity';

export const footer = defineType({
  name: 'footer',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'eaglesuniteduk@gmail.com',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'address',
      title: 'Training Address',
      type: 'text',
      rows: 3,
      initialValue: 'New River Sports Centre\nWhite Hart Lane\nLondon N22 5QW',
    }),
    defineField({
      name: 'trainingTimes',
      title: 'Training Times',
      type: 'string',
      initialValue: 'Thursday 7pm to 8:30pm (£7 per session)',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineField({
          name: 'socialLink',
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter / X', value: 'twitter' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Other', value: 'other' },
                ],
              },
            }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
            defineField({ name: 'label', title: 'Label (optional)', type: 'string' }),
          ],
          preview: {
            select: { title: 'platform', subtitle: 'url' },
          },
        }),
      ],
    }),
    defineField({
      name: 'faAffiliationId',
      title: 'FA Affiliation ID',
      type: 'string',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Footer Settings' }),
  },
});
