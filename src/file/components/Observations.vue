<template>
  <div class="observations">
    <h3 class="observations__title">Observaciones</h3>
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