'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-6">
      {navItems.map(({ link }, i) => {
        const slug =
          link.url ||
          (typeof link.reference?.value === 'object' && 'slug' in link.reference.value
            ? '/' + link.reference.value.slug
            : '')
        const match = pathname === '/' ? '/home' : pathname

        return (
          <CMSLink
            key={i}
            {...link}
            className={`transition-colors text-gray-400 hover:text-white hover:no-underline font-medium text-base ${slug === match ? 'text-white' : ''}`}
            appearance="link"
          />
        )
      })}
      <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link>
    </nav>
  )
}
