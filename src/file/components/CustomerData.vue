<template>
  <div class="list-block">
    <h3 class="list-block__title">Ficha cliente</h3>
    <ul class="list-block__list">
      <li>
        <strong>NOMBRE:</strong> {{ name }}
      </li>
      <li>
        <strong>MÓVIL</strong>: {{ phone }}
      </li>
      <li>
        <strong>CORREO</strong>: {{ email }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface CustomerDataProps {
  name: string;
  phone: string;
  email: string;
}

defineProps<CustomerDataProps>()
</script>