<template>
  <img
    :src="imageUrl"
    :alt="alt"
    :class="class"
    :height="height"
    :width="width"
    :id="id"
    v-bind="$attrs"
    :style="style"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  class: { type: String, default: '' },
  id: { type: String, default: '' },
  height: { type: [String, Number], default: null },
  width: { type: [String, Number], default: null },
  style: { type: String, default: '' },
})

// Check if src is external
const isExternalUrl = computed(() => /^https?:\/\//.test(props.src))

// Use the base path defined in Vite config
const imageUrl = computed(() => {
  const basePathValue = !isExternalUrl.value ? __BASE_PATH__ : ''
  return `${basePathValue}${props.src}`
})
</script>
