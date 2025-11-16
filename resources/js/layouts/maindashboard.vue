<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { switcherStore } from '../../stores/switcher'
import BackToTop from '../components/backtotop/backtotop.vue'
import Footer from '../components/footer/footer.vue'
import Header from '../components/header/header.vue'
import Sidebar from '../components/sidebar/sidebar.vue'
import Switcher from '../components/switcher/switcher.vue'

// Store
const switcher = switcherStore()

// Computed class based on page style
const customClass = computed(() => {
  return switcher.pageStyles === 'flat' ? 'main-body-container' : ''
})

// Reference for the scroll progress bar
const progressRef = ref(null) // no need for the type, Vue will infer it

// Scroll handler for updating progress
function handleScroll() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

  if (scrollHeight === 0) {
    return
  }

  const scrollPercent = (scrollTop / scrollHeight) * 100

  if (progressRef.value) {
    progressRef.value.style.width = `${scrollPercent}%`
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  switcher.retrieveFromLocalStorage()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template lang="html">
  <div ref="progressRef" class="progress-top-bar" />
  <Switcher />
  <div class="page">
    <Header />
    <Sidebar />
    <!-- Start::app-content -->
    <div class="main-content app-content">
      <div class="container-fluid page-container" :class="[customClass]">
        <slot />
      </div>
    </div>
    <!-- End::app-content -->
    <Footer />
  </div>
  <BackToTop />
</template>

<style lang="scss">
/* Add your styles here */
</style>
