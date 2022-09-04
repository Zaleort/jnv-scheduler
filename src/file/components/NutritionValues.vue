<template>
  <table class="table nutrition-values">
    <thead>
      <tr>
        <th class="green" align="center">PROTEÍNAS</th>
        <th class="orange" align="center">HIDRATOS DE CARBONO</th>
        <th class="red" align="center">GRASAS</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td align="center">{{ proteins }} GRAMOS</td>
        <td align="center">{{ carbohydrates }} GRAMOS</td>
        <td align="center">{{ fat }} GRAMOS</td>
      </tr>
      <tr>
        <td align="center">{{ proteinCalories }} KCAL</td>
        <td align="center">{{ carbohydratesCalories }} KCAL</td>
        <td align="center">{{ fatCalories }} KCAL</td>
      </tr>
      <tr>
        <td></td>
        <td align="center">
          <strong>TOTAL</strong> {{ totalCalories }} KCAL
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface NutritionValues {
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