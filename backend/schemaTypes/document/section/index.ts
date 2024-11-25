import {SchemaTypeDefinition} from 'sanity'

export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'This field is only used for CMS.',
    },

    {
      name: 'content',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {type: 'boxSection'},
        {type: 'aboutHeroSection'},
        {type: 'solutionSection'},
        {type: 'workingSection'},
        {type: 'blogSection'},
        {type: 'homeAboutSection'},
        {type: 'homeExpertiseSection'},
        {type: 'homeReviewSection'},
        {type: 'homeTechSection'},
        {type: 'partnersection'},
        {type: 'portfolioSection'},
        {type: 'serviceSection'},
        {type: 'technologySection'},
        {type: 'homeNumberSection'},
        {type: 'lastSection'},
        {type: 'homeHeroSection'},
        {type: 'homeFAQSection'},
        
      ],
    },
  ],
} as SchemaTypeDefinition
