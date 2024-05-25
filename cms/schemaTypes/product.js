import { defineType, defineField, defineArrayMember } from 'sanity'

export const product = defineType({
  type: "document",
  name: "product",
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
    defineField({
      type: "image",
      name: "mainImage",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "variants",
      of: [
        defineArrayMember({
          type: "variant",
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "tags",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
    }),
    defineField({
      type: "reference",
      name: "productCategory",
      to: [{ type: "productCategory" }],
    }),
    defineField({
      type: "array",
      name: "content",
      of: [
        defineArrayMember({
          type: "block",
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

