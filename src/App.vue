<template>
  <div>
    <FileView ref="fileRef"/>
    <Previewer :canvas="canvas" />
    <button @click="createCanvas">Generar</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import html2canvas from 'html2canvas';
import FileView from './file/views/FileView.vue';
import Previewer from './previewer/components/Previewer.vue';

const fileRef = ref();
const canvas = ref<HTMLCanvasElement>();
const createCanvas = async () => {
  if (!fileRef.value) return;
  console.log(fileRef.value.$el);
  canvas.value = await html2canvas(fileRef.value.$el);
}
</script>
