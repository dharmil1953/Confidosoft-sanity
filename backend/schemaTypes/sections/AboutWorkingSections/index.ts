import { SchemaTypeDefinition } from "sanity";


export default {
    name: 'workingSection',
    type: 'object',
    title: 'WorkingSection',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        }
    ]
} as SchemaTypeDefinition
