import { SchemaTypeDefinition } from "sanity";

const homeFAQSection: SchemaTypeDefinition = {
  name: 'homeFAQSection',
  type: 'object',
  title: 'FAQ Section',
  fields: [
    {
      name: 'faqItems',
      type: 'array',
      title: 'FAQ Items',
      description: 'List of frequently asked questions and their answers.',
      of: [
        {
          type: 'object',
          title: 'FAQ',
          fields: [
            {
              name: 'question',
              type: 'string',
              title: 'Question',
              description: 'The FAQ question.',
            },
            {
              name: 'answer',
              type: 'text', 
              title: 'Answer',
              description: 'The answer to the question.',
            },
          ],
        },
      ],
    },
  ],
};

export default homeFAQSection;
