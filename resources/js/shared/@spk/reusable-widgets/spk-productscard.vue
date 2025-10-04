<script setup>
defineProps({
    products: Object
})
</script>

<template>
    <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6">
        <div class="text-center">
            <div class="lh-1 mb-3">
                <span :class="`avatar avatar-lg bg-${products.color}-transparent avatar-rounded`">
                    <span :class="`avatar avatar-sm bg-${products.color} avatar-rounded svg-white`"
                        v-html="products.svgIcon">
                    </span>
                </span>
            </div>
            <span class="d-block mb-1">{{ products.title }}</span>
            <h5 class="fw-semibold">{{ products.value }}</h5>
            <div class="fs-13"><span :class="`text-${products.percentageColor} me-1`">{{ products.percentage }}</span>
                This Week</div>
        </div>
    </div>
</template>
