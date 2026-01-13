import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { PageRange } from '@/components/PageRange'
import { Pagination } from '@/components/Pagination'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    sort: '-originallyWrittenAt',
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      originallyWrittenAt: true,
    },
  })

  return (
    <div className="pt-32 pb-20 px-6">
      <PageClient />
      <div className="max-w-4xl mx-auto">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-white mb-6">Posts</h1>
          <p className="text-lg text-gray-400 mb-3">
            I hesitate to call this a &quot;blog&quot;, since for me that implies a certain level of
            consistency, quality, and thought-out-ness. This is more of a log where I&apos;m mostly
            just documenting some problems I&apos;ve encountered and how I solved them, and writing
            down my thought process as I go along.
          </p>
          <p className="text-lg text-gray-400 mt-3 mb-16">
            I do this mostly as a journal and my personal reminder, but if someone else finds some
            value in it, all the better.
          </p>
        </div>
      </div>

      <CollectionArchive posts={posts.docs} />

      <div className="max-w-4xl mx-auto mt-16">
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={12}
          totalDocs={posts.totalDocs}
          className="mb-8"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        {posts.totalPages > 1 && posts.page && (
          <Pagination page={posts.page} totalPages={posts.totalPages} />
        )}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
