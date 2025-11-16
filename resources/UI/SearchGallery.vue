<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { onMounted, onUnmounted } from 'vue'
import 'photoswipe/style.css'

const items = [
  {
    src: `${__BASE_PATH__}/images/media/media-40.jpg`,
    w: 600,
    h: 400,
    thumbnail: `${__BASE_PATH__}/images/media/media-40.jpg`,
    alt: 'alt',
    title: 'Tech Gadgets',
    subTitle: 'Innovative Marvels',
    companyLogo: `${__BASE_PATH__}/images/company-logos/6.png`,
  },
  {
    src: `${__BASE_PATH__}/images/media/media-41.jpg`,
    w: 600,
    h: 400,
    thumbnail: `${__BASE_PATH__}/images/media/media-41.jpg`,
    alt: 'alt',
    title: 'Healthy Recipes',
    subTitle: 'Nutrient Nourish',
    companyLogo: `${__BASE_PATH__}/images/company-logos/2.png`,
  },
  {
    src: `${__BASE_PATH__}/images/media/media-42.jpg`,
    w: 600,
    h: 400,
    thumbnail: `${__BASE_PATH__}/images/media/media-42.jpg`,
    alt: 'alt',
    title: 'Travel Explorer',
    subTitle: 'Global Wander',
    companyLogo: `${__BASE_PATH__}/images/company-logos/4.png`,
  },
  {
    src: `${__BASE_PATH__}/images/media/media-43.jpg`,
    w: 600,
    h: 400,
    thumbnail: `${__BASE_PATH__}/images/media/media-43.jpg`,
    alt: 'alt',
    title: 'Fashion Finds',
    subTitle: 'Chic Styles',
    companyLogo: `${__BASE_PATH__}/images/company-logos/5.png`,
  },
  {
    src: `${__BASE_PATH__}/images/media/media-44.jpg`,
    w: 600,
    h: 400,
    thumbnail: `${__BASE_PATH__}/images/media/media-44.jpg`,
    alt: 'alt',
    title: 'Nature Photography',
    subTitle: 'Wild Beauty',
    companyLogo: `${__BASE_PATH__}/images/company-logos/6.png`,
  },
  {
    src: `${__BASE_PATH__}/images/media/media-45.jpg`,
    w: 600,
    h: 400,
    thumbnail: `${__BASE_PATH__}/images/media/media-45.jpg`,
    alt: 'alt',
    title: 'Future Tales',
    subTitle: 'Innovative Marvels',
    companyLogo: `${__BASE_PATH__}/images/company-logos/7.png`,
  },
  {
    src: `${__BASE_PATH__}/images/media/media-46.jpg`,
    w: 600,
    h: 400,
    thumbnail: `${__BASE_PATH__}/images/media/media-46.jpg`,
    alt: 'alt',
    title: 'Science Fiction Books',
    subTitle: 'Future Tales',
    companyLogo: `${__BASE_PATH__}/images/company-logos/8.png`,
  },
  {
    src: `${__BASE_PATH__}/images/media/media-60.jpg`,
    w: 600,
    h: 400,
    thumbnail: `${__BASE_PATH__}/images/media/media-60.jpg`,
    alt: 'alt',
    title: 'Fitness Fanatics',
    subTitle: 'Active Vibes',
    companyLogo: `${__BASE_PATH__}/images/company-logos/9.png`,
  },
]

let lightbox = null

onMounted(() => {
  if (!lightbox) {
    lightbox = new PhotoSwipeLightbox({
      gallery: '#RandomUniqueId',
      children: 'a',
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.8,
      wheelToZoom: true,
      zoomTitle: 'Zoom',
    })
    lightbox.init()
  }
})

onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy()
    lightbox = null
  }
})
</script>

<template>
  <div id="RandomUniqueId" class="row">
    <div v-for="(image, key) in items" :key="key" class="col-lg-3 col-md-3 col-sm-6 col-12">
      <a
        :href="image.src"
        class="glightbox card search-images-card"
        rel="noreferrer"
        data-gallery="gallery1"
        target="_blank"
        :data-pswp-width="image.w"
        :data-pswp-height="image.h"
      >
        <img
          :src="image.thumbnail"
          alt="image"
          style="width: 100%; border-radius: 0.25rem; overflow: hidden"
        >
        <div class="p-2">
          <div class="d-flex align-items-center gap-1">
            <div class="avatar avatar-xs">
              <img :src="image.companyLogo" alt="">
            </div>
            <div class="figure-caption fs-13 fw-medium text-default">{{ image.title }}</div>
          </div>
          <div class="fs-12 text-default">{{ image.subTitle }}</div>
        </div>
      </a>
    </div>
    <div class="col-xl-12 mb-4">
      <button class="btn btn-info-light btn-loader mx-auto">
        <span class="me-2">Loading</span>
        <span class="loading"><i class="ri-loader-4-line fs-16" /></span>
      </button>
    </div>
  </div>
</template>
