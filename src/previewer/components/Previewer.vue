<template>
  <ui-dialog v-model:visibility="innerVisibility" fullscreen>
    <template #header>
      Previsualización
    </template>

    <div ref="containerRef" class="previewer__container">

    </div>

    <template #footer>
      <ui-button
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

const close = () => emit('update:visibility', false);

watch(() => props.canvas, () => {
  if (!containerRef.value || !props.canvas) return;
  containerRef.value.innerHTML = '';
  containerRef.value.appendChild(props.canvas);
});
</script>