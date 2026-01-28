<script setup lang="ts">
  import {ButtonType} from "~/models/enum/ButtonType";

  defineProps({
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isPremium: {
      type: Boolean,
      default: false
    },
    features: {
      type: Array as () => string[],
      required: true,
    }
  })
</script>

<template>
  <div class="card-tarification" :class="{ 'premium-card': isPremium }">
    <div v-if="isPremium" class="badge-recommendation">Recommandé</div>

    <div class="card-header">
      <p class="forfait-indicator-subtitle">Forfait</p>
      <h3 class="forfait-indicator-title">{{ name }}</h3>

      <div class="little-indication-price-container">
        <p class="little-indication-price">à partir de</p>
        <p class="indication-price">{{ price }}€</p>
      </div>
    </div>

    <hr class="separator" />

    <ul class="forfait-advantages-list">
      <li v-for="(feature, index) in features" :key="index" class="forfait-indicateur-feature">
        <LazyIcon name="iconamoon:check-bold" class="check-icon" />
        {{ feature }}
      </li>
    </ul>

    <div class="card-footer">
      <Button
          label="Choisir ce forfait"
          name-route="/contact"
          :button-type="isPremium ? ButtonType.PRIMARY : ButtonType.OUTLINED"
          class="full-width-btn"
      />
    </div>
  </div>
</template>

<style scoped>
@import url("~/assets/css/components/forfait-card.css");
</style>