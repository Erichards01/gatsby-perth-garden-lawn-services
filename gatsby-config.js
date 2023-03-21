/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    pathPrefix: `/storage/perth-garden-lawn-services`,
    siteUrl: `https://perthgardenlawnservices.gatsbyjs.io/`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
