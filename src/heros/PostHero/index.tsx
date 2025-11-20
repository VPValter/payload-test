import React from 'react'
import Link from 'next/link'
import { formatDateTime } from 'src/utilities/formatDateTime'
import { ArrowLeft } from 'lucide-react'

import type { Post } from '@/payload-types'

import { formatAuthors } from '@/utilities/formatAuthors'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { categories, populatedAuthors, originallyWrittenAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  return (
    <>
      {/* Back link */}
      <Link
        href="/posts"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to posts
      </Link>

      {/* Category */}
      <div className="text-sm text-gray-400 uppercase tracking-wider mb-4">
        {categories?.map((category, index) => {
          if (typeof category === 'object' && category !== null) {
            const { title: categoryTitle } = category

            const titleToUse = categoryTitle || 'Untitled category'

            const isLast = index === categories.length - 1

            return (
              <React.Fragment key={index}>
                {titleToUse}
                {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
              </React.Fragment>
            )
          }
          return null
        })}
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{title}</h1>

      <div className="flex flex-col md:flex-row gap-4 md:gap-16">
        {hasAuthors && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm">Author</p>

              <p>{formatAuthors(populatedAuthors)}</p>
            </div>
          </div>
        )}

        {/* Date */}
        {originallyWrittenAt && (
          <div className="flex flex-col gap-1 text-gray-400 mb-12">
            <p className="font-medium">Originally written on</p>

            <time dateTime={originallyWrittenAt}>{formatDateTime(originallyWrittenAt)}</time>
          </div>
        )}
      </div>
    </>
  )
}
