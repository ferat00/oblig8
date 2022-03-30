const actor = {
    title: 'Actor',
    name: 'actor',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'fullname',
        type: 'string'
      },
      {
        title: 'Slug',
        name: 'name',
        type: 'slug',
        options: {
          source: 'fullname',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        },
      },
      {
        type: 'reference',
        name: 'movie',
        title: 'Movies',
        to: {type: 'movie'},
      },
      {
        type: 'text',
        name: 'text',
        title: 'history',
      },
    ]
}

export default actor