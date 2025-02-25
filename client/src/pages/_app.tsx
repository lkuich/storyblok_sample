import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import StoryblokProvider from '@/components/StoryblokProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoryblokProvider>
      <Component {...pageProps} />
    </StoryblokProvider>
  );
}

/*
// Referencing for RichText component:
https://github.com/storyblok/storyblok-react/blob/main/playground/next15/src/app/page.tsx

const doc = {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: 'This is a test of the StoryblokRichText component.',
          },
        ],
      },
      {
        type: 'paragraph',
        content: [
          {
            text: 'Internal Link',
            type: 'text',
            marks: [
              {
                type: 'link',
                attrs: {
                  href: '/',
                  uuid: '8489bed8-d86f-4fde-965c-e3d748e12147',
                  anchor: null,
                  target: '_self',
                  linktype: 'story',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        content: [
          {
            text: 'External link',
            type: 'text',
            marks: [
              {
                type: 'link',
                attrs: {
                  href: 'https://alvarosaburido.dev',
                  uuid: null,
                  anchor: null,
                  target: '_blank',
                  linktype: 'url',
                },
              },
            ],
          },
        ],
      },
    ],
  };

  const resolvers = {
    // custom resolvers
    [MarkTypes.LINK]: (node: StoryblokRichTextNode<ReactElement>) => {
      return node.attrs?.linktype === 'story'
        ? (
            <Link
              href={node.attrs?.href}
              target={node.attrs?.target}
            >
              {node.text}
            </Link>
          )
        : (
            <a
              href={node.attrs?.href}
              target={node.attrs?.target}
            >
              {node.text}
            </a>
          );
    },
  };
*/
