<template>
  <ui-dialog v-model:visibility="innerVisibility" fullscreen>
    <template #header>
      Previsualización
    </template>

    <img :src="imgUrl" alt="preview" class="previewer">

    <template #footer>
      <ui-button
        icon="download"
        class="ml-xs"
      >
        <a :href="imgUrl" download class="previewer__link">Descargar</a>
      </ui-button>

      <ui-button
        plain
        icon="xLarge"
        @click="close"
      >
        Cerrar
      </ui-button>
    </template>
  </ui-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface PreviewerProps {
  canvas?: HTMLCanvasElement;
  visibility?: boolean;
}

const props = defineProps<PreviewerProps>();
const emit = defineEmits(['update:visibility']);

const containerRef = ref<HTMLElement>();

const innerVisibility = computed({
  get: () => props.visibility,
  set: (val) => emit('update:visibility', val),
});

const imgUrl = ref('');
const getCanvasUrl = () => {
  if (!props.canvas) return;
  props.canvas.toBlob(blob => {
    if (!blob) return;
    imgUrl.value = URL.createObjectURL(blob);
  });
}

const close = () => emit('update:visibility', false);

watch(() => props.canvas, () => {
  if (!props.canvas) return;
  getCanvasUrl();
});

</script>
