<script setup lang="ts">
  defineProps({
    variant: {
      type: String,
      required: false,
      default: null
    }
  })
</script>

<script lang="ts">
  const isMenuActive:Ref = ref(false);
  function toggleMenuActive() {
    isMenuActive.value = !isMenuActive.value;
  }

  function forceCloseMenu(){
    isMenuActive.value = false;
  }
</script>

<template>
  <header>
    <div id="header-logo-container">
      <LazyNuxtImg v-if="variant" src="/img/logo_dark.png" alt="Logo du site"/>
      <LazyNuxtImg v-else src="/img/logo_light.png" alt="Logo du site"/>
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
    <div id="header-menu-container-mobile" :class="variant ? variant : ''">
      <LazyIcon name="iconamoon:apps-bold" class="icon-menu-mobile" @click="toggleMenuActive"/>
      <menu class="list-nav-bar" :class="isMenuActive ? 'opened' : ''">
        <li class="element">
          <RouterLink active-class="active-icon" class="link-element" to="/" @click="forceCloseMenu">
            <LazyIcon class="icon-mobile" name="iconamoon:home-light" />
          </RouterLink>
        </li>
        <li class="element">
          <RouterLink active-class="active-icon" class="link-element" to="/processus" @click="forceCloseMenu">
            <LazyIcon class="icon-mobile" name="iconamoon:synchronize-light" />
          </RouterLink>
        </li>
        <li class="element">
          <RouterLink active-class="active-icon" class="link-element" to="/contact" @click="forceCloseMenu">
            <LazyIcon class="icon-mobile" name="iconamoon:phone-light" />
          </RouterLink>
        </li>
      </menu>
    </div>
  </header>
</template>

<style scoped>
@import url("~/assets/css/components/header.css");
</style>