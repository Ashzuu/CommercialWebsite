// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Evan DYNAK - Développeur Freelance & Création de Site Internet",
      meta: [
        {name: "title", content: "Création de Site Internet & Développeur Freelance | Accessible & Sur Mesure"},
        {name: "description", content: "Développeur web freelance disponible et à l'écoute. Création de sites internet sur mesure (Bourgogne-Franche-Comté, Auvergne-Rhône-Alpes et 100% à distance). Un accompagnement fort à un prix très compétitif !"},
        {name: "ogTitle", content: "Développeur Web Freelance - Création de sites internet"},
        {name: "ogDescription", content: "Besoin d'un site web performant ? Je propose des prestations de qualité, un suivi personnalisé et une grande disponibilité, partout en France."},
        {name: "ogUrl", content: "https://website.evandynak.me/"},
        {name: "ogImage", content: "https://website.evandynak.me/img/logo_light.png"}
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