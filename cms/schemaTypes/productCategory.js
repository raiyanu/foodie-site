import { defineType, defineField } from 'sanity'

export const productCategory = defineType({
  type: "document",
  name: "productCategory",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      type: "text",
      name: "description",
    }),
  ],
});

