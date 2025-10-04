<script setup>
defineProps({
    card: Object
})

</script>
<template>
    <div :class="`card custom-card bg-${card.color}-transparent border-0 shadow-none`">
        <div class="card-body">
            <a href="javascript:void(0);" class="stretched-link"></a>
            <div class="d-flex align-items-start justify-content-between mb-1">
                <div>
                    <span class="fs-13">Order - {{ card.id }}</span>
                    <span class="d-block fw-semibold">{{ card.title }}</span>
                </div>
                <div class="fs-13 text-muted">{{ card.items }}</div>
            </div>
            <div class="d-flex align-items-end justify-content-between flex-wrap">
                <span class="fs-13 text-muted">{{ card.time }}</span>
                <span :class="`badge bg-${card.color}`">{{ card.badge }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
