import { apiPlugin, storyblokInit } from '@storyblok/react';

import Grid from '@/components/Grid';
import Hero from '@/components/Hero';
import Page from '@/components/Page';
import Teaser from '@/components/Teaser';

export const storyblokInitConfig = () => {
  storyblokInit({
    accessToken: process.env.STORYBLOK_TOKEN, // Your SPACE preview token
    use: [apiPlugin],
    apiOptions: {
      // Region is important, auth will fail, default is eu
      // set the region that you have choosen in the space creation
      region: 'SET_YOUR_SPACE_REGION_HERE',
    },
    components: {
      teaser: Teaser,
      page: Page,
      grid: Grid,
      hero: Hero,
    },
  });
}