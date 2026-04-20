import type { Metadata } from 'next/types'

import { Suspense } from 'react'

import { Search } from '@/search/Component'
import PageClient from './page.client'
import { SearchResults } from './SearchResults'
import { SearchResultsSkeleton } from './SearchResultsSkeleton'

type Args = {
  searchParams: Promise<{
    q?: string
  }>
}

export default function Page({ searchParams }: Args) {
  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none text-center">
          <h1 className="mb-8 lg:mb-16">Search</h1>

          <div className="max-w-200 mx-auto">
            <Search />
          </div>
        </div>
      </div>

      <Suspense fallback={<SearchResultsSkeleton />}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Search`,
  }
}
