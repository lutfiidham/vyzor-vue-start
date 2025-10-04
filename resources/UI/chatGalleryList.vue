<script setup>
import { onMounted, onUnmounted } from 'vue';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

let lightbox = null;

const items = [
    { src: `${__BASE_PATH__}/images/media/media-40.jpg`, w: 500, h: 320, thumbnail: `${__BASE_PATH__}/images/media/media-40.jpg`, alt: 'alt' },
    { src: `${__BASE_PATH__}/images/media/media-41.jpg`, w: 500, h: 320, thumbnail: `${__BASE_PATH__}/images/media/media-41.jpg`, alt: 'alt' },
    { src: `${__BASE_PATH__}/images/media/media-42.jpg`, w: 500, h: 320, thumbnail: `${__BASE_PATH__}/images/media/media-42.jpg`, alt: 'alt' },
    { src: `${__BASE_PATH__}/images/media/media-43.jpg`, w: 500, h: 320, thumbnail: `${__BASE_PATH__}/images/media/media-43.jpg`, alt: 'alt' },
    { src: `${__BASE_PATH__}/images/media/media-44.jpg`, w: 500, h: 320, thumbnail: `${__BASE_PATH__}/images/media/media-44.jpg`, alt: 'alt' },
    { src: `${__BASE_PATH__}/images/media/media-45.jpg`, w: 500, h: 320, thumbnail: `${__BASE_PATH__}/images/media/media-45.jpg`, alt: 'alt' },
    { src: `${__BASE_PATH__}/images/media/media-46.jpg`, w: 500, h: 320, thumbnail: `${__BASE_PATH__}/images/media/media-46.jpg`, alt: 'alt' },
    { src: `${__BASE_PATH__}/images/media/media-60.jpg`, w: 500, h: 320, thumbnail: `${__BASE_PATH__}/images/media/media-60.jpg`, alt: 'alt' },
    { src: `${__BASE_PATH__}/images/media/media-61.jpg`, w: 500, h: 320, thumbnail: `${__BASE_PATH__}/images/media/media-61.jpg`, alt: 'alt' },
];

onMounted(() => {
    if (!lightbox) {
        lightbox = new PhotoSwipeLightbox({
            gallery: '#RandomUniqueId',
            children: 'a',
            pswpModule: () => import('photoswipe'),
            bgOpacity: 0.8,
            wheelToZoom: true,
        });
        lightbox.init();
    }
});

onUnmounted(() => {
    if (lightbox) {
        lightbox.destroy();
        lightbox = null;
    }
});
</script>


<template>
    <div class="row" id="RandomUniqueId">
        <div class="col-lg-4 col-md-4 col-sm-6 col-12 px-0" v-for="(image, key) in items" :key="key">
            <a :href="image.src" class="glightbox card" :data-pswp-width="image.w" :data-pswp-height="image.h"
                rel="noreferrer" data-gallery="gallery1" target="_blank">
                <img :src="image.thumbnail" alt="" style="width:100%; border-radius:0.25rem;overflow:hidden">
            </a>
        </div>
    </div>
</template>
