<template>
  <ui-topbar color="black" justify="space-between">
    <div class="file-heading__logo">
      <img class="file-heading__logo" alt="JNV" :src="logo" />
    </div>    
  </ui-topbar>

  <ui-container>
    <ui-main>
        <FileView ref="fileRef"/>

        <ui-panel>
          <Previewer v-model:visibility="showPreviewer" :canvas="canvas" />

          <FileForm />
          <ui-button @click="createCanvas">Generar</ui-button>
        </ui-panel>

    </ui-main>
  </ui-container>
  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import logo from '@/assets/logo-cropped.png';
import html2canvas from 'html2canvas';
import FileView from './file/views/FileView.vue';
import Previewer from './previewer/components/Previewer.vue';
import FileForm from './file/components/FileForm.vue';

const fileRef = ref();
const showPreviewer = ref(false);
const canvas = ref<HTMLCanvasElement>();
const createCanvas = async () => {
  if (!fileRef.value) return;
  canvas.value = await html2canvas(fileRef.value.$el);
  showPreviewer.value = true;
}
</script>
