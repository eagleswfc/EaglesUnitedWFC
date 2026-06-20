import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'news',
  title: 'Club News',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'News Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'date', title: 'Publish Date', type: 'date', options: { dateFormat: 'DD MMM YYYY' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'excerpt', title: 'Short Excerpt', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: 'image', title: 'Cover Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() }),
  ],
})
