import { SchemaTypeDefinition } from 'sanity';

const homeNumberSection: SchemaTypeDefinition = {
  name: 'homeNumberSection',
  type: 'object',
  title: 'Number Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'numberItems',
      type: 'array',
      title: 'Number Items',
      description: 'List of number items with titles and descriptions.',
      of: [
        {
          type: 'object',
          title: 'Number Item',
          fields: [
            {
              name: 'number',
              type: 'number', 
              title: 'Number',
              description: 'A numeric value.',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
              description: 'A brief description for the number item.',
            },
          ],
        },
      ],
    },
  ],
};

export default homeNumberSection;
