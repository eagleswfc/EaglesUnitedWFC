import { defineField, defineType } from 'sanity';

export const achievementsPage = defineType({
  name: 'achievementsPage',
  title: 'Leagues and Achievements',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Leagues and achievements',
    }),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [
        defineField({
          name: 'achievement',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Achievement Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'leagues',
      title: 'Leagues',
      type: 'array',
      of: [
        defineField({
          name: 'league',
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'League Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'League Website URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'url',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Leagues and Achievements' }),
  },
});
