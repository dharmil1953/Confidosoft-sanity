import { SchemaTypeDefinition } from "sanity";

const solutionSection: SchemaTypeDefinition = {
  name: 'solutionSection',
  type: 'object',
  title: 'About Solution Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'solutions',
      type: 'array',
      title: 'Solutions',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              type: 'image',
              title: 'Icon',
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description',
            },
          ],
        },
      ],
    },
  ],
};

export default solutionSection;
