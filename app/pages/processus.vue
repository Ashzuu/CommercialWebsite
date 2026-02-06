<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue'
  import {ProcessusPropsClient} from "~/models/pages/ProcessusProps.client";

  useSeoMeta({
    title: 'Processus de Création de Site Web | Développement Sur Mesure',
    description: "Découvrez comment je réalise votre site internet : de l'analyse de vos besoins à la mise en ligne. Une approche professionnelle et transparente pour un résultat de qualité.",
  })

  const advantagesVitrine = [
      "Application web 1 à 3 pages",
      "Architecture SOLID",
      "Personnalisation",
      "Accompagnement technique"
  ]

  const advantagesApplication = [
      "Intégralité du pack 'Efficace'",
      "Possibilité d'obtenir une base de données",
      "Gestion de données basique",
      "Personnalisation avancée",
      "Procédure de mise en production",
      "Garantie bugs & imprévus 6 mois**",
  ]

  const advantagesAllIn = [
      "Intégralité du pack 'Premium'",
      "Accompagnement personnalisé",
      "Gestion des données",
      "Développement d'outils tiers*",
      "Garantie bugs & imprévus 1 an"
  ]

  let manager:ProcessusPropsClient = null;

  onMounted(() => {
    manager = new ProcessusPropsClient();
    manager.init();
  })

  onUnmounted(() => {
    if(manager){
      manager.destroy();
    }
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
            <p class="title-section-subtitle">Découvrez mes processus de création des sites Internet, étape par étape.</p>
          </div>
          <LazyIcon class="icon-title-section" name="iconamoon:arrow-down-2-bold"/>
        </section>
        <main id="presentation-section" class="sections-common image-presentation-section">
          <div class="img-section first-img-section">
            <img loading="lazy" src="/img/illustrations/illustration_1.webp"/>
            <div class="img-section-content first-section-content">
              <div class="title-section-title">
                <LazyIcon class="title-section-icon" name="mynaui:one-circle"/>
                <h2>Préparation</h2>
              </div>
              <p>Analyse des besoins, définition des objectifs, choix des technologies et planification du projet.</p>
            </div>
          </div>
          <div class="img-section second-img-section">
            <img loading="lazy" src="/img/illustrations/illustration_2.webp"/>
            <div class="img-section-content second-section-content">
              <div class="title-section-title">
                <Icon class="title-section-icon" name="mynaui:two-circle"/>
                <h2>Session de développement</h2>
              </div>
              <p>Développement itératif et transparent : réalisation des pages et composants à partir des maquettes, intégration de l'API et de la base de données (si nécessaire), et mise en place des tests unitaires et E2E.
                Livrables réguliers et démonstrations pour recueillir les premiers retours et ajuster l'application.</p>
            </div>
          </div>
          <div class="img-section third-img-section">
            <img loading="lazy" src="/img/illustrations/illustration_3.webp"/>
            <div class="img-section-content third-section-content">
              <div class="title-section-title">
                <LazyIcon class="title-section-icon" name="mynaui:three-circle"/>
                <h2>Retours & Retouches</h2>
              </div>
              <p>Recueil des retours et retouches : priorisation des ajustements fonctionnels et graphiques, correction des bugs, optimisation des performances et accessibilité.
                Validation finale via une recette, préparation du déploiement et accompagnement pour la mise en production.</p>
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
          <p class="information-complementaire">Toutes nos solutions respectent la réglementation sur le respect des données privées en Europe (le RGPD).
            <br/>Pour toutes informations complémentaires, n'hésitez pas à <RouterLink to="/contact">me contacter</RouterLink></p>
          <div class="tarification-price-container">
            <ForfaitCard
              name="Efficace"
              :price="600"
              :features="advantagesVitrine"
            />
            <ForfaitCard
              name="Premium"
              :price="1100"
              :is-premium="true"
              :features="advantagesApplication"
            />
            <ForfaitCard
                name="Tout-en-un"
                :price="2400"
                :features="advantagesAllIn"
            />
          </div>
          <p class="information-complementaire">* Toutes les solutions demandées sont réalisables, mais peuvent engendrer un coût supplémentaire non négligeable.</p>
          <p class="information-complementaire">** Garanties précisées dans le contrat</p>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
  @import url("~/assets/css/pages/processus.css");
</style>