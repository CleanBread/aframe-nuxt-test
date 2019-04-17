const router = process.env.NODE_ENV === 'production' ? {
    base: '/aframe-nuxt-test/',
} : {};

export default {
    head: {
        title: 'A-Frame / Nuxt.js test',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        ],
    },
    generate: {
        dir: 'docs',
    },
    router: router,
};
