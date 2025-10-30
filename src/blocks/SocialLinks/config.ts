import { Block } from 'payload'

export const SocialLinks: Block = {
  slug: 'socialLinks',
  fields: [
    {
      name: 'links',
      label: 'Links',
      type: 'array',
      fields: [
        {
          type: 'text',
          name: 'link',
          label: 'URL',
          required: true,
        },
        {
          type: 'text',
          name: 'name',
          label: 'Name',
          required: true,
        },
        {
          type: 'text',
          name: 'icon',
          label: 'Icon',
          required: true,
        },
        {
          type: 'text',
          name: 'cssClasses',
          label: 'CSS classes',
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
