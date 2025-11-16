<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  Color: String,
  Title: String,
  Navigate: [String, URL],
  badges: Object,
  images: Object,
  Class: String,
})
</script>

<template>
  <div :class="`card border border-${Color} custom-card`">
    <div class="card-body">
      <p class="fs-14 fw-medium mb-2 lh-1">
        {{ Title }}
        <a :href="Navigate"><i :class="`bi bi-plus-square float-end text-${Class} fs-18`" /></a>
      </p>
      <div class="d-flex flex-wrap gap-2 mb-4">
        <span v-for="(badge, index) in badges" :key="index" :class="`badge ${badge.className}`">{{
          badge.text
        }}</span>
      </div>
      <div class="avatar-list-stacked">
        <span v-for="(src, index) in images" :key="index" class="avatar avatar-sm avatar-rounded">
          <BaseImg :src="src" alt="img" />
        </span>
      </div>
    </div>
  </div>
</template>
