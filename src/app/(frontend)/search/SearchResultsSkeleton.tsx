/**
 * Mirrors `CollectionArchive` layout (`max-w-4xl mx-auto`, `space-y-12`) so swapping
 * to real cards does not jump the page.
 */
export function SearchResultsSkeleton() {
  return (
    <div className="max-w-4xl mx-auto" aria-busy aria-label="Loading results">
      <div className="space-y-12">
        {[0, 1, 2].map((key) => (
          <article key={key} className="group">
            {/* <div className="h-4 w-28 max-w-[40%] rounded bg-muted/70 animate-pulse" /> */}
            <div className="h-7 w-[85%] max-w-xl rounded bg-muted/70 animate-pulse mb-2" />
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-muted/50 animate-pulse" />
              <div className="h-4 w-[60%] rounded bg-muted/50 animate-pulse" />
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
