<script setup>
import { Link } from '@inertiajs/vue3'
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'
const baseUrl = __BASE_PATH__
defineProps({
  card: Object,
})
</script>

<template>
  <div class="card custom-card border-0 blog-card shadow-none">
    <div class="card-body p-0">
      <Link :href="`${baseUrl}/demo/pages/blog/blog-details`" class="stretched-link"></Link>
      <div class="blog-image mb-3">
        <BaseImg :src="card.image" class="card-img" alt="..." />
      </div>
      <span class="d-block mb-1 text-primary blog-category">{{ card.title }}</span>
      <h6 class="mb-0 blog-title lh-base">{{ card.desc }}</h6>
    </div>
  </div>
</template>

<style scoped></style>
