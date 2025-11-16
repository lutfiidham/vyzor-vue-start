<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  card: Object,
})
</script>

<template>
  <div class="card custom-card border-0 shadow-none mb-0">
    <div class="card-body p-0">
      <div class="row g-2">
        <div v-for="(src, index) in card.images" :key="index" :class="`col-${src.class}`">
          <BaseImg :src="src.img" alt="" class="nft-featuredcollect-image rounded" />
        </div>
      </div>
    </div>
    <div class="card-footer border-top-0 pb-0">
      <div class="d-flex align-items-center">
        <div class="d-flex align-items-center flex-fill">
          <div class="me-2 lh-1">
            <span class="avatar avatar-md avatar-rounded">
              <BaseImg :src="card.useravatar" alt="" />
              <a href="javascript:void(0);" class="badge rounded-pill bg-primary avatar-badge"><i class="ri-check-line align-mmiddle" /></a>
            </span>
          </div>
          <div>
            <p class="mb-0 fw-semibold">
              <a href="javascript:void(0);">{{ card.username }}</a>
            </p>
            <p class="text-muted fs-12 mb-0">
              {{ card.userusername }}
            </p>
          </div>
        </div>
        <div class="dropdown dropup">
          <a
            href="javascript:void(0);"
            class="btn btn-icon btn-sm btn-primary-light"
            data-bs-toggle="dropdown"
          >
            <i class="ri-more-2-fill" />
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
