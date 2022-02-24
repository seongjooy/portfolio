module.exports = {
  siteMetadata: {
    title: `Seong Joo Yoon`,
    description: "Personal Porfolio",
    copyright: "this is copyrighted?",
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
};
