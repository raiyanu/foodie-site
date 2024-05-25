import { defineType, defineField, defineArrayMember } from 'sanity'

export const variant = defineType({
  type: "object",
  name: "variant",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "string",
      name: "sku",
    }),
    defineField({
      type: "number",
      name: "price",
    }),
    defineField({
      type: "number",
      name: "stock",
    }),
    defineField({
      type: "array",
      name: "images",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      type: "string",
      name: "size",
      options: {
        list: [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL",
        ],
      },
    }),
    defineField({
      type: "string",
      name: "color",
      options: {
        list: [
          "Red",
          "Blue",
          "Green",
          "Yellow",
          "Black",
          "White",
        ],
      },
    }),
  ],
});

