<template>
  <div ref="galleryRef" class="gallery row g-3">
    <div v-for="(img, index) in images" :key="index" class="col-xl-3 col-md-4 col-sm-6">
      <a :href="img.url" :data-sub-html="img.subHtml">
        <img :src="img.thumb" alt="Image thumbnail" class="img-fluid rounded" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import lightGallery from 'lightgallery'

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

// Styles
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'

const galleryRef = ref(null)

const images = [
  {
    url: `${__BASE_PATH__}/images/media/media-25.jpg`,
    thumb: `${__BASE_PATH__}/images/media/media-25.jpg`,
    subHtml: `<h4>Description Bottom</h4><p>This is a description with a <a href='http://google.com' target='_blank'>link to Google</a>.</p>`,
  },
  {
    url: `${__BASE_PATH__}/images/media/media-26.jpg`,
    thumb: `${__BASE_PATH__}/images/media/media-26.jpg`,
    subHtml: `<h4>Description Right</h4><p>Custom description for right-positioned content with additional info and links.</p>`,
  },
  {
    url: `${__BASE_PATH__}/images/media/media-27.jpg`,
    thumb: `${__BASE_PATH__}/images/media/media-27.jpg`,
    subHtml: `<h4>Description Left</h4><p>Example content placed on the left of the image viewer.</p>`,
  },
  {
    url: `${__BASE_PATH__}/images/media/media-28.jpg`,
    thumb: `${__BASE_PATH__}/images/media/media-28.jpg`,
    subHtml: `<h4>Description Top</h4><p>More custom description content positioned at the top.</p>`,
  },
]

onMounted(() => {
  lightGallery(galleryRef.value, {
    plugins: [lgThumbnail, lgZoom],
    speed: 500,
    selector: 'a',
  })
})
</script>

<style scoped>
.gallery img {
  cursor: pointer;
  transition: transform 0.3s;
}

.gallery img:hover {
  transform: scale(1.05);
}
</style>
