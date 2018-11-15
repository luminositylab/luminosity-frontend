module.exports = {
  siteMetadata: {
    title: 'The Luminosity Lab | Forming the future.',
    description: 'The Luminosity Lab | Forming the future.'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The Luminosity Lab',
        short_name: 'Luminosity',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ]
};
