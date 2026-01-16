<script setup lang="ts">
  import {ButtonType} from "~/models/enum/ButtonType";
  defineProps({
    label: {
      type: String,
      required: true,
    },
    nameRoute: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
    buttonType: {
      type: String,
      required: false,
      default: ButtonType.PRIMARY,
    }
  });
</script>

<template>
  <RouterLink class="btn" :class="buttonType" :to=nameRoute>
    <span>{{label}}</span><Icon v-if="icon" :name="icon"/>
  </RouterLink>
</template>

<style scoped>
  .btn {
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;
    font-size: 30px;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
  }

  .btn:visited {
    color: white;
    text-decoration: none;
  }

  .prim {
    background-color: var(--primary-color);
  }

  .second {
    background-color: var(--secondary-color);
  }

  .outl {
    background-color: transparent;
    border: 1px solid var(--border-color);
    color: var(--border-color);
  }

  .ghost {

  }


</style>