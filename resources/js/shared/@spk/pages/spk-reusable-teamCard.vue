<script setup>
import BaseImg from '../../../components/Baseimage/BaseImg.vue'

defineProps({
  card: Object,
})
</script>
<template>
  <div class="card custom-card">
    <BaseImg :src="card.imgSrc" class="card-img-top" alt="..." />
    <div class="card-body text-center">
      <h6 class="fw-semibold mb-0">
        {{ card.name }}
      </h6>
      <span class="text-muted fs-13">{{ card.role }}</span>
      <div class="btn-list mt-3">
        <button class="btn btn-light btn-icon rounded-circle border">
          <i class="ri-facebook-circle-fill lh-1"></i>
        </button>
        <button class="btn btn-light btn-icon rounded-circle border">
          <i class="ri-twitter-x-fill lh-1"></i>
        </button>
        <button class="btn btn-light btn-icon rounded-circle border">
          <i class="ri-linkedin-box-fill lh-1"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
