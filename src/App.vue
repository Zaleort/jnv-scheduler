<template>
  <div>
    <FileView ref="fileRef"/>
    <Previewer ref="previewerRef" :canvas="canvas" />
    <ui-button @click="createCanvas">Generar</ui-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import html2canvas from 'html2canvas';
import FileView from './file/views/FileView.vue';
import Previewer from './previewer/components/Previewer.vue';

const fileRef = ref();
const previewerRef = ref();

const canvas = ref<HTMLCanvasElement>();
const createCanvas = async () => {
  if (!fileRef.value) return;
  canvas.value = await html2canvas(fileRef.value.$el, { canvas: previewerRef.value.canvasRef });
}
</script>
