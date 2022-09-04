<template>
  <div class="list-block">
    <h2 class="list-block__title">Peso semanal</h2>
    <ul class="list-block__list">
      <li v-for="(weight, i) of weights" :key="i">
        {{ `S${i}: ${weight}kg` }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface WeeklyWeightProps {
  weights: number[];
}

defineProps<WeeklyWeightProps>()
</script>