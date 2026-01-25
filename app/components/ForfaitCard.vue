<script setup lang="ts">
  defineProps({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    features: {
      type: Array as () => string[],
      required: true,
    }
  })
</script>

<template>
  <div class="card-tarification">
    <p class="forfait-indicator-subtitle">Forfait</p>
    <h3 class="forfait-indicator-title">{{name}}</h3>
    <ul class="forfait-advantages-list">
      <li v-for="(feature, index) in features" :key="index" class="forfait-indicateur-feature">{{feature}}</li>
    </ul>
    <div class="little-indication-price-container">
      <p class="little-indication-price">à partir de</p>
      <p class="indication-price">{{ price }}€</p>
    </div>
  </div>

</template>

<style scoped>
@import url("~/assets/css/components/forfait-card.css");
</style>