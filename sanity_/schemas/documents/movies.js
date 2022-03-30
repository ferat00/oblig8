
const movies = {
        title: 'Movie',
        name: 'movie',
        type: 'document',
        fields: [
          {
            title: 'Title',
            name: 'title',
            type: 'string'
          },
          {
            type: 'slug',
            name: 'slug',
            title: 'Slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            },
          },
          {
            
                title: 'Actor',
                name: 'actor',
                type: 'reference',
                to: [{type: 'actor'}]
              
          },
        ]

}

export default movies;