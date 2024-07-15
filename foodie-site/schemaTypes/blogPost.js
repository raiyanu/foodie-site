import { defineType, defineField, defineArrayMember } from 'sanity'

export const blogPost = defineType({
  type: "document",
  name: "blogPost",
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
      type: "datetime",
      name: "publishedAt",
    }),
    defineField({
      type: "reference",
      name: "author",
      to: [{ type: "author" }],
    }),
    defineField({
      type: "image",
      name: "mainImage",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "content",
      of: [
        defineArrayMember({
          type: "block",
        }),
        defineArrayMember({
          type: "reference",
          name: "product",
          title: "Product",
          to: [{ type: "product" }],
        }),
        defineArrayMember({
          type: "image",
          fields: [
            {
              type: "string",
              name: "caption",
            },
          ],
          options: { hotspot: true },
        }),
      ],
    }),
  ],
});

