import { Block } from 'payload'

export const CrabsLoaderBlock: Block = {
  slug: 'crabsLoader',
  labels: {
    singular: 'Crabs Loader',
    plural: 'Crabs Loaders',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      label: 'Crab Text',
      required: false,
      defaultValue: '🦀 Default crab text!',
    },
    // Add more fields if you want more customization
  ],
}
