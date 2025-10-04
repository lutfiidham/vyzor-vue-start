<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  color: String,
  Customclass: String,
  Imgsrc: String,
  Title: String,
  Textclass: String,
  Value: String,
  Class: String,
  Navigate: [String, URL],
})
</script>

<template>
  <div :class="`card custom-card card-bg-${color} ${Customclass}`">
    <div class="card-body">
      <div class="d-flex align-items-center w-100">
        <div class="me-2">
          <span class="avatar avatar-rounded">
            <BaseImg :src="Imgsrc" alt="img" />
          </span>
        </div>
        <div class="">
          <div class="fs-15 fw-medium">{{ Title }}</div>
          <p :class="`mb-0 text-${Textclass} op-7 fs-12`">{{ Value }}</p>
        </div>
        <div class="ms-auto">
          <a :href="Navigate" :class="`text-${Class}`"><i class="bi bi-three-dots-vertical"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>
