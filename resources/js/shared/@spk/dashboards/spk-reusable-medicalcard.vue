<script setup>
defineProps({
    card: Object
})
</script>
<template>
    <div :class="`card custom-card dashboard-main-card medical-main-card ${card.cardClass}`">
        <div class="card-body">
            <div class="d-flex align-items-start justify-content-between mb-2">
                <div class="flex-fill">
                    <div class="mb-2">{{ card.title }}</div>
                    <h4 :class="`fw-semibold text-${card.cardClass} mb-0`">{{ card.value }}</h4>
                </div>
                <div>
                    <span :class="`avatar avatar-md bg-${card.svgColor}-transparent svg-${card.svgColor}`"
                        v-html="card.svgIcon"></span>
                </div>
            </div>
            <div class="d-flex fs-13 align-items-center justify-content-between">
                <div class="text-muted">{{ card.month }}</div>
                <div :class="`text-${card.percentColor} fw-medium d-inline-flex`"><i
                        :class="`ti ti-trending-${card.icon} align-middle me-1`"></i>{{ card.percent }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
