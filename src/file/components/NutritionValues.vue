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
        <td align="center">{{ formatNumber(proteinMass) }} GRAMOS</td>
        <td align="center">{{ formatNumber(carbohydratesMass) }} GRAMOS</td>
        <td align="center">{{ formatNumber(fatMass) }} GRAMOS</td>
      </tr>
      <tr>
        <td align="center">{{ formatNumber(proteins) }} KCAL</td>
        <td align="center">{{ formatNumber(carbohydrates) }} KCAL</td>
        <td align="center">{{ formatNumber(fat) }} KCAL</td>
      </tr>
      <tr>
        <td></td>
        <td align="center">
          <strong>TOTAL</strong> {{ formatNumber(total) }} KCAL
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { formatNumber } from '@/lib/util';

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