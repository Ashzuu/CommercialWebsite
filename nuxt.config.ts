// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Evan DYNAK - Développeur Freelance & Création de Site Internet",
      meta: [
        {name:"title", content:"Développeur Web & Mobile à Dijon | Création de Site Internet - Qualité & Prix"},
        {name:"description", content:"Développeur diplômé (DUT Informatique) basé à Dijon. Création de sites web sur mesure en Bourgogne-Franche-Comté, Lyon et Grenoble. Profitez d'un rapport qualité/prix imbattable et d'une grande réactivité."},
        {name:"ogTitle", content:"Développeur Web Freelance - Dijon, Lyon, Grenoble"},
        {name:"ogDescription", content:"Besoin d'un site web performant ? Je propose des prestations à un rapport qualité / prix imbattable. Disponible immédiatement."},
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