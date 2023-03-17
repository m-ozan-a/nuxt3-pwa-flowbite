export default defineNuxtConfig({
    darkMode: 'class',
    modules: [
        '@pinia/nuxt',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@vite-pwa/nuxt',
        'nuxt-icon'
    ],
    css: ['~/assets/css/main.css'],
    pwa: {
      registerType: 'autoUpdate',
      manifest: {
        name: 'Joyfoop PWA',
        short_name: 'Joyfoop PWA',
        start_url: '.',
        display: 'standalone',
        theme_color: '#ffffff',
        description: 'Joyfoop PWA Flowbite starter kit.',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/',
        globPatterns: ['**/*.{js,ts,vue,css,html,png,svg,ico}'],
      },
      client: {
        installPrompt: true,
        periodicSyncForUpdates: 20,
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
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