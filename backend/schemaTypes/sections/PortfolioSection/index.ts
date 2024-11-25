import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'portfolioSection',
    type: 'object',
    title: 'Portfolio Section',
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
            name: 'type',
            type: 'string',
            title: 'Project Type'
        },
        {
            name: 'image',
            type: 'image',
            title: 'image'
        }
    ]
} as SchemaTypeDefinition
