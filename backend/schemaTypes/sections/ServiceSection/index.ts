import { SchemaTypeDefinition } from "sanity";

const serviceSection: SchemaTypeDefinition = {
  name: 'serviceSection',
  type: 'object',
  title: 'Service Section',
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
      name: 'services',
      type: 'array', 
      title: 'Services',
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
              name: 'serviceTitle',
              type: 'string',
              title: 'Service Title', 
            },
            {
              name: 'serviceDescription',
              type: 'string',
              title: 'Service Description', 
            },
          ],
        },
      ],
    },
  ],
};

export default serviceSection;
