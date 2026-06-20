import { defineField, defineType } from 'sanity';

export const sponsors = defineType({
  name: 'sponsors',
  title: 'Sponsors',
  type: 'document',
  fields: [
    defineField({
      name: 'sponsors',
      title: 'Sponsors List',
      type: 'array',
      of: [
        defineField({
          name: 'sponsor',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Sponsor Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'logo',
              title: 'Logo Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'Website URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Sponsors' }),
  },
});
