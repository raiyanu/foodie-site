import {defineType, defineField, defineArrayMember} from 'sanity'

export const detail = defineType({
  type: 'document',
  name: 'detail',
  fields: [
    defineField({
      type: 'string',
      name: 'SiteName',
    }),
    defineField({
      type: 'string',
      name: 'Slogans',
    }),
    defineField({
      type: 'string',
      name: 'Telephone',
    }),
    defineField({
      type: 'string',
      name: 'Email',
    }),
    defineField({
      type: 'string',
      name: 'Address',
    }),
    defineField({
      type: 'string',
      name: 'Mobile',
    }),
  ],
})
