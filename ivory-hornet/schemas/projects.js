export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      title: 'Published At',
      options: {
        dateFormat: 'DD-MM-YY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'body',
      type: 'content',
      title: 'Body',
    },
    {
      title: 'Live Url',
      name: 'liveUrl',
      type: 'url',
    },
    {
      title: 'Github Url',
      name: 'githubUrl',
      type: 'url',
    },
  ],
}
