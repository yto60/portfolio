import works from './assets/data.json'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'yto60.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'yto60.dev'
      }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        src:
          'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js',
        type: 'module',
        body: true
      },
      {
        src: 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js',
        nomodule: '',
        body: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/scss/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-lazyload'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  typescript: {
    typeCheck: {
      eslint: true
    }
  },
  styleResources: {
    scss: ['~assets/scss/_variables.scss']
  },
  vue: {
    config: {
      ignoredElements: ['ion-icon']
    }
  },
  generate: {
    routes() {
      return works.map((_, index) => `/works/${index}/`)
    }
  },
  router: {
    trailingSlash: true,
    middleware: 'redirect'
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in'
  }
}
