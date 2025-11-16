<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import BackToTop from '../components/backtotop/backtotop.vue'

const initialLoad = ref(false)

onMounted(() => {
  const html = document.querySelector('html')
  html.removeAttribute('data-page-style')
  html.removeAttribute('data-width')
  html.removeAttribute('data-menu-position')
  html.removeAttribute('data-header-position')
  html.removeAttribute('data-bg-img')
  html.style.removeProperty('--body-bg-rgb')
  html.style.removeProperty('--body-bg-rgb2')
  html.style.removeProperty('--light-rgb')
  html.style.removeProperty('--sidemenu-active-bgcolor')
  html.style.removeProperty('--form-control-bg')
  html.style.removeProperty('--input-border')

  console.log(html.style.removeProperty('--input-border'))

  document.body.classList.add('landing-body')
  initialLoad.value = true
})

onUnmounted(() => {
  document.body.classList.remove('landing-body')
  document.body.removeAttribute('style')
  initialLoad.value = false
})
</script>

<template>
  <div :class="initialLoad ? 'd-block' : 'd-none'">
    <Customswitcher />
    <slot />
    <BackToTop />
  </div>
</template>
