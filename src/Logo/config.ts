import { GlobalConfig } from 'payload/types'
import { revalidateLogo } from './hooks/revalidateLogo'

export const Logo: GlobalConfig = {
  slug: 'logo',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  hooks: {
    afterChange: [revalidateLogo],
  },
}
