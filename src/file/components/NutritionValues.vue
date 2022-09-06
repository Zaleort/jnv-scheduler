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
        <td align="center">{{ proteinMass }} GRAMOS</td>
        <td align="center">{{ carbohydratesMass }} GRAMOS</td>
        <td align="center">{{ fatMass }} GRAMOS</td>
      </tr>
      <tr>
        <td align="center">{{ proteins }} KCAL</td>
        <td align="center">{{ carbohydrates }} KCAL</td>
        <td align="center">{{ fat }} KCAL</td>
      </tr>
      <tr>
        <td></td>
        <td align="center">
          <strong>TOTAL</strong> {{ total }} KCAL
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

const proteinMass = computed(() => props.proteins / 4);
const carbohydratesMass = computed(() => props.carbohydrates / 4);
const fatMass = computed(() => props.fat / 9);

const total = computed(() => props.proteins + props.fat + props.carbohydrates);
</script>