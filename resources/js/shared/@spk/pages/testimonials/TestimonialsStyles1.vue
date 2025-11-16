<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  card: Object,
})
</script>

<template>
  <div class="card custom-card mb-0">
    <div class="card-body p-5 pb-4">
      <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap">
        <h5 class="fw-semibold mb-0">
          {{ card.title }}
        </h5>
        <div class="text-warning fs-14 my-auto">
          <i v-for="(star, index) in card.stars" :key="index" :class="`ri-star-${star} me-1`" />
        </div>
      </div>
      <p class="mb-3 text-muted">
        {{ card.description }}
      </p>
      <div class="d-flex align-items-start justify-content-end gap-2">
        <div class="lh-1">
          <span class="avatar avatar-md avatar-rounded">
            <BaseImg :src="card.imgSrc" alt="" />
          </span>
        </div>
        <div>
          <span class="d-block fw-semibold">{{ card.name }}</span>
          <span class="text-muted fs-13">{{ card.role }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
