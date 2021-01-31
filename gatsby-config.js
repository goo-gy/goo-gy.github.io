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
      {
        name: 'Project',
        path: '/project'
      },
    ],
    footerMenu: [
      {
        name: 'Project',
        path: '/project'
      },
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
        twitter: ``,
        linkedin: ``,
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
    `gatsby-transformer-sharp`,
  ]
};
