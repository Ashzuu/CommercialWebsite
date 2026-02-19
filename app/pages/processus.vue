<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue'
  import {ProcessusPropsClient} from "~/models/pages/ProcessusProps.client";

  useSeoMeta({
    title: 'Processus & Tarifs Création Site Web | Freelance Dijon, Lyon',
    description: "Découvrez mon processus transparent et mes tarifs imbattables pour la création de votre site internet. Développeur freelance à votre écoute, disponible à Dijon, Lyon et partout en France.",
  })

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Création de site internet",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Evan DYNAK",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dijon",
              "addressRegion": "Bourgogne-Franche-Comté",
              "addressCountry": "FR"
            }
          },
          "areaServed": ["Dijon", "Lyon", "Bourgogne-Franche-Comté", "Auvergne-Rhône-Alpes", "France"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Forfaits Création Web",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Forfait Efficace" },
                "price": "600",
                "priceCurrency": "EUR"
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Forfait Premium" },
                "price": "1100",
                "priceCurrency": "EUR"
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Forfait Tout-en-un" },
                "price": "2400",
                "priceCurrency": "EUR"
              }
            ]
          }
        })
      }
    ]
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
      "API basique",
      "Personnalisation avancé",
      "Procédure de mise en production",
      "Garantie bugs & imprévus 6 mois",
  ]

  const advantagesAllIn = [
      "Intégralité du pack 'Premium'",
      "Accompagnement personnalisé",
      "API avancée",
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
            <p class="title-section-subtitle">Découvrez mes processus de création des site Internet, étape par étape.</p>
          </div>
          <LazyIcon class="icon-title-section" name="iconamoon:arrow-down-2-bold"/>
        </section>
        <main id="presentation-section" class="sections-common image-presentation-section">
          <div class="img-section first-img-section">
            <img alt="Analyse des besoins et préparation du projet de création de site internet" loading="lazy" src="/img/illustrations/illustration_1.webp"/>
            <div class="img-section-content first-section-content">
              <div class="title-section-title">
                <LazyIcon class="title-section-icon" name="mynaui:one-circle"/>
                <h2>Préparation</h2>
              </div>
              <p>Analyse des besoins, définition des objectifs, choix des technologies et planification du projet.</p>
            </div>
          </div>
          <div class="img-section second-img-section">
            <img alt="Développement web itératif et création de site sur mesure" loading="lazy" src="/img/illustrations/illustration_2.webp"/>
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
            <img alt="Retours clients, optimisation et mise en ligne du site web" loading="lazy" src="/img/illustrations/illustration_3.webp"/>
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
            <p class="information-complementaire">* Toutes les solutions demandées sont réalisables, mais peuvent engendrer un coût supplémentaire non négligeable.</p>
          </div>
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
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
  @import url("~/assets/css/pages/processus.css");
</style>