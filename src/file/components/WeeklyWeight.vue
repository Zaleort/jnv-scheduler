<template>
  <div class="weekly-weight">
    <span v-for="(weight, i) of weights" :key="i">
      {{ `S${i}: ${weight}kg` }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface WeeklyWeightProps {
  weights: number[];
}

defineProps<WeeklyWeightProps>()
</script>