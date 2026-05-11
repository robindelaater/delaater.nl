// src/lib/cms/client.server.ts
import { createClient } from '@sanity/client';
import { env } from '$env/dynamic/private';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';


const baseConfig = {
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: '2025-10-01'
};

export const serverClient = createClient({
  ...baseConfig,
  useCdn: false
});

export const previewClient = createClient({
  ...baseConfig,
  useCdn: false,
  token: env.SANITY_VIEWER_TOKEN,
  perspective: 'previewDrafts'
});

export const getClient = (preview: boolean) =>
  preview ? previewClient : serverClient;
