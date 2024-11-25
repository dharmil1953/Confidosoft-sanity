import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'partnersection',
    type: 'object',
    title: 'Partner Section',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading',
        },
        {
            name: 'partnerImages',
            type: 'array',
            title: 'Partner Images',
            description: 'Partners',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'Image',
                            type: 'image',
                            title: 'Image'
                        }
                    ]
                }
            ]
        }
    ]
} as SchemaTypeDefinition
