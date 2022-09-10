<template>
  <ui-form ref="form">
    <ui-form-item :m="12">
      <Heading level="2" icon="user">
        Ficha de cliente
      </Heading>
    </ui-form-item>
    <ui-form-item :m="12" :d="4" label="Nombre">
      <ui-input v-model:value="data.name" />
    </ui-form-item>
    <ui-form-item :m="12" :d="4" label="Móvil">
      <ui-input v-model:value="data.phone" />
    </ui-form-item>
    <ui-form-item :m="12" :d="4" label="Correo">
      <ui-input type="email" v-model:value="data.email" />
    </ui-form-item>

    <ui-form-item :m="12">
      <Heading level="2">Dieta</Heading>
    </ui-form-item>
    <ui-form-item :m="12" :d="4" label="Proteínas">
      <ui-input type="number" v-model:value="data.proteins">
        <template #append>kcal</template>
      </ui-input>
    </ui-form-item>
    <ui-form-item :m="12" :d="4" label="Hidratos de carbono">
      <ui-input type="number" v-model:value="data.carbohydrates">
        <template #append>kcal</template>
      </ui-input>
    </ui-form-item>
    <ui-form-item :m="12" :d="4" label="Grasas">
      <ui-input type="number" v-model:value="data.fat">
        <template #append>kcal</template>
      </ui-input>
    </ui-form-item>
    <ui-form-item :m="12" label="Observaciones de la dieta">
      <ui-input type="textarea" rows="4" v-model:value="data.dietObservations" />
    </ui-form-item>

    <ui-form-item :m="12">
      <Heading level="2">
        Seguimiento semanal
      </Heading>
    </ui-form-item>
    <ui-form-item :m="12">
      <ui-button
        icon="plus"
        color="primary"
        class="mr-s mb-s"
        pill
        @click="addWeight"
      >
        Añadir peso
      </ui-button>
    </ui-form-item>
    <template v-for="(weight, i) of data.weights" :key="i">
      <ui-form-item
        :label="'Semana ' + (i + 1)"
        :m="12"
      >
        <div class="remove">

          <ui-input
            v-model:value="data.weights[i]"
            type="number"
          >
            <template #append>kg</template>
          </ui-input>
          <ui-button
            color="secondary"
            class="mb-s"
            pill
            @click="removeWeight(i)"
          >
            <ui-icon
              icon="minus"
              description="Eliminar perjudicado"
            />
          </ui-button>
        </div>
      </ui-form-item>
    </template>

    <ui-form-item :m="12" class="text-right">
      <ui-button
        icon="plus"
        @click="submit"
      >
        Generar plantilla
      </ui-button>
    </ui-form-item>      
  </ui-form>
</template>

<script setup lang="ts">
  import { reactive } from 'vue';
import Heading from '../../components/Heading.vue';
import { FileFormData } from '../types/FileFormData';

  const emit = defineEmits(['submit']);

  const data: FileFormData = reactive({
    name: '',
    phone: '',
    email: '',
    proteins: 0,
    carbohydrates: 0,
    fat: 0,
    dietObservations: '',
    weights: [0],
  })

  const submit = () => emit('submit', data);

  const addWeight = () => data.weights.push(0);
  const removeWeight = (index: number) => data.weights.splice(index, 1);
</script>

<style lang="scss" scoped>
  .remove {
    display: flex;
    align-items: center;

    & .ui-button {
      margin-left: 12px;
    }
  }
</style>