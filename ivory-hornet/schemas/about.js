export default {
  name: 'about',
  type: 'document',
  title: 'About',

  fields: [
    {
      name: 'title1',
      type: 'string',
      title: 'Title 1',
    },
    {
      name: 'title2',
      type: 'string',
      title: 'Title 2',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
    },
    {
      name: 'body',
      type: 'content',
      title: 'Body',
    },
    {
      title: 'LinkedIn Url',
      name: 'linkedInUrl',
      type: 'url',
    },
    {
      title: 'Github Url',
      name: 'githubUrl',
      type: 'url',
    },
  ],
}
