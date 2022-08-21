<template>
  <div class="previewer__container">
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const canvasRef = ref();

defineExpose({
  canvasRef,
});
</script>