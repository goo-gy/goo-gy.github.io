module.exports = {
  siteMetadata: {
    title: `googy-blog`,
    siteUrl: `https://goo-gy.github.io`,
    description: `Daily Develop`,
    topics: [],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      // {
      //   name: 'Example',
      //   path: '/page'
      // },
    ],
    footerMenu: [
      {
        name: 'Example',
        path: '/page'
      },
    ],
    search: true,
    author: {
      name: `googy`,
      description: `I'm <strong>Googy</strong>.
      If you like to see other work, visit <a href="https://github.com/goo-gy" target="_blank">My GitHub</a>!`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/nehalist`,
        linkedin: `https://www.linkedin.com/in/kevin-hirczy-7a9377106/`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/goo-gy`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        }
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ]

};
