module.exports = {
  siteMetadata: {
    title: `Seong Joo Yoon`,
    description: "Personal Porfolio",
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/pages/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
