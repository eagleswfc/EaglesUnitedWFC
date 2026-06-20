import type { StructureResolver } from 'sanity/structure';

const singletonIds = new Set(['siteSettings', 'homePage', 'aboutPage', 'achievementsPage', 'sponsors', 'footer', 'gallery']);

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      S.listItem()
        .title('Leagues and Achievements')
        .id('achievementsPage')
        .child(S.document().schemaType('achievementsPage').documentId('achievementsPage')),
      S.listItem()
        .title('Sponsors')
        .id('sponsors')
        .child(S.document().schemaType('sponsors').documentId('sponsors')),
      S.listItem()
        .title('Footer Settings')
        .id('footer')
        .child(S.document().schemaType('footer').documentId('footer')),
      S.listItem()
        .title('Gallery')
        .id('gallery')
        .child(S.document().schemaType('gallery').documentId('gallery')),
      ...S.documentTypeListItems().filter((item) => !singletonIds.has(item.getId() ?? '')),
    ]);
