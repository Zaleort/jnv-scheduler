<template>
  <div class="observations">
    <h2 class="observations__title">Observaciones</h2>
    <div class="observations__content">
      {{ observations }}
    </div>
  </div>
</template>

<script setup lang="ts">
  interface ObservationsProps {
    observations?: string;
  }

  defineProps<ObservationsProps>();
</script>