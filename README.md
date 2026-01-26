# Site Personnel - Evan Dynak

Ce dépôt contient le code source de mon site personnel et professionnel. Il a pour vocation principale de présenter mes services, mon processus de travail et de servir de **vitrine technique** démontrant mes compétences en développement web moderne.

> **Note :** Ce projet est un site personnel. Bien que le code soit ouvert à la consultation pour la consultation du code source, il n'a pas pour vocation d'être cloné pour une utilisation commerciale directe sans adaptation majeure.

## 🛠 Technologies & Stack Technique

Ce projet est conçu avec une approche moderne axée sur la performance et la maintenabilité.

* **Framework :** [Nuxt 3](https://nuxt.com/) (Vue.js 3)
* **Langage :** TypeScript (Typage fort des props et des modèles)
* **Styling :** CSS natif (Variables CSS `:root`, Scoped CSS)
* **Emailing :** [EmailJS](https://www.emailjs.com/) (Gestion du formulaire de contact)
* **Icônes :** Iconify / Iconamoon

## 🏗 Architecture du Code

Le projet suit une structure claire visant à séparer la logique métier de la vue, en s'inspirant des principes SOLID mentionnés dans la section processus du site :

* **`app/models/`** : Contient les classes et types TypeScript (ex: `HomePageElement`, `HomePageProps`, Enums). Cela permet de structurer les données utilisées dans les vues.
* **`app/assets/ts/`** : Logique métier déportée (ex: `ManageEmail.ts` pour l'encapsulation du service d'envoi d'email).
* **`app/components/`** : Composants Vue réutilisables (Header, Boutons, Cartes de tarification).
* **`app/pages/`** : Pages principales (Accueil, Processus, Contact).

## 🚀 Fonctionnalités Clés

* **Page d'accueil dynamique :** Système de carrousel géré par un modèle de données (`HomePageProps`) avec un menu circulaire interactif.
* **Processus & Tarification :** Présentation des offres via des composants dédiés (`ForfaitCard`) et explication des étapes de développement.
* **Formulaire de Contact :**
    * Validation des champs côté client.
    * Feedback utilisateur (Messages de succès/échec).
    * Intégration API via EmailJS.
* **Responsive Design :** Adaptation fluide du mobile au desktop (Media queries, menu burger mobile).

## 📦 Installation & Démarrage

Si vous souhaitez lancer le projet localement pour analyser le code :

1.  **Cloner le dépôt :**
    ```bash
    git clone [https://github.com/votre-username/votre-repo.git](https://github.com/votre-username/votre-repo.git)
    cd votre-repo
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Lancer le serveur de développement :**
    ```bash
    npm run dev
    ```
    L'application sera accessible sur `http://localhost:3000`.

## ⚙️ Configuration (Variables d'environnement)

Le système d'envoi d'email repose sur **EmailJS**.
Pour que le formulaire de contact fonctionne dans un environnement cloné, vous devez configurer vos propres identifiants.

Le fichier `app/assets/ts/ManageEmail.ts` attend une configuration. Il est recommandé d'utiliser des variables d'environnement (`.env`) pour la production plutôt que de laisser les clés en dur.

## 👤 Auteur

**Evan Dynak**
* **Email :** evan.dynak@bbox.fr
* **Site Web :** [Cliquez ici](https://website.evandynak.me/)

---
*Fait avec ❤️ et TypeScript.*