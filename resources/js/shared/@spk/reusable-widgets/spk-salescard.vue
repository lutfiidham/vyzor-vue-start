<script setup>
defineProps({
    sales: Object
})

</script>

<template>
    <div class="col-md-6 col-lg-6 col-xl-3">
        <div class="card custom-card ">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="mb-2">
                        <span :class="`avatar avatar-md bg-${sales.color}-transparent svg-${sales.color}`"
                            v-html="sales.svgIcon">
                        </span>
                    </div>
                    <span class="fs-16">{{ sales.title }}</span>
                </div>
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <span class="fs-20 fw-medium mb-0 d-flex align-items-center">{{ sales.value }}
                        </span>
                        <span class="fs-13 text-muted">{{ sales.inc }}</span>
                    </div>
                    <div :id="sales.id">
                        <apexchart :height="`${sales.height}px`" :width="`${sales.width}px`" :type="sales.type"
                            :options="sales.chartOptions" :series="sales.chartSeries" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
