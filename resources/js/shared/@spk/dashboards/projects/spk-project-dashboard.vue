<script setup>
defineProps({
    card: Object
})
</script>
<template>
    <div :class="`card custom-card dashboard-main-card ${card.svgColor}`">
        <div class="card-body">
            <div class="d-flex align-items-start gap-3">
                <div class="lh-1">
                    <span :class="`avatar avatar-md bg-${card.svgColor}-transparent svg-${card.svgColor}`">
                        <span v-html="card.svgIcon"></span>
                    </span>
                </div>
                <div>
                    <span class="d-block text-muted mb-1">{{ card.title }}</span>
                    <h5 class="fw-semibold mb-0">{{ card.price }}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
