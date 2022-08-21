<template>
  <div class="customer-data">
    <span>Nombre: {{ name }}</span>
    <span>Móvil: {{ phone }}</span>
    <span>Correo: {{ email }}</span>
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