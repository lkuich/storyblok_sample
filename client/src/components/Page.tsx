import { storyblokEditable, StoryblokComponent } from '@storyblok/react';

import type { PageStoryblok } from '@/types/sb';

export default function Page({ blok }: { blok: PageStoryblok }) {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
