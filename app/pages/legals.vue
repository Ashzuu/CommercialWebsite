<script setup lang="ts">
// Définition des métadonnées SEO pour cette page spécifique
useSeoMeta({
  title: 'Mentions Légales | Evan DYNAK',
  description: 'Informations légales, hébergement, propriété intellectuelle et gestion des données personnelles du site website.evandynak.me.',
  robots: 'noindex, nofollow' // Souvent recommandé pour les pages légales pour éviter de diluer le SEO, mais optionnel.
})
</script>

<template>
  <div class="simple-container">
    <Header variant="dark"/>

    <main class="legal-container">
      <h1 class="main-title">Mentions Légales</h1>

      <div class="legal-content">
        <p class="intro">
          Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique (LCEN), nous portons à la connaissance des utilisateurs et visiteurs du site <strong>website.evandynak.me</strong> les informations suivantes :
        </p>

        <section>
          <h2>1. Éditeur du site</h2>
          <p>Le site est édité par <strong>Evan DYNAK</strong>, développeur web indépendant.</p>
          <ul>
            <li><strong>Statut juridique :</strong> Entreprise Individuelle</li>
            <li><strong>Siège social :</strong> Dijon</li>
            <li><strong>SIRET :</strong> 99939580900018</li>
            <li><strong>Téléphone :</strong> 07 84 67 54 95</li>
            <li><strong>Email :</strong> <a href="mailto:evan.dynak@bbox.fr">evan.dynak@bbox.fr</a></li>
            <li><strong>Directeur de la publication :</strong> Evan DYNAK</li>
          </ul>
        </section>

        <section>
          <h2>2. Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <p>
            <strong>Evan DYNAK</strong><br>
            Dijon
          </p>
        </section>

        <section>
          <h2>3. Propriété intellectuelle et Licence</h2>
          <h3>Contenu du site</h3>
          <p>
            L'ensemble des éléments visuels et textuels (images, logo, textes, illustrations) présents sur ce site est la propriété exclusive de <strong>Evan DYNAK</strong>, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de l'auteur.
          </p>

          <h3>Code source</h3>
          <p>
            Le code source technique de ce site est mis à disposition sous licence <strong>MIT</strong>.
            Vous êtes libre de consulter, copier et modifier le code source disponible sur le dépôt GitHub associé, sous réserve de conserver les mentions de copyright et de licence. Toutefois, cette licence s'applique au code informatique et non aux éléments graphiques, éditoriaux ou à l'identité visuelle de l'auteur.
          </p>
        </section>

        <section>
          <h2>4. Données personnelles et Confidentialité</h2>
          <p>Le site a pour vocation de présenter l'activité professionnelle de l'éditeur et ne nécessite pas de création de compte utilisateur.</p>

          <h3>Collecte de données</h3>
          <p>Le site ne collecte aucune donnée personnelle à des fins commerciales ou publicitaires. Aucune donnée n'est enregistrée dans une base de données permanente via le site.</p>

          <h3>Formulaire de contact</h3>
          <p>
            Les informations recueillies via le formulaire de contact (Nom, Prénom, Email, Message) sont transmises directement par email à Evan DYNAK via le service tiers <strong>EmailJS</strong>. Ces données sont utilisées uniquement dans le cadre de la relation commerciale ou pour répondre à votre demande d'information. Elles ne sont ni vendues, ni échangées, ni transférées à des tiers.
          </p>

          <h3>Cookies</h3>
          <p>Ce site n'utilise <strong>aucun cookie</strong> de traçage, publicitaire ou de mesure d'audience nécessitant le consentement de l'utilisateur.</p>

          <h3>Vos droits</h3>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant (transmises par email). Pour exercer ce droit, vous pouvez nous contacter à l'adresse : <a href="mailto:evan.dynak@bbox.fr">evan.dynak@bbox.fr</a>.
          </p>
        </section>

        <section>
          <h2>5. Limitation de responsabilité</h2>
          <p>
            Evan DYNAK s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour. Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité.
          </p>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import url("~/assets/css/pages/legals.css");
</style>