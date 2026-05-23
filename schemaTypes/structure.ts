import type { StructureResolver } from 'sanity/structure';

const singletonIds = new Set(['siteSettings', 'homePage', 'aboutPage', 'gallery']);

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
        .title('Gallery')
        .id('gallery')
        .child(S.document().schemaType('gallery').documentId('gallery')),
      ...S.documentTypeListItems().filter((item) => !singletonIds.has(item.getId() ?? '')),
    ]);
