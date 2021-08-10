export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6112de66d477e67beafa2e41',
                  title: 'Sanity Studio',
                  name: 'rtyigvfj-studio',
                  apiId: '343987a7-3230-4b13-8bb8-e5811fe18457'
                },
                {
                  buildHookId: '6112de66762b7e877eba3806',
                  title: 'Blog Website',
                  name: 'rtyigvfj',
                  apiId: 'fbb89fb8-09f1-45d5-ac75-38fbcc44e3bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dobson11/rtyigvfj',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rtyigvfj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
