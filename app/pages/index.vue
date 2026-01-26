<script setup lang="ts">
  import Header from '~/components/Header.vue';
  import HomePageProps from "~/models/pages/HomePageProps";
  import type {Reactive} from "vue";
  import {ButtonType} from "~/models/enum/ButtonType";

  const manager:Reactive<HomePageProps> = reactive(new HomePageProps());
  provide('homePageManager', manager);


</script>

<template>
  <div id="home-page-container" class="simple-container">
    <Header/>
    <main :style="{ backgroundImage: `url(${manager.ImageUrl})` }" loading="lazy">
      <div class="overlay-obscured"/>
      <div class="content-container">
        <section class="caroussel-home-section">
          <CircularMenu/>
        </section>
        <div class="content-home-container">
          <LazyIcon v-if="manager.PreviousLabel" @click="manager.ChangeCurrentSelection(manager.Id - 1)" class="arrow-left-icon" name="iconamoon:arrow-left-6-circle-light"/>
          <LazyIcon v-if="manager.NextLabel" @click="manager.ChangeCurrentSelection(manager.Id + 1)" class="arrow-right-icon" name="iconamoon:arrow-right-6-circle-light"/>
          <h1>{{ manager.Title }}</h1>
          <p class="content-home-description">{{ manager.Description }}</p>
          <div class="buttons-container">
            <Button label="Découvrir" name-route="/processus" icon="ei:arrow-right" :button-type="ButtonType.PRIMARY"/>
            <Button label="Me contacter" name-route="/contact" icon="solar:phone-linear" :button-type="ButtonType.OUTLINED"/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
@import url("~/assets/css/pages/main-page.css");
</style>