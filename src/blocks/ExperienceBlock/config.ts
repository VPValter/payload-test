import {
  lexicalEditor,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

export const Experience: Block = {
  slug: 'experienceBlock',
  fields: [
    {
      name: 'experience',
      label: 'Experience',
      type: 'array',
      fields: [
        {
          name: 'company',
          label: 'Company',
          type: 'text',
          required: true,
        },
        {
          name: 'position',
          label: 'Position',
          type: 'text',
          required: true,
        },
        {
          name: 'period',
          label: 'Period',
          type: 'text',
          required: true,
        },
        {
          name: 'current',
          label: 'Current',
          type: 'checkbox',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
            },
          }),
          required: true,
        },
        {
          name: 'techStack',
          label: 'Tech stack',
          type: 'text',
        },
      ],
    },
  ],
}
