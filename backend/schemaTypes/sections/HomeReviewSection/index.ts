import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'homeReviewSection',
    type: 'object',
    title: 'Review Section',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'title',
        },
        {
            name: 'name',
            type: 'string',
            title: 'name'
        },
        {
            name: 'designation',
            type: 'string',
            title: 'designation'
        },
        {
            name: 'review',
            type: 'string',
            title: 'review'
        },
        {
            name: 'rating',
            type: 'number',
            title: 'ratings'
        },
    ]
} as SchemaTypeDefinition
