<script setup lang="ts">
  import type HomePageProps from "~/models/pages/HomePageProps";

  const manager:HomePageProps = inject("homePageManager");
</script>

<template>
  <div class="circular-menu">
    <span v-if="manager.PreviousLabel!=null" @click="manager.ChangeCurrentSelection(manager.Id-1)" class="previous_element discret_element">{{manager.PreviousLabel}}</span>
    <span class="current_element">{{manager.Label}}</span>
    <span v-if="manager.NextLabel!=null" @click="manager.ChangeCurrentSelection(manager.Id+1)" class="next_element discret_element">{{manager.NextLabel}}</span>
  </div>
</template>

<style scoped>
  @import url("~/assets/css/components/circular-menu.css");
</style>