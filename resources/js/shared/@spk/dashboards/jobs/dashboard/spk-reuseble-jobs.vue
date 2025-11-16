<script setup>
import { defineAsyncComponent } from 'vue'
import BaseImg from '../../../../../components/Baseimage/BaseImg.vue'

defineProps({
  list: Object,
  jobsCard: Boolean,
  cardClass: String,
  bodyClass: String,
  listCard: Boolean,
  titleClass: String,
  NoCountUp: Boolean,
  CountUpValue: Boolean,
  imageIcon: Boolean,
  countUpClass: String,
})
const CountUp = defineAsyncComponent(() => import('vue-countup-v3'))
</script>

<template>
  <div :class="`custom-card ${cardClass}`">
    <div :class="`card-body ${bodyClass}`">
      <div :class="`d-flex align-items-start gap-3 ${list.flexClass}`">
        <div class="flex-fill">
          <span class="mb-1 d-block" :class="titleClass">{{ list.title }}</span>
          <div class="pb-0 mt-0">
            <!-- listCard content -->
            <div v-if="listCard">
              <span class="fs-13 fw-medium text-truncate">{{ list.titles }}</span>
              <div :class="`d-flex align-items-center gap-2 mb-2  ${list.ValueClass1}`">
                <h4 :class="`fw-medium mb-0 custom-dashboard ${list.ValueClass}`">
                  <span v-if="NoCountUp" :class="`count-up ${countUpClass}`">{{ list.count }}</span>
                  <span v-if="CountUpValue" class="count-up"><CountUp :end-val="list.count" /></span>{{ list.countK ? 'K' : '' }}
                </h4>
                <span :class="`badge bg-${list.priceColor}`">
                  {{ list.price }}
                </span>
              </div>
              <p :class="`text-muted fs-13 mb-0 lh-1 ${list.smallText}`">
                <span :class="`text-${list.iconColor} me-1 d-inline-block ${list.percentColor}`">
                  <i :class="list.icon" />
                  {{ list.percent }}
                </span>
                <span class="monthly-percent">this month</span>
              </p>
            </div>

            <!-- jobsCard content -->
            <div v-if="jobsCard" class="d-flex align-items-center gap-2">
              <h3 class="fw-semibold mb-0">
                {{ list.count }}
              </h3>
              <span :class="`text-${list.iconColor}`">
                <i :class="list.icon" />{{ list.percent }}
              </span>
            </div>
          </div>
        </div>
        <div
          v-if="imageIcon === false"
          :class="`avatar ${list.avatarClass} bg-${list.priceColor}-transparent mb-3 svg-${list.priceColor} mx-auto`"
          v-html="list.svgIcon"
        />
        <div
          v-else-if="imageIcon === true"
          :class="`avatar ${list.avatarClass} bg-${list.priceColor}-transparent mb-3 mt-3 svg-${list.priceColor} mx-auto`"
        >
          <BaseImg :src="list.imgIcon" alt="logo" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any necessary styles here */
</style>
