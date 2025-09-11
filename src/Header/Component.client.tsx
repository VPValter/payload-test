'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header, Logo } from '@/payload-types'

import { LogoComponent } from '@/components/Logo/LogoComponent'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
  logoData: Logo
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data, logoData }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-gray-800 z-50   "
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <LogoComponent
              loading="eager"
              priority="high"
              className="invert dark:invert-0"
              // logoUrl={logoData?.logo?.url}
              logoUrl={
                typeof logoData.logo === 'string' ? logoData.logo : logoData.logo?.url || undefined
              }
            />
          </Link>
          <HeaderNav data={data} />
        </div>
      </div>
    </header>
  )
}
