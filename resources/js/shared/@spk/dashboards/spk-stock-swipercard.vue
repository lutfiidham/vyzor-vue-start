<script setup>
import BaseImg from '../../../components/Baseimage/BaseImg.vue'

defineProps({
  card: Object,
  height: String,
  width: String,
})
</script>
<template>
  <div class="card custom-card mb-0">
    <div class="card-body">
      <div class="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
        <div class="d-flex flex-fill align-items-center">
          <div class="me-2 lh-1">
            <span class="avatar avatar-md">
              <BaseImg :src="card.imgSrc" alt="" class="invert-1" />
            </span>
          </div>
          <div class="lh-1">
            <span class="d-block text-default fw-medium">{{ card.title }}</span>
          </div>
        </div>
        <div class="fs-12 text-end">
          <span class="text-uppercase fw-semibold">{{ card.subtitle }}</span>
          <span :class="`text-${card.percentColor} d-block`"
            >{{ card.percent }}<i class="ti ti-arrow-bear-right"></i
          ></span>
        </div>
      </div>
      <div class="d-flex align-items-end justify-content-between">
        <div>
          <span class="d-block text-muted fs-12">Current Value</span>
          <h6 class="fw-semibold mb-0">{{ card.value }}</h6>
        </div>
        <div :id="card.chartId">
          <apexchart
            :height="height"
            :type="card.type"
            :width="width"
            :options="card.chartOptions"
            :series="card.chartSeries"
          ></apexchart>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
