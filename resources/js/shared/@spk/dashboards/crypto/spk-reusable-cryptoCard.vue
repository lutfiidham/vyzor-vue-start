<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  cryptoCards: Object,
})
</script>
<template>
  <div v-for="(item, index) in cryptoCards" :key="index" class="col-xxl-3 col-xl-6">
    <div class="card custom-card">
      <div class="card-body">
        <div class="d-flex align-items-start gap-3 flex-wrap">
          <div>
            <span class="avatar avatar-md">
              <BaseImg :src="item.imgSrc" alt="" />
            </span>
          </div>
          <div class="flex-fill">
            <h5 class="fw-semibold">{{ item.value }}</h5>
            <div class="d-flex align-items-end justify-content-between gap-3 flex-wrap">
              <div
                :class="`text-${item.iconColor} fw-medium fs-12 d-inline-flex align-items-center`"
              >
                <i :class="`${item.icon} me-1 align-middle`"></i>{{ item.percent }}
              </div>
              <div :id="item.id">
                <apexchart
                  height="20px"
                  width="100px"
                  :type="item.type"
                  :options="item.chartoptions"
                  :series="item.chartseries"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
