import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      richText?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, richText }) => {
  return (
    <section className="pt-32 pb-20 px-6 hero low-impact">
      <div className="max-w-4xl mx-auto text-balance ">
        {children ||
          (richText && (
            <RichText className="text-lg text-gray-300" data={richText} enableGutter={false} />
          ))}
      </div>
    </section>
  )
}
