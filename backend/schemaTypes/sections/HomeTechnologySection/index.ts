import { SchemaTypeDefinition } from 'sanity'

export default {
    name: 'homeTechSection',
    type: 'object',
    title: 'Technology Section',
    fields: [
        {
            name: 'Headline',
            type: 'string',
            title: 'Headline',
            description: 'Main Headline',
        },
        {
            name: 'description',
            type: 'string',
            title: 'description',
            description: 'Main Description',
        },
        {
            name: 'technology',
            type: 'array',
            title: 'Technology Section',
            description: 'Technology',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'name',
                        }
                    ]
                }
            ]
        },
        {
            name: 'exploreBtn',
            type: 'object',
            title: 'Explore Technology Button',
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
    ]
} as SchemaTypeDefinition
