import { storyblokEditable } from '@storyblok/react';
import type { HeroStoryblok } from '@/types/sb';

export default function Hero({ blok }: { blok: HeroStoryblok }) {
  return (
    <div {...storyblokEditable(blok)}>
      <h1>{blok.title}</h1>
    </div>
  );
}
