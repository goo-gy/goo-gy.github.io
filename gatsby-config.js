module.exports = {
  siteMetadata: {
    title: `googy-blog`,
    siteUrl: `https://goo-gy.github.io`,
    description: `Daily Develop`,
    topics: [],
    menu: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Project",
        path: "/tag/project",
      },
      {
        name: "Algorithm",
        path: "/tag/algorithm",
      },
      {
        name: "Web",
        path: "/tag/web",
      },
    ],
    footerMenu: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Project",
        path: "/tag/project",
      },
      {
        name: "Algorithm",
        path: "/tag/algorithm",
      },
      {
        name: "Web",
        path: "/tag/web",
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
        twitch: ``,
      },
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-194826905-2`, // 측정 ID
        head: false,
        anonymize: true,
      },
    },
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
          icon: `${__dirname}/content/assets/images/logo.png`,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://goo-gy.github.io/",
        sitemap: "https://goo-gy.github.io/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      },
    },
  ],
};
