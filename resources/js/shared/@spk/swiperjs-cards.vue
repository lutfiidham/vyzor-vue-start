<script lang="ts" setup>
import { ref, defineProps, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

// Swiper modules
import {
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
    Thumbs
} from 'swiper/modules'

// Props
const props = defineProps<{
    swiperItems: any[]
    swiperClass?: string
    swiperSildeClass?: string
}>()

// Thumbs (optional)
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper
}

// Custom pagination
const customPagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
        return `<span class="${className}">${index + 1}</span>`
    }
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
    Thumbs
]
</script>

<template>
    <swiper :class="swiperClass" :pagination="customPagination" :navigation="true" :modules="modules">
        <swiper-slide v-for="(item, index) in swiperItems" :key="index" :class="swiperSildeClass">
            <slot :card="item" :index="index" />
        </swiper-slide>
    </swiper>
</template>

<style scoped></style>
