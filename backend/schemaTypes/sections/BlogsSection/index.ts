import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'blogSection',
    type: 'object',
    title: 'Blog Section',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'name',
        },
        {
            name: 'description',
            type: 'string',
            title: 'title',
        },
        {
            name: 'image',
            type: 'image',
            title: 'image'
        }
    ]
} as SchemaTypeDefinition
