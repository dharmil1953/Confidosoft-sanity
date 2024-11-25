import { SchemaTypeDefinition } from "sanity";

export default {
  name: 'header',
  type: 'document',
  title: 'Header Menu',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'title'
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Upload the logo for the navigation bar.',
    },
    {
      name: 'menuItems',
      type: 'array',
      title: 'Menu Items',
      description: 'Add menu items with titles and links.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'link',
              type: 'url',
              title: 'Link',
            },
          ],
        },
      ],
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
