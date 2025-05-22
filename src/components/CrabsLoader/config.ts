import { Block } from 'payload'

export const CrabsLoaderBlock: Block = {
  slug: 'crabsLoader',
  labels: {
    singular: {
      en: 'Crabs Loader',
      pl: 'Kraby Czekadełko',
    },

    plural: 'Crabs Loaders',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      label: {
        en: 'Crab Text',
        pl: 'Tekst Kraba',
      },
      required: false,
      defaultValue: '🦀...🦀...🦀',
      localized: true,
    },
    // Add more fields if you want more customization
  ],
}
