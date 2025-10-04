<script setup>
defineProps({
    card: Object,
})
</script>
<template>
    <div :class="`card custom-card dashboard-main-card border-0 shadow-none ${card.maincardClass} mb-0 rounded-0`">
        <div class="card-body">
            <div class="mb-3">
                <span :class="`avatar avatar-lg avatar-rounded bg-${card.svgColor}-transparent svg-${card.svgColor}`"
                    v-html="card.svgIcon"></span>
            </div>
            <div class="text-muted mb-2">
                {{ card.title }}
            </div>
            <div class="d-flex align-items-end gap-2 flex-wrap">
                <h5 class="fw-semibold mb-0 lh-1">{{ card.value }}</h5>
                <div>
                    <span :class="`badge bg-${card.iconColor}-transparent rounded-pill`">
                        <i :class="`${card.iconClass} me-1`"></i>{{ card.percent }}
                    </span>
                    <span class="text-muted fs-12 mx-1">{{ card.year }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
