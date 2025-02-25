import Head from 'next/head';
import {
  StoryblokComponent,
  getStoryblokApi,
  type ISbStoryData,
} from '@storyblok/react';

import styles from './styles.module.scss';

export default function Home({ story }: { story: ISbStoryData }) {
  if (!story?.content) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {story?.content ? (
        <StoryblokComponent blok={story.content} className={styles.container} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export async function getStaticProps() {
  const slug = 'home';

  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
  });

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
