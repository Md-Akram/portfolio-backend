export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',

      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'bio',
      type: 'content',
      title: 'Bio',
    },
  ],
}
