import { defineNuxtConfig } from '@nuxt/bridge-edge'

export default defineNuxtConfig({
  publicRuntimeConfig: {
    authClientId: process.env.authClientId,
    algoliaAppId: process.env.algoliaAppId,
    algoliaAppKey: process.env.algoliaAppKey,
    cloudinaryApiKey: process.env.cloudinaryApiKey,
    cloudinaryApiSecret: process.env.cloudinaryApiSecret,
    mapsAPI2: process.env.mapsAPI2,
    mapsAPI: process.env.mapsAPI,
  },
  privateRuntimeConfig: {
  },
  buildModules: [
    '@unocss/nuxt',
    '@vueuse/core/nuxt',
    '@nuxt/bridge-edge',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/main.css',
  ],
  components: true,
  bridge: {
    vite: true,
  },
  unocss: {
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  plugins: [
    '~/plugins/maps.client',
    '~/plugins/dataApi',
  ],
})
