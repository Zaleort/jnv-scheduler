<template>
  <div class="diet-schedule">
    <h2 class="file__subheading">DIETA</h2>

    <NutritionValues v-bind="nutritionValues" />
    <Observations :observations="observations" />
  </div>
</template>

<script setup lang="ts">
  import NutritionValues from './NutritionValues.vue';
  import Observations from './Observations.vue';

  interface DietScheduleProps {
    observations?: string;
    nutritionValues: {
      proteins: number;
      carbohydrates: number;
      fat: number;
    }
  }

  defineProps<DietScheduleProps>()
</script>
