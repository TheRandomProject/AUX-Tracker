// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  devtools: { enabled: true },
  pages: true,
  css: ['~/assets/css/main.css'],
  modules: [ '@nuxthq/ui','nuxt-icon'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
