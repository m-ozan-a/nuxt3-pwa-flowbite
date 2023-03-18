export default defineNuxtConfig({
    darkMode: 'class',
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@kevinmarrec/nuxt-pwa',
        'nuxt-icon'
    ],
    css: ['~/assets/css/main.css'],
    pwa: {
      meta: {
        mobileAppIOS: true,
      },      
      workbox: {
        enabled: true
      }
    },
    tailwindcss: {
      cssPath: '~/assets/css/main.css'
    },    
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    vite: {
        optimizeDeps: {
          include: [
            'vue',
            'pinia',
          ],
        },
    },
})