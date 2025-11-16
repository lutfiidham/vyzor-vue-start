<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  item: Object,
})
</script>

<template>
  <div class="card custom-card">
    <div class="card-header">
      <div class="card-title">
        {{ item.title }}
      </div>
    </div>
    <div class="card-body">
      <div class="d-flex align-items-center justify-content-between gap-2">
        <div class="d-flex align-items-center gap-2">
          <div class="lh-1">
            <span class="avatar avatar-rounded">
              <BaseImg :src="item.imgSrc" alt="" />
            </span>
          </div>
          <div>
            <span class="d-block text-muted fs-12 fw-normal">{{ item.available }}</span>
            <span class="fw-medium">{{ item.value }}</span>
          </div>
        </div>
        <div>
          <span class="fw-medium">{{ item.price }}</span>
          <span class="d-block text-muted fs-12 fw-normal">In USD</span>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="btn-list text-center">
        <button class="btn btn-primary btn-w-lg btn-wave">
          Deposit
        </button>
        <button class="btn btn-danger btn-w-lg btn-wave">
          Withdraw
        </button>
      </div>
    </div>
  </div>
</template>
