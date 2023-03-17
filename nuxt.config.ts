// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    darkMode: 'class',
    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss'
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    variants: {
        fill: [],
        extend: {
          borderColor: ['focus-visible'],
          textDecoration: ['none'],
        }
    },        
})
