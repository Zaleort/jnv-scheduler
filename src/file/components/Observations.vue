<template>
  <div class="observations">
    <h3 class="observations__title">Observaciones</h3>
    <div v-html="nl2br(observations || '')" class="observations__content">
    </div>
  </div>
</template>

<script setup lang="ts">
  import { nl2br } from '@/lib/util';

  interface ObservationsProps {
    observations?: string;
  }

  defineProps<ObservationsProps>();
</script>