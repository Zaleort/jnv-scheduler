<template>
  <div class="previewer__container">
    <canvas v-html="canvas" />
  </div>
</template>

<script setup lang="ts">
interface PreviewerProps {
  canvas?: HTMLCanvasElement;
}

const props = defineProps<PreviewerProps>();
</script>