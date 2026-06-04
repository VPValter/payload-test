import type { Metadata } from 'next'

import type { Media, Page, Post, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

type GenerateMetaArgs = {
  doc: Partial<Page> | Partial<Post> | null
  collection: 'pages' | 'posts'
}

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

function getPath(doc: Partial<Page> | Partial<Post>, collection: 'pages' | 'posts'): string {
  const slug = doc?.slug
  if (!slug || slug === 'home') return '/'
  if (collection === 'posts') return `/posts/${slug}`
  return `/${slug}`
}

export const generateMeta = async (args: GenerateMetaArgs): Promise<Metadata> => {
  const { doc, collection } = args || {}

  const path = getPath(doc || {}, collection)

  const ogImage = getImageURL(doc?.meta?.image)

  const title = doc?.meta?.title
    ? doc?.meta?.title + ' | VladimirP'
    : 'VladimirP'

  return {
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: path,
    }),
    title,
    alternates: {
      canonical: path,
    },
  }
}
