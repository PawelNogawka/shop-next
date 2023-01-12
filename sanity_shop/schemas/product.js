export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      options: {
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        validation: (Rule) => Rule.min(0).max(5),
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      options: {
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
      options: {
        validation: (Rule) => Rule.required().max(50),
      },
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number',
        options: {
          validation: (Rule) => Rule.min(0),
          validation: (Rule) => Rule.required(),
        },
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source:'name',
          maxLength:90,
          validation: (Rule) => Rule.required(),
        },
      }
  ],
}
