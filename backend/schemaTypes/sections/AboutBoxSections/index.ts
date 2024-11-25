import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'boxSection',
    type: 'object',
    title: 'About Box Section',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'title',
        },
        {
            name: 'tidescripitontle',
            type: 'string',
            title: 'description',
        },
        {
            name: 'image',
            type: 'image',
            title: 'image',
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
} as SchemaTypeDefinition
