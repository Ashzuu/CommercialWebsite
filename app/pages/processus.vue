<script setup lang="ts">
  import { ref, type Ref, onMounted, onUnmounted } from 'vue'
  import {ProcessusPropsClient} from "~/models/pages/ProcessusProps.client";

  const advantagesVitrine = [
      "Application web 1 à 3 pages",
      "Architecture SOLID",
      "Personalisation",
      "Accompagnement technique",
      "Aide à la mise en production",
      "Possibilité de faire évoluer son site"
  ]

  const advantagesApplication = [
      "Application web avec API + BDD",
      "Architecture SOLID",
      "Personalisation avancée",
      "Accompagnement technique",
      "Aide à la mise en production",
      "Possibilité de faire évoluer son site",
  ]
  onMounted(() => {
    const manager:Ref = ref(new ProcessusPropsClient());
  })

  onUnmounted(() => {
    document.removeEventListener("scroll", () => {});
  })
</script>

<template>
  <div id="process-page-container" class="simple-container">
    <Header variant="dark"/>
    <main>
      <div class="content-container">
        <section class="title-section-container sections-common">
          <div class="title-section">
            <h1>Processus de création d'un site web</h1>
            <p class="title-section-subtitle">Découvrez mes processus de création des site Internet, étape par étape.</p>
          </div>
          <LazyIcon class="icon-title-section" name="iconamoon:arrow-down-2-bold"/>
        </section>
        <main id="presentation-section" class="sections-common image-presentation-section">
          <div class="img-section first-img-section">
            <LazyNuxtImg src="/img/illustrations/illustration_1.webp"/>
            <div class="img-section-content first-section-content">
              <div class="title-section-title">
                <LazyIcon class="title-section-icon" name="mynaui:one-circle"/>
                <h2>Préparation</h2>
              </div>
              <p>Analyse des besoins, définition des objectifs, choix des technologies et planification du projet.</p>
            </div>
          </div>
          <div class="img-section second-img-section">
            <LazyNuxtImg src="/img/illustrations/illustration_2.webp"/>
            <div class="img-section-content second-section-content">
              <div class="title-section-title">
                <Icon class="title-section-icon" name="mynaui:two-circle"/>
                <h2>Session de développement</h2>
              </div>
              <p>Développement itératif et transparent : réalisation des pages et composants à partir des maquettes, intégration de l'API et de la base de données (si nécessaire), et mise en place des tests unitaires et E2E. Livrables réguliers et démonstrations pour recueillir les premiers retours et ajuster l'application.</p>
            </div>
          </div>
          <div class="img-section third-img-section">
            <LazyNuxtImg src="/img/illustrations/illustration_3.webp"/>
            <div class="img-section-content third-section-content">
              <div class="title-section-title">
                <LazyIcon class="title-section-icon" name="mynaui:three-circle"/>
                <h2>Retours & Retouches</h2>
              </div>
              <p>Recueil des retours et retouches : priorisation des ajustements fonctionnels et graphiques, correction des bugs, optimisation des performances et accessibilité. Validation finale via une recette, préparation du déploiement et accompagnement pour la mise en production.</p>
            </div>
          </div>
        </main>
        <section class="tarification-section-container sections-common">
          <div class="tarification-section-header">
            <h2>Tarification</h2>
            <hr>
            <p>Attention : les coûts peuvent varier en fonction du besoin, du projet, ainsi que des spécificités techniques et les contraintes de celui-ci.</p>
            <p>Ces prix sont à titre indicatifs, et ne sont pas contractuels.</p>
          </div>
          <div class="tarification-price-container">
            <ForfaitCard
              name="Vitrine"
              :price="400"
              :features="advantagesVitrine"
            />
            <hr>
            <ForfaitCard
              name="Application"
              :price="1200"
              :features="advantagesApplication"
            />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
  @import url("~/assets/css/pages/processus.css");
</style>