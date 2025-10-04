<script setup>
defineProps({
    card: Object
})

</script>
<template>
<div :class="`card custom-card dashboard-main-card ${card.svgColor} school-card`">
    <div class="card-body">
        <div class="d-flex align-items-center gap-2 justify-content-between flex-wrap">
            <div>
                <span class="d-block mb-1">{{ card.title }}</span>
                <div class="d-flex align-items-center gap-2 flex-wrap">
                    <h5 class="fw-semibold mb-0">{{ card.count }}</h5>
                    <div class="fs-12 text-muted">
                        <span :class="`badge bg-${card.arrow === 'up' ? 'success' : 'danger'}-transparent rounded-pill  d-inline-flex align-items-center`"><i :class="`ti ti-trending-${card.arrow} me-1 align-middle`"></i>{{ card.percent }}</span>
                        This Year
                    </div>
                </div>
            </div>
            <div class="lh-1">
                <span :class="`avatar avatar-lg bg-${card.svgColor}-transparent svg-${card.svgColor}`" v-html="card.svgIcon"></span>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
</style>
