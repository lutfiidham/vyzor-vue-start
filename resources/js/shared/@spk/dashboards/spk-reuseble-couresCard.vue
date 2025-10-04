<script setup>
defineProps({
    card: Object
})

</script>
<template>
    <div :class="`card custom-card bg-${card.svgColor}-transparent border-0 shadow-none`">
        <div class="card-body">
            <div class="d-flex align-items-start gap-3 flex-wrap">
                <div class="lh-1">
                    <span :class="`avatar avatar-lg avatar-rounded bg-${card.svgColor} svg-white`"
                        v-html="card.svgIcon"> </span>
                </div>
                <div>
                    <span class="d-block mb-1">
                        {{ card.title }}
                    </span>
                    <div class="d-flex align-items-center gap-2">
                        <h5 class="fw-semibold mb-0">{{ card.value }}</h5>
                        <span :class="`badge bg-${card.svgColor}-transparent rounded-pill`"><i
                                :class="`ti ti-arrow-${card.iconClass} me-1`"></i>{{ card.percent }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
