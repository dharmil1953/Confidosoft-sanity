import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'homeHeroSection',
  type: 'object',
  title: 'Home Hero Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'title',
      type: 'string',
      title: 'title',
      description: 'tagline',
    },
    {
      name: 'highlight',
      type: 'string',
      title: 'Highlighted Word',
      description: 'Highlighted Word',
    },
    {
      name: 'slineTitle',
      type: 'string',
      title: 'title',
    },
    {
      name: 'shortDescription',
      type: 'string',
      title: 'description',
      description: 'Write Short Description Here',
    },
    {
      name: 'ctaButton',
      type: 'object',
      title: 'Call-to-Action Button',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Label',
          description: 'Text displayed on the button (e.g., "Book a Call").',
        },
        {
          name: 'link',
          type: 'url',
          title: 'Link',
          description: 'URL for the button.',
        },
      ],
    },
  ],
} as SchemaTypeDefinition
