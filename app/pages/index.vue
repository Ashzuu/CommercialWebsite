<script setup lang="ts">
  import Header from '~/components/Header.vue';
  import HomePageProps from "~/models/pages/HomePageProps";
  import type {Reactive} from "vue";
  import {ButtonType} from "~/models/enum/ButtonType";

  const manager:Reactive<HomePageProps> = reactive(new HomePageProps());
  provide('homePageManager', manager);


  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Evan DYNAK - Créateur de site internet indépendant",
          "image": "https://website.evandynak.me/img/logo_dark.png",
          "description": "Créateur de site internet indépendant, je vous aide à améliorer votre identité numérique. Création de site internet sur Dijon, Lyon et dans toute la France.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dijon",
            "addressRegion": "Bourgogne-Franche-Comté",
            "addressCountry": "FR"
          },
          "areaServed": [
            "Dijon",
            "Bourgogne-Franche-Comté",
            "Lyon",
            "Grenoble",
            "Auvergne-Rhône-Alpes",
            "France"
          ],
          "priceRange": "€€",
          "knowsAbout": [
            "Créateur de site internet indépendant",
            "Création site internet Dijon",
            "Création site internet Lyon",
            "Faire mon site internet",
            "Améliorer mon identité numérique",
            "Création de site vitrine sur mesure",
            "Développeur Freelance",
            "Développement sur mesure",
            "Nuxt.js",
            "Vue.js"
          ]
        })
      }
    ]
  })

</script>

<template>
  <div id="home-page-container" class="simple-container">
    <Header/>
    <main>
      <Transition name="bg-fade">
        <div
            :key="manager.ImageUrl"
            class="background-layer"
            :style="{ backgroundImage: `url(${manager.ImageUrl})` }"
        />
      </Transition>
      <div class="overlay-obscured"/>
      <section class="sr-only">
        <h2>Créateur de site internet indépendant et Développement Web Sur Mesure</h2>
        <p>
          Vous souhaitez faire votre site internet pour améliorer votre identité numérique ? 
          En tant que créateur de site internet indépendant, je vous accompagne dans votre projet avec
          une grande disponibilité et une véritable envie de vous aider. Mon objectif est de comprendre
          vos besoins pour vous proposer une création de site vitrine sur mesure ou d'application web, à un rapport qualité/prix imbattable.
          Spécialisé dans la création site internet Dijon et la création site internet Lyon, je travaille également avec
          des entreprises partout en France grâce au travail dématérialisé. Confiez-moi votre projet pour concevoir un site web performant, accessible et moderne.
        </p>
      </section>
      <div class="content-container">
        <section class="caroussel-home-section">
          <CircularMenu/>
        </section>
        <div class="content-home-container">
          <LazyIcon v-if="manager.PreviousLabel" class="arrow-left-icon" name="iconamoon:arrow-left-6-circle-light" @click="manager.ChangeCurrentSelection(manager.Id - 1)"/>
          <LazyIcon v-if="manager.NextLabel" class="arrow-right-icon" name="iconamoon:arrow-right-6-circle-light" @click="manager.ChangeCurrentSelection(manager.Id + 1)"/>
          <Transition name="fade-slide" mode="out-in">
            <div :key="manager.Id" class="animated-content">
              <h1>{{ manager.Title }}</h1>
              <p class="content-home-description">{{ manager.Description }}</p>
            </div>
          </Transition>
          <div class="buttons-container">
            <Button label="Découvrir" name-route="/processus" icon="ei:arrow-right" :button-type="ButtonType.PRIMARY"/>
            <Button label="Me contacter" name-route="/contact" icon="solar:phone-linear" :button-type="ButtonType.OUTLINED"/>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<style scoped>
@import url("~/assets/css/pages/main-page.css");
</style>