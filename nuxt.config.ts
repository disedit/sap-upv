import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,

  runtimeConfig: {
    public: {
      baseUrl: 'https://sap.upv.es',
      environment: 'preview'
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/icon'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  image: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? {
    provider: 'netlify',
    domains: ['a.storyblok.com']
  } : {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },

  googleFonts: {
    families: {
      'IBM+Plex+Sans': {
        wght: '400..700',
        ital: '400..700',
      },
      'IBM+Plex+Mono': [400]
    }
  }
})
