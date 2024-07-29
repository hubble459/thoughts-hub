// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxt/ui', '@nuxt/eslint'],
    compatibilityDate: '2024-07-29',
    runtimeConfig: {
        jwtSecret: 'secret1',

        public: {

        },
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
});
