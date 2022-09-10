<template>
  <div class="list-block">
    <h3 class="list-block__title">Peso semanal</h3>
    <ul class="list-block__list">
      <li v-for="(weight, i) of weights" :key="i">
        {{ `S${i}: ${formatNumber(weight)}kg` }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '@/lib/util';

interface WeeklyWeightProps {
  weights: number[];
}

defineProps<WeeklyWeightProps>()
</script>