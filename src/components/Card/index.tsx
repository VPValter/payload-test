'use client'
import { cn } from '@/utilities/cn'
import useClickableCard from '@/utilities/useClickableCard'
import { formatDateTime } from '@/utilities/formatDateTime'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '@/payload-types'

export type CardPostData = Pick<
  Post,
  'slug' | 'categories' | 'meta' | 'title' | 'originallyWrittenAt'
>

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title, originallyWrittenAt } = doc || {}
  // const { description, image: metaImage } = meta || {}
  const { description } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <article className={cn('cursor-pointer', className)} ref={card.ref}>
      {showCategories && hasCategories && (
        <div className="uppercase text-sm mb-4">
          {showCategories && hasCategories && (
            <div>
              {categories?.map((category, index) => {
                if (typeof category === 'object') {
                  const { title: titleFromCategory } = category

                  const categoryTitle = titleFromCategory || 'Untitled category'

                  const isLast = index === categories.length - 1

                  return (
                    <Fragment key={index}>
                      {categoryTitle}
                      {!isLast && <Fragment>, &nbsp;</Fragment>}
                    </Fragment>
                  )
                }

                return null
              })}
            </div>
          )}
        </div>
      )}

      {originallyWrittenAt && (
        <time className="text-sm text-gray-500 mb-2 block" dateTime={originallyWrittenAt}>
          {formatDateTime(originallyWrittenAt)}
        </time>
      )}

      {titleToUse && (
        <h3 className="text-xl font-medium text-brand-primary hover:text-brand-secondary transition-colors cursor-pointer mb-2">
          <Link href={href} ref={link.ref}>
            {titleToUse}
          </Link>
        </h3>
      )}

      {description && (
        <div className="text-gray-400 leading-relaxed">
          {description && <p>{sanitizedDescription}</p>}
        </div>
      )}
    </article>
  )
}
