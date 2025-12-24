import { MediaBlock } from '@/blocks/MediaBlock/Component'
// import { defaultColors, DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'

import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'

import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'
import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { cn } from '@/utilities/cn'
import { customColorMap } from '@/utilities/customColorMap'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    banner: ({ node }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
    mediaBlock: ({ node }) => (
      <MediaBlock
        className="col-start-1 col-span-3"
        imgClassName="m-0"
        {...node.fields}
        captionClassName="mx-auto max-w-3xl"
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),
    code: ({ node }) => <CodeBlock className="col-start-2" {...node.fields} />,
    cta: ({ node }) => <CallToActionBlock {...node.fields} />,
  },
  text: ({ node }) => {
    const style: React.CSSProperties = {}
    const colorKey = node['$']?.color
    // const backgroundKey = node['$']?.background

    // const colorMap = {
    // FOR SOME REASON IT WONT LET ME USE DEFAULTCOLORS IN THIS FILE, SOMETHING TO WITH IMPORTS
    //       Module not found: Can't resolve 'worker_threads'
    //   4 | const split = require('split2')
    //   5 | const { Duplex } = require('stream')
    // > 6 | const { parentPort, workerData } = require('worker_threads')
    //     |                                  ^
    //   7 |
    //   8 | function createDeferred () {
    //   9 |   let resolve

    // https://nextjs.org/docs/messages/module-not-found

    // ...defaultColors.text,
    // ...defaultColors.background,
    // ...customColorMap
    // }

    if (typeof colorKey === 'string') {
      const colorValue = customColorMap[colorKey]?.css?.color
      if (colorValue) {
        style.color = colorValue
      }
    }

    // if (typeof backgroundKey === 'string') {
    //   const backgroundValue = customColorMap[backgroundKey]?.css?.background
    //   if (backgroundValue) {
    //     style.background = backgroundValue
    //   }
    // }

    // TODO: Refactor this maybe?

    if (node.format === 1) return <strong className="text-foreground">{node.text}</strong>
    if (node.format === 2) return <em>{node.text}</em>
    if (node.format === 16)
      return (
        <code className="bg-gray-800 p-1 rounded text-brand-primary font-normal">{node.text}</code>
      )

    return <span style={style}>{node.text}</span>
  },
})

type Props = {
  data: SerializedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props
  return (
    <RichTextWithoutBlocks
      converters={jsxConverters}
      className={cn(
        {
          'container ': enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose md:prose-md dark:prose-invert ': enableProse,
        },
        className,
      )}
      {...rest}
    />
  )
}
