import { createClient, type ClientConfig } from '@sanity/client';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';
const token = import.meta.env.SANITY_API_READ_TOKEN;

export const isSanityConfigured = Boolean(projectId);

const config: ClientConfig = {
  projectId: projectId || 'placeholder',
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  perspective: 'published',
};

if (token) {
  config.token = token;
}

export const sanityClient = createClient(config);
