<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

// Reference to the lightbox instance
const lightbox = ref(null)

// Gallery items
const items = [
  {
    src: `${__BASE_PATH__}/images/media/media-40.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-40.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-41.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-41.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-42.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-42.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-43.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-43.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-44.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-44.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-45.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-45.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-46.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-46.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-60.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-60.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-26.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-26.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-32.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-32.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-30.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-30.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-31.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-31.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-46.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-46.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-59.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-59.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-61.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-61.jpg`,
    alt: 'alt',
  },
  {
    src: `${__BASE_PATH__}/images/media/media-42.jpg`,
    w: 500,
    h: 320,
    thumbnail: `${__BASE_PATH__}/images/media/media-42.jpg`,
    alt: 'alt',
  },
]

// Lifecycle hooks
onMounted(() => {
  if (!lightbox.value) {
    lightbox.value = new PhotoSwipeLightbox({
      gallery: '#RandomUniqueId',
      children: 'a',
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.8,
      wheelToZoom: true,
    })
    lightbox.value.init()
  }
})

onUnmounted(() => {
  if (lightbox.value) {
    lightbox.value.destroy()
    lightbox.value = null
  }
})
</script>

<template>
  <div class="row" id="RandomUniqueId">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-body">
          <div class="row gy-4">
            <div
              class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
              v-for="(image, key) in items"
              :key="key"
            >
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
                  class="img-fluid rounded"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
