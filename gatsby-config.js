module.exports = {
  siteMetadata: {
    title: `Sycra`,
    description: `Portfolio of artist Sycra Yasin`,
    author: {
      name: "Sycra Yasin",
      email: "sycra7@gmail.com",
      twitter: "https://twitter.com/Sycra",
      patreon: "https://www.patreon.com/Sycra?ty=h",
      facebook: "https://www.facebook.com/Sycra-Art-Videos-155843997850744/",
      deviantart: "http://sycra.deviantart.com/",
    },
    navbar: [
      {
        to: "/about",
        label: "ABOUT",
      },
      {
        to: "https://www.youtube.com/user/Sycra",
        label: "YOUTUBE",
      },
      {
        to: "/resources",
        label: "RESOURCES",
      },
      {
        to: "https://discord.gg/t6THe9Z",
        label: "DISCORD",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/`,
      },
    },

    "gatsby-transformer-remark",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
