import { SearchResultsSkeleton } from './SearchResultsSkeleton'

export default function Loading() {
  return (
    <div className="pt-24 pb-24">
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none text-center">
          <h1 className="mb-8 lg:mb-16">Search</h1>

          <div className="max-w-200 mx-auto">
            <div
              aria-hidden
              className="h-10 w-full rounded border border-gray-800 bg-muted/70 animate-pulse"
            />
          </div>
        </div>
      </div>

      <SearchResultsSkeleton />
    </div>
  )
}
