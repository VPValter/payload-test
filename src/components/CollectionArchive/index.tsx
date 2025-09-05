import { cn } from 'src/utilities/cn'
import React from 'react'

import { Card, CardPostData } from '@/components/Card'

export type Props = {
  posts: CardPostData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className={cn('max-w-5xl mx-auto')}>
      <div className="space-y-12">
        {posts?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <Card
                className="group"
                key={index}
                doc={result}
                relationTo="posts"
                showCategories={false}
              />
            )
          }

          return null
        })}
      </div>
    </div>
  )
}
