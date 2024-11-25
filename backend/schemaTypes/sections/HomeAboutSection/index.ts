export default {
    name: 'homeAboutSection',
    type: 'object',
    title: 'About Section',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'heading',
            description: 'Main Title of section'
        },
        {
            name: 'image',
            type: 'image',
            title: 'image',
            description: 'Image of About Section',
        },
        {
            name: 'title',
            type: 'string',
            title: 'title',
            description: 'Title of section',
        },
        {
            name: 'description',
            type: 'string',
            title: 'description',
            description: 'Paragraphs of Section',
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
