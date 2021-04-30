const config = {
  target: 'server',

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@vueform/multiselect'],
  },

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
    '@braid/vue-formulate/nuxt',
    // https://blog.logrocket.com/handling-server-side-applications-with-nuxts-composition-api/
    '@nuxtjs/composition-api',
  ],

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/tailwind.css',
    '~assets/styles/global.scss',
    // 'vue-essential-slices/src/styles/styles.scss',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'microsaascollective',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        type: 'stylesheet',
        href: 'https://rsms.me/inter/inter.css',
      },
    ],
    script: [
      {
        src:
          'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList',
      },
    ],
  },

  loading: {
    color: '#99ecf0',
    height: '4px',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/auth-next',
    '@nuxtjs/axios', // https://go.nuxtjs.dev/pwa
    [
      '@nuxtjs/prismic',
      {
        endpoint: 'https://microsaascollective.cdn.prismic.io/api/v2',
        apiOptions: {
          routes: [
            {
              type: 'page',
              path: '/:uid',
            },
          ],
        },
      },
    ],
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/base-bus.js',
    '~plugins/base-chat.js',
    '~plugins/base-filters.js',
    '~plugins/base-toast.js',
    '~plugins/base-tooltip.js',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL || 'http://localhost:4000',
    requestInterceptor: (config, { store }) => {
      const qs = require('qs')
      config.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      }
      return config
    },
  },

  googleAnalytics: {
    id: 'UA-7419920-17',
  },

  env: {
    API_URL: process.env.API_URL || 'http://localhost:4000',
    API_WEBSOCKET_URL:
      process.env.API_WEBSOCKET_URL || 'ws://localhost:4000/cable',
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000',
  },

  storybook: {},

  serverMiddleware: [],

  tailwindcss: {
    jit: true,
  },

  router: {
    middleware: ['auth'],
  },
}

if (process.env.STORYBOOK) {
  delete config.serverMiddleware
  config.tailwindcss.jit = false
}

export default config
