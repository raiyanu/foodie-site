import {defineType, defineField} from 'sanity'

export const productCategory = defineType({
  type: 'document',
  name: 'productCategory',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      options: {
        isRequired: true,
      },
    }),
    defineField({
      type: 'slug',
      name: 'Slug',
      options: {
        source: 'title',
        isRequired: true,
      },
    }),
  ],
})
