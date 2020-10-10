module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Edson Lazo`,
    subtitle: `software developer`,
    description: `A minimal blog starter built with Gatsbyjs. The needed Gatsby files are included.`,
    author: `@niklasmtj`,
    instagram: `https://www.instagram.com/edsonlazo/`,
    spotify: `https://open.spotify.com/show/6Hkj1T4pHxgu7x3ZtyRiFH?si=mv2mp27IS-qGjGF_eYizOA`,
    linkedin: `https://bo.linkedin.com/in/edsonlazo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              aliases: { sh: "bash", js: "javascript" },
              showLineNumbers: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": ["Strict-Transport-Security: max-age=63072000"],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-gitalk`,
      options: {
        config: {
          clientID: `8f7f7a55e976b1735617`,
          clientSecret: `a540c3c02b6290e6e008cfef96bebbcad76d5777`,
          repo: `edsonlazo.github.io`,
          owner: `edsonlazo`,
          admin: [`edsonlazo`],
          language: `en`
        }
      }
    }
  ],
}
