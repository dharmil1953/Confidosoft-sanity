import { SchemaTypeDefinition } from 'sanity';

const homeExpertiseSection: SchemaTypeDefinition = {
  name: 'homeExpertiseSection',
  type: 'object',
  title: 'Home Expertise Section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Main Heading for the section.',
    },
    {
      name: 'expertises',
      type: 'array',
      title: 'Expertises',
      description: 'Array of expertise items.',
      of: [
        {
          type: 'object',
          title: 'Expertise',
          fields: [
            {
              name: 'icon',
              type: 'image', 
              title: 'Icon',
              options: {
                hotspot: true, 
              },
            },
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              description: 'Title of the expertise.',
            },
            {
              name: 'description',
              type: 'text', 
              title: 'Description',
              description: 'Description of the expertise.',
            },
            {
              name: 'points',
              type: 'array',
              title: 'Bullet Points',
              description: 'Bullet points for the expertise.',
              of: [
                {
                  type: 'object',
                  title: 'Point',
                  fields: [
                    {
                      name: 'point',
                      type: 'string',
                      title: 'Point',
                      description: 'A single bullet point.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default homeExpertiseSection;
