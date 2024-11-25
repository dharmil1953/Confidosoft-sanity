import { SchemaTypeDefinition } from "sanity";

export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "mainTitle",
      title: "Main Title",
      type: "string",
      description: "Main title of the footer (e.g., 'Let's make something').",
    },
    {
      name: "flippingWord",
      title: "Flipping Words",
      type: "array",
      description: "Words that flip (e.g., 'something').",
      of: [
        {
          type: "object",
          title: "Word Item",
          fields: [
            {
              name: "word",
              type: "string",
              title: "Word",
              description: "The word to be flipped.",
            },
          ],
        },
      ],
    },
    
    {
      name: "contactInfo",
      title: "Contact Info",
      type: "array",
      of: [{ type: "string" }],
      description: "Array of strings for contact details like phone numbers and email.",
      options: {
        layout: "tags",
      },
    },
    {
      name: "address",
      title: "Address",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "location",
              title: "Location",
              type: "string",
              description: "Name of the location (e.g., 'UK', 'USA').",
            },
            {
              name: "address",
              title: "Address",
              type: "string",
              description: "Full address for the location.",
            },
          ],
        },
      ],
      description: "Array of address objects for different locations.",
    },
    {
      name: "copyright",
      title: "Copyright Information",
      type: "array",
      of: [{ type: "string" }],
      description: "Array of copyright information strings.",
    },
    {
      name: "socialMediaLinks",
      title: "Social Media Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "platform",
              title: "Platform",
              type: "string",
              description: "Name of the social media platform (e.g., 'Twitter X').",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              description: "Link to the social media profile.",
            },
          ],
        },
      ],
      description: "Array of social media links.",
    },
  ],
} as SchemaTypeDefinition
