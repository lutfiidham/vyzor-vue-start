<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { onMounted, onUnmounted } from 'vue'
import 'photoswipe/style.css'

let lightbox = null

const items = [
  {
    src: `${__BASE_PATH__}/images/media/media-40.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-40.jpg`,
    alt: 'Image 1',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-41.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-41.jpg`,
    alt: 'Image 2',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-42.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-42.jpg`,
    alt: 'Image 3',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-43.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-43.jpg`,
    alt: 'Image 4',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-44.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-44.jpg`,
    alt: 'Image 5',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-45.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-45.jpg`,
    alt: 'Image 6',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-46.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-46.jpg`,
    alt: 'Image 7',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-60.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-60.jpg`,
    alt: 'Image 8',
  },
]

onMounted(() => {
  if (!lightbox) {
    lightbox = new PhotoSwipeLightbox({
      gallery: '#RandomUniqueId',
      children: 'a',
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.8,
      wheelToZoom: true,
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
  <div id="RandomUniqueId" class="row gy-4">
    <div v-for="(image, key) in items" :key="key" class="col-lg-3 col-md-4 col-sm-6 col-12">
      <a
        :href="image.src"
        class="glightbox"
        :data-pswp-width="image.w"
        :data-pswp-height="image.h"
        rel="noreferrer"
        data-gallery="gallery1"
        target="_blank"
      >
        <img
          :src="image.thumbnail"
          alt=""
          style="width: 100%; border-radius: 0.25rem; overflow: hidden"
        >
      </a>
    </div>
  </div>
</template>
