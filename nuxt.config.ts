// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Evan DYNAK - Créateur de Site Internet Indépendant à Dijon & Lyon",
      meta: [
        {name:"title", content:"Créateur de site internet indépendant | Création de site web à Dijon, Lyon et France"},
        {name:"description", content:"Faire mon site internet avec un créateur indépendant. Améliorez votre identité numérique avec un site sur mesure. Création de site internet Dijon, Lyon et partout en France. Devis gratuit."},
        {name:"ogTitle", content:"Créateur de Site Internet Indépendant - Dijon, Lyon, France"},
        {name:"ogDescription", content:"Faire mon site internet sur mesure pour améliorer mon identité numérique. Créateur de site internet indépendant disponible à Dijon, Lyon et dans toute la France."},
        {name:"ogUrl", content:"https://website.evandynak.me/"},
        {name:"ogImage", content:"https://website.evandynak.me/img/logo_light.png"}
      ],
      htmlAttrs: {
        lang: 'fr'
      },
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover',
    }
  },
  sitemap: {
    zeroRuntime: true
  },
  site: {
    url: "https://website.evandynak.me/"
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/sitemap'],
  css: ['~/assets/css/style.css'],
  runtimeConfig: {
    public: {
      emailjsServiceId: '',
      emailjsTemplateId: '',
      emailjsPublicKey: ''
    }
  }
})