// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false, // SPAモード

  compatibilityDate: '2024-11-01',

  app: {
    head: {
      title: 'yto60.dev',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'yto60.dev'
        }
      ],
      script: [
        {
          src: 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js',
          type: 'module'
        },
        {
          src: 'https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js',
          nomodule: true
        }
      ]
    }
  },

  css: ['~/assets/scss/global.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    }
  },

  modules: [
    '@pinia/nuxt'
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === 'ion-icon'
    }
  }
})
