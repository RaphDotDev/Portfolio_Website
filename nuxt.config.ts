// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
  },

  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      title: 'Raphael E. Dacara — Flutter & Full-Stack Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Portfolio of Raphael E. Dacara — Junior Full-Stack & Flutter Developer specializing in mobile systems, cloud APIs, and modern web architecture.',
        },
        { property: 'og:title', content: 'Raphael E. Dacara — Flutter & Full-Stack Developer' },
        {
          property: 'og:description',
          content:
            'Portfolio of Raphael E. Dacara — Junior Full-Stack & Flutter Developer.',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
  },
})
