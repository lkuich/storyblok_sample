'use client';

import { storyblokInitConfig } from '@/lib/storyblok';

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  storyblokInitConfig();
  return children;
}
