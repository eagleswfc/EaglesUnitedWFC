import { defineField, defineType } from 'sanity';

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      initialValue: 'Gallery',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'transitionInterval',
      title: 'Image Display Interval (seconds)',
      description: 'Time (in seconds) each gallery image is displayed in the carousel before transitioning.',
      type: 'number',
      initialValue: 10,
      validation: (Rule) => Rule.min(1).warning('Display interval should be at least 1 second'),
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        defineField({
          name: 'galleryImage',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            defineField({ name: 'caption', title: 'Caption', type: 'string' }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1).warning('Add at least one image for the gallery carousel'),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description', media: 'images.0' },
  },
});
