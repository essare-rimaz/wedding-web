export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // server: {
  //  port: 8000, // default: 3000
  //  host: '0.0.0.0' // default: localhost
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mičánkovi',
    htmlAttrs: {
      lang: 'cs'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/hearticon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Montserrat: {
        wght: [300, 400, 600, 700, 800]
      }
    },
    // preload in header to prevent font blink
    preload: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.NUXT_ROUTER_BASE_URL || '/'
  },

  router: {
    base: process.env.NUXT_ROUTER_BASE_URL || '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
