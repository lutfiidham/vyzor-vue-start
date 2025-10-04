<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue'

defineProps({
  item: Object,
})
</script>

<template>
  <div class="card custom-card overflow-hidden">
    <div class="card-body">
      <div class="d-flex align-items-center mb-4 gap-1 flex-wrap">
        <div class="d-flex align-items-center">
          <div class="me-2">
            <span class="avatar avatar-md avatar-rounded bg-light p-2">
              <BaseImg :src="item.imgSrc" alt="" />
            </span>
          </div>
          <div class="mb-0 fw-medium">
            {{ item.title }}
          </div>
        </div>
        <div class="ms-auto">
          <div id="bitcoin-chart">
            <apexchart
              height="40px"
              width="150px"
              type="bar"
              :options="item.chartOptions"
              :series="item.chartSeries"
            />
          </div>
        </div>
      </div>
      <div class="d-flex align-items-end">
        <div>
          <p class="mb-1">{{ item.subtitle }}</p>
          <p class="fs-20 mb-0 fw-medium lh-1 text-primary">{{ item.price }}</p>
        </div>
        <div class="ms-auto text-end">
          <p class="mb-0">{{ item.value }}</p>
          <p class="mb-0 text-muted"><span class="text-muted">Vol:</span>{{ item.percent }}</p>
        </div>
      </div>
    </div>
    <div class="card-footer p-0">
      <div class="list-group border-0 list-group-flush">
        <a href="javascript:void(0);" class="list-group-item">
          <div class="d-flex w-100 justify-content-between align-items-center">
            <p class="mb-0 font-weight-semibold text-dark">
              Price Change
              <span class="badge bg-primary-transparent ms-3 text-primary">Increased</span>
            </p>
            <p class="text-success mb-0 font-weight-normal fs-13">
              <span class="numberfont">{{ item.todayPrice }}</span> today
            </p>
          </div>
        </a>
        <a href="javascript:void(0);" class="list-group-item">
          <div class="d-flex w-100 justify-content-between align-items-center">
            <p class="mb-0 font-weight-semibold text-dark">
              Market Rank<span v-if="item.badge" class="badge bg-secondary-transparent ms-3"
                >3 Years</span
              >
            </p>
            <p class="text-dark mb-0 fs-15">
              <span class="numberfont">{{ item.rank }}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
