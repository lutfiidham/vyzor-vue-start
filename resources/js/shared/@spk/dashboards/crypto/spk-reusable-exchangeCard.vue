<script setup>
import BaseImg from '../../../../components/Baseimage/BaseImg.vue';


defineProps({
    currencyCards: Object,
})

</script>
<template>
    <div v-for="(item, index) in currencyCards" :key="index" class="col-xl-3 col-lg-6">
        <div class="card custom-card overflow-hidden">
            <div class="card-body mb-3">
                <div class="d-flex align-items-top justify-content-between mb-3 flex-wrap">
                    <div>
                        <div class="d-flex align-items-center gap-2 mb-3">
                            <div class="lh-1">
                                <span class="avatar avatar-rounded avatar-xs">
                                    <BaseImg :src="item.imgSrc" alt=""/>
                                </span>
                            </div>
                            <h6 class="fw-medium mb-0">{{ item.title }}</h6>
                        </div>
                        <span class="fs-25 d-flex align-items-center">{{ item.percent }}<span
                                class="fs-12 text-warning op-7 ms-2">{{ item.inc }}<i
                                    class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span>
                                    <!-- <span v-if="item.hcount" class="badge bg-success-transparent fs-10 ms-2">24H</span> -->
                            </span>
                    </div>
                    <div class="text-end">
                        <span :class="`d-block fs-14 mb-1 text-${item.color}`">{{ item.value }}</span>
                        <span class="d-block text-success fw-medium">{{ item.price }}</span>
                    </div>
                </div>
            </div>
            <div id="btc-currency-chart" class="mt-1 w-100">
                <apexchart height="60px" type="area" :options="item.chartOptions" :series="item.chartSeries" />
            </div>
        </div>
    </div>
</template>