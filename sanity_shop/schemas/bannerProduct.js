export default {
  name: 'bannerInfo',
  title: 'BannerInfo',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Decc',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    },
    {
      name: 'productName',
      title: 'ProductName',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
    },
  ],
}
