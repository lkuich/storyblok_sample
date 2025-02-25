import { storyblokEditable } from '@storyblok/react';
import type { GridStoryblok } from '@/types/sb';

export default function Grid({ blok }: { blok: GridStoryblok }) {
  return (
    <h2 data-cy="grid" {...storyblokEditable(blok)}>
      This is a Grid component
    </h2>
  );
}
