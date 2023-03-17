export default defineNuxtConfig({
    darkMode: 'class',
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    css: ['~/assets/css/main.css'],
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