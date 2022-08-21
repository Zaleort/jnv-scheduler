<template>
  <div class="nutrition-values">
    
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface NutritionValues {
  proteins: number;
  carbohydrates: number;
  fat: number;
}

const props = withDefaults(defineProps<NutritionValues>(), {
  proteins: 0,
  carbohydrates: 0,
  fat: 0,
});

const proteinCalories = computed(() => props.proteins * 4);
const carbohydratesCalories = computed(() => props.carbohydrates * 4);
const fatCalories = computed(() => props.fat * 9);

const totalCalories = computed(() => proteinCalories.value + fatCalories.value + carbohydratesCalories.value);
</script>