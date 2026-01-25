<script setup lang="ts">
  defineProps({
    variant: {
      type: String,
      required: false,
      default: null
    }
  })
</script>

<template>
  <header>
    <div id="header-logo-container">
      <img src="/img/logo.png" alt="Logo du site">
    </div>
    <div id="header-menu-container" >
      <nav>
        <ul :class="variant ? variant : ''">
          <li><RouterLink active-class="active" to="/">Accueil</RouterLink></li>
          <li><RouterLink active-class="active" to="/processus">Processus création d'un site</RouterLink></li>
          <li><RouterLink active-class="active" to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
@import url("~/assets/css/components/header.css");
</style>