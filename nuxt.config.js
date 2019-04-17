const router = process.env.NODE_ENV === 'production' ? {
    base: '/aframe-nuxt-test/',
} : {};

export default {
    generate: {
        dir: 'docs',
    },
    router: router,
};
