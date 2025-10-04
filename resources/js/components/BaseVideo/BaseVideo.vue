<!-- components/BaseVideo.vue -->
<template>
  <video
    :src="videoUrl"
    :alt="alt"
    :class="class"
    :id="id"
    :height="height"
    :width="width"
    v-bind="$attrs"
    :style="style"
    :controls="false"
  >
    Your browser does not support the video tag.
  </video>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  height: {
    type: [String, Number],
    default: null,
  },
  width: {
    type: [String, Number],
    default: null,
  },
  style: {
    type: String,
    default: '',
  },
})

// Check if src is external
const isExternalUrl = /^https?:\/\//.test(props.src)

// Get basePath from env or config
const basePath = __BASE_PATH__

// Final computed video URL
const basePathValue = !isExternalUrl && process.env.NODE_ENV === 'production' ? basePath : ''
const videoUrl = `${basePathValue}${props.src}`
</script>
