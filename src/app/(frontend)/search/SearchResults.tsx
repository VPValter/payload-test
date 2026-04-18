import { CollectionArchive } from '@/components/CollectionArchive'
import { CardPostData } from '@/components/Card'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

type SearchResultsProps = {
  searchParams: Promise<{
    q?: string
  }>
}

export async function SearchResults({ searchParams }: SearchResultsProps) {
  const { q: query } = await searchParams

  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'search',
    depth: 1,
    limit: 12,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
    pagination: false,
    ...(query
      ? {
          where: {
            or: [
              {
                title: {
                  like: query,
                },
              },
              {
                'meta.description': {
                  like: query,
                },
              },
              {
                'meta.title': {
                  like: query,
                },
              },
              {
                slug: {
                  like: query,
                },
              },
            ],
          },
        }
      : {}),
  })

  return posts.totalDocs > 0 ? (
    <CollectionArchive posts={posts.docs as CardPostData[]} />
  ) : (
    <div className="container">No results found.</div>
  )
}
