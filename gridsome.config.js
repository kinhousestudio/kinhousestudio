// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Kinhouse',
  plugins: [
    {
  use: '@gridsome/source-contentful',
  options: {
    space: process.env.CONTENTFUL_SPACE, // required
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
    host: 'cdn.contentful.com',
    environment: 'master',
    typeName: 'Contentful'
  }
},
{
  use: '@gridsome/source-filesystem',
  options: {
    path: 'blog/**/*.md',
    typeName: 'Post',
    remark: {
      // remark options
    }
  }
}

  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  templates: {
    ContentfulKinhouseFilmy: '/film/:filmTitle',
    ContentfulKinhouseOsoby: '/:title'
  }
}
