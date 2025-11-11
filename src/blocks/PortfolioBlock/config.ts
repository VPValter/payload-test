import { Block } from 'payload'

export const PortfolioBlock: Block = {
  slug: 'portfolioBlock',
  fields: [
    {
      name: 'sectionTitle',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'projects',
      label: 'Projects',
      type: 'array',
      fields: [
        {
          name: 'projectName',
          label: 'Project Name',
          type: 'text',
          required: true,
        },
        {
          name: 'shortDescription',
          label: 'Short Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'fullDescription',
          label: 'Full Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'technologiesUsed',
          label: 'Technologies Used',
          type: 'array',
          fields: [
            {
              name: 'technology',
              label: 'Technology',
              type: 'text',
            },
          ],
        },
        {
          name: 'projectImage',
          label: 'Project Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'liveUrl',
          label: 'Live URL',
          type: 'text',
        },
        { name: 'codeUrl', label: 'Code URL', type: 'text' },
      ],
    },
  ],
}
