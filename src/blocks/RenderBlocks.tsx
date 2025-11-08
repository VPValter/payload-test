import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { BannerBlock } from '@/blocks/Banner/Component'
import { SocialLinksBlock } from '@/blocks/SocialLinks/Component'
import { TechStackBlock } from '@/blocks/TechStackBlock/Component'
import { ExperienceBlock } from '@/blocks/ExperienceBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  banner: BannerBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  // key must match the block slug (slug: 'socialLinks' in config.ts):
  socialLinks: SocialLinksBlock,
  techStackBlock: TechStackBlock,
  experienceBlock: ExperienceBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <section className="px-6" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </section>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
