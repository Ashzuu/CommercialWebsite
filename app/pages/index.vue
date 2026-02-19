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
          "name": "Evan DYNAK - Concepteur de site Internet",
          "image": "https://website.evandynak.me/img/logo_dark.png",
          "description": "Création de sites internet à bas prix, développement web sur mesure. Développeur freelance hautement disponible, à l'écoute de vos besoins.",
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
            "Conception de site Internet",
            "Création de site internet à bas prix",
            "Développeur Freelance",
            "Développement sur mesure",
            "Création de site web",
            "Création d'application web",
            "Développement logiciel",
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
        <h2>Création de site internet et Développement Web Sur Mesure</h2>
        <p>
          Vous cherchez un développeur freelance sur Dijon, Lyon ou partout en France ?
          Spécialiste de la conception de sites internet, je vous accompagne dans votre projet avec
          une grande disponibilité et une véritable envie de vous aider. Mon objectif est de comprendre
          vos besoins pour vous proposer une création de site internet à un rapport qualité/prix imbattable.
          Que vous soyez en Bourgogne-Franche-Comté, en Auvergne-Rhône-Alpes, ou ailleurs grâce au
          travail dématérialisé, je suis votre partenaire de confiance.
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