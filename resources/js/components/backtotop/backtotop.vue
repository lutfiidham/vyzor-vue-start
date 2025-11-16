<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const scrollToTop = ref(null)

function onScroll() {
  if (scrollToTop.value) {
    if (window.scrollY > 100) {
      scrollToTop.value.style.display = 'flex'
    }
    else {
      scrollToTop.value.style.display = 'none'
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)

  if (scrollToTop.value) {
    scrollToTop.value.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)

  if (scrollToTop.value) {
    scrollToTop.value.onclick = null // cleanup click handler
  }
})
</script>

<template>
  <div ref="scrollToTop" class="scrollToTop btn btn-primary" style="display: flex">
    <span class="arrow lh-1"><i class="ti ti-arrow-big-up fs-18" /></span>
  </div>
</template>
