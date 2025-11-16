<script lang="ts" setup>
// Swiper modules
import {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  EffectFade,
  EffectFlip,
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

import 'swiper/swiper-bundle.css'

// Props
const props = defineProps<{
  swiperItems: any[]
  swiperClass?: string
  swiperSildeClass?: string
}>()

// Thumbs (optional)
const thumbsSwiper = ref(null)
function setThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper
}

// Custom pagination
const customPagination = {
  clickable: true,
  renderBullet: (index: number, className: string) => {
    return `<span class="${className}">${index + 1}</span>`
  },
}

// Swiper modules array
const modules = [
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Keyboard,
  EffectCube,
  EffectFade,
  EffectCoverflow,
  EffectFlip,
  FreeMode,
  Thumbs,
]
</script>

<template>
  <Swiper :class="swiperClass" :pagination="customPagination" :navigation="true" :modules="modules">
    <SwiperSlide v-for="(item, index) in swiperItems" :key="index" :class="swiperSildeClass">
      <slot :card="item" :index="index" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped></style>
