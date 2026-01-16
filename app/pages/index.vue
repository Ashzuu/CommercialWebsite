<script setup lang="ts">
  import Header from '~/components/Header.vue';
  import HomePageProps from "~/models/pages/HomePageProps";

  const manager:HomePageProps = new HomePageProps();
  provide('homePageManager', manager);


</script>

<template>
  <div id="home-page-container" class="simple-container">
    <Header/>
    <main>
      <div class="overlay-obscured"/>
      <div class="content-container">
        <section class="caroussel-home-section">
          <CircularMenu/>
        </section>
        <div class="content-home-container">
          <h1>{{ manager.Title }}</h1>
          <div class="buttons-container">
            <!-- Faire les boutons pour le "call-to-action" -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import url("~/assets/css/pages/main-page.css");
</style>