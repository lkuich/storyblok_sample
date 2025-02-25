import { storyblokEditable } from '@storyblok/react';
import type { TeaserStoryblok } from '@/types/sb';

export default function Teaser({ blok }: { blok: TeaserStoryblok }) {
  return (
    <h2 data-cy="teaser" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
}
