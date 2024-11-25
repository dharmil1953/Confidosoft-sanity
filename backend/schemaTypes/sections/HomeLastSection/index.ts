import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'lastSection',
    type: 'object',
    title: 'Last Setion',
    fields: [
        {
            name: 'headings',
            type: 'string',
            title: 'Heading',
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
    ]
}
