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
      <LazyNuxtImg src="/img/logo.png" alt="Logo du site"/>
    </div>
    <div id="header-menu-container" >
      <nav class="nav-bar">
        <ul class="list-nav-bar" :class="variant ? variant : ''">
          <li class="element"><RouterLink class="link-element" active-class="active" to="/">Accueil</RouterLink></li>
          <li class="element"><RouterLink class="link-element" active-class="active" to="/processus">Processus création d'un site</RouterLink></li>
          <li class="element"><RouterLink class="link-element" active-class="active" to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>
    </div>
    <div id="header-menu-container-mobile">
      <LazyIcon name="iconamoon:apps-bold" class="icon-menu-mobile"/>
      <menu class="list-nav-bar" :class="variant ? variant : ''">
        <li class="element">
          <RouterLink class="link-element" to="/">
            <LazyIcon class="icon-mobile" name="iconamoon:home-light" />
            Accueil
          </RouterLink>
        </li>
        <li class="element">
          <RouterLink class="link-element" to="/processus">
            <LazyIcon class="icon-mobile" name="iconamoon:settings-light" />
            Processus création d'un site
          </RouterLink>
        </li>
        <li class="element">
          <RouterLink class="link-element" to="/contact">
            <LazyIcon class="icon-mobile" name="iconamoon:phone-light" />
            Contact
          </RouterLink>
        </li>
      </menu>
    </div>
  </header>
</template>

<style scoped>
@import url("~/assets/css/components/header.css");
</style>