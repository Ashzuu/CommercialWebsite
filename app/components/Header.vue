<script setup lang="ts">

</script>

<template>
  <header>
    <div id="header-logo-container">
      <img src="/img/logo.png" alt="Logo du site">
    </div>
    <div id="header-menu-container">
      <nav>
        <ul>
          <li><RouterLink to="/">Accueil</RouterLink></li>
          <li><RouterLink to="/processus">Processus création d'un site</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import url("~/assets/css/components/header.css");
</style>