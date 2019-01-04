module.exports = {
  /*
  ** Headers of the page
  */
  modules: [
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', { id: process.env.ANALYTICS_ID }],
    ['@nuxtjs/google-adsense', { id: process.env.CA_PUB }]
  ],
  head: {
    title: 'Victor Forsgren',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Victor Forsgrens sida på internet.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  mode: 'spa',
  loading: { color: '#3498db' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

