import { SchemaTypeDefinition } from "sanity";

const technologySection: SchemaTypeDefinition = {
  name: 'technologySection',
  type: 'object',
  title: 'Technology Page',
  fields: [
    {
      name: 'technologiesList',
      type: 'array', 
      title: 'Technologies List',
      of: [
        {
          type: 'object',
          title: 'Technology Item',
          fields: [
            {
              name: 'type',
              type: 'string',
              title: 'Type',
            },
            {
              name: 'technologies',
              type: 'array', 
              title: 'Technologies',
              of: [
                {
                  type: 'image', 
                  title: 'Technology Icon',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default technologySection;
