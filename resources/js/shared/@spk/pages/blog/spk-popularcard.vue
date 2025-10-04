<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  card: Object,
})
</script>

<template>
  <div class="card custom-card overlay-card blog-card text-fixed-white">
    <BaseImg :src="card.imgSrc" class="card-img" alt="..." />
    <div class="card-img-overlay d-flex flex-column p-0 over-content-bottom">
      <div class="card-footer border-top-0 text-center">
        <h6 class="fw-semibold mb-0 text-fixed-white">{{ card.title }}</h6>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
