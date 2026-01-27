<script setup lang="ts">
  import type HomePageProps from "~/models/pages/HomePageProps";
  import type {Reactive} from "vue";

  const manager:Reactive<HomePageProps> = inject("homePageManager");
</script>

<template>
  <div class="circular-menu">
    <span v-if="manager.PreviousLabel!=null" class="previous_element discret_element clickable_element" @click="manager.ChangeCurrentSelection(manager.Id-1)">{{manager.PreviousLabel}}</span>
    <span class="current_element">{{manager.Label}}</span>
    <span v-if="manager.NextLabel!=null" class="next_element discret_element clickable_element" @click="manager.ChangeCurrentSelection(manager.Id+1)">{{manager.NextLabel}}</span>
  </div>
</template>

<style scoped>
  @import url("~/assets/css/components/circular-menu.css");
</style>