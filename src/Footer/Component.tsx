import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { Linkedin, Instagram } from 'lucide-react'

import type { Footer, Logo } from '@/payload-types'

// import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
// import { CMSLink } from '@/components/Link'
import { LogoComponent } from '@/components/Logo/LogoComponent'

export async function Footer() {
  // const footerData: Footer = await getCachedGlobal('footer', 1)()
  const logoData: Logo = (await getCachedGlobal('logo', 1)()) as Logo

  // const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto p-6 flex items-center">
        <Link className="flex items-center shrink-0" href="/">
          <LogoComponent
            logoUrl={
              typeof logoData.logo === 'string' ? logoData.logo : logoData.logo?.url || undefined
            }
          />
        </Link>

        <span className='mr-auto ml-4 text-sm'>© {new Date().getFullYear()} Vladimir P. All rights reserved.</span>

        <a href="https://www.linkedin.com/in/vperic84/" target="_blank" rel="noopener noreferrer" className='ml-auto p-3'>
          <Linkedin className='hover:text-brand-secondary transition-[color]' />
        </a>
        <a href="https://www.instagram.com/vladimirp.dev/" target="_blank" rel="noopener noreferrer" className='p-3'>
          <Instagram className='hover:text-brand-secondary transition-[color]' />
        </a>

        {/* <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div> */}
      </div>
    </footer>
  )
}
