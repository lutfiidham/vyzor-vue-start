<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.body.classList.add('error-1')
})

onUnmounted(() => {
  document.body.classList.remove('error-1')
})
</script>

<template>
  <Customswitcher />
  <slot />
</template>

<style scoped></style>
