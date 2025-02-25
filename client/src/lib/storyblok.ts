import { apiPlugin, storyblokInit } from '@storyblok/react';

import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Page from '@/components/Page';
import Teaser from '@/components/Teaser';

export const getStoryblokApi = () =>
  storyblokInit({
    accessToken: process.env.STORYBOOK_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      // Region is important, auth will fail, deafult is eu
      region: 'ca',
    },
    components: {
      teaser: Teaser,
      page: Page,
      grid: Grid,
      hero: Hero,
    },
  });
