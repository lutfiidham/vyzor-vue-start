<template>
  <li class="header-element header-fullscreen">
    <a @click="toggleFullScreen()" href="javascript:void(0);" class="header-link">
      <svg
        v-if="!isFullScreen"
        xmlns="http://www.w3.org/2000/svg"
        class="full-screen-open header-link-icon d-block"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <rect x="48" y="48" width="160" height="160" opacity="0.2"></rect>
        <polyline
          points="168 48 208 48 208 88"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <polyline
          points="88 208 48 208 48 168"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <polyline
          points="208 168 208 208 168 208"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <polyline
          points="48 88 48 48 88 48"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
      </svg>
      <svg
        v-if="isFullScreen"
        xmlns="http://www.w3.org/2000/svg"
        class="full-screen-close header-link-icon d-block"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <rect x="32" y="32" width="192" height="192" rx="16" opacity="0.2"></rect>
        <polyline
          points="160 48 208 48 208 96"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <line
          x1="144"
          y1="112"
          x2="208"
          y2="48"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <polyline
          points="96 208 48 208 48 160"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
        <line
          x1="112"
          y1="144"
          x2="48"
          y2="208"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
    </a>
  </li>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['fullscreen-changed'])

const isFullScreen = ref(false)

const toggleFullScreen = () => {
  const element = document.documentElement
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    element.requestFullscreen()
  }
}

const fullscreenChanged = () => {
  isFullScreen.value = !!document.fullscreenElement
  emit('fullscreen-changed', isFullScreen.value)
}

onMounted(() => {
  document.addEventListener('fullscreenchange', fullscreenChanged, { passive: true })
})

onUnmounted(() => {
  document.removeEventListener('fullscreenchange', fullscreenChanged)
})
</script>