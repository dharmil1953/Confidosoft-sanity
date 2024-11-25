import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'aboutHeroSection',
    type: 'object',
    title: 'Hero Section',
    fields: [
        {
            name: 'leftImage',
            type: 'image',
            title: 'Left Image'
        },
        {
            name: 'title',
            type: 'string',
            title: 'title',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'rightImage',
            type: 'image',
            title: 'Right Image'
        },
        {
            name: 'titleTwo',
            type: 'string',
            title: 'title Two',
        },
        {
            name: 'descriptionTwo',
            type: 'string',
            title: 'DescriptionTwo'
        },
    ]
} as SchemaTypeDefinition
