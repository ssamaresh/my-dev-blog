module.exports = {
  siteMetadata: {
    title: 'My Dev Blog',
    description: 'A blog about my developer experiences',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: '@theme-ui/preset-funk',
        prismPreset: 'prism-okaidia',
      },
    },
    'gatsby-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ], 
};
